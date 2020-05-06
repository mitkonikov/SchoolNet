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
    updateTime();
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

        if (typeof rows !== "undefined" && rows.length > 0) {
            for (let row of rows) {
                response.push(row.ID);
            }
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

    if (typeof data.found !== "undefined") {
        if (data.found.length > 0) {
            for (let f of data.found) {
                setIDs.add(f);
            }
        }
    }

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
                    data.found = crossChecked;
                    getRandomIDs(user, data, (array) => {
                        crossChecked = JSON.parse(JSON.stringify(array));
                        callback(crossChecked);
                    });
                } else {
                    crossChecked = crossChecked.splice(0, data.number)
                    callback(crossChecked);
                }

                return;
            }
            
            // check if any question that is already played matches the random ID
            for (let qp = 0; qp < questionsPlayed.length; ++qp) {
                for (let i = 0; i < 10; ++i) {
                    if (questionsPlayed[qp].Question_ID == crossChecked[i]) {
                        crossChecked.splice(i, 1);
                    }
                }
            }

            if (crossChecked.length < data.number) {
                // this is the number required to come to ten IDs
                data.found = crossChecked;
                getRandomIDs(user, data, (array) => {
                    crossChecked = JSON.parse(JSON.stringify(array));
                    callback(crossChecked);
                });
            } else {
                crossChecked = crossChecked.splice(0, data.number);
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

    let UUID = UUIDV4().multiReplace({
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
        let count = parseInt(countQuery[0].ID);

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
    ZNAMDB.query("SELECT * FROM tbl_current_games WHERE Student_ID = ?", user, (err, oldGames) => {
        if (typeof oldGames != "undefined" && oldGames.length > 0) {
            callback({ status: "error", message: "game exists" });
        } else {
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

            ZNAMDB.query("SELECT COUNT(*) AS Count FROM tbl_questions_played WHERE Student_ID = ? AND Subject = ?", [user, data.subject], (err, qPlayed) => {
                ZNAMDB.query("SELECT COUNT(*) As Count FROM tbl_questions WHERE Valid = 1 AND Subject = ?", data.subject, (err, qCount) => {
                    if (parseInt(qPlayed[0].Count) + 10 > parseInt(qCount[0].Count)) {
                        callback({ status: "error", message: "run out of questions" });
                        return;
                    }

                    ZNAMDB.query("INSERT INTO tbl_current_games SET ?", entry, (err, rows) => {
                        if (err) {
                            console.trace(err);
                            callback({ status: "error" });
                            return;
                        }

                        GameEngine.createTable(entry.Demo_ID, (tableResponse) => {
                            GameEngine.record(entry.Demo_ID, { Source: "server", Command: "Q_Correct", Data: "0" });
                            GameEngine.record(entry.Demo_ID, { Source: "server", Command: "Q_Wrong", Data: "0" });
                            generateQuestions(user, data, callback);
                        });
                    });
                });
            });
        }
    });
}

let updateScore = (user, score, callback) => {
    ZNAMDB.query("UPDATE tbl_current_games SET Score = ?, Time_Left = 30, Current_Level = Current_Level + 1, Status = 0 WHERE Student_ID = ?", [score, user], callback);
}

let updateQStats = (Demo_ID, data, callback) => {
    if (data.Correct) {
        GameEngine.getRecord(Demo_ID, { Source: "server", Command: "Q_Correct" }, (rawStat) => {
            let newStat = parseInt(rawStat) + 1;
            GameEngine.updateRecord(Demo_ID, { Source: "server", Command: "Q_Correct", Data: newStat }, callback);
        });

        ZNAMDB.query("UPDATE tbl_questions SET Got_Correct = Got_Correct + 1, Played = Played + 1 WHERE ID = ?", data.Question_ID);
    } else {
        GameEngine.getRecord(Demo_ID, { Source: "server", Command: "Q_Wrong" }, (rawStat) => {
            let newStat = parseInt(rawStat) + 1;
            GameEngine.updateRecord(Demo_ID, { Source: "server", Command: "Q_Wrong", Data: newStat }, callback);
        });
        ZNAMDB.query("UPDATE tbl_questions SET Played = Played + 1 WHERE ID = ?", data.Question_ID);
    }
}

let submitAnswer = (user, data, callback) => {
    // check the answer token
    // check if the answer is true
    // data: { token: ID }
    // user = req.body.user

    ZNAMDB.query("SELECT * FROM tbl_current_games WHERE Student_ID = ?", user, (err, currentGame) => {
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
                            correctToken: parseInt(lastQData.trueID),
                            score: currentGame[0].Score + scoreUpdate,
                            nextLevel: currentGame[0].Current_Level + 1
                        });

                        calculateRating({
                            user,
                            currentGame,
                            Demo_ID,
                            Subject,
                            lastQData,
                            correct
                        });
                    } else {
                        endGame(user, (endScoreboard) => {
                            callback({
                                correctToken: parseInt(lastQData.trueID),
                                score: currentGame[0].Score + scoreUpdate,
                                gameOver: true,
                                ...endScoreboard
                            })

                            calculateRating({
                                user,
                                currentGame,
                                Demo_ID,
                                Subject,
                                lastQData,
                                correct
                            });
                        });
                    }
                });
            });
        });
    });
}

