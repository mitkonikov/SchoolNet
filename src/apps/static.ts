import express from 'express';
import path from 'path';

export let main = (app: express.Express) => {
    app.use('/client/static', express.static(path.join(__dirname, './../../client/static')));
    app.use('/client/dynamics', express.static(path.join(__dirname, './../../client/dynamics')));
    app.use('/client/home', express.static(path.join(__dirname, './../../client/home')));

    app.use('/client/common', express.static(path.join(__dirname, './../../client/common')));

    // Svelte's new Frame
    app.use('/frame', express.static(path.join(__dirname, './../../svelteframe/public')));

    app.get('/favicon.ico', function(req, res) {
        res.sendFile(path.join(__dirname, './../../client/favicon.ico'));
    });

    app.get('/robots.txt', function(req, res) {
        res.sendFile(path.join(__dirname, './../../client/robots.txt'));
    });

    app.get('/client/manifest.json', function(req, res) {
        res.sendFile(path.join(__dirname, './../../client/manifest.json'));
    });
}