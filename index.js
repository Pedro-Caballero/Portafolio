require('./config/cofig');
const express = require('express');
const app = express();
const routes = require('./routes/index');
const path = require("path"); //Para el manejo de las rutas
const notFount = require("./validations/not-fount");
const bodyParser = require("body-parser"); //agregando

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: false })); // lo que recibe el servidor, contiene los datos del formulario
app.use(express.json()); // para que angular los pueda ocupar, en formato json

app.use('/', routes());
app.use(require('./routes/send-email')); //enviar correo
app.use(notFount.appNotFound);
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'ejs');

app.use(express.static(path.join(__dirname, 'public'))); // Carpte unica de mi servidor

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto: ', process.env.PORT);
});