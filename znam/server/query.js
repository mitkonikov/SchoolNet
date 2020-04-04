/**
 *  Query module
 */

/** Database Controller */
let database;
let ZNAMDBC;
let network;
let GameLogic;

let Initialize = function(node_databaseController, node_ZNAMDBC, node_GameLogic) {
    database = node_databaseController;
    ZNAMDBC = node_ZNAMDBC;
    GameLogic = node_GameLogic;
    network = database.DB("db_net");
}

let Query = function(req, res) {
    if (req.body.command === "isAuth") {
        let userIsAuth = req.isAuthenticated();
        if (userIsAuth) {
            network.table().isFirstTimeLogIn(req.user.ID, (firstTime) => {
                res.send({
                    isAuth: 1,
                    firstTime: firstTime
                });
            });
        } else {
            res.send({ isAuth: 0 });
        }

        return;
    }

    if (req.isAuthenticated()) {
        if (typeof req.body.command !== "undefined") {
            let commandSanitized = req.sanitize(req.body.command);

            let dataSanitized = "";
            if (typeof req.body.data !== "undefined")
                dataSanitized = req.sanitize(req.body.data);

            if (commandSanitized === 'play-znam') {
                GameLogic.createGame(req.user.ID, data, (response) => res.send(response));
            } else if (commandSanitized === 'submit-answer') {
                GameLogic.submitAnswer(req.user.ID, data, (response) => res.send(response));
            } else if (commandSanitized === 'get-question') {
                GameLogic.getNextQuestion(req.user.ID, (response) => res.send(response));
            } else if (commandSanitized === 'get-scoreboard') {
                GameLogic.getScoreboard((response) => res.send(response));
            } else if (commandSanitized === 'profile-info') {
                network.table("tbl_students_info").getInfoMe(req.user.ID, (rows) => {
                    let response = {
                        profileName: rows.Display_Name
                    }

                    res.send(response);
                });
            } else if (commandSanitized === 'get-info-me') {
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