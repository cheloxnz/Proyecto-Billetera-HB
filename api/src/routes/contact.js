const server = require("express").Router();
const { User, Account } = require("../db");
const { Op } = require('sequelize');



server.get('/addFriend', (req, res) => {
  const username = req.query.username;
  User.findAll({
    where: {
      [Op.or]: [{ username: { [Op.like]: `%${username}%` } }]
    },
  }).then(user => {
    res.send(user);
  });
});


//--------------------------------------
//     Traer amigos de un user         |
//--------------------------------------

server.get("/user/:id", (req, res) => {
  console.log('entreeeeeeeeeeeee')
  User.findOne({
    where: {
      id: req.params.id
    },
    include: {
      association: 'friends',
      attributes: ['id', 'name', 'surname', 'dni'],
      include: {
        model: Account,
        attributes: ['CVU']
      }
    }
  })
    .then((user) => {
      res.send(user)
    })
    .catch((err) => console.log(err))
})

//--------------------------------------
//        Agregar amigo                |
//--------------------------------------

server.post("/user/:id/add", (req, res) => {
  const username = req.body.username
  console.log(req.body)
  let user1 = User.findOne({
    where: {
      id: req.params.id
    }
  })
  let user2 = User.findOne({
    where: {
      username: username
    }
  })
  Promise.all([user1, user2])
    .then(user => {
      let us1 = user[0]
      let us2 = user[1]
      us1.addFriend(us2)
      us2.addFriend(us1)
      res.send('Contacto anadido con exito')
    })
    .catch(err => console.log(err))
})

//--------------------------------------
//       Eliminar amigo                |
//--------------------------------------

server.delete("/user/:id/delete", (req, res) => {
  const id = req.body.id
  let user1 = User.findOne({
    where: {
      id: req.params.id
    }
  })
  let user2 = User.findOne({
    where: {
      id: id
    }
  })
  Promise.all([user1, user2])
    .then(user => {
      let us1 = user[0]
      let us2 = user[1]
      us1.removeFriend(us2)
      us2.removeFriend(us1)
      res.send('Eliminado con exito')
    })
    .catch(err => console.log(err))
})

module.exports = server