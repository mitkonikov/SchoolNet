const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const fs = require('fs');

// process all the arguments given when starting this module
let argsRaw = process.argv;
let args = {};

for (let i = 0; i < argsRaw.length; ++i) {
    if (argsRaw[i].startsWith('-')) {
        args[argsRaw[i]] = argsRaw[i+1];
        i++;
    }
}

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
  
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
        console.log('worker %d died (%s). restarting...',
            worker.process.pid, signal || code);
        cluster.fork();
    });
    
    fs.watchFile("./watcher", (curr, prev) => {
        console.log("Restart received, reloading workers");

        // delete the cached module, so we can reload the app
        delete require.cache[require.resolve("./" + args["-server"])];

        let workers = Object.keys(cluster.workers);

        // only reload one worker at a time
        // otherwise, we'll have a time when no request handlers are running
        let i = 0;
        let updateWorker = function() {
            if (i == workers.length) return;

            console.log("Killing " + workers[i]);

            // this now means, just shut down the mySQL connections
            cluster.workers[workers[i]].send({ data: "bye" });

            cluster.workers[workers[i]].on("disconnect", function() {
                console.log("Shutdown complete");
            });

            // wait a little bit for the connections to be shut down
            setTimeout(() => {
                // it could happen that the worker errored out
                if (typeof cluster.workers[workers[i]] != "undefined") {
                    cluster.workers[workers[i]].disconnect();
                    console.log("Disconnecting worker...");
                }
                
                i++;
                updateWorker();
            }, 1000);
        };

        updateWorker();
    });

    return;
} else {
    console.log(`Worker ${process.pid} Starting...`);

    let SchoolNet = require("./" + args['-server']);

    process.on("message", (msg) => {
        if (msg.data) {
            if (msg.data == "bye") {
                SchoolNet.quit();
            }
        }
    });
}