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
    API.ZNAM.query("SELECT ID FROM tbl_questions WHERE ID IN (" + list.join() + ")", (err, rows) => {
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
    
    for (let i = 0; i < data.number; ++i) {
        let currentRandom = Math.random(data.count - 1) + 1;
        randomIDs.push(currentRandom);
    }

    // check if the questions exists
    checkIfQuestionsExist(API, randomIDs, (checked) => {
        let crossChecked = [];
        for (let i = 0; i < randomIDs.length; ++i) {
            for (let k = 0; k < checked.length; ++k) {
                if (randomIDs[i] == checked[k]) {
                    crossChecked.push(randomIDs[i]);
                }
            }
        }

        // check if the questions are already played
        API.ZNAM.query("SELECT Question_ID FROM tbl_questions_played WHERE Student_ID = ? AND Subject = ?", [data.user, data.subject], (err, questionsPlayed) => {
            if (err) {
                console.trace(err);
                return;
            }

            if (typeof questionsPlayed === "undefined" || questionsPlayed.length == 0) {
                // no further checks
                callback(crossChecked.splice(data.number, crossChecked.length - data.number));
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
                crossChecked = crossChecked.splice(data.number, crossChecked.length - data.number);
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
    API.ZNAMDB.query("SELECT COUNT(*) AS Count FROM tbl_questions", (err, countQuery) => {
        let count = countQuery[0].Count;

        getRandomIDs(API, user, { 
            count: count, 
            number: 15,
            subject: data.subject
        }, (randomIDs) => {

            console.log("final random IDs: ", randomIDs);
            randomIDs = randomIDs.splice(10, randomIDs.length - 10);

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

}

let getNextQuestion = (API, user, callback) => {
    API.ZNAMDB.query("SELECT * FROM tbl_games_current WHERE Student_ID = ?", user, (err, currentGame) => {
        let questionIDs = JSON.parse(currentGame[0].Questions);
        let currentQuestion = questionIDs[currentGame[0].Current_Level];

        queryQuestion(API, currentQuestion, (question) => {            
            callback(question);
        });
    });
}

module.exports = {
    createGame,
    queryQuestion,
    generateQuestions,
    submitAnswer,
    getNextQuestion
}