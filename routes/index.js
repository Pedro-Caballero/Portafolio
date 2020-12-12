const express = require('express');
const routes = express.Router();
const appController = require('../controller/appController');

module.exports = function() {

    routes.get("/", appController.index);
    routes.get("/email", appController.email);

    return routes;
}