// ==> Instanciate new router
import express from 'express';
const Router = express.Router();

// ==> Importing controllers
import { Root as Controller } from '../../Controllers';

// ==> Building routes
// Create all your routes to this Router
// Router.[HTTP method]([API Path], [Controller Method]);
Router.get('/run', Controller.run);

export default Router;
