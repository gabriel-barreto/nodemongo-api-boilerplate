const Router = require("express").Router();

// ==> Importing all routes
const Routes = {
    root: require("./Routes/root.routes")
};

// ==> Importing all middlewares
const Middlewares = {
    cors: require("./Middlewares/cors.middleware")
};

// ==> Injecting middlewares and Routes
Router.use(Middlewares.cors);
Router.use("/", Routes.root);

// NOTE:
// You be able to versioning your API routes using this file and create another routers for your API new versions, see that example:
//
// ==> FOLDER TREE
// .... Routers
// |__ index.js
// |__ v1.router.js
// |__ v2.router.js
// |__ Routes
// |____ v1
// |______ Your version 1 routes
// |____ v2
// |______ Your version 2 routes
//
// ==> CODE
//
// ---> Object Approach
// const Routers = {
//     v1: require("./v1.router.js"),
//     v2: require("./v2.router.js"),
// };
// Router.use("/v1", Routers.v1);
// Router.use("/v2", Routers.v2);
//
// ---> Array Approach
// const Routers = [
//     require("./v1.router.js"),
//     require("./v2.router.js")
// ];
// Router.use("/v1", Routers[0]);
// Router.use("/v2", Routers[1]);

module.exports = Router;
