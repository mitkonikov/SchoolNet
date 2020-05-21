// Here we require the modules for each game
const tatkin_module = require("./tatkin/main.tatkin");
const fs = require("fs");
const path = require("path");

let app, express;

let requireGame = (path) => {
    let Game = require(path);
    let requirements = Game.requirements();

    let API = { };

    for (let req of requirements) {
        switch (req) {
            case "socketio": {
                 
            }
        }
    }

    console.log(Game.requirements());
}

let findJSON = (source, dir) => {
    let fileNameTmp = source.split('\\');
    let fileName = fileNameTmp[fileNameTmp.length - 1].toLowerCase();

    if (fileNameTmp[fileNameTmp.length - 2] == "cleaner") {
        return;
    }

    // find the play.config.json
    if (fileName != "play.config.json") {
        return;
    }

    let read = JSON.parse(fs.readFileSync(source));
    let mainModule = path.join(dir, read.backend, "main.js");
    let url = '/' + read.short_name;
    let gameDir = path.join(
        process.cwd(),
        '/play',
        read.short_name, 
        read.frontend
    );

    app.use(url, express.static(gameDir));

    requireGame(mainModule);
}

const recursiveSync = (source, level) => {
    let files = [];

    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach((file) => {
            let curSource = path.join(source, file);
            if (fs.lstatSync(curSource).isDirectory()) {
                if (level > 0) return;
                recursiveSync(curSource, level + 1);
            } else {
                findJSON(curSource, source);
            }
        });
    }
}

let Initialize = function(server, passportPass, databaseController, network, node_app, node_express) {
    app = node_app;
    express = node_express;

    let gameSocketModule = require("./gameSocket")
        .init(server, passportPass, databaseController);
    
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

    let Query = function(req, res, request_game) {
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

    recursiveSync(process.cwd() + "/play", 0);

    return {
        gameSocket: gameSocketModule,
        Query
    }
}

module.exports.Initialize = Initialize;