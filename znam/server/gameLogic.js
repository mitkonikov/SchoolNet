let databases;
let ZNAMDB;
let GameEngine;
let UUIDV4 = require('uuid/v4');

/**
 * Function to connect the databases and the Game Engine to the this module
 * @param {module} node_databases   Databases
 * @param {module} node_GameEngine  Game Engine
 */
let Initialize = (node_databases, node_GameEngine) => {
    databases = node_databases;
    ZNAMDB = node_databases.ZNAM;
    GameEngine = node_GameEngine;
}

/**
 * Set the questions in the Table of Current Games
 * @param {Number}      user        User ID
 * @param {Object}      data        Additional Data
 * @param {Function}    callback    Callback function
 */
let setQuestions = (user, data, callback) => {
    ZNAMDB.query("UPDATE tbl_current_games SET Questions = ? WHERE Student_ID = ?", [JSON.stringify(data.IDs), user], (err, rows) => {
        if (err) {
            console.trace(err);
            callback({ status: "error" });
        } else {
            callback({ status: "success" });
        }
    });
}

/**
 * Query a single question
 * @param {Number}      user        User ID
 * @param {Object}      data        Additional Data
 * @param {Function}    callback    Callback function
 */
let queryQuestion = (ID, callback) => {
    ZNAMDB.query("SELECT * FROM tbl_questions WHERE ID = ?", [ID], (err, questionInfo) => {
        callback(questionInfo[0]);
    });
}

let checkIfQuestionsExist = (list, subject, callback) => {
    ZNAMDB.query("SELECT ID FROM tbl_questions WHERE ID IN (" + list.join() + ") AND Subject = ? AND Valid = ?", [subject, 1], (err, rows) => {
        let response = [];
        for (let row of rows) {
            response.push(row.ID);
        }

        callback(response);
    });
}

/**
 * Generate 10 random IDs unique to those that the Student has already played
 * @param {Number}      user        User ID
 * @param {Object}      data        Additional Data
 * @param {Function}    callback    Callback function
 */
let getRandomIDs = (user, data, callback) => {
    // TODO: Account for the difficulty of the player and the difficulty of the question
    let setIDs = new Set();

    while (setIDs.size != data.number + 5) {
        let currentRandom = getRandomInt(data.count - 1) + 1;
        setIDs.add(currentRandom);
    }

    let randomIDs = [];
    for (let ID of setIDs) {
        randomIDs.push(ID);
    }

    // check if the questions exists
    checkIfQuestionsExist(randomIDs, data.subject, (checked) => {
        let crossChecked = [];
        let randomIDsLength = randomIDs.length;
        for (let i = 0; i < randomIDsLength; ++i) {
            for (let k = 0; k < checked.length; ++k) {
                if (randomIDs[i] == checked[k]) {
                    crossChecked.push(randomIDs[i]);
                }
            }
        }

        // check if the questions are already played
        ZNAMDB.query("SELECT Question_ID FROM tbl_questions_played WHERE Student_ID = ? AND Subject = ?", [user, data.subject], (err, questionsPlayed) => {
            if (err) {
                console.trace(err);
                return;
            }

            if (typeof questionsPlayed === "undefined" || questionsPlayed.length == 0) {
                if (crossChecked.length < data.number) {
                    // this is the number required to come to ten IDs
                    data.number = data.number - crossChecked.length;
                    getRandomIDs(user, data, (array) => {
                        crossChecked = crossChecked.concat(array);
                        callback(crossChecked);
                    });
                } else {
                    callback(crossChecked.splice(0, data.number));
                }

                return;
            }
            
            // check if any question that is already played matches the random ID
            for (let qp = 0; qp < questionsPlayed.length; ++qp) {
                for (let i = 0; i < 10; ++i) {
                    if (questionsPlayed[qp] == crossChecked[i]) {
                        crossChecked = crossChecked.splice(i, 1);
                    }
                }
            }

            if (crossChecked.length < data.number) {
                // this is the number required to come to ten IDs
                data.number = data.number - crossChecked.length;
                getRandomIDs(user, data, (array) => {
                    crossChecked = crossChecked.concat(array);
                    callback(crossChecked);
                });
            } else {
                crossChecked = crossChecked.splice(0, data.number);
                console.log(crossChecked); // You should have 10 random IDs
                callback(crossChecked);
            }
        });
    });        
}

