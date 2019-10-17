// ==> Importig modules
import bodyParser from 'body-parser';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import logger from 'morgan';

// ==> Getting configs
import { app as Config } from './Config';

// ==> Getting modules
import Mongo from './Functions/mongo.functions';
import Routers from './Routers';

class App {
  constructor() {
    this.app = express();

    this.database();
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
  }

  listen(port) {
    this.server = this.app.listen(port, this.setup);
    return this.server;
  }

  database() {
    Mongo.connect();
  }

  init() {
    // ==> Inject dependencies
    app.use(bodyParser.json());
    app.use(helmet());
    app.use(compression());
    app.use(logger(config.isDev ? 'dev' : 'tiny'));

    // ==> Injecting routers
    app.use('/api', Routers);
  }
}

export default App;
