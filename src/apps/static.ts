import express from 'express';
import path from 'path';

export let main = (app: express.Express) => {
    app.use('/client/static', express.static(path.join(__dirname, './../../client/static')));
    app.use('/client/dynamics', express.static(path.join(__dirname, './../../client/dynamics')));
    app.use('/client/home', express.static(path.join(__dirname, './../../client/home')));

    app.use('/client/common', express.static(path.join(__dirname, './../../client/common')));
}