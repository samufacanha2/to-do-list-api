const routes = require("express").Router();

routes.use(require("./taskView"));

module.exports = routes;
