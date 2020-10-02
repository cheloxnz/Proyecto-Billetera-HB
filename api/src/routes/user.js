const server = require("express").Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const codeGenerator = require("../utils/index.js");
const { User } = require("../db");
const { isAuthenticated } = require('./validations');

//----------------------------------------------------------
//-------------------------USUARIO--------------------------
//----------------------------------------------------------

//-------------------------------------
//           ROUTE REGISTER           |
//-------------------------------------

server.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send("The fields are required");
  }

  User.findOne({ where: { email } }).then((user) => {
    if (!user) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      User.create({
        generatedCode: codeGenerator(),
        email: email,
        password: hash,
      })
        .then((user) => {
          res.send(user);
        })
        .catch((err) => console.log(err));
    } else {
      res.status(500).send("User exists");
    }
  });
});

//-------------------------------------
//                GET ALL USERS       |
//-------------------------------------

server.get("/all", (req, res) => {
  User.findAll()
    .then((users) => res.send(users))
    .catch((err) => res.send("No user found"));
});

//-------------------------------------
//             GET BY ID              |
//-------------------------------------

server.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      res.send(user).status(200);
    })
    .catch((err) => console.log(err));
});

//-------------------------------------
//             GET BY EMAIL           |
//-------------------------------------

server.get("/:email", (req, res) => {
  User.findOne({
    where: {
      id: req.params.email,
    },
  })
    .then((user) => {
      res.send(user).status(200);
    })
    .catch((err) => console.log(err));
});

//-------------------------------------
//   PUT  MENOS CONTRASENA Y EMAIL    |
//-------------------------------------
server.put("/:id", (req, res) => {
  var {
    phone,
    address,
    province,
    postalCode,
    city,
    dni,
    name,
    surname,
    username,
    birthDate
  } = req.body;
  User.findOne({ where: { id: req.params.id } })
    .then((users) => {
      if (!users) res.send("User not found");
      else {
        users.update({
          phone,
          address,
          city,
          province,
          postalCode,
          dni,
          username,
          name,
          surname,
          birthDate
        });
        res.send(users);
      }
    })
    .catch((err) => {
      res.send("Could not update user");
    });
});

server.put('/activeUser/:id', (req, res) => {
    User.findOne({ where: { id: req.params.id } })
        .then((user) => {
            if (!user) res.send('User not found')
                else {
                user.update( {role: "Client"} );
                res.send(user);
            }
        })
        .catch((err) => {
            res.send('Could not update user')
        })
})


//-------------------------------------
//               DELETE USER          |
//-------------------------------------

server.delete("/:id", (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: { id: id },
  })
    .then((user) => {
      if (user) res.send("User eliminated");
      else res.send("User not found");
    })
    .catch((err) => res.send("An unexpected error occurred"));
});



//-------------------------------------
//      SEARCH EMAIL, RETURN ID       |
//-------------------------------------

server.post("/searchEmail", (req, res) => {
  const { email } = req.body;

  User.findOne({ where: { email } })
    .then((user) => res.send(user.dataValues.id.toString()))
    .catch((err) => res.send(err));
});



//-------------------------------------
//          RESET PASSWORD            |
//-------------------------------------

server.put("/:id/resetPassword", (req, res) => {
  const { password } = req.body;
  const id = req.params.id;
  User.findByPk(id)
    .then((user) => {
      var salt = bcrypt.genSaltSync(10);
      var newHash = bcrypt.hashSync(password, salt);
      user.update({ password: newHash });
      res.send("The password was reset");
    })
    .catch((err) => res.send(err));
});

//-------------------------------------
//            LOGIN                   |
//-------------------------------------

server.post('/login', passport.authenticate('local'), function (req, res,) {
  res.send(req.user)
});

//-------------------------------------
//            LOGOUT                   |
//-------------------------------------

server.post('/auth/logout', isAuthenticated, (req, res) => {
  req.logout()
  req.session.destroy()
  res.send('deslogeado')
});

//--------------------------------------
//              PUT PIN                |
//--------------------------------------

server.put("/updatePin/:id", (req, res) => {
  const { pin } = req.body;
  User.findOne({
    where: {
      id: req.params.id
    }
  }).then(user => {
      if (user) {
        user.update({pin: pin})
        res.send("User updated!")
      } else {
        res.sendStatus("User not found!")
      }
  });
});

//---------------------------------------------------------------------------------------------
// Las rutas de usuario fueron pasadas a contact.js, y se cambiaron el nombre de las rutas    |
//---------------------------------------------------------------------------------------------


module.exports = server;
