import express from 'express';
import path from 'path';
import { IRequest, IConfig } from '../types';
import { open as IIndexAPI } from './ZBOR/IndexAPI';

import ZBORAPI from './../ZBORAPI';
import PILOTAPI from './../PILOTAPI';
import GuestModule from '../auth/guest';

export const main = (app: express.Express, guestModule: GuestModule) => {
    // ZBOR SERVING AND API
    let connectionPromise = ZBORAPI.connect(guestModule);

    // Index API for ZBOR
    if ((process.config as Partial<IConfig>).indexAPI) {
        const indexAPI = require("./ZBOR/IndexAPI") as {
            open: typeof IIndexAPI
        };
        
        let router = indexAPI.open(connectionPromise);
        app.use('/zbor/indexAPI', router);
    }
    
    app.post('/zbor/api/light', ZBORAPI.light);
    app.post('/zbor/api/query', ZBORAPI.query);
    app.post('/zbor/api/update', ZBORAPI.update);
    
    app.get('/zbor/dict/json', function(req, res){
        const file = path.join(__dirname, './../../dumps/zbor_database_words.json');
        res.download(file);
    });

    app.use('/zbor', express.static(path.join(__dirname, './../../zbor/build')));            

    // PILOT SERVING AND API
    PILOTAPI.connect();
    app.post('/pilot/api/light', (req: IRequest, res) => {
        if (req.isAuthenticated() && req.user.Role === 4) {
            PILOTAPI.light(req, res);
        } else {
            res.send({ status: "unauth" });
        }
    });

    app.post('/pilot/api/query', (req: IRequest, res) => {
        if (req.isAuthenticated() && req.user.Role === 4) {
            PILOTAPI.query(req, res);
        } else {
            res.send({ status: "unauth" });
        }
    });

    app.use('/pilot', (req: IRequest, res, next) => {
        if (req.isAuthenticated() && req.user.Role === 4) {
            express.static(__dirname + '/pilot/build')(req, res, next);
        } else {
            res.redirect("/");
        }
    });
}