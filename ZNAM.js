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

app.get('/', (req, res) => {
    res.sendFile(__dirname + "./znam/build/index.html");
})

server.listen(process.env.PORT);