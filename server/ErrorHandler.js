let network;

let BuildHandler = function(network_ref) {
    network = network_ref;
}

// THIS IS ONLY TEMPORARY UNTIL WE HAVE AN ERROR DATABASE
/**
 * Simply logs an error
 * @param {String} type     The type of the error
 * @param {String} ip       The IP of origin
 * @param {String} user     The username
 * @param {String} error    The error itself
 * @param {String} userinfo Additional userinfo
 */
let loggingFunction = function(type, ip, user, error, userinfo) {
    console.log();
    console.log(" ========================= ");
    console.log(" == protectionChecks.js == ");
    console.log('\x1b[31m%s\x1b[0m%s\x1b[32m%s\x1b[0m', "ERROR:", " TYPE: " + type, ", IP: " + ip + ", USER: " + user);
    console.log(error);
    if (userinfo)
        console.log(userinfo)
    console.log(" ========================= ");
    console.log();
}

module.exports.BuildHandler = BuildHandler;
module.exports.log = loggingFunction;