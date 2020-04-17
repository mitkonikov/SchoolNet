let TATKIN_WORD_COUNT = process.env.TATKIN_WORD_COUNT;

WORD_TYPES = ['imenka', 'pridavka', 'glagol', 'zamenka', 'broj', 'other'];

/** From String Type to Int Type */
function encodeWord(type) {
    if (type == -1) return -1;
    for (let i = 0; i < WORD_TYPES.length; ++i) {
        if (type === WORD_TYPES[i]) return i;
    }
    return 404;
}

/** From Int Type to String Type */
function decodeWord(type) {
    if (type == -1) return "mistake";
    return WORD_TYPES[type];
}

let Initialize = function(API) {
    inGameSocket = require("./gameSocket.tatkin");
    inGameSocket.socket(API);

    let network = API.databaseController.DB("db_net");
    let wordsDB = API.databaseController.DB("db_words");

    let Query = function(req, res) {
        if (req.body.game === 'tatkin') {
            if (req.body.command === 'list-games') {
                network.table().Class.whereStudentID(req.user.ID, (class_ids) => {
                    if (class_ids.length == 0) {
                        res.send("empty");
                        return;
                    }

                    let CLASS_IDs = [];
                    for (c in class_ids) CLASS_IDs.push(parseInt(class_ids[c].Class_ID));
                    network.query("SELECT * FROM tbl_games_current WHERE Class_ID IN (" + CLASS_IDs.join() + ") AND Privacy = ?", 1, (err, rows) => {
                        if (rows.length == 0) res.send("empty");
                        else {
                            let Teacher_IDs = [];
                            for (r in rows)
                                Teacher_IDs.push(parseInt(rows[r].Teacher_ID));
                            network.query("SELECT ID, Firstname, Lastname FROM tbl_students WHERE ID IN (" + Teacher_IDs.join() + ")", (err, names) => {
                                for (r in rows) {
                                    if (rows[r].Teacher_ID == names[r].ID) {
                                        rows[r].Fullname = names[r].Firstname + " " + names[r].Lastname;
                                    }
                                }

                                res.send(rows);
                            });
                        }
                    });
                });
            }
        } else if (req.body.game === 'contribute-tatkin') {
            if (req.body.command === 'get-word') {
                let random_id = Math.floor(Math.random() * TATKIN_WORD_COUNT) + 1;
                wordsDB.query("SELECT ID, Word FROM tbl_words WHERE ID = ? AND Mistake = ?", [random_id, 0], function(err, rows) {
                    res.send(rows[0]);
                })
            } else if (req.body.command === 'contribute') {
                if (req.body.data) {
                    let DATA = req.body.data;
                    let MISTAKE = 0;
                    if (DATA.type == 'mistake') {
                        DATA.type = -1;
                        MISTAKE = 1;
                    }

                    let word_contribution = {
                        ID : '',
                        Word_ID : parseInt(DATA.word_id),
                        Student_ID : req.user.ID,
                        Type : encodeWord(DATA.type),
                        Mistake : MISTAKE
                    };

                    // console.log(word_contribution);
                    wordsDB.query("INSERT INTO tbl_contributions SET ?", word_contribution, function(err, rows) {
                        // console.log(rows);
                        // console.log("ERROR: " + err);

                        // ERROR HANDLING
                        if (err) {
                            res.send("failed");
                            logErrorHandler("SQL", null, req.user.ID, err, null);
                            return;
                        }

                        if (rows) {
                            network.query("SELECT Crowd_Tatkin FROM tbl_stats WHERE ID = ?", req.user.ID, function(err, rows) {
                                // ERROR HANDLING
                                if (err) {
                                    res.send("failed");
                                    logErrorHandler("SQL", null, req.user.ID, err, null);
                                    return;
                                }

                                if (rows) {
                                    let updateSTAT = parseInt(rows[0].Crowd_Tatkin) + 1;
                                    network.query("UPDATE tbl_stats SET Crowd_Tatkin = ? WHERE ID = ?", [updateSTAT, req.user.ID], function(err, rows) {
                                        // ERROR HANDLING
                                    });
                                }
                                
                                res.send("success");
                            });
                        } else {
                            res.send("failed");
                        }
                    });
                    // console.log(DATA);
                } else {
                    res.send("no data");
                }
            } else {
                res.send("invalid command");
            }
        }
    }

    return {
        Query
    };
}

module.exports.Initialize = Initialize;