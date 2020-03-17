const fs = require('fs');

const SSLSettings = {
    pfx: fs.readFileSync('C://cert//certificate.pfx'),
    passphrase: '$!$Tp{MjSehS4p?*'
};

let express = require('express');
let app = express();

let server = require('https').createServer(SSLSettings, app);

app.get('/', (req, res) => {
    console.log("here");
    res.send('Hello HTTPS!');
    res.end();
})


server.listen(443, (err) => console.log(err));