let calculateRating = (data) => {
    let eloEntry = {
        Time: data.currentGame[0].Time_Left,
        Time_Max: 30,
        A_Win: 0,
        B_Win: 0
    }

    if (data.correct) {
        eloEntry.A_Win = 1;
    } else {
        eloEntry.B_Win = 1;
    }

    let updateDemoRating = false;

    ZNAMDB.query("SELECT Rating FROM tbl_questions WHERE ID = ?", data.lastQData.ID, (err, questionRating) => {
        ZNAMDB.query("SELECT Rating FROM tbl_leaderboard WHERE Student_ID = ?", data.user, (err, userRating) => {
            GameEngine.getRecord(data.Demo_ID, { Source: "server", Command: "rating" }, (pRating) => {
                if (pRating) {
                    eloEntry.A = parseInt(pRating);
                    updateDemoRating = true;
                } else {
                    if (typeof userRating !== "undefined" && userRating.length > 0) {
                        eloEntry.A = userRating[0].Rating;
                    } else {
                        eloEntry.A = 1500;
                        GameEngine.record(data.Demo_ID, { Source: "server", Command: "rating", Data: 1500 });
                        updateDemoRating = true;
                    }
                }

                eloEntry.B = questionRating[0].Rating;

                let newRatings = calculateElo(eloEntry);

                ZNAMDB.query("UPDATE tbl_leaderboard SET Rating = ? WHERE Student_ID = ?", [newRatings.A, data.user]);
                ZNAMDB.query("UPDATE tbl_questions SET Rating = ? WHERE ID = ?", [newRatings.B, data.lastQData.ID]);
                
                if (updateDemoRating) {
                    GameEngine.updateRecord(data.Demo_ID, { Source: "server", Command: "rating", Data: newRatings.A });
                }
                
                updateDemoRating = false;

                ZNAMDB.query("SELECT Rating FROM tbl_scoreboard WHERE Student_ID = ? AND Subject = ?", [data.user, data.Subject], (err, subjRating) => {
                    GameEngine.getRecord(data.Demo_ID, { Source: "server", Command: "rating_subject" }, (sRating) => {
                        if (sRating) {
                            eloEntry.A = parseInt(sRating);
                            updateDemoRating = true;
                        } else {
                            if (typeof subjRating !== "undefined" && subjRating.length > 0) {
                                eloEntry.A = subjRating[0].Rating;
                            } else {
                                eloEntry.A = 1500;
                                GameEngine.record(data.Demo_ID, { Source: "server", Command: "rating_subject", Data: 1500 });
                                updateDemoRating = true;
                            }
                        }

                        eloEntry.B = questionRating[0].Rating;

                        let newSubjRatings = calculateElo(eloEntry);
                        
                        ZNAMDB.query("UPDATE tbl_scoreboard SET Rating = ? WHERE Student_ID = ? AND Subject = ?", [newSubjRatings.A, data.user, data.Subject]);
                        ZNAMDB.query("UPDATE tbl_questions SET Rating = ? WHERE ID = ?", [newSubjRatings.B, data.lastQData.ID]);

                        if (updateDemoRating) {
                            GameEngine.updateRecord(data.Demo_ID, { Source: "server", Command: "rating_subject", Data: newSubjRatings.A });
                        }
                    });
                });
            });
        });
    });
}

