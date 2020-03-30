/**
 * Set the questions in the Table of Current Games
 * @param {Object}      API         Database Connection
 * @param {Number}      user        User ID
 * @param {Object}      data        Additional Data
 * @param {Function}    callback    Callback function
 */
let setQuestions = (API, user, data, callback) => {
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
 * @param {Object}      API         Database Connection
 * @param {Number}      user        User ID
 * @param {Object}      data        Additional Data
 * @param {Function}    callback    Callback function
 */
let queryQuestion = (API, ID, callback) => {
    API.ZNAMDB.query("SELECT * FROM tbl_questions WHERE ID = ?", [ID], (err, questionInfo) => {
        callback(questionInfo[0]);
    });
}

let checkIfQuestionsExist = (API, list, callback) => {
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
 * @param {Object}      API         Database Connection
 * @param {Number}      user        User ID
 * @param {Object}      data        Additional Data
 * @param {Function}    callback    Callback function
 */
let getRandomIDs = (API, user, data, callback) => {
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
    checkIfQuestionsExist(API, randomIDs, (checked) => {
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
                    getRandomIDs(API, user, data, (array) => {
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
                getRandomIDs(API, user, data, (array) => {
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
 * Generate/find 10 random questions for the user to play
 * @param {Object}      API         Database Connection
 * @param {Number}      user        User ID
 * @param {Object}      data        Additional Data
 * @param {Function}    callback    Callback function
 */
let generateQuestions = (API, user, data, callback) => {
    API.ZNAMDB.query("SELECT ID FROM tbl_questions ORDER BY ID DESC LIMIT 1", (err, countQuery) => {
        let count = countQuery[0].ID;

        getRandomIDs(API, user, { 
            count: count, 
            number: 15,
            subject: data.subject
        }, (randomIDs) => {
            randomIDs = randomIDs.splice(0, 10);

            setQuestions(API, user, { IDs: randomIDs }, (response) => {
                callback(response);
            });
        });
    });
}

/**
 * Starting/creating a new Game
 * @param {Object}      API         Database Connection
 * @param {Number}      user        User ID
 * @param {Object}      data        Additional Data
 * @param {Function}    callback    Callback function
 */
let createGame = (API, user, data, callback) => {
    let entry = { 
        Student_ID: user,
        Current_Level: 0,
        Score: 0,
        Time_Left: 30,
        Rated: data.rated
    }

    API.ZNAMDB.query("INSERT INTO tbl_current_games SET ?", entry, (err, rows) => {
        if (err) {
            console.trace(err);
            callback({ status: "error" });
            return;
        }

        generateQuestions(API, user, data, callback);
    });
}

let submitAnswer = (user, data, callback) => {
    // check the answer token
    // check if the answer is true
}

let getNextQuestion = (API, user, callback) => {
    API.ZNAMDB.query("SELECT * FROM tbl_games_current WHERE Student_ID = ?", user, (err, currentGame) => {
        let questionIDs = JSON.parse(currentGame[0].Questions);
        let currentQuestion = questionIDs[currentGame[0].Current_Level];

        queryQuestion(API, currentQuestion, (question) => {    
            console.log("next raw question: ", question);


            
            callback(question);
        });
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    createGame,
    queryQuestion,
    generateQuestions,
    submitAnswer,
    getNextQuestion,
    getRandomIDs
}