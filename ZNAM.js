const fs = require('fs');
const keywords = require('./keywords');

/*
 * We are commenting these lines, because we started using NGINX
const SSLSettings = {
    pfx: fs.readFileSync('C://cert//certificate.pfx'),
    passphrase: keywords.SSLPass()
};*/

let express = require('express');
// let HTTPApp = new express();
let app = new express();

// let http = require('http').createServer(HTTPApp);

/*HTTPApp.get('*', function(req, res) {  
    res.redirect('https://schoolnet.mk');
})

http.listen(80);*/

let server = require('http').createServer(app);

const expressSanitizer = require('express-sanitizer');
app.use(expressSanitizer());

const dotenv            = require('dotenv');
dotenv.config();

let ErrorHandler        = require("./server/ErrorHandler");

let databases           = require('./server/dbConnection');

/** The Main Controller Module for database access */
let databaseController  = require('./server/databaseController');
databaseController.Connect(databases, {
    uuidv4: require('uuid/v4')
});

/** ZNAM Database Controller */
let ZNAMDBC = require('./znam/server/DBController');
ZNAMDBC.Connect(databases);

let network = databases.network;
let authenticationModule = require('./server/authentication');
let auth = authenticationModule.Initialize(app, network, { ErrorHandler: ErrorHandler });

let GameEngine = require('./server/play/GameEngine');
let GameLogic = require("./znam/server/gameLogic");
GameLogic.Initialize(databases, GameEngine);

let QueryModule = require("./znam/server/query");
QueryModule.Initialize(databaseController, ZNAMDBC, GameLogic);
app.post('/query', QueryModule.Query);

let UpdateModule = require("./znam/server/update");
UpdateModule.Initialize(databaseController, ZNAMDBC, GameLogic);
app.post('/update', UpdateModule.Update);

app.use('/client/common', express.static(__dirname + '/client/common'));

let redirectURLs = ['/score', '/profile', '/contribute']
for (let rurl of redirectURLs) {
    app.get(rurl, (req, res) => res.redirect('/'));
}

app.get('*', (req, res) => {
    express.static(__dirname + '/znam/build')(req, res);
});

server.listen(process.env.PORT_ZNAM);
console.log('\x1b[32m%s\x1b[0m', "ZNAM Server Started.");

let misc = require('./server/misc');
misc.Initialize(server, databases);

module.exports.quit = misc.quit;