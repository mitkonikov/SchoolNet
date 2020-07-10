module.exports = (app) => {
    let ZBORAPI             = require('./build/ZBORAPI.js');
    let PILOTAPI            = require('./build/PILOTAPI.js');
    ZBORAPI.connect();
    PILOTAPI.connect();
    
    app.post('/zbor/api/light', ZBORAPI.light);
    app.post('/zbor/api/query', ZBORAPI.query);
    app.post('/zbor/api/update', ZBORAPI.update);
    app.use('/zbor', express.static(__dirname + '/zbor/build'));

    app.post('/pilot/api/light', (req, res) => {
        if (req.isAuthenticated() && req.user.Role === 4) {
            PILOTAPI.light(req, res);
        } else {
            res.send({ status: "unauth" });
        }
    });

    app.post('/pilot/api/query', (req, res) => {
        if (req.isAuthenticated() && req.user.Role === 4) {
            PILOTAPI.query(req, res);
        } else {
            res.send({ status: "unauth" });
        }
    });

    app.use('/pilot', (req, res, next) => {
        if (req.isAuthenticated() && req.user.Role === 4) {
            express.static(__dirname + '/pilot/build')(req, res, next);
        } else {
            res.redirect("/");
        }
    });
}