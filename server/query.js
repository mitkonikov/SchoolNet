var databases;
var network;
var gameLogic;

var Initialize = function(node_databases, node_gameLogic) {
    databases = node_databases;
    network = node_databases.network;
    gameLogic = node_gameLogic;
}

var Query = function(req, res) {
    if (req.isAuthenticated()) {
        if (typeof req.body.command !== "undefined") {
            let commandSanitized = req.sanitize(req.body.command);

            let dataSanitized = "";
            if (typeof req.body.data !== "undefined")
                dataSanitized = req.sanitize(req.body.data);

            if (commandSanitized === 'get-info-me') {
                network.query("SELECT Role, Display_Name, About, Emoji FROM tbl_students JOIN tbl_students_info WHERE tbl_students.ID = ? AND tbl_students_info.ID = ?", [req.user.ID, req.user.ID], function(err, rows) {
                    res.send(rows);
                });
            } else if (commandSanitized === 'get-info-user') {
                network.query("SELECT ID FROM tbl_students WHERE Nickname = ?", req.body.data.Nickname, (err, rowsID) => {
                    network.query("SELECT Role, Display_Name, About, Emoji FROM tbl_students JOIN tbl_students_info WHERE tbl_students.ID = ? AND tbl_students_info.ID = ?", [rowsID[0].ID, rowsID[0].ID], function(err, rows) {
                        res.send(rows);
                    });
                });
            } else if (commandSanitized === 'get-stats-me') {
                // stats from games for the user
                network.query("SELECT * FROM tbl_stats WHERE ID = ?", req.user.ID, (err, statboard) => {
                    if (err) {
                        // PRIORITY ERROR
                        res.send("empty");
                        return;
                    }

                    if (statboard.length) {
                        res.send(statboard[0]);
                    } else {
                        // PRIORITY ERROR
                        res.send("empty");
                    }
                });
            } else if (commandSanitized === 'search-request') {
                if (dataSanitized.length > 2) {
                    let name_search = "%" + dataSanitized + "%";
                    network.query("SELECT ID, Nickname, Firstname, Lastname FROM tbl_students WHERE (Firstname LIKE ? OR Lastname LIKE ?) AND Role = ?", [name_search, name_search, '1'], (err, rows) => {
                        res.send(rows);
                    });
                }
            }
        } else if (req.body.game) {
            gameLogic.Query(req, res, req.body.game);
        } else {
            res.send("no game");
        }
    } else if (req.body.command === 'get-main-statistics') {
        network.query("SELECT (SELECT COUNT(*) FROM tbl_students) AS Users", (err, countRows) => {
            if (err) {
                console.trace(err);
                countRows[0].Users = "";
            }
            
            network.query("SELECT (SUM(Crowd_Tatkin)) AS Contributions_Tatkin FROM tbl_stats", (err, contrib) => {
                if (err) {
                    console.trace(err);
                    contrib[0].Contributions_Tatkin = "";
                }
                
                network.query("SELECT Stat_Count FROM tbl_stats_web WHERE Stat_Name = 'Index Requests'", (err, countReq) => {
                    if (err) {
                        console.trace(err);
                        countReq[0].Stat_Count = "";
                    }
                    
                    res.send({
                        Users: countRows[0].Users,
                        Contributions_Tatkin: contrib[0].Contributions_Tatkin,
                        Index_Requests: countReq[0].Stat_Count
                    });
                });
            });
        });
    }
}

module.exports.Initialize = Initialize;
module.exports.Query = Query;