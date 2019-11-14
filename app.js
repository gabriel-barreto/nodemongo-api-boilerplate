// ==> Importig modules
import bodyParser from 'body-parser';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import logger from 'morgan';

// ==> Getting configs
import { app as Config } from './Config';

// ==> Getting modules
import { Mongo } from './Functions';
import Routers from './Routers';

class App {
  constructor() {
    this.app = express();
    this.init();
  }

  setup(err) {
    if (err) throw err;

    // ==> Showing API running infos
    console.log('==> Services');
    console.log('[API] ...ONLINE!');
    console.log('\n==> Env');
    console.log(`[API] Mode: ${Config.mode}`);
    console.log(`[API] Port: ${Config.port}`);
    console.log('');

    // ==> Connection to db
    Mongo.connect();
  }

  listen() {
    this.app.listen(Config.port, this.setup);
  }

  init() {
    // ==> Inject dependencies
    this.app.use(bodyParser.json());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(logger(Config.isDev ? 'dev' : 'tiny'));

    // ==> Injecting routers
    this.app.use('/api', Routers);
  }
}

export default new App();
