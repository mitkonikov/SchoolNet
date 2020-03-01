// Here we require the modules for each game
tatkin_module = require("./tatkin/main.tatkin");

var Initialize = function(server, passportPass, databaseController, network) {
    let gameSocketModule = require("./gameSocket").init(server, passportPass, databaseController);
    let demoLoggerModule = require("./demoLogger");
    demoLoggerModule.buildDemoLogger(network);
    let GameEngineModule = require("./GameEngine");
    GameEngineModule.buildGameEngine(
        network,
        databaseController,
        demoLoggerModule);

    // SYNTHESIZE THE API
    let API = {
        gameSocket: gameSocketModule,
        databaseController: databaseController,
        demoLogger: demoLoggerModule,
        GameEngine: GameEngineModule
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
        gameSocket: gameSocketModule,
        Query
    }
}

module.exports.Initialize = Initialize;