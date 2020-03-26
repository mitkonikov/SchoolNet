/**
 *  Update module
 */

/** database Controller */
let database;
let ZNAMDBC;
let network;

let Initialize = function(node_databaseController, node_ZNAMDBC) {
    database = node_databaseController;
    ZNAMDBC = node_ZNAMDBC;
    network = database.DB("db_net");
}

let Update = function(req, res) {
    if (req.isAuthenticated()) {
        let data = req.body.data;

        switch (req.body.command) {
            // Display Name
            case 'contribute':
                console.log(data);

                break;
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
        }
    }
}

module.exports.Initialize = Initialize;
module.exports.Update = Update;