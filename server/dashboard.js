var Initialize = function(databaseController, gameLogic) {
    var QueryModule = require("./query.dashboard");
    QueryModule.Initialize(databaseController, gameLogic);

    var UpdateModule = require("./update.dashboard");
    // UpdateModule.Initialize(databaseController, gameLogic);

    return {
        Query: QueryModule,
        Update: UpdateModule
    }
}

module.exports.Initialize = Initialize;