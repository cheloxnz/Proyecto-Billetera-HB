const server = require('express').Router();
const { Account, User, Transaction } = require('../db.js');

server.post("/:CVU", (req, res) => {
    console.log('estoy entrando al post de trans')
    var { cvu, amount } = req.body
    var amount2 = parseFloat(amount)
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
            console.log(to.dataValues)
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
            Transaction.create({
                Quantity: amount2,
                Type: "transfer",
                receptor: to.Naccount,
                emisor: from.Naccount,
                code: codes,
                nombreReceptor: to.user.dataValues.name + '' + to.user.dataValues.surname
            })
            var result = from.balance()
            var body = {
                balance: result,
                text: 'Transaccion exitosa!'
            }
            res.send(body)
        })
        .catch(err => console.log(err))
})

//-----------------------------
//||||      Recarga.       ||||
//-----------------------------

server.post('/user/load', (req, res) => {
    const { load } = req.body
    const sucursal = load.sucursal
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
            emisor: 11111111, //cambiar despues
            receptor: user.account.Naccount
        })
        res.send('Recarga exitosa')
    })
        .catch(err => console.log(err))
})

//----------------------------
//   GET TRANSACCIONES       | EN EL FRONT RENDERIZAR, SI ES EMISORNACCOUNT, MOSTRAR COMO (- $500)
//---------------------------- SI ES 'ACCOUNTNACCOUNT' MOSTRAR (+ $500)

// server.get('/emisor/:CVU', (req, res) => {
//     console.log("entre al emisor ")
//     Transaction.findAll({
//         where: {
//             emisor: req.params.CVU  // EL QUE RECIBE LA TRANSFERENCIA
//         }
//     })
//         .then(trans => res.send(trans))
//         .catch(err => console.log(err))
// })

// server.get('/receptor/:CVU', (req, res) => {
//     Transaction.findAll({
//         where: {
//             receptor: req.params.CVU  // EL QUE RECIBE LA TRANSFERENCIA
//         }
//     })
//         .then(trans => res.send(trans))
//         .catch(err => console.log(err))
// })

server.get('/all/:acc', (req, res) => {
    console.log('entro al all ')
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

        .then(trans => res.send(flatten(trans).reverse()))
        .catch(err => console.log(err))
})
const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])


module.exports = server;