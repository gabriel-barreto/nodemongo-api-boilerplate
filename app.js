// ==> Importig modules
import bodyParser from 'body-parser';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import logger from 'morgan';

// ==> Getting configs
import { app as config } from './Config';

// ==> Getting modules
import Mongo from './Functions/mongo.functions';
import Routers from './Routers';

// ==> Create new express application
const app = express();

// ==> Inject dependencies
app.use(bodyParser.json());
app.use(helmet());
app.use(compression());
app.use(logger(config.isDev ? 'dev' : 'tiny'));

// ==> Injecting routers
app.use('/api', Routers);

const setup = err => {
  if (err) throw err;

  // ==> Showing API running infos
  console.log('==> Services');
  console.log('[API] ...ONLINE!');
  console.log('\n==> Env');
  console.log(`[API] Mode: ${config.mode}`);
  console.log(`[API] Port: ${config.port}`);
  console.log('\n==> URLs');
  console.log(
    `[API] Entry: ${
      server.address().address == '::'
        ? 'http://127.0.0.1:'
        : server.address().address
    }:${config.port}`,
  );
  console.log(
    `[API] Check: ${
      server.address().address == '::'
        ? 'http://127.0.0.1:'
        : server.address().address
    }:${config.port}/api/run`,
  );

  // ==> Connecting on Database
  // NOTE: If you want to force another URI pass them as a parameter to connect function bellow
  console.log('\n==> Database');
  Mongo.connect();
};

export const Setup = setup;
export default app;
