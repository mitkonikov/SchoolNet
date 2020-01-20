/**
 *  Query module
 */

/** Database Controller */
var database;
var network;
var gameLogic;

let Initialize = function(node_databaseController, node_gameLogic) {
    database = node_databaseController;
    network = database.DB("db_net");
    gameLogic = node_gameLogic;
}

let Query = function(req, res) {
    if (req.isAuthenticated()) {

        if (typeof req.body.game !== "undefined") {
            gameLogic.Query(req, res, req.body.game);
        } else if (typeof req.body.command !== "undefined") {
            let commandSanitized = req.sanitize(req.body.command);

            let dataSanitized = "";
            if (typeof req.body.data !== "undefined")
                dataSanitized = req.sanitize(req.body.data);

            if (commandSanitized === 'get-info-me') {
                network.table("tbl_students_info").getInfoMe(req.user.ID, (rows) => res.send(rows));
            } else if (commandSanitized === 'get-info-user') {
                network.table("tbl_students_info").getInfoUser(req, req.body.data.Nickname, (rows) => res.send(rows));
            } else if (commandSanitized === 'get-stats-me') {
                network.table("tbl_students_info").getStatistics(req, (rows) => res.send(rows));
            } else if (commandSanitized === 'search-request') {
                if (dataSanitized.length > 2) {
                    network.table("tbl_students").searchUsers(req, dataSanitized, (rows) => {
                        res.send(rows);
                    });
                }
            }
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