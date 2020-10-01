const server = require('express').Router();
const { Account, User } = require('../db.js');


//-------------------------------------
//                GET ALL             |
//------------------------------------- 

server.get("/", (req, res) => {
    Account.findAll()
        .then(data => {
            res.send(data).status(200)
        }).catch(err => res.send(err))
})

//-------------------------------------
//                GET BY ID           |
//-------------------------------------

server.get("/:id", (req, res) => {
    Account.findOne({
        where: {
            userId: req.params.id
        }
    }).then(data => {
        var balance = data.balance()
        data = {...data.dataValues, balance}
        res.send(data).status(200)
    }).catch(err => {
        res.send(err)
    })
})

//-------------------------------------
//           DELETE BY ID             |
//-------------------------------------

server.delete("/:id", (req, res) => {
    Account.findOne({
        where: {
            userId: req.params.id
        }
    }).then(function (data) {
        const deleteAccount = data
        data.destroy()
        res.send(deleteAccount).status(200)
    }).catch(err => {
        res.send(err)
    })
})

//-------------------------------------
//          New Account               |
//-------------------------------------


server.post("/:id", (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {
        Account.create({
            userId: user.id
        })
        res.send('Cuenta creada con exito!')
    })
})

//-------------------------------------
// Deshabilitar cuenta o habilitar    |
//-------------------------------------

server.put('/:CVU', (req, res) => {  //Por parametro llega el CVU
    const { id, estado } = req.body // Recibe id de usuario, y estado que se le quiere asignar a la cuenta 'inactive' || 'active'
    Account.findOne({
        where: {
            CVU: req.params.CVU,
            userId: id
        }
    }).then(account => {
        if (account.state == estado) return res.send('No se puede setear el mismo estado')
        if (estado !== 'active' && estado !== 'inactive') return res.send('Estado no reconocido.')
        account.update({
            state: estado
        })
        res.send(`${estado}`)
    })
        .catch(err => res.send(err))
})


//-------------------------------------
//                GET BALANCE           |
//-------------------------------------

server.get("/balance/:id", (req, res) => {
    Account.findOne({
        where: {
            userId: req.params.id
        }
    }).then(data => {
        let balance = data.balance()
        let obj = {balance: balance}
        res.send(obj).status(200)
    }).catch(err => {
        res.send(err)
    })
})

module.exports = server;