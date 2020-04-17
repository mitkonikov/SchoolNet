let Initialize = function(databaseController, gameLogic) {
    let QueryModule = require("./query.dashboard");
    QueryModule.Initialize(databaseController, gameLogic);

    let UpdateModule = require("./update.dashboard");
    // UpdateModule.Initialize(databaseController, gameLogic);

    return {
        Query: QueryModule,
        Update: UpdateModule
    }
}

module.exports.Initialize = Initialize;