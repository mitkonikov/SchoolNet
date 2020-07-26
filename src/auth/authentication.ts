import sess from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import MySQLStores from 'connect-mysql';
import Express from 'express';
import { IRequest } from '../types';

import { redirect, siteRedirect } from './redirects';

import { Initialize as Passport } from './passport.logic';
import { Connection } from 'typeorm';
import { User } from '../entity/network/User';

let Initialize = (app: Express.Express, networkORM: Connection) => {
    let MySQLStore = MySQLStores(sess);
    const MySQLOptions = {
        config: {
            user     : process.env.DATABASE_USER,
            password : process.env.DATABASE_PASS,
            database: 'db_net'
        }
    };

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());

    // COOKIE STORES
    let store = new MySQLStore(MySQLOptions);

    let cookieSettings = {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        expires: 1000 * 60 * 60 * 24 * 3
    } as any;

    if (process.env.NODE_ENV === "production") {
        cookieSettings.domain = '.' + process.env.DOMAIN;
    }

    app.use(sess({
        name: process.env.SESSION_NAME,
        secret: process.env.SESSION_SECRET,
        cookie: cookieSettings,
        store:  store,
        resave: true,
        saveUninitialized: true,
    }));

    // Initializes the passport module
    let passport_module = Passport(app, networkORM);

    let passportPass = {
        store           : store,
        passport        : passport_module.passport,
        cookieParser    : cookieParser
    }

    app.post('/client/signin', function(req: IRequest, res, next) {
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
                // if (false) {
                
                //     if (!protectionChecks.signinCheck(req)) {
                //         res.send('incorrect');
                //         return;
                //     }
                
                //     passport_module.passport.authenticate('local', function(err, user, info) {
                //         if (err) {
                //             ErrorHandler.log("SQL", req.clientIp, null, err);
                //             // further print the username entered
                //             res.send(err);
                //         }
                
                //         if (!user) { return res.send("incorrect"); }
                        
                //         req.logIn(user, (err) => {
                //             if (err) { 
                //                 ErrorHandler.log("SQL", req.clientIp, null, err);
                //                 // further print the username entered
                //                 res.send(err);
                //             }
                            
                //             res.send("success");
                //         });
                //     })(req, res, next);
                // } else {
                //     res.send("failed");
                // }
    //        });
    });

    app.post('/auth/info', (req: IRequest, res) => {
        res.send({
            isAuth: req.isAuthenticated()
        });
    });

    app.get('/auth/info', (req: IRequest, res) => {
        res.send({
            isAuth: req.isAuthenticated()
        });
    });

    app.get('/auth/connect/:provider', (req: IRequest, res) => {
        if (req.isAuthenticated()) {
            console.log(`User ${req.user.ID} connecting their second account...`);
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

    app.get('/auth/facebook/:platform', (req: IRequest, res, next) => {
        if (req.params.platform != "callback") { // This is the initial call for auth
            req.session.returnTo = req.params.platform; // Remember the platform for redirection later

            passport_module.passport.authenticate('facebook')(req, res, next);
        } else {
            passport_module.passport.authenticate('facebook', (err, user, info) => {
                if (err) {
                    console.log(`User ${user.ID} had a server problem while logging at ${req.session.returnTo}.`);
                    res.send("Sorry... A server problem.");
                    return;
                }

                login(user, req, res);
            })(req, res, next);
        }
    });

    app.get('/auth/google/:platform', async (req: IRequest, res) => {
        if (req.params.platform != "callback") { // This is the initial call for auth
            req.session.returnTo = req.params.platform; // Remember the platform for redirection later

            passport_module.passport.authenticate('google', {
                scope: ['https://www.googleapis.com/auth/plus.login']
            })(req, res);
        } else {
            // If it's callback, it means that google agrees with the auth
            passport_module.passport.authenticate('google', (err, user, info) => {
                if (err) {
                    console.log(`User ${user.ID} had a server problem while logging at ${req.session.returnTo}.`);
                    res.send("Sorry... A server problem.");
                    return;
                }
                
                login(user, req, res);
            })(req, res);
        }
    });

    const login = (user: any, req: IRequest, res: any) => {
        req.logIn(user, async () => {
            const currentUser = await networkORM.getRepository(User).findOne({ ID: req.user.ID });
            currentUser.Online = true;

            console.log(`User ${user.ID} successfully logged in at ${req.session.returnTo}.`);

            // Check if returnTo is supplied
            if (req.session && req.session.returnTo) {
                // Find to which site we want to redirect the user
                let Redirect = '/';
                if (typeof redirect[req.session.returnTo] != "undefined") {
                    Redirect = redirect[req.session.returnTo];
                    currentUser.Redirect = Redirect;
                }

                await currentUser.save();

                res.redirect(siteRedirect[Redirect]);
            } else {
                res.redirect('/');
            }
        });
    }

    app.get('/deauth/facebook/callback', (req, res) => {
        
    });

    app.get('/client/logout', (req: IRequest, res) => {
        if (req.isAuthenticated()) {
            console.log(`User ${req.user.ID} logged out.`);
            networkORM.getRepository(User).update({ ID: req.user.ID }, { Online: false, Redirect: '' });
            req.logout();
        }
        res.redirect('/');
    });

    return {
        passport_module,
        passportPass
    }
}

export {
    Initialize
};
