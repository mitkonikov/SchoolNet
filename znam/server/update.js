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
    if (req.body.command == "contact") {
        ZNAMDBC.contact(req.user.ID, req.clientIp, req.body.data, (response) => res.send(response));
        return;
    }

    if (req.isAuthenticated()) {
        let data = req.body.data;

        switch (req.body.command) {
            // TODO: Return JSON in SchoolNet Core [res.send("success")]
            case 'contribute':
                ZNAMDBC.contribute(req.user.ID, req.body.data, (response) => res.send(response));
                break;
            case 'display-name-change':
                if (data.displayname && data.displayname.length >= 5 && data.displayname.length <= 100) {
                    network.query("SELECT Last_Name_Change FROM tbl_students_info WHERE ID = ?", req.user.ID, (err, last) => {
                        if (typeof last != "undefined") {
                            let oldDate = new Date(last[0].Last_Name_Change);
                            let nowDate = new Date();
                            let timeDiff = Math.abs(nowDate.getTime() - oldDate.getTime());
                            let differentDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                            if (oldDate == "Invalid Date" || differentDays >= 10) {
                                let newDate = nowDate.toISOString().slice(0, 19).replace('T', ' ');
                                network.query("UPDATE tbl_students_info SET Display_Name = ?, Last_Name_Change = ? WHERE ID = ? ", [data.displayname.trim(), newDate, req.user.ID], function(err, rows) {
                                    if (rows) res.send({ status: "success" });
                                    else res.send({ status: "failed" });
                                });
                            } else { res.send({ status: "failed", messsage: "limit" }); }
                        } else { res.send({ status: "failed" }); }
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