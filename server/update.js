/**
 *  Update module
 */

/** Database Controller */
var database;
var network;
var gameLogic

let Initialize = function(node_databaseController, node_gameLogic) {
    database = node_databaseController;
    network = database.DB("db_net");
    gameLogic = node_gameLogic;
}

let Update = function(req, res) {
    if (req.isAuthenticated()) {
        let DATA = req.body.data;

        if (req.body.command === 'display-name-change') {
            if (DATA.displayname && DATA.displayname.length >= 5 && DATA.displayname.length <= 100) {
                network.query("UPDATE tbl_students_info SET Display_Name = ? WHERE ID = ? ", [DATA.displayname.trim(), req.user.ID], function(err, rows) {
                    if (rows) res.send("success");
                    else res.send("failed");
                });
            } else res.send("failed");
        } else if (req.body.command === 'desc-change') {
            if (DATA.description && DATA.description.length >= 5 && DATA.description.length <= 250) {
                network.query("UPDATE tbl_students_info SET About = ? WHERE ID = ? ", [DATA.description.trim(), req.user.ID], function(err, rows) {
                    if (rows) res.send("success");
                    else res.send("failed");
                });
            } else res.send("failed");
        }
    }
}