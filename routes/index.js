const express = require('express');
const routes = express.Router();
const appController = require('../controller/appController');

module.exports = function() {

    routes.get("/", appController.index);
    // routes.get("/quienes-somos", appController.quienes);
    // routes.get("/oferta-academica", appController.oferta);
    // routes.get("/nuevo-ingreso", appController.nuevo);
    // routes.get("/modalidad-educativa", appController.modalidad);
    // routes.get("/comunidad-estudiantil", appController.comunidad);
    // routes.get("/contacto", appController.contacto);


    return routes;
}