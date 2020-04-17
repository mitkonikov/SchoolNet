/**
 *  Update module
 */

/** database Controller */
let database;
let network;
let gameLogic

let Initialize = function(node_databaseController, node_gameLogic) {
    database = node_databaseController;
    network = database.DB("db_net");
    gameLogic = node_gameLogic;
}

let Update = function(req, res) {
    if (req.isAuthenticated()) {
        let data = req.body.data;

        switch (req.body.command) {
            // Display Name
            case 'display-name-change':
                if (data.displayname && data.displayname.length >= 5 && data.displayname.length <= 100) {
                    network.query("UPDATE tbl_students_info SET Display_Name = ? WHERE ID = ? ", [data.displayname.trim(), req.user.ID], function(err, rows) {
                        if (rows) res.send("success");
                        else res.send("failed");
                    });
                } else res.send("failed");
                break;

            // Description change
            case 'desc-change':
                if (data.description && data.description.length >= 5 && data.description.length <= 250) {
                    network.query("UPDATE tbl_students_info SET About = ? WHERE ID = ? ", [data.description.trim(), req.user.ID], function(err, rows) {
                        if (rows) res.send("success");
                        else res.send("failed");
                    });
                } else res.send("failed");
                break;

            // Follow a certain user
            case 'follow-user':
                network.table("tbl_following").followUser(req, data, (success) => {
                    res.send({ status: success });
                });
                break;
        }
    }
}

module.exports.Initialize = Initialize;
module.exports.Update = Update;