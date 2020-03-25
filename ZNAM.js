const fs = require('fs');

const SSLSettings = {
    pfx: fs.readFileSync('C://cert//certificate.pfx'),
    passphrase: keywords.SSLPass
};

let express = require('express');
let HTTPApp = new express();
let app = new express();

let http = require('http').createServer(HTTPApp);

HTTPApp.get('*', function(req, res) {  
    res.redirect('https://schoolnet.mk');
})

http.listen(80);

let server = require('https').createServer(SSLSettings, app);

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

let network = databases.network;
let authenticationModule = require('./server/authentication');
let auth = authenticationModule.Initialize(app, network, { ErrorHandler: ErrorHandler });

let QueryModule = require("./znam/server/query");
QueryModule.Initialize(databaseController, gameLogic);
app.post('/query', QueryModule.Query);

let UpdateModule = require("./znam/server/update");
UpdateModule.Initialize(databaseController, gameLogic);
app.post('/update', UpdateModule.Update);

app.use('/client/common', express.static(__dirname + '/client/common'));

app.get('/', (req, res) => {
    express.static(__dirname + '/znam/build');
})

app.get('/:pageCalled', function(req, res) {
    console.log('User requested page out-of-bounds: ' + req.params.pageCalled);
    res.redirect('/');
});

app.get('*', function(req, res) {
    res.redirect('/');
});

server.listen(process.env.PORT);
console.log('\x1b[32m%s\x1b[0m', "ZNAM Server Started.");