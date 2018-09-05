// ==> Importig modules
const bodyParser = require("body-parser");
const compression = require("compression");
const helmet = require("helmet");
const logger = require("morgan");

// ==> Create new express application
const app = require("express")();

// ==> Getting configs
const config = require("./Config/api.config");

// ==> Inject dependencies
app.use(bodyParser.json());
app.use(helmet());
app.use(compression());
app.use(logger(config.isDev ? "dev" : "tiny"));

// ==> Injecting routers
app.use("/api", require("./Routers"));

// ==> Starting server
const server = app.listen(config.port, err => {
    if (err) throw err;

    // ==> Showing API running infos
    console.log("==> Services");
    console.log("[API] ...ONLINE!");
    console.log("\n==> Env");
    console.log(`[API] Mode: ${config.mode}`);
    console.log(`[API] Port: ${config.port}`);
    console.log("\n==> URLs");
    console.log(
        `[API] Entry: ${
            server.address().address == "::"
                ? "http://127.0.0.1:"
                : server.address().address
        }:${config.port}`
    );
    console.log(
        `[API] Check: ${
            server.address().address == "::"
                ? "http://127.0.0.1:"
                : server.address().address
        }:${config.port}/api/run`
    );

    // ==> Connecting on Database
    // NOTE: If you want to force another URI pass them as a parameter to connect function bellow
    console.log("\n==> Database");
    require("./Functions/mongo.function").connect();
});
