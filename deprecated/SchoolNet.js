// const keywords = require('./keywords');

/* UNCOMMENT THIS IF YOU DONT HAVE NGINX SETUP
 * Also, change the ports:
 *   - HTTPS on 443
 *   - HTTP  on 80
const SSLSettings = {
    pfx: fs.readFileSync('C://cert//certificate.pfx'),
    passphrase: keywords.SSLPass()
};


let HTTPApp = new express();
let http = require('http').createServer(HTTPApp);

HTTPApp.get('*', function(req, res) {  
    res.redirect('https://schoolnet.mk');
})

http.listen(80);*/