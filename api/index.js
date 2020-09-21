const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3005, () => {
    console.log("________________________________________________________");
    console.log("||--> el servidor esta corriendo en el puerto 3005 <--||");
    console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
  });
});
