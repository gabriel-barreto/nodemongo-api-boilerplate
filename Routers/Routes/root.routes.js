// ==> Instanciate new router
const Router = require("express").Router();

// ==> Importing controllers
const Controller = require("../../Controllers/root.controller");

// ==> Building routes
// Create all your routes to this Router
// Router.[HTTP method]([API Path], [Controller Method]);
Router.get("/run", Controller.run);

module.exports = Router;
