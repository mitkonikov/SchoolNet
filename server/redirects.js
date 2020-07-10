module.exports = (app) => {
    // REDIRECTING
    app.get('/favicon.ico', function(req, res) {
        res.sendFile(__dirname + '/favicon.ico');
    });

    app.get('/robots.txt', function(req, res) {
        res.sendFile(__dirname + '/robots.txt');
    });

    app.get('/client/manifest.json', function(req, res) {
        res.sendFile(__dirname + '/client/manifest.json');
    });
}