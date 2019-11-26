/**
 * Module function handling all the Game Sockets
 * @param {*} server                The server
 * @param {JSON} passportPass       Passport Pass contains references to store, passport and cookieParser
 */
var gameSocket = function(server, passportPass, DBs) {
    let network = DBs.network;
    let wordsDB = DBs.wordsDB;

    var socketio                = require('socket.io');
    var passportSocketIo        = require('passport.socketio');
    var io                      = socketio(server, {'pingInterval': 5000, 'pingTimeout': 10000});

    io.use(passportSocketIo.authorize({
        key:            process.env.SESSION_NAME,
        secret:         process.env.SESSION_SECRET,
        store:          passportPass.store,
        passport:       passportPass.passport,
        cookieParser:   passportPass.cookieParser,
        fail:           onAuthorizeFail
    }));

    var gameSocket          = io.of('/game');
    var gameTatkinSocket    = require('./play/tatkin/gameSocket.tatkin.js/index.js.js').socket(io, gameSocket, DBs);

    gameSocket.on('connection', (socket) => {
        // LOBBY CONNECTION
        let USER = socket.request.user;
        
        //console.log('game socket connected');
        // console.log(USER);

        if (USER.logged_in) {
            //console.log(USER.Nickname + " is listening in a lobby...");
        } else {
            logErrorHandler("SOCKET.IO", null, null, 
                            "User requested socket.io connection without being logged!", null);
            socket.emit("error", "not logged in");
        }

        socket.on('disconnect', function(eventData) {

        });
    });

    function onAuthorizeFail(data, message, error, accept){
        // error indicates whether the fail is due to an error or just a unauthorized client
        if(error) {
            console.log("ERROR: " + message);
        } else {
            console.log(message);
        }
        // the same accept-method as above in the success-callback
        accept(null, false);
    }

    /** Custom-build error handler */
    function logErrorHandler(type, ip, user, error, userinfo) {
        console.log(" ====================== ");
        console.log('\x1b[31m%s\x1b[0m%s\x1b[32m%s\x1b[0m', "ERROR:", " TYPE: " + type, ", IP: " + ip + ", USER: " + user);
        console.log(error);
        console.log(userinfo)
        console.log(" ====================== ");
    }
}

module.exports.init = gameSocket;