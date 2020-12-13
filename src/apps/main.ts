import express from 'express';
import path from 'path';
import { IRequest, IConfig } from '../types';
import { open as IIndexAPI } from './ZBOR/IndexAPI';

import ZBORAPI from './../ZBORAPI';
import PILOTAPI from './../PILOTAPI';

export const main = (app: express.Express) => {
    let connectionPromise = ZBORAPI.connect();

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
    app.use('/zbor', express.static(path.join(__dirname, './../../zbor/build')));            

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