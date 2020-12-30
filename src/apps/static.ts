import express from 'express';
import path from 'path';

export let main = (app: express.Express) => {
    // Svelte's new Frame
    app.use('/frame', express.static(path.join(__dirname, './../../svelteframe/public/frame')));

    app.get('/robots.txt', function(req, res) {
        res.sendFile(path.join(__dirname, './../../client/robots.txt'));
    });

    app.get('/client/manifest.json', function(req, res) {
        res.sendFile(path.join(__dirname, './../../client/manifest.json'));
    });
}