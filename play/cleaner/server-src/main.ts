import { APIType, Collections } from './types';

// GLOBAL Variables
let API: APIType;
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

const initialize = (modules: APIType) => {
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