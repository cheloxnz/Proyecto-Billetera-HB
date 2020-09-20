const server = require('express').Router();
const { Account, User, Transactions } = require('../db.js');
 
server.post("/:CVU", (req, res) => {
    console.log("estoy entrando al back", req.body)
    var { CVU, amount } = req.body
    if (amount < 50)res.send('Minimal amount is $50')
    var from = Account.findOne({
        where: {
            CVU: req.params.CVU,
        }
    })
    var to = Account.findOne({
        where: {
            CVU: CVU,
        }
    })
    Promise.all([from, to])
        .then(user => {
            let from = user[0]
            let to = user[1]
            if (!from || !to) res.send("Cuenta no existente.")
            if (from.state == 'inactive' || to.state == 'inactive') res.send('Cuenta deshabilitada')
            if (from.userId == to.userId) res.send("Transacción invalida.")
            if (from.balance() < amount) res.send("Saldo insuficiente.")
            var balanceFrom = from.balance();
            var balanceTo = to.balance();
            from.update({
                balance: balanceFrom - amount,
            })
            to.update({
                balance: balanceTo + parseInt(amount)
            })
            to.addEmisor(from, {
                through: { Quantity: amount, Type: "transfer" }
            })
            res.send("Transacción exitosa")
        })
        .catch(err => console.log(err))
})

//-----------------------------
//||||      Recarga.       ||||
//-----------------------------

server.post('/load', (req,res) => {
    const rapipago = {
        sucursal: '100872'

    }

    const { load } = req.body
    const code = load.code
    const dni = load.dni
    const amount = load.amount

})

//----------------------------
//   GET TRANSACCIONES       | EN EL FRONT RENDERIZAR, SI ES EMISORNACCOUNT, MOSTRAR COMO (- $500)
//---------------------------- SI ES 'ACCOUNTNACCOUNT' MOSTRAR (+ $500)

server.get('/user/:CVU', (req, res) => {
    Account.findAll({
        where: {
            CVU: req.params.CVU  // EL QUE RECIBE LA TRANSFERENCIA
        }, include:{
            association: 'emisor',
            attributes: ['Naccount', 'userId'] // EL QUE HIZO LA TRANSFERENCIA
        }
    })
    .then(trans => res.send(trans))
    .catch(err => res.send(err))
})

module.exports = server;