let startGame = (user, callback) => {
    ZNAMDB.query("UPDATE tbl_current_games SET Status = ?, Current_Level = ?, Time_Left = 30 WHERE Student_ID = ?", [1, 1, user], (err, rows) => {
        callback({ status: "success" });
    });
}

let queryNextQuestion = (data, callback) => {
    queryQuestion(data.currentQuestion, (rawQuestion) => {
        let state = {
            questionNumber: data.currentGame[0].Current_Level,
            question: rawQuestion.Question,
            answers: {
                ID: [],
                content: []
            },
            score: data.currentGame[0].Score,
            timeLeft: data.currentGame[0].Time_Left,
        }

        if (rawQuestion.Origin == "matura") {
            state.origin = "Матура";
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
        

        let recordState = JSON.parse(JSON.stringify(state));
        recordState.ID = data.currentQuestion;
        recordState.trueID = trueID;

        // remember the IDs and the true ID
        GameEngine.record(data.Demo_ID, {
            Source: "server",
            Command: "question",
            Data: JSON.stringify(recordState)
        }, () => {
            ZNAMDB.query("UPDATE tbl_current_games SET Status = 1 WHERE ID = ?", data.currentGame[0].ID, () => {
                callback(state);
            });
        });

        let qPlayed = {
            Student_ID: data.user,
            Subject: data.Subject,
            Question_ID: data.currentQuestion
        }

        ZNAMDB.query("INSERT INTO tbl_questions_played SET ?", qPlayed);
    });
}

let getNextQuestion = (user, callback) => {
    ZNAMDB.query("SELECT * FROM tbl_current_games WHERE Student_ID = ?", user, (err, currentGame) => {
        if (typeof currentGame == "undefined" || currentGame.length == 0) {
            callback({ status: "error" });
            return;
        }

        let questionIDs = JSON.parse(currentGame[0].Questions);
        let currentQuestion = questionIDs[currentGame[0].Current_Level - 1];
        let Subject = currentGame[0].Subject;

        let Demo_ID = currentGame[0].Demo_ID;

        // check if the question is already written in the Demo
        GameEngine.getLastRecord(Demo_ID, { Command: "question" }, (lastQ) => {
            if (lastQ == false || typeof lastQ == "undefined" || lastQ.length == 0) {
                queryNextQuestion({
                    currentGame,
                    currentQuestion,
                    Subject,
                    Demo_ID,
                    user
                }, callback);
                return;
            }

            let lastQData = JSON.parse(lastQ[0].Data);
            if (lastQData.ID == currentQuestion) {
                lastQData.ID = undefined;
                lastQData.trueID = undefined;
                callback(lastQData);
            } else {
                queryNextQuestion({
                    currentGame,
                    currentQuestion,
                    Subject,
                    Demo_ID,
                    user
                }, callback);
            }
        });
    });
}

let calculateElo = (data) => {
    let expectedA = 1.00 / (1 + Math.pow(10, (data.B - data.A) / 400));
    let expectedB = 1.00 - expectedA;

    let factorA = (data.A_Win - expectedA);
    let factorB = (data.B_Win - expectedB);

    let timeFactorA = Math.log10(data.Time + 2) * 0.7;
    let timeFactorB = Math.log10(-data.Time + data.Time_Max + 1) * 1.1;

    if (timeFactorA > 1.00) timeFactorA = 1;
    if (timeFactorB > 1.00) timeFactorB = 1;

    if (timeFactorA < 0.00) timeFactorA = 0;
    if (timeFactorB < 0.00) timeFactorB = 0;

    if (data.A_Win == 1) {
        factorA *= timeFactorA;
        factorB *= timeFactorA;
    } else if (data.B_Win == 1) {
        factorA *= timeFactorB;
        factorB *= timeFactorB;
    }

    let newScoreA = Math.round(data.A + 32 * factorA);
    let newScoreB = Math.round(data.B + 32 * factorB);

    return {
        A: newScoreA,
        B: newScoreB
    };
}

/* ELO Rating Example:
    - data.A = 1400
    - data.B = 1600
        - expectedA = 0.24025
        - expectedB = 1 - eA = 0.7597
    - newScoreA = 1400 + 32 * (1 - 0.24025)
        - newScoreA = 1424

    // another time curve: log(x+0.3)*0.45+0.36 

    else if (data.B_Win == 1) {
        factorB *= timeFactorB;

        timeFactorB += 0.1;
        if (timeFactorB > 1) timeFactorB = 1;

        factorA *= timeFactorB;
    }
*/

let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

let getLeaderboard = (callback) => {
    ZNAMDB.query("SELECT * FROM tbl_leaderboard ORDER BY RANK LIMIT 10", (err, scores) => {
        let IDs = [];

        if (typeof scores != "undefined") {
            for (let score of scores) {
                IDs.push(score.Student_ID);
            }
        }

        // get the names according to the player IDs
        databases.network.query("SELECT ID, Display_Name FROM tbl_students_info WHERE ID IN (" + IDs.join() + ")", (err, infos) => {
            // match them
            if (typeof scores != "undefined" && typeof infos != "undefined") {
                for (let score of scores) {
                    for (let info of infos) {
                        if (score.Student_ID == info.ID) {
                            score.Display_Name = info.Display_Name;
                        }
                    }
                }
            }

            callback(scores);
        });
    });
}

let getScoreboard = (data, callback) => {
    ZNAMDB.query("SELECT * FROM tbl_scoreboard WHERE Subject = ? AND RANK BETWEEN ? AND ? ORDER BY RANK LIMIT 10", [data.subject, data.rank - 3, data.rank + 10], (err, scores) => {
        let IDs = [];

        if (typeof scores != "undefined") {        
            for (let score of scores) {
                IDs.push(score.Student_ID);
            }
        }

        // get the names according to the player IDs
        databases.network.query("SELECT ID, Display_Name FROM tbl_students_info WHERE ID IN (" + IDs.join() + ")", (err, infos) => {
            // match them
            if (typeof scores != "undefined" && typeof infos != "undefined") {
                for (let score of scores) {
                    for (let info of infos) {
                        if (score.Student_ID == info.ID) {
                            score.Display_Name = info.Display_Name;
                        }
                    }
                }
            }

            callback(scores);
        });
    });
}

let getInitStats = (user, callback) => {
    ZNAMDB.query("SELECT * FROM tbl_scoreboard WHERE Student_ID = ?", user, (err, data) => {
        ZNAMDB.query("SELECT Subject_ID, Count_Questions FROM tbl_subjects", (err, qCount) => {
            let qCountMap = { };
            for (let q of qCount) {
                qCountMap[q.Subject_ID] = q.Count_Questions;
            }

            if (typeof data !== "undefined" && data.length > 0) {
                for (let row of data) {
                    row.progress = parseInt(row.Q_Correct) + parseInt(row.Q_Wrong);
                    row.maxQuestions = qCountMap[row.Subject];
                }

                callback(data);
            } else {
                callback({ status: "empty" });
            }
        });
    });
}

let endGame = (user, callback) => {
    ZNAMDB.query("SELECT * FROM tbl_current_games WHERE Student_ID = ?", user, (err, currentGame) => {
        GameEngine.getRecord(currentGame[0].Demo_ID, { Command: "Q_Correct" }, (qCorrect) => {
            GameEngine.getRecord(currentGame[0].Demo_ID, { Command: "Q_Wrong" }, (qWrong) => {
                qCorrect = parseInt(qCorrect);
                qWrong = parseInt(qWrong);
                
                if (qCorrect + qWrong < 10) {
                    qWrong += (10 - qCorrect - qWrong);
                }

                let rank = {
                    Score: currentGame[0].Score,
                    Q_Correct: qCorrect,
                    Q_Wrong: qWrong
                }

                ZNAMDB.query("UPDATE tbl_student_stats SET Questions_Played = Questions_Played + 10 WHERE Student_ID = ?", user, () => {
                    if (currentGame[0].Rated == 1) {
                        ZNAMDB.query("UPDATE tbl_scoreboard SET Q_Correct = Q_Correct + ?, Q_Wrong = Q_Wrong + ? WHERE Student_ID = ? AND Subject = ?", [qCorrect, qWrong, user, currentGame[0].Subject], () => {
                            ZNAMDB.query("UPDATE tbl_leaderboard SET Q_Correct = Q_Correct + ?, Q_Wrong = Q_Wrong + ? WHERE Student_ID = ?", [qCorrect, qWrong, user], () => {
                                updateRank(user, rank, () => {  // update the main rank
                                    rank.Subject = currentGame[0].Subject;
                                    updateCustomRank(user, rank, (subjectRank) => { // update the subject rank
                                        getScoreboard({
                                            subject: currentGame[0].Subject,
                                            rank: subjectRank.newRank
                                        }, (endScoreboard) => {
                                            callback({
                                                scoreboard: endScoreboard,
                                                rank: subjectRank.newRank
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    } else {
                        getScoreboard({
                            subject: currentGame[0].Subject,
                            rank: 1
                        }, (endScoreboard) => {
                            callback({
                                scoreboard: endScoreboard
                            });
                        });
                    
                        let activity = {
                            Student_ID: user,
                            Subject: currentGame[0].Subject,
                            Score: currentGame[0].Score,
                            Statistics: JSON.stringify({
                                Correct: qCorrect,
                                Questions: (qCorrect + qWrong)
                            })
                        };
                        
                        ZNAMDB.query("INSERT INTO tbl_activities SET ?", activity);
                        ZNAMDB.query("DELETE FROM tbl_current_games WHERE Student_ID = ?", user);
                    }
                });
            });
        });
    });
}

let updateCustomRank = (user, data, callback) => {
    data.Student_ID = user;
    ZNAMDB.query("SELECT * FROM tbl_scoreboard WHERE Student_ID = ? AND Subject = ?", [user, data.Subject], (err, userExists) => {
        if (typeof userExists != "undefined" && userExists.length >= 1) {
            // user exists
            data.Score += userExists[0].Score;
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
                                        callback({ status: "success", newRank: newRank });
                                    })
                                    return;
                                } // else, there was somebody else, do nothing.
                                
                                callback({ status: "success", newRank: newRank });
                            });
                        } else {
                            callback({ status: "success", newRank: newRank });
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
                                                    callback({ status: "success", newRank: newRankRows[0].Rank + 1 });
                                                });
                                            })
                                        } else { // he was alone
                                            ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = Rank + 1 WHERE Score BETWEEN ? AND ? AND Subject = ?", [userExists[0].Score, data.Score-1, data.Subject], () => {
                                                ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = ? WHERE ID = ?", [newRankRows[0].Rank + 1, userExists[0].ID], () => {
                                                    callback({ status: "success", newRank: newRankRows[0].Rank + 1 });
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
                                                    callback({ status: "success", newRank: userExists[0].Rank });
                                                });
                                            })
                                        } else { // he was alone
                                            callback({ status: "success", newRank: userExists[0].Rank });
                                        }
                                    });
                                }
                            });
                        } else {
                            if (userExists[0].Rank != 1) {
                                // he is the first now
                                ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = Rank + 1 WHERE Subject = ?", data.Subject, () => { // shift all
                                    ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = 1, Score = ? WHERE ID = ?", [data.Score, userExists[0].ID], () => {
                                        callback({ status: "success", newRank: 1 });
                                    });
                                })
                            } else {
                                ZNAMDB.query("UPDATE tbl_scoreboard SET Score = ? WHERE ID = ?", [data.Score, userExists[0].ID], () => {
                                    callback({ status: "success", newRank: 1 });
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
                    ZNAMDB.query("INSERT INTO tbl_scoreboard SET ?", data, () => callback({
                        status: "success",
                        newRank: data.Rank
                    }));
                    return;
                } else {
                    // there's no such score
                    ZNAMDB.query("SELECT Rank FROM tbl_scoreboard WHERE Score > ? AND Subject = ? ORDER BY Score", [data.Score, data.Subject], (err, newRankRows) => {
                        if (typeof newRankRows != "undefined" && newRankRows.length > 0) {
                            data.Rank = (parseInt(newRankRows[0].Rank) + 1);
                            ZNAMDB.query("INSERT INTO tbl_scoreboard SET ?", data);
                            // we need to shift all the other ranks
                            ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = Rank + 1 WHERE Score < ? AND Subject = ?", [data.Score, data.Subject], 
                                () => {
                                        callback({
                                        status: "success",
                                        newRank: data.Rank
                                    });
                                }
                            );
                        } else {
                            data.Rank = 1;
                            // we need to shift all the other ranks
                            ZNAMDB.query("UPDATE tbl_scoreboard SET Rank = Rank + 1 WHERE Subject = ?", data.Subject, () => {
                                ZNAMDB.query("INSERT INTO tbl_scoreboard SET ?", data, () => {
                                    callback({
                                        status: "success",
                                        newRank: data.Rank
                                    });
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
    data.Student_ID = user;
    // we need to put in account the subject, but that's later
    ZNAMDB.query("SELECT * FROM tbl_leaderboard WHERE Student_ID = ?", user, (err, userExists) => {
        if (typeof userExists != "undefined" && userExists.length > 0) {
            // user exists
            data.Score += userExists[0].Score;
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
                                        callback({ status: "success", newRank: newRank });
                                    })
                                    return;
                                } // else, there was somebody else, do nothing.
                                
                                callback({ status: "success", newRank: newRank });
                            });
                        } else {
                            callback({ status: "success", newRank: newRank });
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
                                                    callback({ status: "success", newRank: newRankRows[0].Rank + 1 });
                                                });
                                            })
                                        } else { // he was alone
                                            ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = Rank + 1 WHERE Score BETWEEN ? AND ?", [userExists[0].Score, data.Score-1], () => {
                                                ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = ? WHERE ID = ?", [newRankRows[0].Rank + 1, userExists[0].ID], () => {
                                                    callback({ status: "success", newRank: newRankRows[0].Rank + 1 });
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
                                                    callback({ status: "success", newRank: userExists[0].Rank });
                                                });
                                            })
                                        } else { // he was alone
                                            callback({ status: "success", newRank: userExists[0].Rank });
                                        }
                                    });
                                }
                            });
                        } else {
                            if (userExists[0].Rank != 1) {
                                ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = Rank + 1", () => { // shift all
                                    ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = 1, Score = ? WHERE ID = ?", [data.Score, userExists[0].ID], () => {
                                        callback({ status: "success", newRank: 1 });
                                    });
                                })
                            } else {
                                ZNAMDB.query("UPDATE tbl_leaderboard SET Score = ? WHERE ID = ?", [data.Score, userExists[0].ID], () => {
                                    callback({ status: "success", newRank: 1 });
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
                    ZNAMDB.query("INSERT INTO tbl_leaderboard SET ?", data, () => callback({ status: "success", newRank: data.Rank }));
                    return;
                } else {
                    // there's no such score
                    ZNAMDB.query("SELECT Rank FROM tbl_leaderboard WHERE Score > ? ORDER BY Score", data.Score, (err, newRankRows) => {
                        if (typeof newRankRows != "undefined" && newRankRows.length > 0) {
                            // callback(newRankRows[0].Rank + 1);
                            data.Rank = (parseInt(newRankRows[0].Rank) + 1);
                            ZNAMDB.query("INSERT INTO tbl_leaderboard SET ?", data);
                            // we need to shift all the other ranks
                            ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = Rank + 1 WHERE Score < ?", data.Score, () => {
                                callback({
                                    status: "success",
                                    newRank: data.Rank
                                })
                            })
                        } else {
                            data.Rank = 1;
                            // we need to shift all the other ranks
                            ZNAMDB.query("UPDATE tbl_leaderboard SET Rank = Rank + 1", () => {
                                ZNAMDB.query("INSERT INTO tbl_leaderboard SET ?", data, () => {
                                    callback({
                                        status: "success",
                                        newRank: data.Rank
                                    })
                                });
                            })
                        }
                    });
                }
            });
        }
    });
}

