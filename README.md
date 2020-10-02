# Proyecto-Henry-Bank

_Este proyecto es una App (billetera virtual) creada en React Native(expo)._

## Aquí puedes ver una preview de la App
<div align="center">
           <img width="22%" src="https://raw.github.com/cheloxnz/Proyecto-Billetera-HB/master/screenshots/HomeScreen.jpeg" alt="About screen" title="About screen"</img>
           <img width="22%" src="https://raw.github.com/cheloxnz/Proyecto-Billetera-HB/master/screenshots/CreateAccount.jpeg" alt="About screen" title="About screen"</img>
            <img width="22%" src="https://raw.github.com/cheloxnz/Proyecto-Billetera-HB/master/screenshots/PositionConsolidated.jpeg" alt="About screen" title="About screen"</img>
  <img width="22%" src="https://raw.github.com/cheloxnz/Proyecto-Billetera-HB/master/screenshots/Navigation.jpeg" alt="About screen" title="About screen"</img>
  <img width="22%" src="https://raw.github.com/cheloxnz/Proyecto-Billetera-HB/master/screenshots/MyContacts.jpeg" alt="About screen" title="About screen"</img>
  <img width="22%" src="https://raw.github.com/cheloxnz/Proyecto-Billetera-HB/master/screenshots/Recharge.jpeg" alt="About screen" title="About screen"</img>
  <img width="22%" src="https://raw.github.com/cheloxnz/Proyecto-Billetera-HB/master/screenshots/ScreenPayments.jpeg" alt="About screen" title="About screen"</img>
  <img width="22%" src="https://raw.github.com/cheloxnz/Proyecto-Billetera-HB/master/screenshots/ScreenPayment.jpeg" alt="About screen" title="About screen"</img>

</div>


## Comenzando 🚀

### Pre-requisitos 📋

```
-Postgres
-NodeJS
```

### Instalación 🔧

Clonar el repositorio.
Posicionarse sobre las carpetas /api y /client y hacer "npm install" en ambos.
Sino tenes expo instalado ejecutar en /client "npm install --global expo-cli".
Crear en la carpeta /api un archivo .env con el siguiente formato:

```
DB_USER=usuariopostgres
DB_PASSWORD=contraseñapostgres
DB_HOST=localhost
```
Crear base de datos con postgres con el nombre "henrybank",
en el archivo /client/src/actions/index.js, modificar la constante ip por "localhost".
Ejecutar npm start en /client y en /api de no abrir automáticamente el navegador, ingresar a esta ruta http://localhost:19006/
para ejecutar el proyecto en tu celular, instalar expo desde la PlayStore o AppStore

Ejecutar npm start en /client  y /api, en la consola de api se visualizará el siguiente mensaje:

<div align="center">
     <img width="50%" src="https://github.com/cheloxnz/Proyecto-Billetera-HB/blob/master/screenshots/AppListen.png" alt="App Listen" alt="App Listen"</img>
</div>

Después de ver este mensaje, modificar la variable DB_HOST del .env por tu ip local
que podes consultar haciendo ipconfig en tu consola de Windows o GitBash y en ubuntu con ip addr show como se muestra en las siguientes imágenes:

<div align="center">
     <img width="30%" src="https://github.com/cheloxnz/Proyecto-Billetera-HB/blob/master/screenshots/iplocalWindows.png" alt="IpWindows" alt="IpWindows"</img>
     <img width="50%" src="https://github.com/cheloxnz/Proyecto-Billetera-HB/blob/master/screenshots/IplocalUbuntu.jpeg" alt="IpUbuntu" alt="IpUbuntu"</img>
</div>

Por último, modificar en /client/src/actions/index.js la constante ip por tu ip local 
abrir http://localhost:19006/ en el navegador y escanear el codigo QR con tu app Expo.


## Construido con 🛠️

* [React Native](https://reactnative.dev/) - El framework mobile usado
* [Postgres](https://www.postgresql.org/) - Base de datos relacional
* [NodeJS](https://nodejs.org/es/) - Entorno de ejecución para JavaScript 
* [Expo](https://docs.expo.io/) - Marco y una plataforma para aplicaciones universales de React para construir e implementar en Android y iOS

## Autores ✒️

* **Córdoba, Matías** - [maticordoba7] (https://github.com/maticordoba7)
* **Del Valle, Marcelo** - [cheloxnz] (https://github.com/cheloxnz)
* **Lockett, Mariano** - [MakeNoise01] (https://github.com/makenoise01)
* **Facundo, Rivadero** - [facu03] (https://github.com/facu03)

## Contribuyendo 🖇️

* **Ambroggio, Guillermo** - [GuillermoAmbroggio] (https://github.com/guillermoAmbroggio)
* **Uriona, Facundo** - [facuuriona4] (https://github.com/facuuriona4)
## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.

