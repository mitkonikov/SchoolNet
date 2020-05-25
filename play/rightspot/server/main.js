let API = { };

const requirements = () => {
    return [
        "socketio"
    ];
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