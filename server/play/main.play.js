// Here we require the modules for each game
const tatkin_module = require("./tatkin/main.tatkin");
const fs = require("fs");
const path = require("path");

let app, express, network;
let gameSocketModule;
let additional;

let updateGameKey = (name, key, callback) => {
    network.query("SELECT * FROM tbl_games_keys WHERE Game = ?", name, (err, rows) => {
        if (err || typeof rows === "undefined" || rows.length == 0) {
            let gameKey = {
                Game: name,
                API_Key: key
            }

            network.query("INSERT INTO tbl_games_keys SET ?", gameKey);
            callback(key);
        } else {
            callback(rows[0].Key);
        }
    });
}

let requireGame = (name, path, read) => {
    let Game = require(path);
    let requirements = Game.requirements();

    let API = { };

    for (let req of requirements) {
        switch (req) {
            case "socketio": {
                API.socketio = gameSocketModule;
            }
        }
    }

    console.log(name + " requires " + requirements);

    if (typeof additional.uuidv4 == "undefined") {
        console.log("UUID module is not present!");
        return;
    }

    // update the table
    updateGameKey(name, additional.uuidv4(), (key) => {
        API.key = key;

        // call the init function of the game
        Game.initialize(API);

        // this is for letting other types of post request to the backend of the app
        let url = '/' + read.short_name + '/query';
        app.post(url, (req, res) => {
            // TODO...
            if (req.isAuthenticated()) {
                res.send(Game.main({
                    Guest: false,
                    ID: req.user.ID
                }, null, req.body));
            } else {
                res.send(Game.main({
                    Guest: true,
                    ID: req.guest.ID
                }, null, req.body));
            }
        });
    });
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

    console.log(`Game ${url} is in ${gameDir}`);

    app.use(url, express.static(gameDir));

    requireGame(read.short_name, mainModule, read);
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

let Initialize = function(server, passportPass, databaseController, node_network, node_app, node_express, node_additional) {
    network = node_network;
    app = node_app;
    express = node_express;
    additional = node_additional;

    gameSocketModule = require("./gameSocket")
        .init(server, passportPass, databaseController);
    
    let demoLoggerModule = require("./demoLogger");
    demoLoggerModule.buildDemoLogger(node_network);
    let GameEngineModule = require("./GameEngine");
    GameEngineModule.buildGameEngine(
        node_network,
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