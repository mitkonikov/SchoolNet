let Initialize = (app, network, req) => {
    let sess                = require('express-session');

    let crypto              = require('crypto');

    let passport_module   = require('./passport.logic');
    passport_module.Server(app);

    let MySQLStore = require('connect-mysql')(sess);
    let MySQLOptions = {
        config: {
            user     : process.env.DATABASE_USER,
            password : process.env.DATABASE_PASS,
            database: 'db_net'
        }
    };

    let bodyParser        = require('body-parser');
    let cookieParser      = require('cookie-parser');
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());

    let protectionChecks  = require('./protectionChecks');
    protectionChecks.Error(req.ErrorHandler);

    // COOKIE STORES
    let store = new MySQLStore(MySQLOptions);
    let guestStore = new MySQLStore({
        config: {
            schema: {
                tableName: 'guest_sessions'
            }
        },
        ...MySQLOptions
    });

    let cookieSettings = {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        expires: 1000 * 60 * 60 * 24 * 3
    }

    if (process.env.NODE_ENV === "production") {
        cookieSettings.domain = '.schoolnet.mk';
        cookieSettings.secure = true;
    }

    app.use(sess({
        name: process.env.SESSION_NAME,
        secret: process.env.SESSION_SECRET,
        cookie: cookieSettings,
        store:  store,
        resave: true,
        saveUninitialized: true,
    }));

    let guestCookieSettings = {
        maxAge: 1000 * 60 * 60 * 24 * 1095,
        expires: 1000 * 60 * 60 * 24 * 1095
    }

    if (process.env.NODE_ENV === "production") {
        guestCookieSettings.domain = '.schoolnet.mk';
        guestCookieSettings.secure = true;
    }

    app.use(sess({
        name: process.env.GUEST_SESSION_NAME,
        secret: process.env.GUEST_SESSION_SECRET,
        cookie: guestCookieSettings,
        store:  guestStore,
        resave: false,
        saveUninitialized: false
    }));

    // Initializes the passport module
    passport_module = passport_module.Initialize(network, crypto);

    let passportPass = {
        store           : store,
        passport        : passport_module.passport,
        cookieParser    : cookieParser
    }

    app.post('/client/signin', function(req, res, next) {
        const secret_key = process.env.CAPTCHA_SECRET;
        const token = req.body.token;
        const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
    
        /*fetch(url, {
            method: 'post'
        })
            .then(response => response.json())
            .then(google_response => {
                if (typeof google_response === "undefined") {
                    res.redirect('/');
                    return;
                }*/
    
                //if (google_response.success) {
                if (false) {
                
                    if (!protectionChecks.signinCheck(req)) {
                        res.send('incorrect');
                        return;
                    }
                
                    passport_module.passport.authenticate('local', function(err, user, info) {
                        if (err) {
                            ErrorHandler.log("SQL", req.clientIp, null, err);
                            // further print the username entered
                            res.send(err);
                        }
                
                        if (!user) { return res.send("incorrect"); }
                        
                        req.logIn(user, (err) => {
                            if (err) { 
                                ErrorHandler.log("SQL", req.clientIp, null, err);
                                // further print the username entered
                                res.send(err);
                            }
                            
                            res.send("success");
                        });
                    })(req, res, next);
                } else {
                    res.send("failed");
                }
    //        });
    });

    app.post('/auth/info', (req, res) => {
        res.send({
            isAuth: req.isAuthenticated()
        });
    });

    app.get('/auth/connect/:provider', (req, res) => {
        if (req.isAuthenticated()) {
            if (req.params.provider == "Facebook" && req.user.FB_ID == "") {
                passport_module.passport.authenticate('facebook')(req, res);
            } else if (req.params.provider == "Google" && req.user.G_ID == "") {
                passport_module.passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })(req, res);
            } else {
                res.redirect('/');
            }
        } else {
            res.redirect('/');
        }
    });

    app.get('/auth/facebook', (req, res) => {
        passport_module.passport.authenticate('facebook')(req, res);
    });

    app.get('/auth/facebook/:platform', (req, res) => {
        if (req.params.platform != "callback") {
            passport_module.passport.authenticate('facebook')(req, res);
        } else {
            passport_module.passport.authenticate('facebook', (err, user, info) => {
                if (err) {
                    res.send("Sorry... A server problem.");
                    return;
                }

                req.logIn(user, (err) => {
                    network.query("UPDATE tbl_students SET Redirect = ?, Online = ? WHERE ID = ?", ["ZNAM", 1, req.user.ID], (err, rows) => {
                        res.redirect('https://znam.schoolnet.mk/');
                    });
                });
            })(req, res);
        }
    });

    app.get('/auth/google', (req, res) => {
        passport_module.passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })(req, res);
    });

    app.get('/auth/google/callback', (req, res) => {
            passport_module.passport.authenticate('google', (err, user, info) => {
                if (err) {
                    res.send("Sorry... A server problem.");
                    return;
                }
                
                req.logIn(user, (err) => {
                    network.query("UPDATE tbl_students SET Redirect = ?, Online = ? WHERE ID = ?", ["ZNAM", 1, req.user.ID], (err, rows) => {
                        res.redirect('https://znam.schoolnet.mk/');
                    });
                })
            })(req, res);
        }
    );

    app.get('/deauth/facebook/callback', (req, res) => {
        
    });

    app.get('/client/logout', function(req, res) {
        if (req.isAuthenticated()) {
            network.query("UPDATE tbl_students SET Online = ? WHERE ID = ?", [0, req.user.ID]);
            req.logout();
        }
        res.redirect('/');
    });

    return {
        passport_module,
        passportPass,
        crypto,
        protectionChecks
    }
}

module.exports.Initialize = Initialize;