/**
 * The Demo ID generated is described in the Game Engine documentation
 */
let generateDemoID = () => {
    let CURRENT_DATE_TIME = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

    let CURRENT_DATE_TIME_TRIMMED = CURRENT_DATE_TIME.multiReplace({
        "-": "",
        ":": "",
        " ": "_"
    });

    let UUID = UUIDV4.uuidv4().multiReplace({
        "-": "",
        ":": "",
        " ": "_"
    });

    return CURRENT_DATE_TIME_TRIMMED + "_" + UUID;
}

/**
 * Generate/find 10 random questions for the user to play
 * @param {Number}      user        User ID
 * @param {Object}      data        Additional Data
 * @param {Function}    callback    Callback function
 */
let generateQuestions = (user, data, callback) => {
    ZNAMDB.query("SELECT ID FROM tbl_questions ORDER BY ID DESC LIMIT 1", (err, countQuery) => {
        let count = countQuery[0].ID;

        getRandomIDs(user, { 
            count: count, 
            number: 10,
            subject: data.subject
        }, (randomIDs) => {
            setQuestions(user, { IDs: randomIDs }, (response) => {
                callback(response);
            });
        });
    });
}

/**
 * Starting/creating a new Game
 * @param {Number}      user        User ID
 * @param {Object}      data        Additional Data
 * @param {Function}    callback    Callback function
 */
let createGame = (user, data, callback) => {
    let entry = { 
        Student_ID: user,
        Current_Level: 0,
        Score: 0,
        Time_Left: 30,
        Status: 0,
        Subject: data.subject,
        Demo_ID: generateDemoID(),
        Rated: data.rated
    }

    ZNAMDB.query("INSERT INTO tbl_current_games SET ?", entry, (err, rows) => {
        if (err) {
            console.trace(err);
            callback({ status: "error" });
            return;
        }

        GameEngine.createTable(entry.Demo_ID, (tableResponse) => {
            generateQuestions(user, data, callback);
        });
    });
}

let updateScore = (user, score, callback) => {
    ZNAMDB.query("UPDATE tbl_games_current SET Score = ?, Time_Left = 30, Current_Level = Current_Level + 1 WHERE Student_ID = ?", [score, user], callback);
}

let updateQStats = (Demo_ID, data, callback) => {
    if (data.Correct) {
        GameEngine.getRecord(Demo_ID, { Source: "server", Command: "Q_Corect" }, (rawStat) => {
            let newStat = parseInt(rawStat) + 1;
            GameEngine.updateRecord(Demo_ID, { Source: "server", Command: "Q_Correct", Data: newStat }, callback);
        });

        ZNAMDB.query("UPDATE tbl_questions SET Got_Correct = Got_Correct + 1, Played = Played + 1 WHERE ID = ?", data.ID);
    } else {
        GameEngine.getRecord(Demo_ID, { Source: "server", Command: "Q_Wrong" }, (rawStat) => {
            let newStat = parseInt(rawStat) + 1;
            GameEngine.updateRecord(Demo_ID, { Source: "server", Command: "Q_Wrong", Data: newStat }, callback);
        });
        ZNAMDB.query("UPDATE tbl_questions SET Played = Played + 1 WHERE ID = ?", data.ID);
    }
}

