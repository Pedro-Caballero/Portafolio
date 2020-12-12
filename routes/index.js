const express = require('express');
const routes = express.Router();
const appController = require('../controller/appController');

module.exports = function() {

    routes.get("/", appController.index);
    routes.get("/contacto", appController.email);

    return routes;
}