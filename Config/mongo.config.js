// ==> Mongo URIs
// ALERT: Garantee this pattern below
// mongodb://[user]:[password]@[host]:[port]/[database]
//
// NOTE:
// If you're using docker links just pass the
// mongodb container name to URIs
// mongodb://[user]:[password]@[service-name]:[port]/[database]
const config = Object.freeze({
    development: "mongodb://db/nodemongo-api-boilerplate",
    production: "mongodb://127.0.0.1:27018/nodemongo-api-boilerplate"
});

const { mode } = require("./api.config");

module.exports = config[mode];
