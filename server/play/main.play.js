// Here we require the modules for each game
tatkin_module = require("./tatkin/main.tatkin");

var Initialize = function(server, passportPass, databaseController) {
    var gameSocketModule = require("./gameSocket").init(server, passportPass, databaseController);
    var gameSocket = gameSocketModule;

    let API = {
        fs: require('fs'),
        gameSocket: gameSocketModule,
        databaseController: databaseController
    }

    tatkin = tatkin_module.Initialize(API);

    var Query = function(req, res, request_game) {
        if (request_game === 'tatkin' || request_game === 'contribute-tatkin') {
            tatkin.Query(req, res);
        } else if (request_game === 'game_info') {
            if (req.body.command === 'get-game-info') {
                databaseController.DB("db_net").table("tbl_games_current").getCurrentGame.Info.whereID(req.body.data.Game_ID, (info) => res.send(info));
            }
        }  else {
            res.send("no game");
        }
    }

    return {
        gameSocket,
        Query
    }
}

module.exports.Initialize = Initialize;