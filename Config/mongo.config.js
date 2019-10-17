// ==> Mongo URIs
// ALERT: Garantee this pattern below
// mongodb://[user]:[password]@[host]:[port]/[database]
const config = Object.freeze({
  development: 'mongodb://127.0.0.1:27017/nodemongo-api-boilerplate',
  production: 'mongodb://127.0.0.1:27018/nodemongo-api-boilerplate',
});

import AppConfig from './app.config';

export default config[AppConfig.mode];
