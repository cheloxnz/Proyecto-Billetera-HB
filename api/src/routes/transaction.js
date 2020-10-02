const server = require('express').Router();
const { Account, User, Transaction } = require('../db.js');

server.post("/:CVU", (req, res) => {
    var { cvu, amount } = req.body
    var amount2 = parseInt(amount)
    if (amount2 < 50) return res.send('Minimal amount is $50')
    var from = Account.findOne({
        where: {
            CVU: req.params.CVU,
        }, include: {
            model: User
        }
    })
    var to = Account.findOne({
        where: {
            CVU: cvu,
        }, include: {
            model: User
        }
    })
    Promise.all([from, to])
        .then(user => {
            var codes = Math.floor(Math.random() * 1000)
            let from = user[0]
            let to = user[1]
            if (!from || !to) return res.send("Cuenta no existente.")
            if (from.state == 'inactive' || to.state == 'inactive') return res.send('Cuenta deshabilitada')
            if (from.userId == to.userId) return res.send("Transacción invalida.")
            if (from.balance() < amount2) return res.send("Saldo insuficiente.")
            var balanceFrom = from.balance();
            var balanceTo = to.balance();
            from.update({
                balance: balanceFrom - amount2,
            })
            to.update({
                balance: balanceTo + amount2
            })

            var result = from.balance()
            var body = {

                balance: result,
                text: 'Transaccion exitosa!'
            }
            Transaction.create({
                Quantity: amount2,
                Type: "transfer",
                receptor: to.Naccount,
                emisor: from.Naccount,
                code: codes,
                nombreReceptor: to.user.dataValues.name + ' ' + to.user.dataValues.surname
            })
                .then(data => {
                    body = {
                        ...body,
                        transfer: data
                    }
                    res.send(body)
                })
        })
        .catch(err => console.log(err))
})

//-----------------------------
//||||      Recarga.       ||||
//-----------------------------

server.post('/user/load', (req, res) => {
    const { load } = req.body
    var sucursal = 0
    while (sucursal === 0) {
      sucursal = Math.floor(Math.random() * 3)
    }
    const code = load.code
    const dni = load.dni
    const amount2 = parseFloat(load.amount)
    User.findOne({
        where: {
            dni: dni
        }, include: Account
    }).then(user => {
        if (!user) return res.send('Cuenta inexistente')
        var balan = user.account.balance()
        user.account.update({
            balance: balan + amount2
        })
        Transaction.create({
            Quantity: amount2,
            Type: 'load',
            code: code,
            emisor: sucursal,
            receptor: user.account.Naccount,
            nombreReceptor: user.dataValues.name + ' ' + user.dataValues.surname
        })
            .then(load => {
                res.send(load)
            })
    })
        .catch(err => console.log(err))
})

//----------------------------
//   GET TRANSACCIONES       | EN EL FRONT RENDERIZAR, SI ES EMISORNACCOUNT, MOSTRAR COMO (- $500)
//---------------------------- SI ES 'ACCOUNTNACCOUNT' MOSTRAR (+ $500)

server.get('/all/:acc', (req, res) => {
    const transE = Transaction.findAll({
        where: {
            receptor: req.params.acc  // EL QUE ENVIA LA TRANSFERENCIA
        }
    });
    const transR = Transaction.findAll({
        where: {
            emisor: req.params.acc  // EL QUE RECIBE LA TRANSFERENCIA
        }
    });
    Promise.all([transE, transR])

        .then(trans => res.send(selectionSort(flatten(trans))))
        .catch(err => console.log(err))
})
const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])


function selectionSort(items) {
    function swap(items, firstIndex, secondIndex) {
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }

    var len = items.length,
        min;

    for (i = 0; i < len; i++) {

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j = i + 1; j < len; j++) {
            if (items[j].id < items[min].id) {
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min) {
            swap(items, i, min);
        }
    }
    items.reverse()
    return (items)
}
server.post('/user/payment', (req, res) => {
    const amount = parseFloat(req.body.amount)
    const { service, code, dni } = req.body
    User.findOne({
        where: {
            dni: dni
        }, include: Account
    }).then(user => {
        if (!user) return res.send('Cuenta Inexistente')
        if (user.state == 'inactive' ) return res.send('Cuenta deshabilitada')
        var userBalance = user.account.balance()
        if (userBalance < amount) return res.send("Saldo insuficiente.")
        user.account.update({
            balance: userBalance - amount
        })
        Transaction.create({
            Quantity: amount,
            Type: 'payment',
            code: code,
            emisor: user.account.Naccount,
            receptor: 1111111,
            nombreReceptor: service

        })
            .then(payment => {
                res.send(payment)
            })
    })
        .catch(err => console.log(err))

})



module.exports = server;