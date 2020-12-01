import { IAPI, Collections } from './types';
import { Namespace } from "socket.io";

// GLOBAL Variables
let API: IAPI;
let db: Collections;
let SocketIO: Namespace;

const requirements = {
    modules: [
        "socketio"
    ],
    collections: [
        "active",
        "archive"
    ]
}

const initialize = (modules: IAPI) => {
    API = modules;
    db = API.collections;

    SocketIO = API.modules.socketio;
    SocketIO.on("connection", (socket) => {
        // Give the client some server info
        socket.emit("server info", {
            id: process.env.PM2_ID
        });

        // Pinging event
        socket.on("pinging", (data) => {
            socket.emit("pong", {
                time: data.time,
                s_time: (new Date().getTime())
            });
        });
    });
}

const main = (user, info, body) => {
    return body;
}

module.exports = {
    requirements,
    initialize,
    main
}