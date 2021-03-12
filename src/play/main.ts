import path from 'path';
import fs from 'fs';
import { Db } from 'typeorm';
import express, { IRouter, Express } from 'express';
import { Requirements, IAPI, IGameConfig } from './types';
import socketio from 'socket.io';

export default class PlayEngine {
    CLEANER_APPS = ["cleaner", "cleaner-link"];
    allCollections = [];
    app: Express;
    play: Db;
    socketIO: socketio.Server;
    
    constructor(source: string, node_app: Express, socket: socketio.Server, database: Db) {
        this.socketIO = socket;
        this.app = node_app;
        this.play = database;
    
        this.findCollections().then(() => {
            this.recursiveSync(source, 0);
        });
    }

    private async findCollections() {
        let collections = await this.play.listCollections({}).toArray();
        
        collections.forEach((col) => {
            this.allCollections.push(col.name);
        });
    }

    private requireGame(path: string, read: IGameConfig) {
        let Game = require(path);
        let requirements = Game.requirements as Requirements;
    
        let API = {
            modules: {},
            collections: {},
            error: ""
        } as IAPI;
    
        let collectionsCount = 0;
        for (let collection of requirements.collections) {
            if (collectionsCount > 10) {
                API.error = "Collection count over the limit of 10.";
                break;
            }
    
            let fullCollectionName = `${read.short_name}.${collection}`;
            if (this.allCollections.includes(fullCollectionName)) {
                API.collections[collection] = this.play.collection(fullCollectionName);
            } else {
                console.log("Creating collection " + fullCollectionName);
                this.play.createCollection(fullCollectionName, (err, col) => {
                    API.collections[collection] = col;
                    this.allCollections.push(fullCollectionName);
                });
            }
        }
    
        console.log(read.short_name + " requires modules: ", requirements.modules);
        console.log(read.short_name + " requires collections: ", requirements.collections)
    
        // call the init function of the game
        Game.initialize(API);
    
        // this is for letting other types of post request to the backend of the app
        let url = '/' + read.short_name + '/query';
        (this.app as IRouter).post(url, (req, res) => {
            res.send(Game.main({
                // Guest: false,
                // ID: req.user.ID
            }, null, req.body));
        });
    }

    private findJSON(source: string, dir: string) {
        let directoryTmp = source.split(path.sep);
        let fileName = path.basename(source).toLowerCase();
    
        for (let cleaner of this.CLEANER_APPS) {
            if (directoryTmp[directoryTmp.length - 2] == cleaner) {
                return;
            }
        }
    
        // find the play.config.json
        if (fileName != "play.config.json") {
            return;
        }
    
        let read = JSON.parse(fs.readFileSync(source).toString());
    
        if (read.short_name == "pilot") {
            console.log("Pilot is a reserved word. Cannot be used as a short_name of an app.");
            return;
        }
    
        let mainModule = path.join(dir, read.backend, "main.js");
    
        if (!fs.existsSync(mainModule)) {
            console.log(`The application ${read.short_name} is not built!`);
            return;
        }
    
        let url = '/' + read.short_name;
        let gameDir = path.join(
            __dirname,
            '../../play',
            read.short_name, 
            read.frontend
        );
    
        console.log(`Game ${url} is in ${gameDir}`);
    
        // Serve the warm dish
        this.app.use(url, express.static(gameDir));
    
        this.requireGame(mainModule, read);
    }

    private recursiveSync(source: string, level: number) {
        let files = [];
    
        if (fs.lstatSync(source).isDirectory()) {
            files = fs.readdirSync(source);
            files.forEach((file) => {
                let curSource = path.join(source, file);
                if (fs.lstatSync(curSource).isDirectory()) {
                    if (level > 0) return;
                    this.recursiveSync(curSource, level + 1);
                } else {
                    this.findJSON(curSource, source);
                }
            });
        }
    }
}

/**
 * Create a MongoDB Role and User for the specific game
 * @param config IGameConfig
 */
export const createMongoUser = async (play: Db, config: IGameConfig) => {
    // we get the role and username with the following standard
    let roleName = `${config.short_name}Role`;
    let userName = `${config.short_name}User`;
    
    // look for an existing such role
    let roles = await play.command({ rolesInfo: 1 }) as { roles: any[] };

    if (!roles.roles.some((obj) => obj.role == roleName)) {
        // if a role doesn't exist, create the role and a user
        await play.command({
            createRole: roleName,
            privileges: [{
                resource: {}
            }],
            roles: []
        });

        await play.command({
            createUser: userName,
            pwd: config.mongodb_password,
            roles: [roleName]
        });
    }
}