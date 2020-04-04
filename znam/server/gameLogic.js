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
    ZNAMDB.query("UPDATE tbl_games_current SET Score = ? WHERE Student_ID = ?", [score, user], callback);
}

let submitAnswer = (user, data, callback) => {
    // check the answer token
    // check if the answer is true
    // data: { token: ID }
    // user = req.body.user

    ZNAMDB.query("SELECT * FROM tbl_games_current WHERE Student_ID = ?", user, (err, currentGame) => {
        let Demo_ID = currentGame[0].Demo_ID;

        GameEngine.getLastRecord(Demo_ID, { Command: "question" }, (lastQ) => {
            let lastQData = JSON.parse(lastQ[0].Data);
            if (parseInt(lastQData.trueID) === parseInt(data.token)) {
                // answer is true
                let scoreUpdate = 100;
                if (currentGame[0].Time_Left <= 20) {
                    scoreUpdate -= (20 - currentGame[0].Time_Left) * 4;
                }

                updateScore(user, currentGame[0].Score + scoreUpdate, (err, setScore) => {
                    callback({ Score: currentGame[0].Score + scoreUpdate });
                });
            } else {
                callback({ Score: currentGame[0].Score });
            }
        });
    });
}

let getNextQuestion = (user, callback) => {
    ZNAMDB.query("SELECT * FROM tbl_games_current WHERE Student_ID = ?", user, (err, currentGame) => {
        let questionIDs = JSON.parse(currentGame[0].Questions);
        let currentQuestion = questionIDs[currentGame[0].Current_Level];

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
            recordState.trueID = trueID;

            GameEngine.record(Demo_ID, {
                Source: "server",
                Command: "question",
                Data: JSON.stringify(recordState)
            }, () => callback(state));
        });
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let getScoreboard = (callback) => {
    ZNAMDB.query("SELECT * FROM tbl_scoreboard ORDER BY RANK LIMIT 10", (err, scores) => {
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

module.exports = {
    Initialize,
    createGame,
    queryQuestion,
    generateQuestions,
    submitAnswer,
    getNextQuestion,
    getRandomIDs,
    getScoreboard
}