let submitAnswer = (user, data, callback) => {
    // check the answer token
    // check if the answer is true
    // data: { token: ID }
    // user = req.body.user

    ZNAMDB.query("SELECT * FROM tbl_games_current WHERE Student_ID = ?", user, (err, currentGame) => {
        let Demo_ID = currentGame[0].Demo_ID;
        let Subject = currentGame[0].Subject;
        GameEngine.getLastRecord(Demo_ID, { Command: "question" }, (lastQ) => {
            let lastQData = JSON.parse(lastQ[0].Data);
            let scoreUpdate = 0;
            let correct = false;
            if (parseInt(lastQData.trueID) === parseInt(data.token)) {
                correct = true;
                scoreUpdate = 100;
                if (currentGame[0].Time_Left <= 20) {
                    scoreUpdate -= (20 - currentGame[0].Time_Left) * 4;
                }
            }
            
            updateQStats(Demo_ID, {
                Correct: correct,
                Question_ID: lastQData.ID
            }, () => {
                updateScore(user, currentGame[0].Score + scoreUpdate, (err, setScore) => {
                    if (currentGame[0].Current_Level < 10) {
                        callback({
                            CorrectToken: parseInt(lastQData.trueID),
                            Score: currentGame[0].Score + scoreUpdate,
                            NextLevel: currentGame[0].Current_Level + 1
                        });
                    } else {
                        GameEngine.getRecord(Demo_ID, { Command: "Q_Correct" }, (qCorrect) => {
                            GameEngine.getRecord(Demo_ID, { Command: "Q_Wrong" }, (qWrong) => {
                                endGame(user, {
                                    Q_Correct: parseInt(qCorrect[0].Data),
                                    Q_Wrong: parseInt(qWrong[0].Data)
                                }, () => {
                                    callback({
                                        CorrectToken: parseInt(lastQData.trueID),
                                        Score: currentGame[0].Score + scoreUpdate,
                                        GameOver: true
                                    });
                                });
                            });
                        });
                    }
                });
            });
        });
    });
}

let startGame = (user, callback) => {
    ZNAMDB.query("UPDATE tbl_games_current SET Status = ?, Current_Level = ?, Time_Left = 31 WHERE Student_ID = ?", [1, 1, user], (err, rows) => {
        callback({ status: "success" });
    });
}

let getNextQuestion = (user, callback) => {
    ZNAMDB.query("SELECT * FROM tbl_games_current WHERE Student_ID = ?", user, (err, currentGame) => {
        let questionIDs = JSON.parse(currentGame[0].Questions);
        let currentQuestion = questionIDs[currentGame[0].Current_Level - 1];
        let Subject = currentGame[0].Subject;

        queryQuestion(currentQuestion, (rawQuestion) => {
            console.log("next raw question: ", rawQuestion);
            let state = {
                question: rawQuestion.Question,
                answers: {
                    ID: [],
                    content: []
                }
            }

            for (let i = 0; i < 4; ++i) {
                state.answers.ID.push(getRandomInt(10000));
                state.answers.content.push(rawQuestion['Answer_' + (i+1)]);
            }

            let trueID = state.answers.ID[rawQuestion.Truth - 1];
            
            // shuffle the IDs and answers
            for (let k = 0; k < 3; ++k) {
                for (let i = 0; i < 3; ++i) {
                    if (getRandomInt(2) == 1) {
                        let tempID = state.answers.ID[i];
                        let tempAnswer = state.answers.content[i];

                        state.answers.ID[i] = state.answers.ID[i+1];
                        state.answers.content[i] = state.answers.content[i+1];

                        state.answers.ID[i+1] = tempID;
                        state.answers.content[i+1] = tempAnswer;
                    }
                }
            }
            
            // remember the IDs and the true ID
            let Demo_ID = currentGame[0].Demo_ID;

            let recordState = JSON.parse(JSON.stringify(state));
            recordState.ID = currentQuestion;
            recordState.trueID = trueID;

            GameEngine.record(Demo_ID, {
                Source: "server",
                Command: "question",
                Data: JSON.stringify(recordState)
            }, () => callback(state));

            let qPlayed = {
                Student_ID: user,
                Subject: Subject,
                Question_ID: currentQuestion
            }

            ZNAMDB.query("INSERT INTO tbl_questions_played SET ?", qPlayed);
        });
    });
}

let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

let getScoreboard = (callback) => {
    ZNAMDB.query("SELECT * FROM tbl_leaderboard ORDER BY RANK LIMIT 10", (err, scores) => {
        let IDs = [];
        for (let score of scores) {
            IDs.push(score.Player_ID);
        }

        // get the names according to the player IDs
        databases.network.query("SELECT ID, Display_Name FROM tbl_students_info WHERE ID IN (" + IDs.join() + ")", (err, infos) => {
            // match them
            for (let score of scores) {
                for (let info of infos) {
                    if (score.Player_ID == info.ID) {
                        score.Display_Name = info.Display_Name;
                    }
                }
            }

            callback(scores);
        });
    });
}

