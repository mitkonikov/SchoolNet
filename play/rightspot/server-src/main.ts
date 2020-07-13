import { IAPI, Collections } from './types';

// GLOBAL Variables
let API: IAPI;
let db: Collections;

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
}

const main = (user, info, body) => {
    return body;
}

module.exports = {
    requirements,
    initialize,
    main
}