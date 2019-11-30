var app;

var Server = function(node_app) {
    app = node_app;
}

var Initialize = function(network, crypto) {
    var flash             = require('connect-flash');
    var passport          = require('passport');
    var LocalStrategy     = require('passport-local').Strategy;
    
    // PASSPORT
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());
    
    passport.use('local', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
        } , function (req, username, password, done){
            var salt = process.env.PASSPORT_SALT;
            
            var school = req.body.school;
            
            network.query("select * from tbl_students where Nickname = ? and School_ID = ?", [username, school], function(err, rows){
                if (err != null) console.log(err);
                if (err) return done(err);
                
                if (!rows.length) {
                    return done(null, false);
                }
                
                salt = salt + '' + password;

                let encPassword = crypto.createHash('sha256').update(salt).digest('hex');
                let dbPassword  = rows[0].Password;

                if(!(dbPassword == encPassword)){
                    return done(null, false);
                }

                network.query("UPDATE tbl_students SET Online = ? WHERE ID = ?", [1, rows[0].ID]);
                done(null, rows[0]);
            });
        }
    ));

    passport.serializeUser(function(user, done){
        done(null, user.ID);
    });

    passport.deserializeUser(function(ID, done){
        network.query("select * from tbl_students where ID = ?", [ID], function (err, rows){
            done(err, rows[0]);
        });
    });

    return {
        passport
    };
}

module.exports.Server = Server;
module.exports.Initialize = Initialize;