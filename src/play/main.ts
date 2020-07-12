import path from 'path';
import fs from 'fs';
import { Db } from 'typeorm';
import { IRouter } from 'express';

const CLEANER_APPS = ["cleaner", "cleaner-link"];
let allCollections = [];
let app, play: Db;

let requireGame = (name: string, path: string, read: any) => {
    type Requirements = {
        modules: [string],
        collections: [string]
    }
    
    type APIType = {
        modules: any,
        collections: any,
        error: any
    }
    
    let Game = require(path);
    let requirements = Game.requirements as Requirements;

    let API = {
        modules: {},
        collections: {},
        error: ""
    } as APIType;

    for (let req of requirements.modules) {
        switch (req) {
            case "socketio": {
                API.modules.socketio = "socketmodule";
            }
        }
    }

    let collectionsCount = 0;
    for (let collection of requirements.collections) {
        if (collectionsCount > 10) {
            API.error = "Collection count over the limit of 10.";
            break;
        }

        let fullCollectionName = `${read.short_name}.${collection}`;
        if (allCollections.includes(fullCollectionName)) {
            API.collections[collection] = play.collection(fullCollectionName);
        } else {
            console.log("Creating collection " + fullCollectionName);
            play.createCollection(fullCollectionName, (err, col) => {
                API.collections[collection] = col;
                allCollections.push(fullCollectionName);
            });
            
        }
    }

    console.log(name + " requires modules: ", requirements.modules);
    console.log(name + " requires collections: ", requirements.collections)

    // call the init function of the game
    Game.initialize(API);

    // this is for letting other types of post request to the backend of the app
    let url = '/' + read.short_name + '/query';
    (app as IRouter).post(url, (req, res) => {
        // TODO...
        // if (req.isAuthenticated()) {
        //     res.send(Game.main({
        //         Guest: false,
        //         ID: req.user.ID
        //     }, null, req.body));
        // } else {
        //     res.send(Game.main({
        //         Guest: true,
        //         ID: req.guest.ID
        //     }, null, req.body));
        // }
    });
}

let findJSON = (source: string, dir: string) => {
    let fileNameTmp = source.split('\\');
    let fileName = fileNameTmp[fileNameTmp.length - 1].toLowerCase();

    for (let cleaner of CLEANER_APPS) {
        if (fileNameTmp[fileNameTmp.length - 2] == cleaner) {
            return;
        }
    }

    // find the play.config.json
    if (fileName != "play.config.json") {
        return;
    }

    let read = JSON.parse(fs.readFileSync(source).toString());
    let mainModule = path.join(dir, read.backend, "main.js");
    let url = '/' + read.short_name;
    let gameDir = path.join(
        __dirname,
        '../play',
        read.short_name, 
        read.frontend
    );

    console.log(`Game ${url} is in ${gameDir}`);

    // app.use(url, express.static(gameDir));

    requireGame(read.short_name, mainModule, read);
}

const recursiveSync = (source: string, level: number) => {
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

export const initPlay = async (source: string, node_app, database: Db) => {
    app = node_app;
    play = database;

    (await play.listCollections({}).toArray()).forEach((col) => {
        allCollections.push(col.name);
    });

    return recursiveSync(source, 0);
}