/**
 * Module function handling all the Game Sockets
 * @param {*} server                The server
 * @param {JSON} passportPass       Passport Pass contains references to store, passport and cookieParser
 */
let gameSocket = function(server, passportPass, databaseController) {
    let network = databaseController.DB("db_net");
    let wordsDB = databaseController.DB("db_words");

    let socketio                = require('socket.io');
    // let redis                   = require('socket.io-redis');
    let passportSocketIo        = require('passport.socketio');
    let io                      = socketio(server, {'pingInterval': 5000, 'pingTimeout': 10000});

    // io.adapter(redis({ host: 'localhost', port: 6379 }));
    io.use(passportSocketIo.authorize({
        key:            process.env.SESSION_NAME,
        secret:         process.env.SESSION_SECRET,
        store:          passportPass.store,
        passport:       passportPass.passport,
        cookieParser:   passportPass.cookieParser,
        fail:           onAuthorizeFail
    }));

    mainSocket          = io.of('/game');
    
    mainSocket.on('connection', (socket) => {
        // LOBBY CONNECTION
        let USER = socket.request.user;
        
        if (USER.logged_in) {
            //console.log(USER.Nickname + " is listening in a lobby...");
        } else {
            socket.emit("server info", {
                id: process.env.PM2_ID
            });
        }

        socket.on("pinging", () => {
            socket.emit("pong", {
                time: (new Date().getTime())
            });
        });

        socket.on('disconnect', function(eventData) {

        });
    });

    function onAuthorizeFail(data, message, error, accept){
        // error indicates whether the fail is due to an error or just a unauthorized client
        /*if (error) {
            console.log("ERROR: " + message);
        } else {
            console.log(message);
        }*/

        accept(null, false);
    }

    let ioControl = {
        /** returns the Game Socket of a specific game */
        of: (gameURL) => {
            return io.of(gameURL);
        }
    }

    return {
        ioControl,
        mainSocket
    }
}

module.exports.init = gameSocket;