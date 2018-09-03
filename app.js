// ==> Importig modules
const bodyParser = require("body-parser");
const logger = require("morgan");

// ==> Create new express application
const app = require("express")();

// ==> Inject dependencies
app.use(bodyParser.json());
app.use(logger("tiny"));

// ==> Injecting routers
app.use("/api", require("./Routers"));

// ==> Starting server
app.listen("5000", () => {
    // ==> Showing API running infos
    console.log("==> Services");
    console.log("[API] ...ONLINE!");
    console.log("\n==> Env");
    console.log("[API] Mode: development");
    console.log("[API] Port: 5000");
    console.log("\n==> URLs");
    console.log("[API] Entry: http://127.0.0.1:5000");
    console.log("[API] Check: http://127.0.0.1:5000/api/run");

    // ==> Connecting on Database
    // NOTE: If you want to force another URI pass them as a parameter to connect function bellow
    console.log("\n==> Database");
    require("./Functions/mongo.function").connect();
});
