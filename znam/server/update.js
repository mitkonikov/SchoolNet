/**
 *  Update module
 */

/** database Controller */
let database;
let ZNAMDBC;
let GameLogic;
let network;

let Initialize = function(node_databaseController, node_ZNAMDBC, node_GameLogic) {
    database = node_databaseController;
    ZNAMDBC = node_ZNAMDBC;
    GameLogic = node_GameLogic;
    network = database.DB("db_net");
}

let Update = function(req, res) {
    if (req.isAuthenticated()) {
        let data = req.body.data;

        switch (req.body.command) {
            // TODO: Return JSON in SchoolNet Core [res.send("success")]
            case 'contribute':
                ZNAMDBC.contribute(req.user.ID, req.body.data, (response) => res.send(response));
                break;
            case 'contact':
                ZNAMDBC.contact(req.user.ID, req.body.data, (response) => res.send(response));
                break;
            case 'display-name-change':
                if (data.displayname && data.displayname.length >= 5 && data.displayname.length <= 100) {
                    network.query("UPDATE tbl_students_info SET Display_Name = ? WHERE ID = ? ", [data.displayname.trim(), req.user.ID], function(err, rows) {
                        if (rows) res.send({ status: "success" });
                        else res.send({ status: "failed" });
                    });
                } else res.send({ status: "failed" });
                break;

            // Description change
            case 'desc-change':
                if (data.description && data.description.length >= 5 && data.description.length <= 250) {
                    network.query("UPDATE tbl_students_info SET About = ? WHERE ID = ? ", [data.description.trim(), req.user.ID], function(err, rows) {
                        if (rows) res.send({ status: "success" });
                        else res.send({ status: "failed" });
                    });
                } else res.send({ status: "failed" });
                break;
        }
    }
}

module.exports.Initialize = Initialize;
module.exports.Update = Update;