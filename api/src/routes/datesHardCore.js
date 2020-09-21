const server = require('express').Router();
const { User , Contact, Account} = require("../db");

server.post("/", async (req, res) => {
 
	const Usuario1 = await User.create({
		email:'maradona@gmail.com',
		password: '12345678',
    name: 'Diego',
    surname: 'Armando'
	});
 
  const Usuario2 = await User.create({
    email: 'leomessi@gmail.com',
		password: '12345678',
    name: 'Lionel',
    surname: 'Messi'       
  });

  const Usuario3 = await User.create({
 		email: 'romero@gmail.com',
    password: '12345678',
    name:'Sergio',
    surname: 'Romero'
  })

  const Usuario4 = await User.create({
    email: 'kunaguero@gmail.com',
    password: '12345678',
    name: 'Kun',
    surname: 'Aguero', 
    role: 'Client'
  })
  .then((user) => {
  	user.addFriend(Usuario1);
   	user.addFriend(Usuario2);
   	user.addFriend(Usuario3);
    user.setAccount()

   	res.send("Your dates has been harcoded")
   	}
  )

})

module.exports = server;