let API = {};
let GameEngine;

/**
 * Function to connect the databases and the Game Engine to the this module
 * @param {module} node_databases   Databases
 * @param {module} node_GameEngine  Game Engine
 */
let Initialize = (node_databases, node_GameEngine) => {
    API.ZNAMDB = node_databases.ZNAMDB;
    GameEngine = node_GameEngine;
}

/**
 * Set the questions in the Table of Current Games
 * @param {Number}      user        User ID
 * @param {Object}      data        Additional Data
 * @param {Function}    callback    Callback function
 */
let setQuestions = (user, data, callback) => {
    API.ZNAMDB.query("UPDATE tbl_current_games SET Questions = ? WHERE Student_ID = ?", [JSON.stringify(data.IDs), user], (err, rows) => {
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
    API.ZNAMDB.query("SELECT * FROM tbl_questions WHERE ID = ?", [ID], (err, questionInfo) => {
        callback(questionInfo[0]);
    });
}

let checkIfQuestionsExist = (list, callback) => {
    API.ZNAMDB.query("SELECT ID FROM tbl_questions WHERE ID IN (" + list.join() + ")", (err, rows) => {
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
    checkIfQuestionsExist(randomIDs, (checked) => {
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
        API.ZNAMDB.query("SELECT Question_ID FROM tbl_questions_played WHERE Student_ID = ? AND Subject = ?", [user, data.subject], (err, questionsPlayed) => {
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

    let UUID = API.uuidv4().multiReplace({
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
    API.ZNAMDB.query("SELECT ID FROM tbl_questions ORDER BY ID DESC LIMIT 1", (err, countQuery) => {
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

    API.ZNAMDB.query("INSERT INTO tbl_current_games SET ?", entry, (err, rows) => {
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

let submitAnswer = (user, data, callback) => {
    // check the answer token
    // check if the answer is true
}

let getNextQuestion = (user, callback) => {
    API.ZNAMDB.query("SELECT * FROM tbl_games_current WHERE Student_ID = ?", user, (err, currentGame) => {
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

            callback(state);
        });
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    Initialize,
    createGame,
    queryQuestion,
    generateQuestions,
    submitAnswer,
    getNextQuestion,
    getRandomIDs
}