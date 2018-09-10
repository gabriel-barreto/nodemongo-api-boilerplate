// ==> Dependencies
const {
    exec
} = require("child_process");
const fs = require("fs");
const path = require("path");

fs.readdir(__dirname, (err, files) => {
    if (err) throw err;
    files.every(each => {
        // ==> Checking if the script follows the name pattern
        if (each.endsWith(".factory.js")) {
            // ==> Building path to script
            const scriptPath = path.join(__dirname, each);

            // ==> Applying run permissions
            fs.chmodSync(scriptPath, "755");

            // ==> Running in another thread
            exec(scriptPath, (err, stdout, stderror) => {
                if (err) throw err;
                if (stderror) console.error(stderror);
                console.log(stdout);
            });
        }
        return true;
    });
});