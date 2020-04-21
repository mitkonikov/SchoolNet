let app;

let Server = function(node_app) {
    app = node_app;
};

let Initialize = function(network, crypto) {
    let flash = require("connect-flash");
    let passport = require("passport");
    let LocalStrategy = require("passport-local").Strategy;

    // PASSPORT
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(
        "local",
        new LocalStrategy(
            {
                usernameField: "username",
                passwordField: "password",
                passReqToCallback: true
            },
            function(req, username, password, done) {
                let salt = process.env.PASSPORT_SALT;

                let school = req.body.school;

                network.query(
                    "SELECT * FROM tbl_students WHERE Nickname = ? AND School_ID = ?",
                    [username, school],
                    function(err, rows) {
                        if (err != null) console.log(err);
                        if (err) return done(err);

                        if (typeof rows === "undefined") {
                            return done(null, false);
                        }

                        if (!rows.length) {
                            return done(null, false);
                        }

                        salt = salt + "" + password;

                        let encPassword = crypto
                            .createHash("sha256")
                            .update(salt)
                            .digest("hex");
                        let dbPassword = rows[0].Password;

                        if (!(dbPassword == encPassword)) {
                            return done(null, false);
                        }

                        network.query("UPDATE tbl_students SET Online = ? WHERE ID = ?", [1, rows[0].ID]);
                        network.query("UPDATE tbl_stats SET Logins = Logins + 1 WHERE ID = ?", [rows[0].ID]);
                            
                        let loginTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
                        network.query("UPDATE tbl_stats SET Last_Date_Login = ? WHERE ID = ?", [loginTime, rows[0].ID]);

                        done(null, rows[0]);
                    }
                );
            }
        )
    );

    FacebookStrategy = require("passport-facebook").Strategy;

    passport.use(
        new FacebookStrategy(
            {
                clientID: process.env.FACEBOOK_APP_ID,
                clientSecret: process.env.FACEBOOK_APP_SECRET,
                callbackURL: process.env.FACEBOOK_CALLBACK_URL
            },
            function(accessToken, refreshToken, profile, done) {
                console.log("Access Token: ", accessToken);
                console.log("Refresh Token: ", refreshToken);
                console.log("Profile: ", profile._json);

                let FB_NAME = profile._json.name;
                let FB_ID = profile._json.id;

                let encAccessToken = accessToken;

                network.query(
                    "SELECT * FROM tbl_students WHERE FB_ID = ?", [FB_ID], (err, qfb_id) => {
                        if (err) console.trace(err);

                        if (typeof qfb_id != "undefined" && qfb_id.length != 0) {
                            //if (encAccessToken == qfb_id[0].FB_AccessToken) {
                            network.query("UPDATE tbl_students SET Online = ? WHERE ID = ?", [0, qfb_id[0].ID]);
                            
                            let loginTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
                            network.query("UPDATE tbl_stats SET Last_Date_Login = ? WHERE ID = ?", [loginTime, qfb_id[0].ID]);
                            network.query("UPDATE tbl_stats SET Logins = Logins + 1 WHERE ID = ?", [qfb_id[0].ID]);

                            done(null, qfb_id[0]);
                            //}
                        } else {
                            // create a user
                            let values = {
                                ID: "",
                                Role: 0,
                                Valid: 1,
                                Online: 1,
                                FB_ProfileName: FB_NAME,
                                FB_AccessToken: encAccessToken,
                                FB_ID: FB_ID
                            };

                            if (typeof refreshToken != "undefined") {
                                values[FB_RefreshToken] = refreshToken;
                            }

                            network.query("INSERT INTO tbl_students SET ?", values, () => {
                                    network.query("SELECT * FROM tbl_students WHERE FB_AccessToken = ? AND FB_ID = ?", [encAccessToken, FB_ID],
                                        (err, newRows) => {
                                            let Registered_ID = newRows[0].ID;

                                            let valuesINFO = {
                                                ID: Registered_ID,
                                                Display_Name: FB_NAME
                                            };

                                            // INSERT AT STUDENTS INFO
                                            network.query("INSERT INTO tbl_students_info SET ?", valuesINFO, function(err, rows) {
                                                // STATISTICS
                                                let valuesStats = {
                                                    ID: Registered_ID,
                                                    Last_Date_Login: new Date()
                                                        .toISOString()
                                                        .slice(0, 19)
                                                        .replace("T", " "),
                                                    Successive_Logins: 1,
                                                    Logins: 0
                                                };

                                                network.query(
                                                    "INSERT INTO tbl_stats SET ?",
                                                    valuesStats
                                                );
                                                    
                                                done(null, newRows[0]);
                                            });
                                        }
                                    );
                                }
                            );
                        }
                    }
                );
            }
        )
    );

    passport.serializeUser(function(user, done) {
        done(null, user.ID);
    });

    passport.deserializeUser(function(ID, done) {
        network.query("SELECT * FROM tbl_students WHERE ID = ?", 
            [ID], 
            function(err, rows) {
                done(err, rows[0]);
        });
    });

    return {
        passport
    };
};

module.exports.Server = Server;
module.exports.Initialize = Initialize;
