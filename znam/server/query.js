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
                let provider = [];
                if (req.user.FB_ID != "") provider.push("facebook");
                if (req.user.G_ID != "") provider.push("google");

                if (!firstTime) {
                    database.DB("db_znam").query("SELECT * FROM tbl_current_games WHERE Student_ID = ?", req.user.ID, (err, currentGames) => {
                        if (typeof currentGames != "undefined" && currentGames.length > 0) {
                            if (parseInt(currentGames[0].Current_Level) == 0) {
                                res.send({
                                    isAuth: 1,
                                    intro: true,
                                    inGame: false,
                                    provider: provider
                                });
                            } else if (parseInt(currentGames[0].Current_Level) > 10) {
                                GameLogic.endGame(req.user.ID, (response) => {
                                    res.send({
                                        gameOver: true,
                                        ...response
                                    })
                                });
                            } else {
                                res.send({
                                    isAuth: 1,
                                    intro: false,
                                    inGame: true,
                                    provider: provider
                                });
                            }                            
                        } else {
                            res.send({
                                isAuth: 1,
                                provider: provider
                            });
                        }
                    });
                } else {
                    database.DB("db_znam").query(
                        "INSERT INTO tbl_student_stats SET ?", { Student_ID: req.user.ID }, () => {
                            res.send({
                                isAuth: 1,
                                firstTime: firstTime,
                                provider: provider
                            });
                        }
                    );
                }
            });
        } else {
            res.send({ isAuth: 0 });
        }

        return;
    }

    if (req.isAuthenticated()) {
        if (typeof req.body.command !== "undefined") {
            let commandSanitized = req.sanitize(req.body.command);
            
            if (commandSanitized === "get-time") {
                GameLogic.getTimeLeft(req.user.ID, (response) => res.send(response));
            } else if (commandSanitized === "get-init") {
                GameLogic.getInitStats(req.user.ID, (response) => res.send(response));
            } else if (commandSanitized === 'play-znam') {
                GameLogic.createGame(req.user.ID, req.body.data, (response) => res.send(response));
            } else if (commandSanitized === 'start-znam') {
                GameLogic.startGame(req.user.ID, (response) => res.send(response));
            } else if (commandSanitized === 'submit-answer') {
                GameLogic.submitAnswer(req.user.ID, req.body.data, (response) => res.send(response));
            } else if (commandSanitized === 'get-question') {
                GameLogic.getNextQuestion(req.user.ID, (response) => res.send(response));
            } else if (commandSanitized === 'get-scoreboard') {
                GameLogic.getScoreboard((response) => res.send(response));
            } else if (commandSanitized === 'get-leaderboard') {
                GameLogic.getLeaderboard((response) => res.send(response));
            } else if (commandSanitized === 'end-game') {
                GameLogic.endGame(req.user.ID, (response) => {
                    res.send({
                        gameOver: true,
                        ...response
                    });
                });
            } else if (commandSanitized === 'profile-info') {
                network.table("tbl_students_info").getInfoMe(req.user.ID, (rows) => {
                    GameLogic.getStudentStats(req.user.ID, (stats) => {
                        GameLogic.getActivities(req.user.ID, (activities) => {
                            let response = {
                                profileName: rows.Display_Name,
                                activities: activities,
                                statistics: stats
                            };

                            res.send(response);
                        });
                    });
                });
            } else if (commandSanitized === 'get-info-me') {
                network.table("tbl_students_info").getInfoMe(req.user.ID, (rows) => res.send(rows));
            } else if (commandSanitized === 'get-info-user') {
                network.table("tbl_students_info").getInfoUser(req, req.body.data.Nickname, (rows) => res.send(rows));
            } else if (commandSanitized === 'get-stats-me') {
                network.table("tbl_students_info").getStatistics(req, (rows) => res.send(rows));
            } else if (commandSanitized === 'search-request') {
                let dataSanitized = "";
                if (typeof req.body.data !== "undefined")
                    dataSanitized = req.sanitize(req.body.data);

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
    } else {
        res.send({ status: "error", message: "unauth" });
    }
}

module.exports.Initialize = Initialize;
module.exports.Query = Query;