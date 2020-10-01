const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const morgan = require("morgan");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const routes = require("./routes/index");
const bcrypt = require("bcryptjs");
const { User } = require("./db");
const nodemailer = require("nodemailer");
const cors = require('cors')



//-----------------------------------------------
//            LOCAL STRATEGY                    |
//-----------------------------------------------
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      User.findOne({ where: { email } }).then((user) => {
        if (!user) {
          return done(null, false, { message: `User ${email} not found` });
        } else if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false, { message: "Password incorrect" });
        } else return done(null, user.dataValues);
      });
    }
  )
);



//-------------------------------------
//        SERIALIZAR USUARIO          |
//-------------------------------------
passport.serializeUser((user, done) => {
  return done(null, user.id);
});

//-------------------------------------
//        DESERIALIZAR USUARIO        |
//-------------------------------------
passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => {
      return done(null, user.get());
    })
    .catch((err) => done(err, false));
});

const server = express();

server.name = "API";
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cors())
server.use(morgan("dev"));
server.use(cookieParser());

//-----------------------------------------------
//           INICIALIZAR PASSPORT Y SESSION     |
//-----------------------------------------------
server.use(
	require('express-session')({
		secret: 'secret',
		resave: false,
		saveUninitialize: false,
	}),
);
server.use(passport.initialize());
server.use(passport.session());


server.use("/", routes);

server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  /* console.error(err); */
  res.status(status).send(message);
});

//-----------------------------------------------
//           SEND EMAIL 					              |
//-----------------------------------------------

server.post("/send-email", (req, res) => {
  const email = req.body.emails;
  User.findOne({
    where: {
      email: email
    }
  }).then(data => {
    const code = data.generatedCode
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "henrybank03@gmail.com",
        pass: "!HenryBank02",
      },
    });

    const mailOptions = {
      from: "Remitente",
      to: email,
      subject: "Envíado desde mi Henry Bank",
      text: `El código para habilitar su cuenta es: ${code}`
    };

    transporter.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  });
})

module.exports = server;
