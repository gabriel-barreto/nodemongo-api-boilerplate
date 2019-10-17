import { app as Config } from './Config';
import { default as App, Setup } from './app';

App.listen(Config.port, Setup);