let endGame = (user, data, callback) => {
    ZNAMDB.query("SELECT * FROM tbl_current_games WHERE Student_ID = ?", user, (err, currentGame) => {
        ZNAMDB.query("DELETE * FROM tbl_current_games WHERE Student_ID = ?", user, (err, test) => {
            console.log("delete feedback: ");
            console.log(test);

            // update the user status
            let rank = {
                Score: currentGame[0].Score,
                Subject: currentGame[0].Subject
            }

            ZNAMDB.query("UPDATE tbl_scoreboard SET Q_Correct = Q_Correct + ?, Q_Wrong = Q_Wrong + ? WHERE Student_ID = ?", [data.Q_Correct, data.Q_Wrong, user], () => {
                if (currentGame.Rated == 1) {
                    updateCustomRank(user, rank, () => { // update the subject rank
                        updateRank(user, rank, callback); // update the main rank
                    });
                }
            });
        });
    });
}

let updateCustomRank = (user, data, callback) => {
    data.Player_ID = user;
    // we need to put in account the subject, but that's later
    ZNAMDB.query("SELECT * FROM tbl_scoreboard WHERE Player_ID = ?", user, (err, userExists) => {
        if (typeof userExists !== "undefined" && userExists.length >= 1) {
            // user exists
            // is there a rank with the same score already?
            ZNAMDB.query("SELECT Rank FROM tbl_scoreboard WHERE Score = ? AND Subject = ?", [data.Score, data.Subject], (err, sameScore) => {
                if (typeof sameScore != "undefined" && sameScore.length > 0) { // there is a rank that has the same score
                    let newRank = sameScore[0].Rank;
                    ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = ?, Score = ? WHERE ID = ?", [newRank, data.Score, userExists[0].ID], () => {
                        if (newRank != userExists[0].Rank) {
                            // was this entry alone?
                            ZNAMDB.query("SELECT * FROM tbl_scoreboard WHERE Score = ? AND Subject = ?", [userExists[0].Score, data.Subject], (err, alone) => {
                                if (typeof alone === "undefined" || alone.length == 0) { // alone
                                    ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = Rank - 1 WHERE Score < ? AND Subject = ?", [userExists[0].Score, data.Subject], () => {
                                        callback({ status: "success" });
                                    })
                                    return;
                                } // else, there was somebody else, do nothing.
                                
                                callback({ status: "success" });
                            });
                        } else {
                            callback({ status: "success" });
                        }
                    });
                } else { // there's no rank with that score
                    ZNAMDB.query("SELECT Rank FROM tbl_scoreboard WHERE Score > ? AND Subject = ? ORDER BY Score", [data.Score, data.Subject], (err, newRankRows) => {
                        if (typeof newRankRows != "undefined" && newRankRows.length > 0) {
                            // found a closest rank with a bigger score 
                            // was he alone? (first we set the new score)
                            ZNAMDB.query("UPDATE tbl_scoreboard SET Score = ? WHERE ID = ?", [data.Score, userExists[0].ID], () => {
                                if (newRankRows[0].Rank + 1 != userExists[0].Rank) {
                                    ZNAMDB.query("SELECT * FROM tbl_scoreboard WHERE Score = ? AND Subject = ?", [userExists[0].Score, data.Subject], (err, alone) => {
                                        if (typeof alone != "undefined" && alone.length > 0) { // he wasn't alone
                                            ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = Rank + 1 WHERE Score < ? AND Subject = ?", [data.Score, data.Subject], () => {
                                                ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = ? WHERE ID = ?", [newRankRows[0].Rank + 1, userExists[0].ID], () => {
                                                    callback({ status: "success" });
                                                });
                                            })
                                        } else { // he was alone
                                            ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = Rank + 1 WHERE Score BETWEEN ? AND ? AND Subject = ?", [userExists[0].Score, data.Score-1, data.Subject], () => {
                                                ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = ? WHERE ID = ?", [newRankRows[0].Rank + 1, userExists[0].ID], () => {
                                                    callback({ status: "success" });
                                                });
                                            })
                                        }
                                    });
                                } else {
                                    // it remains the same rank
                                    // but is he alone?
                                    ZNAMDB.query("SELECT * FROM tbl_scoreboard WHERE Score = ? AND Subject = ?", [userExists[0].Score, data.Subject], (err, alone) => {
                                        if (typeof alone != "undefined" && alone.length > 0) { // he wasn't alone
                                            ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = Rank + 1 WHERE Score < ? AND Subject = ?", [data.Score, data.Subject], () => {
                                                ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = ? WHERE ID = ?", [newRankRows[0].Rank + 1, userExists[0].ID], () => {
                                                    callback({ status: "success" });
                                                });
                                            })
                                        } else { // he was alone
                                            callback({ status: "success" });
                                        }
                                    });
                                }
                            });
                        } else {
                            if (userExists[0].Rank != 1) {
                                // he is the first now
                                ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = Rank + 1 WHERE Subject = ?", data.Subject, () => { // shift all
                                    ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = 1, Score = ? WHERE ID = ?", [data.Score, userExists[0].ID], () => {
                                        callback({ status: "success" });
                                    });
                                })
                            } else {
                                ZNAMDB.query("UPDATE tbl_scoreboard SET Score = ? WHERE ID = ?", [data.Score, userExists[0].ID], () => {
                                    callback({ status: "success" });
                                });
                            }
                        }
                    });
                }
            });
        } else {
            // user is for the first time inserted
            // check if there's a rank with the same score
            ZNAMDB.query("SELECT Rank FROM tbl_scoreboard WHERE Score = ? AND Subject = ?", [data.Score, data.Subject], (err, sameScore) => {
                if (typeof sameScore != "undefined" && sameScore.length > 0) {
                    data.Rank = sameScore[0].Rank;
                    ZNAMDB.query("INSERT INTO tbl_scoreboard SET ?", data, () => callback({ status: "success" }));
                    return;
                } else {
                    // there's no such score
                    ZNAMDB.query("SELECT Rank FROM tbl_scoreboard WHERE Score > ? AND Subject = ? ORDER BY Score", [data.Score, data.Subject], (err, newRankRows) => {
                        if (typeof newRankRows != "undefined" && newRankRows.length > 0) {
                            data.Rank = (parseInt(newRankRows[0].Rank) + 1);
                            ZNAMDB.query("INSERT INTO tbl_scoreboard SET ?", data);
                            // we need to shift all the other ranks
                            ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = Rank + 1 WHERE Score < ? AND Subject = ?", [data.Score, data.Subject], () => callback({ status: "success" }))
                        } else {
                            data.Rank = 1;
                            // we need to shift all the other ranks
                            ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = Rank + 1 WHERE Subject = ?", data.Subject, () => {
                                ZNAMDB.query("INSERT INTO tbl_scoreboard SET ?", data, () => {
                                    callback({ status: "success" });
                                });
                            })
                        }
                    });
                }
            });
        }
    });
}

