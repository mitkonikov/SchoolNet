
let server, databases;

let Initialize = (server_connect, databases_connect) => {
    server = server_connect;
    databases = databases_connect;
}

String.prototype.multiReplace = function(array) {
    let result = "";
    
    for (let c = 0; c < this.length; ++c) { // for every letter in the string
        let replaced = false;
        for (let r in array) { // check for replacements in the array
            if (this[c] == r) {
                result += array[r];
                replaced = true;
                break;
            }
        }

        if (!replaced) result += this[c];
    }

    return result;
}

/** Used to safely shutdown the server */
process.on('SIGINT', () => {
    console.info('SIGINT signal received.');
    quit();
    setTimeout(() => process.exit(0), 2000);
});

/** Shut down the MySQL connections */
let quit = () => {
    databases.endAll();
}

module.exports.Initialize = Initialize;
module.exports.quit = quit;