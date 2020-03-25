const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const fs = require('fs');

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
        delete require.cache[require.resolve("./" + args['-server'])];

        // only reload one worker at a time
        // otherwise, we'll have a time when no request handlers are running
        let i = 0;
        let workers = Object.keys(cluster.workers);
        console.log(workers);
        let updateWorker = function() {
            if (i == workers.length) return;

            console.log("Killing " + workers[i]);
            
            cluster.workers[workers[i]].on("disconnect", function() {
                console.log("Shutdown complete");
            });

            cluster.workers[workers[i]].disconnect();
            
            let newWorker = cluster.fork();
            newWorker.on("listening", function() {
                console.log("Replacement worker online.");
                i++;
                updateWorker();
            });
        }

        updateWorker();
    });

    return;
} else {
    console.log(`Worker ${process.pid} Starting...`);

    let SchoolNet = require("./" + args['-server']);
}