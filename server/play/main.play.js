// Here we require the modules for each game
tatkin_module = require("./tatkin/main.tatkin");

var Initialize = function(server, passportPass, DBs) {
    var gameSocketModule = require("./gameSocket").init(server, passportPass, DBs);
    var gameSocket = gameSocketModule;

    tatkin = tatkin_module.Initialize(   gameSocketModule.io, 
                                gameSocketModule.gameSocket, 
                                DBs );

    var Query = function(req, res, request_game) {
        if (request_game === 'tatkin' || request_game === 'contribute-tatkin') {
            tatkin.Query(req, res);
        } else if (request_game === 'game_info') {
            if (req.body.command === 'get-game-info') {
                DBs.network.query("SELECT * FROM tbl_games_current WHERE ID = ?", req.body.data.Game_ID, (err, rows) => {
                    if (rows.length == 0) res.send("empty");
                    else res.send(rows);
                });
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