let getTimeLeft = (user, callback) => {
    ZNAMDB.query("SELECT Time_Left FROM tbl_current_games WHERE Student_ID = ?", user, (err, rows) => {
        if (typeof rows != "undefined" && rows.length > 0) {
            callback({ timeLeft: rows[0].Time_Left });
        } else {
            callback({ status: "error" });
        }
    });
}

// We are using this same exact interval as a MySQL Event
let updateTime = () => {
    setInterval(() => {
        ZNAMDB.query("SELECT * tbl_current_games WHERE Time_Left = 0 AND Status = 1", (err, rows) => {
            if (typeof rows != "undefined" && rows.length > 0) {
                for (let row of rows) {
                    submitAnswer(row.Student_ID, {
                        token: -1
                    }, () => {});
                }
            }
        });
    }, 1000);
}

let getActivities = (user, callback) => {
    ZNAMDB.query("SELECT * FROM tbl_activities WHERE Student_ID = ? ORDER BY Timestamp ASC LIMIT 5", user, (err, activities) => {
        if (err) {
            console.trace(err);
        }

        if (typeof activities !== "undefined" && activities.length > 0) {
            for (let a of activities) {
                a.Statistics = JSON.parse(a.Statistics);
            }

            callback(activities);
        } else {
            callback([]);
        }
    });
}

let getStudentStats = (user, callback) => {
    ZNAMDB.query("SELECT * FROM tbl_student_stats WHERE Student_ID = ?", user, (err, stats) => {
        ZNAMDB.query("SELECT COUNT(*) As Count FROM tbl_questions WHERE Valid = 1", (err, qCount) => {
            let response = {
                questionsCount: parseInt(qCount[0].Count)
            }
            
            if (typeof stats === "undefined" || stats.length == 0) {
                ZNAMDB.query("INSERT INTO tbl_student_stats SET ?", {
                    Student_ID: user
                });

                response = {
                    ...response,
                    questionsPlayed: 0,
                    contributions: 0,
                }
            } else {
                response = {
                    ...response,
                    questionsPlayed: stats[0].Questions_Played,
                    contributions: stats[0].Contributions,
                }
            }
            
            callback(response);
        });
    });
}

module.exports = {
    getTimeLeft,
    getInitStats,
    Initialize,
    createGame,
    startGame,
    queryQuestion,
    generateQuestions,
    submitAnswer,
    getNextQuestion,
    getRandomIDs,
    getLeaderboard,
    updateRank,
    getActivities,
    getStudentStats,
    endGame
}