let updateRank = (user, data, callback) => {
    data.Player_ID = user;
    // we need to put in account the subject, but that's later
    ZNAMDB.query("SELECT * FROM tbl_leaderboard WHERE Player_ID = ?", user, (err, userExists) => {
        if (typeof userExists !== "undefined" && userExists.length >= 1) {
            // user exists
            // is there a rank with the same score already?
            ZNAMDB.query("SELECT Rank FROM tbl_leaderboard WHERE Score = ?", data.Score, (err, sameScore) => {
                if (typeof sameScore != "undefined" && sameScore.length > 0) { // there is a rank that has the same score
                    let newRank = sameScore[0].Rank;
                    ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = ?, Score = ? WHERE ID = ?", [newRank, data.Score, userExists[0].ID], () => {
                        if (newRank != userExists[0].Rank) {
                            // was this entry alone?
                            ZNAMDB.query("SELECT * FROM tbl_leaderboard WHERE Score = ?", userExists[0].Score, (err, alone) => {
                                if (typeof alone === "undefined" || alone.length == 0) { // alone
                                    ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = Rank - 1 WHERE Score < ?", userExists[0].Score, () => {
                                        callback({ status: "success" });
                                    })
                                    return;
                                } // else, there was somebody else, do nothing.
                                
                                callback({ status: "success" });
                            });
                        } else {
                            callback({ status: "success" });
                        }
                    });
                } else { // there's no rank with that score
                    ZNAMDB.query("SELECT Rank FROM tbl_leaderboard WHERE Score > ? ORDER BY Score", data.Score, (err, newRankRows) => {
                        if (typeof newRankRows != "undefined" && newRankRows.length > 0) {
                            // found a closest rank with a bigger score 
                            // was he alone? (first we set the new score)
                            ZNAMDB.query("UPDATE tbl_leaderboard SET Score = ? WHERE ID = ?", [data.Score, userExists[0].ID], () => {
                                if (newRankRows[0].Rank + 1 != userExists[0].Rank) {
                                    ZNAMDB.query("SELECT * FROM tbl_leaderboard WHERE Score = ?", userExists[0].Score, (err, alone) => {
                                        if (typeof alone != "undefined" && alone.length > 0) { // he wasn't alone
                                            ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = Rank + 1 WHERE Score < ?", [data.Score], () => {
                                                ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = ? WHERE ID = ?", [newRankRows[0].Rank + 1, userExists[0].ID], () => {
                                                    callback({ status: "success" });
                                                });
                                            })
                                        } else { // he was alone
                                            ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = Rank + 1 WHERE Score BETWEEN ? AND ?", [userExists[0].Score, data.Score-1], () => {
                                                ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = ? WHERE ID = ?", [newRankRows[0].Rank + 1, userExists[0].ID], () => {
                                                    callback({ status: "success" });
                                                });
                                            })
                                        }
                                    });
                                } else {
                                    // it remains the same rank
                                    // but is he alone?
                                    ZNAMDB.query("SELECT * FROM tbl_leaderboard WHERE Score = ?", userExists[0].Score, (err, alone) => {
                                        if (typeof alone != "undefined" && alone.length > 0) { // he wasn't alone
                                            ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = Rank + 1 WHERE Score < ?", [data.Score], () => {
                                                ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = ? WHERE ID = ?", [newRankRows[0].Rank + 1, userExists[0].ID], () => {
                                                    callback({ status: "success" });
                                                });
                                            })
                                        } else { // he was alone
                                            callback({ status: "success" });
                                        }
                                    });
                                }
                            });
                        } else {
                            if (userExists[0].Rank != 1) {
                                // he is the first now
                                ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = Rank + 1", () => { // shift all
                                    ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = 1, Score = ? WHERE ID = ?", [data.Score, userExists[0].ID], () => {
                                        callback({ status: "success" });
                                    });
                                })
                            } else {
                                ZNAMDB.query("UPDATE tbl_leaderboard SET Score = ? WHERE ID = ?", [data.Score, userExists[0].ID], () => {
                                    callback({ status: "success" });
                                });
                            }
                        }
                    });
                }
            });
        } else {
            // user is for the first time inserted
            // check if there's a rank with the same score
            ZNAMDB.query("SELECT Rank FROM tbl_leaderboard WHERE Score = ?", data.Score, (err, sameScore) => {
                if (typeof sameScore != "undefined" && sameScore.length > 0) {
                    // callback(sameScore[0].Rank);
                    data.Rank = sameScore[0].Rank;
                    ZNAMDB.query("INSERT INTO tbl_leaderboard SET ?", data, () => callback({ status: "success" }));
                    return;
                } else {
                    // there's no such score
                    ZNAMDB.query("SELECT Rank FROM tbl_leaderboard WHERE Score > ? ORDER BY Score", data.Score, (err, newRankRows) => {
                        if (typeof newRankRows != "undefined" && newRankRows.length > 0) {
                            // callback(newRankRows[0].Rank + 1);
                            data.Rank = (parseInt(newRankRows[0].Rank) + 1);
                            ZNAMDB.query("INSERT INTO tbl_leaderboard SET ?", data);
                            // we need to shift all the other ranks
                            ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = Rank + 1 WHERE Score < ?", data.Score, () => callback({ status: "success" }))
                        } else {
                            data.Rank = 1;
                            // we need to shift all the other ranks
                            ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = Rank + 1", () => {
                                ZNAMDB.query("INSERT INTO tbl_leaderboard SET ?", data, () => {
                                    callback({ status: "success" });
                                });
                            })
                        }
                    });
                }
            });
        }
    });
}

// We are using this same exact interval as a MySQL Event
let updateTime = () => {
    setInterval(() => {
        ZNAMDB.query("UPDATE tbl_current_games SET Time_Left = Time_Left - 1 WHERE Status = 1 AND Time_Left > 0");
    }, 1000);
}

module.exports = {
    Initialize,
    createGame,
    startGame,
    queryQuestion,
    generateQuestions,
    submitAnswer,
    getNextQuestion,
    getRandomIDs,
    getScoreboard,
    updateRank
}