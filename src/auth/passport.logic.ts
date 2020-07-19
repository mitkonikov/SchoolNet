import Express from 'express';
import passport from 'passport';
import crypto from 'crypto';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { Connection } from 'typeorm';
import { User } from '../entity/network/User';
import { Statistic } from '../entity/network/Statistic';
import { UserInfo } from '../entity/network/UserInfo';
import { IRequest } from '../types';

let userPassportWrapper = (entity: User) => {
    return {
        ID: entity.ID,
        // Basic Info
        Nickname: entity.Nickname,
        Role: entity.Role,
        Firstname: entity.Firstname,
        Lastname: entity.Lastname,
        School_ID: entity.School_ID,
        Email: entity.Email,
        Gender: entity.Gender,
        Online: entity.Online,
        // OAuth Tokens
        FB_AccessToken: entity.FB_AccessToken,
        FB_RefreshToken: entity.FB_RefreshToken,
        FB_ProfileName: entity.FB_ProfileName,
        FB_ID: entity.FB_ID,
        G_AccessToken: entity.G_AccessToken,
        G_RefreshToken: entity.G_RefreshToken,
        G_ProfileName: entity.G_ProfileName,
        G_ID: entity.G_ID
    }
}

let Initialize = (app: Express.Express, network, networkORM: Connection) => {
    // let flash = require("connect-flash");

    // app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    const localStrategyConfig = {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
    }

    passport.use(
        "local",
        new LocalStrategy(localStrategyConfig,
            (req, username, password, done) => {
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

    const facebookStrategyConfig = {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        passReqToCallback: true
    }

    passport.use(
        new FacebookStrategy(facebookStrategyConfig,
            async (req: IRequest, accessToken, refreshToken, profile, done) => {
                console.log(req.params);
                
                const FB_NAME = profile._json.name;
                const FB_ID = profile._json.id;
                const encAccessToken = accessToken;

                if (req.isAuthenticated() && req.user.FB_ID == '' && req.user.G_ID != '') {
                    // This is to connect an existing user to a Facebook account
                    let user = await User.findOne({ ID: req.user.ID });
                    user.FB_ProfileName = FB_NAME;
                    user.FB_AccessToken = encAccessToken;
                    user.FB_ID = FB_ID;

                    if (typeof refreshToken != "undefined") {
                        user.FB_RefreshToken = refreshToken;
                    }

                    let updatedUser = await networkORM.getRepository(User).save(user);
                    done(null, userPassportWrapper(updatedUser));
                } else {
                    // Check if a user already exists
                    let user = await User.findOne({ FB_ID: FB_ID });
                    if (user) {
                        user.Online = false;

                        let loginTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
                        let statistics = await Statistic.findOne({ ID: user.ID });
                        statistics.Last_Date_Login = loginTime;
                        statistics.Logins += 1;

                        done(null, userPassportWrapper(user));
                    } else {
                        // Create a new user
                        let newUser = new User();
                        newUser.Role = 0;
                        newUser.Valid = true;
                        newUser.Online = true;
                        newUser.FB_ProfileName = FB_NAME;
                        newUser.FB_AccessToken = encAccessToken;
                        newUser.FB_ID = FB_ID;

                        if (typeof refreshToken != "undefined") {
                            newUser.FB_RefreshToken = refreshToken;
                        }

                        let createdUser = await networkORM.getRepository(User).save(newUser);

                        // Create a new User Info Object
                        let newUserInfo = new UserInfo();
                        newUserInfo.ID = createdUser.ID;
                        newUserInfo.Display_Name = FB_NAME;

                        // Create a new User Statistics Object
                        let newUserStats = new Statistic();
                        newUserStats.ID = createdUser.ID;
                        newUserStats.Last_Date_Login = new Date()
                            .toISOString()
                            .slice(0, 19)
                            .replace("T", " ");
                        newUserStats.Successive_Logins = 1;
                        newUserStats.Logins = 1;

                        // Save them
                        await networkORM.getRepository(UserInfo).save(newUserInfo);
                        networkORM.getRepository(Statistic).save(newUserStats);

                        // Call done on passport authentication
                        done(null, userPassportWrapper(createdUser));
                    }
                }
            }
        )
    );

    const googleStrategyConfig = {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        passReqToCallback: true
    }

    passport.use(
        new GoogleStrategy(googleStrategyConfig,
            (req, accessToken, refreshToken, profile, done) => {
                /*User.findOrCreate({ googleId: profile.id }, function (err, user) {
                    return done(err, user);
                });*/

                console.log(req.params);

                let G_ID = profile.id;
                let G_NAME = profile.displayName;

                if (req.isAuthenticated() && req.user.FB_ID != '' && req.user.G_ID == '') {
                    let GEntry = {
                        G_ProfileName: G_NAME,
                        G_AccessToken: accessToken,
                        G_ID: G_ID
                    }

                    if (typeof refreshToken != "undefined") {
                        GEntry["G_RefreshToken"] = refreshToken;
                    }

                    network.query("UPDATE tbl_students SET ? WHERE ID = ?", [GEntry, req.user.ID], () => {
                        network.query("SELECT * FROM tbl_students WHERE ID = ?", [req.user.ID], (err, rows) => {
                            done(null, rows[0]);
                        });
                    });
                } else {
                    network.query(
                        "SELECT * FROM tbl_students WHERE G_ID = ?", [G_ID], (err, qg_id) => {
                            if (err) console.trace(err);

                            if (typeof qg_id != "undefined" && qg_id.length != 0) {
                                network.query("UPDATE tbl_students SET Online = ? WHERE ID = ?", [0, qg_id[0].ID]);
                                
                                let loginTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
                                network.query("UPDATE tbl_stats SET Last_Date_Login = ? WHERE ID = ?", [loginTime, qg_id[0].ID]);
                                network.query("UPDATE tbl_stats SET Logins = Logins + 1 WHERE ID = ?", [qg_id[0].ID]);

                                done(null, qg_id[0]);
                            } else {
                                // create a user
                                let values = {
                                    ID: "",
                                    Role: 0,
                                    Valid: 1,
                                    Online: 1,
                                    G_ProfileName: G_NAME,
                                    G_AccessToken: accessToken,
                                    G_ID: G_ID
                                };

                                if (typeof refreshToken != "undefined") {
                                    values["G_RefreshToken"] = refreshToken;
                                }

                                network.query("INSERT INTO tbl_students SET ?", values, () => {
                                        network.query("SELECT * FROM tbl_students WHERE G_AccessToken = ? AND G_ID = ?", [accessToken, G_ID],
                                            (err, newRows) => {
                                                let Registered_ID = newRows[0].ID;

                                                let valuesINFO = {
                                                    ID: Registered_ID,
                                                    Display_Name: G_NAME
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
                                                        Logins: 1
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
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.ID);
    });

    passport.deserializeUser((ID, done) => {
        network.query("SELECT * FROM tbl_students WHERE ID = ?", [ID], (err, rows) => {
            rows[0].Password = '';
            done(err, rows[0]);
        });
    });

    return {
        passport
    };
};

export {
    Initialize
};