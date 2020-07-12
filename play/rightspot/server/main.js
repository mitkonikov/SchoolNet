let API = { };

const requirements = {
    modules: [
        "socketio"
    ],
    collections: [
        "active",
        "archive"
    ]
}

const initialize = (modules) => {
    API = modules;
}

const main = (user, info, body) => {
    return body;
}

module.exports = {
    requirements,
    initialize,
    main
}