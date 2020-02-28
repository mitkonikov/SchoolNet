/**
 *  API:
 *      gameSocket:         gameSocketModule.gameSocket,
 *      databaseController: databaseController
 *      demoLogger:         demoLogger
 *      GameEngine:         GameEngine
 */

function getTime() {
    let CURRENT_DATE_TIME = new Date().toISOString().replace('T', ' ');
    CURRENT_DATE_TIME = CURRENT_DATE_TIME.replace('Z', '');
    let CURRENT_TIME_TRIMMED = CURRENT_DATE_TIME.split(" ")[1].replace(/:/g, '');
    CURRENT_TIME_TRIMMED = CURRENT_TIME_TRIMMED.replace('.', '');

    return CURRENT_TIME_TRIMMED;
}

function getRoom(socket_rooms) {
    return Object.keys(socket_rooms)[1];
}

/**
 * Main function handling the tatkin socket io stuff
 * @param {JSON} API
 */
let tatkinSocket = function(API) {
    let gameSocket = API.gameSocket.mainSocket;
    let network = API.databaseController.DB("db_net");
    let wordsDB = API.databaseController.DB("db_words");
    let records = API.databaseController.DB("db_records");
    let demo = API.demoLogger;
    let GameEngine = API.GameEngine;

    let demo_table = "";
    let demo_path = "./server/demos/";
    let HEARTBEAT_INTERVAL;

    console.log("Starting AI...");
    const spawn = require("child_process").spawn;
    const pythonProcess = pythonSetup(spawn, wordsDB);

    // temporary comments
    // pythonProcess.stdin.write("20\n");
    // pythonProcess.stdin.end();

    let gameTatkinSocket    = API.gameSocket.ioControl.of('/game/tatkin');

    let obj = {
        network:            network,
        wordsDB:            wordsDB,
        records:            records,
        pythonProcess:      pythonProcess,
        gameSocket:         gameSocket,
        gameTatkinSocket:   gameTatkinSocket,
        demo:               demo,
        demo_table:         demo_table,
        demo_path:          demo_path,
        GameEngine:         GameEngine
    }

    gameTatkinSocket.on("connection", (socket) => {
        // WE NOW ARE IN THE GAME TERRITORY
        let USER = socket.request.user;

        if (USER.logged_in) {
            if (USER.Role == 1) {
                // A TEACHER IS CONNECTED
                
                GameEngine.setUpGame(socket, (Demo_ID, firstTime) => {
                    demo_table = Demo_ID;
                    obj.demo_table = Demo_ID;

                    // send the online students
                    setTimeout(() => {
                        getStudentsOnlineInfo(obj, socket, getRoom(socket.rooms));
                    }, 100);

                    // log that the teacher has joined
                    GameEngine.userJoins("teacher", false, demo_table);
                    
                    // this is used to tell the teacher that
                    // the connection is not made for the first time
                    // so that the teacher should request generated words if they exist 
                    if (!firstTime) socket.emit("connection setup", { firstTime: false });

                    updateGameState(obj, "wait");
                    GameEngine.updateLevel(demo_table, "-1");
                    
                    // start the heartbeat
                    console.log("Heartbeat started!");
                    HEARTBEAT_INTERVAL = setInterval(() => HEARTBEAT(obj, socket), 1000);        
                });

                socket.on("make game public", (data) => {
                    let ROOM = getRoom(socket.rooms);
                    network.table("tbl_games_current").getCurrentGame.setPrivacy(1, ROOM);

                    gameSocket.emit("make game public");

                    let logData = [ {Source: "teacher", Command: "options", Data: "game public"},
                                    {Source: "teacher", Command: "global level time", Data: parseInt(data["level-time-txt"])},
                                    {Source: "teacher", Command: "global freeze time", Data: parseInt(data["freeze-time"])}];
                    obj.GameEngine.recordLines(demo_table, logData);
                });

                socket.on("game start", (data) => {
                    // TODO: CHECK IF THE GAME IS PUBLIC

                    if (USER.Role == 1) { // TODO: I DON'T KNOW IF THAT IS NECESSERY
                        let ROOM = getRoom(socket.rooms);
                        network.table("tbl_games_current").getCurrentGame.setState("started", ROOM);

                        // when you start the game, you update the level and freeze time
                        resetLevelTime(obj);

                        let logData = {Source: "teacher", Command: "game", Data: "start"};
                        GameEngine.record(demo_table, logData);

                        updateGameState(obj, "start");
                    }
                });

                socket.on("game pause", (data) => {
                    let ROOM = getRoom(socket.rooms);
                    network.table("tbl_games_current").getCurrentGame.setState("paused", ROOM);

                    let logData = {Source: "teacher", Command: "game", Data: "pause"};
                    GameEngine.record(demo_table, logData);

                    updateGameState(obj, "pause");
                });

                socket.on("game resume", (data) => {
                    let ROOM = getRoom(socket.rooms);
                    network.table("tbl_games_current").getCurrentGame.setState("started", ROOM);

                    let logData = {Source: "teacher", Command: "game", Data: "resume"};
                    GameEngine.record(demo_table, logData);

                    updateGameState(obj, "start");
                });

                socket.on("pick words", (data) => {
                    if (typeof data.wordCount === "undefined") data.wordCount = 10;
                    if (data.wordCount > 10) data.wordCount = 10;
                    
                    for (let i = 0; i < data.wordCount; ++i) {
                        // generate word
                        let TRUE_WORD = Math.floor(Math.random() * 2);

                        if (TRUE_WORD) {
                            // the word is grabbed from the dictionary
                            trueWord(obj, i);
                        } else {
                            // the word is grabbed from generated pool
                            randomGeneratedWord(obj, i);
                        }
                    }

                    // log it in the demo
                    let logData = {Source: "teacher", Command: "words", Data: "generate words"};
                    GameEngine.record(demo_table, logData);

                    socket.emit("done generating words");
                });

                socket.on("pick word", (data) => {
                    // generate word
                    console.log(data);
                    
                    let TRUE_WORD = Math.floor(Math.random() * 2);

                    if (TRUE_WORD) {
                        // the word is grabbed from the dictionary
                        trueWord(obj, parseInt(data.Number));
                    } else {
                        // the word is grabbed from generated pool
                        randomGeneratedWord(obj, parseInt(data.Number));
                    }
                });

                socket.on("get generated words", (data) => {
                    let current_demo_path = demo_path + demo_table + ".json";
                    obj.demo.getDemoFile(null, current_demo_path, (demo_data) => {
                        if (!data.Override && demo_data.game.length != 0) {
                            // if it already contains words

                            // if we want to send only the word and the word number
                            /*let justWords = [];

                            for (let word of demo_data.game) {
                                justWords.push({ Number: word.Number, Word: word.Word });
                            }

                            // send the words to the client
                            socket.emit("set generated words", justWords);*/

                            // we are sending everything including the truthfulness value
                            // but only to the teacher
                            socket.emit("set generated words", demo_data.game);
                        }
                    });
                });

                socket.on("get students info", (data) => {
                    getStudents(obj, socket, getRoom(socket.rooms));
                });

                socket.on('disconnect', (eventData) => {
                    // PAUSE GAME
                    clearInterval(HEARTBEAT_INTERVAL);
                    GameEngine.userLeaves("teacher", false, demo_table);
                });
            } else {
                // A STUDENT IS CONNECTED
                
                // LISTEN FOR THE JOIN CONFIRMATION AND THE GAME ID
                socket.on("student join", (data) => {
                    network.table("tbl_games_current").getCurrentGame.Info.whereID(parseInt(data.Game_ID), (rows) => {
                        socket.join(rows[0].Room_ID);

                        demo_table = rows[0].Demo_ID;
                        obj.demo_table = demo_table;
                        
                        // log that the teacher has joined
                        GameEngine.userJoins(USER.ID, true, demo_table);

                        records.query("SELECT * FROM " + demo_table + " WHERE Source = ? AND Command = ?", [USER.ID, "score"], (err, rows) => {
                            if (rows.length == 0) {
                                GameEngine.record(demo_table, { Source: USER.ID, Command: "score", Data: "0" });
                            }
                        });
                    });
                });

                socket.on("submit", (eventData) => {
                    console.log("submitted data: " + eventData);
                    // Number, Word_ID, Word, Answer

                    let parseData = {
                        Number: parseInt(eventData.Number),
                        Word_ID: parseInt(eventData.Word_ID),
                        Word: eventData.Word,
                        Answer: eventData.Answer
                    }

                    let logData = {
                        Source: USER.ID,
                        Command: "submit-" + parseInt(eventData.Number),
                        Data: JSON.stringify(parseData)
                    }

                    GameEngine.record(demo_table, logData);

                    // notify everyone that the some user has submitted
                    gameTatkinSocket.emit("user submitted", { Number: parseData.Number });
                });

                socket.on("get player score", (eventData) => {
                    GameEngine.getRecord(demo_table, { Source: USER.ID, Command: "score" }, (demo_score) => {
                        socket.emit("set player score", { Score: parseInt(demo_score) })
                    });
                });

                socket.on("get player awards", (eventData) => {
                    // . data.Place
                    // . data.gameScore
                    // . data.prevScore = xp - gameScore
                    // . data.Level
                    // . data.maxLevelXP
                    // data.Correct?

                    let awardResult = {};

                    awardResult.Level = 1;
                    awardResult.maxLevelXP = 3000;

                    obj.GameEngine.getRecord(obj.demo_table, { Source: USER.ID, Command: "place" }, (place) => {
                        awardResult.Place = parseInt(place);

                        obj.GameEngine.getRecord(obj.demo_table,  { Source: USER.ID, Command: "score" }, (score) => {
                            awardResult.gameScore = parseInt(score);

                            // TODO: Put it through the databaseController
                            network.query("SELECT Score_Tatkin FROM tbl_stats WHERE ID = ?", USER.ID, (err, rows) => {
                                if (err) {
                                    console.trace(err);
                                    return;
                                }

                                if (rows.length) {
                                    let XP = parseInt(rows[0].Score_Tatkin);

                                    awardResult.prevScore = XP - awardResult.gameScore;

                                    socket.emit("set player awards", awardResult);
                                }
                            });
                        });
                    });
                });

                socket.on('disconnect', (eventData) => {
                    GameEngine.userLeaves(USER.ID, true, demo_table);
                });
            }
        }
    });

    return gameTatkinSocket;
}

/**
 * Python Setup function
 * @param {*} spawn     SPAWN object
 * @param {*} wordsDB   Word database
 */
function pythonSetup(spawn, wordsDB) {
    const pythonProcess = spawn('python', ["./server/python/word_gen.py"], { stdio: 'pipe'});
    
    pythonProcess.stdout.on('data', (data) => {
        let bufferOriginal = Buffer.from(data);
        let strOut = bufferOriginal.toString('utf8');
        let possWords = strOut.split(" ");
        // console.log(possWords);
        let newWords = [];

        for (let word in possWords) {
            // console.log(possWords[word].length);
            if (possWords[word].length > 4) {
                newWords.push({ Word: possWords[word] });
            }
        }

        // console.log(newWords);

        for (let i in newWords) {
            wordsDB.query("INSERT INTO tbl_generated_words SET ?", newWords[i], (err) => {
                if (err) console.log("Error inserting word: " + err);
            });
        }

        /*
        if (newWords.length != 0)
            wordsDB.query("INSERT INTO tbl_generated_words (Word) VALUES ?", newWords, (err) => {
                if (err) console.log(err);
            });*/
    });

    pythonProcess.stderr.on('data', (data) => {
        console.log(`Python Error: ${data}`);
        pythonSetup(spawn, wordsDB);
    });

    // Python Error Handling
    pythonProcess.on('error', (err) => {
        console.log("(on error) Python terminated due to: " + err);
        pythonSetup(spawn, wordsDB);
    });

    pythonProcess.on('close', (data) => {
        console.log("(on close) Python terminated due to: " + data);
        pythonSetup(spawn, wordsDB);
    });

    return pythonProcess;
}

/**
 * Main function for picking a random word from the AI generated ones
 * @param {JSON}    obj         Reference to all dependecies
 * @param {Number}  i           INDEX of the word
 */
function randomGeneratedWord(obj, i) {
    console.log("imaginary");

    // get the count of total words in the pool
    obj.wordsDB.query("SELECT (SELECT COUNT(*) FROM tbl_generated_words) AS Words_Avail", (err, rows) => {
        if (err) {
            console.log("MySQL Error: " + err);
            return;
        }
        
        let words_available = rows[0].Words_Avail;
        // console.log("Words available : " + words_available);

        // TODO: Custom control
        if (words_available < 10) {
            // if its below certain number, generate more
            obj.pythonProcess.stdin.write("20");
            obj.pythonProcess.stdin.end();

            // protection minimization
            words_available -= 2;
        } else {
            words_available -= 5;
        }

        if (words_available > 0) {
            // generate the random word id
            let WORD_ID = Math.floor(Math.random() * parseInt(words_available)) + 1;

            // take the random word from the pool
            obj.wordsDB.query("SELECT ID, Word FROM tbl_generated_words WHERE ID = ?", WORD_ID, (err, random_rows) => {
                if (err) {
                    console.log(err);
                    return;
                }

                if (random_rows.length) {
                    obj.wordsDB.query("SELECT ID FROM tbl_words WHERE Word = ?", random_rows[0].Word, (err, already_rows) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        
                        // reset random-word-pool-take
                        if (already_rows.length) {
                            randomGeneratedWord(obj);
                        } else {
                            let demoData = {
                                Number: i,
                                Truthfulness: false,
                                Word_ID: WORD_ID,
                                Word: random_rows[0].Word
                            }
                            
                            obj.GameEngine.updateRecord(obj.demo_table, 
                                    {
                                        Source: "server", 
                                        Command: "pickWord" + i, 
                                        Data: JSON.stringify(demoData)
                                    });
                        }
                    });
                }
            });
        } else {
            setTimeout(() => randomGeneratedWord(obj, i), 1);
        }
    });
}

/**
 * Take a word and log it in a demo
 * @param {JSON}    obj         Reference to all dependecies
 * @param {Number}  i           INDEX of the word
 */
function trueWord(obj, i) {
    let WORD_ID = Math.floor(Math.random() * process.env.TATKIN_WORD_COUNT) + 1;

    console.log("true");

    obj.wordsDB.query("SELECT ID, Word FROM tbl_words WHERE ID = ? AND Mistake = ?", [WORD_ID, 0], (err, rows) => {
        if (rows.length) {
            if (rows[0].Word.length > 4) { // TODO: Remove this
                let demoData = {
                    Number: i,
                    Truthfulness: true,
                    Word_ID : rows[0].ID,
                    Word: rows[0].Word
                }

                console.log(demoData);

                obj.GameEngine.updateRecord(obj.demo_table, 
                        {
                            Source: "server", 
                            Command: "pickWord" + i, 
                            Data: JSON.stringify(demoData)
                        });
            } else {
                trueWord(obj, i);
            }
        }
    });
}

/**
 * Gets the Class ID according to the Room ID
 * @param {JSON}        obj         Reference to all dependecies
 * @param {String}      Room_ID     Room ID
 * @param {Function}    callback    Callback function
 */
function getClassID(obj, Room_ID, callback) {
    obj.network.table("tbl_games_current").getCurrentGame.getClassID(Room_ID, callback);
}

/**
 * Gets the IDs of all of the students according to the class they are in
 * @param {JSON}        obj         Reference to all dependecies
 * @param {String}      Class_ID    Class ID
 * @param {Function}    callback    Callback function
 */
function getStudentIDs(obj, Class_ID, callback) {
    obj.network.table("tbl_classes_student").getStudentIDs.inClass(Class_ID, callback);
}

/**
 * Get info for every student in the room (with socket.emit)
 * @param {JSON}        obj        Reference to all dependecies
 * @param {*}           socket     Socket
 * @param {String}      Room_ID    Room ID
 */
function getStudents(obj, socket, Room_ID) {
    getClassID(obj, Room_ID, (ClassID) => {
        getStudentIDs(obj, ClassID, (StudentIDs) => {
            obj.network.table().Student.getOnlineStudents(StudentIDs, (info) => {
                obj.GameEngine.getAllRecords(obj.demo_table, { Command: "score" }, (score) => {
                    getStudentsConnectInfo(obj, (online_students) => {
                        score.sort(function(a, b) { return parseInt(a.Source) - parseInt(b.Source); });
                        info.sort(function(a, b) { return a.ID - b.ID; });

                        for (let i in score) {
                            if (parseInt(score[i].Source) == info[i].ID) {
                                info[i].Score = parseInt(score[i].Data);
                            }
                        }
                        
                        for (let online_student of online_students) {
                            for (let info_data of info) {
                                if (info_data.ID == online_student) info_data.Connected = true;
                            }
                        }

                        socket.emit("set students info", info);
                    });
                });
            });
        });
    });
}

/**
 * Get only online info for every student in the room (with socket.emit)
 * @param {JSON}        obj        Reference to all dependecies
 * @param {*}           socket     Socket
 * @param {String}      Room_ID    Room ID
 */
function getStudentsOnlineInfo(obj, socket, Room_ID) {
    getClassID(obj, Room_ID, (ClassID) => {
        getStudentIDs(obj, ClassID, (STUDENT_IDS) => {
            obj.network.table().Student.getOnlineStudents(STUDENT_IDS, (result) => {
                socket.emit("set students online", result);
            });
        });
    });
}

/**
 * Get online info for every student in the room FROM THE DEMO
 * @param {JSON}        obj         Reference to all dependecies
 * @param {Function}    callback    Callback function
 */
function getStudentsConnectInfo(obj, callback) {
    obj.GameEngine.getAllRecords(obj.demo_table, { Command: 'student join' }, (rows) => {
        let IDs = [];
        for (row of rows) IDs.push(parseInt(row.Source));

        if (callback && typeof(callback) === "function")
            callback(IDs);
    });
}

/**
 * Get online info for every student in the room FROM THE DEMO
 * @param {JSON}        obj        Reference to all dependecies
 * @param {*}           socket     Socket
 * @param {Function}    callback   Callback function
 */
function emitStudentsConnectInfo(obj, socket, callback) {
    getStudentsConnectInfo(obj, (students) => {
        socket.emit("set students connect", students);
        callback(students);
    });
}

function updateGameState(obj, Game_State) {
    // TODO: IF NEED put callback
    obj.GameEngine.updateRecord(obj.demo_table, { Source: "teacher", Command: "game-state", Data: Game_State});
}

/**
 * Gets the current game state
 * @param {JSON}        obj         Reference to all dependecies
 * @param {Function}    callback    Callback function
 */
function getGameState(obj, callback) {
    obj.GameEngine.getRecord(
        obj.demo_table, 
        {
            Source: "teacher",
            Command: "game-state"
        }, 
        callback);
}

/**
 * Resets the current level time from the global level time
 * @param {JSON} obj   Reference to all dependecies
 */
function resetLevelTime(obj) {
    obj.GameEngine.getRecord(obj.demo_table, { Source: "teacher", Command: "global level time" }, (LEVEL_TIME) => {
        obj.GameEngine.updateRecord(obj.demo_table,
            {   
                Source: "server", 
                Command: "current-level-time", 
                Data: LEVEL_TIME
            }
        );
    });

    obj.GameEngine.getRecord(obj.demo_table, { Source: "teacher", Command: "global freeze time" }, (FREEZE_TIME) => {
        obj.GameEngine.updateRecord(obj.demo_table,
            {   
                Source: "server", 
                Command: "current-freeze-time", 
                Data: FREEZE_TIME
            }
        );
    });
}

function sendStats(obj, socket, level) {
    let data = { Level: level, CorrectAnswers: 0, AverageTime: 0 };
    obj.records.query("SELECT (SELECT COUNT(*) FROM " + obj.demo_table + " WHERE Command = 'correct-" + (level-1) + "' AND Data = '1') AS Correct_Ans", (err, rows) => {
        if (err) {
            console.trace(err);
            return;
        }
        
        if (rows.length)
            data.CorrectAnswers = rows[0].Correct_Ans;

        obj.records.query("SELECT Data FROM " + obj.demo_table + " WHERE Command = ?", "check-time-" + level, (err, times) => {
            if (err) {
                console.trace(err);
                return;
            }
            
            let average = 0;
            for (let time of times) average += parseInt(time.Data);

            if (times.length != 0) {
                data.AverageTime = average / times.length;
                if (data.AverageTime > 10000) data.AverageTime = 6000;
            }

            socket.emit("set statistics level", data);
        });
    });
}

function updateGlobalPlayerScore(obj) {
    obj.records.query("SELECT Source, Data FROM " + obj.demo_table + " WHERE Command = ?", "score", (err, ingame_scores) => {
        if (err) {
            console.trace(err);
            return;
        }

        let IDs = [];
        for (let score of ingame_scores) IDs.push(parseInt(score.Source)); 

        // TODO:
        obj.network.query("SELECT ID, Score_Tatkin FROM tbl_stats WHERE ID IN (" + IDs.join() + ")", (err, global_scores) => {
            if (err) {
                console.trace(err);
                return;
            }

            let updateScores = [];

            for (let g in global_scores) {
                for (let i in ingame_scores) {
                    if (global_scores[g].ID == parseInt(ingame_scores[i].Source)) {
                        // matches
                        updateScores.push({
                            ID: global_scores[g].ID,
                            Score_Tatkin: parseInt(global_scores[g].Score_Tatkin) + parseInt(ingame_scores[i].Data)
                        });
                    }
                }
            }

            for (let player of updateScores) {
                obj.network.query("UPDATE tbl_stats SET Score_Tatkin = ? WHERE ID = ?", [player.Score_Tatkin, player.ID]);
            }
        });
    });
}

function writePlaces(obj, callback) {
    obj.records.query("SELECT Source, Data FROM " + obj.demo_table + " WHERE Command = ? ORDER BY Data DESC", "score", (err, scoreboard) => {
        if (err) {
            console.trace(err);
            return;
        }

        let placeboard = [];
        let currentScore = 0;
        let currentPlace = 0;
        if (scoreboard.length) {
            for (let score of scoreboard) {
                let parsed_score = parseInt(score.Data);
                if (parsed_score != currentScore) {
                    currentPlace++;
                }

                currentScore = parsed_score;

                placeboard.push({
                    Source: score.Source,
                    Command: "place",
                    Data: currentPlace
                });
            }

            obj.GameEngine.recordLines(obj.demo_table, placeboard, () => callback());
        }
    });
}

/**
 * Main HEARTBEAT function
 * @param {JSON}    obj     Reference to all dependecies
 * @param {*}       socket  Socket
 */
function HEARTBEAT(obj, socket) {
    // console.log("heartbeating...");
    
    // send the student network info and get all of the connected students
    getStudentsConnectInfo(obj, (connected_students) => {
        getGameState(obj, (state) => {
            if (state == "pause") {
                obj.gameTatkinSocket.to(getRoom(socket.rooms)).emit("game pause");
            } else if (state == "start") {
                // The show must go on!
                obj.GameEngine.getCurrentLevel(obj.demo_table, (level) => {

                    if (level + 1 == 11) {
                        // get game-finish stats
                        obj.records.query("(SELECT Source, Data FROM " + obj.demo_table + " WHERE Command = ? ORDER BY Data DESC) LIMIT 5", "score", (err, scoreboard) => {
                            if (err) {
                                console.trace(err);
                            }
                            
                            // { Source : ID , Data : SCORE , Place : PLACE }
                            let studentIDs = [];
                            let currentScore = 0;
                            let currentPlace = 0;
                            for (let i in scoreboard) {
                                let parsed_score = parseInt(scoreboard[i].Data);
                                if (parsed_score != currentScore) {
                                    currentPlace++;
                                }

                                scoreboard[i].Place = currentPlace;
                                currentScore = parsed_score;
                                
                                studentIDs.push(parseInt(scoreboard[i].Source));
                            }

                            obj.network.table().getDisplayName.in(studentIDs, (display_names) => {
                                // { Source : ID , Data : SCORE , Place : PLACE, Display_Name : NAME }
                                if (err) {
                                    obj.gameTatkinSocket.emit("game finish", scoreboard);
                                    return;
                                }
                                
                                // TODO: See if it can be optimized (maybe sort?)
                                for (let names of display_names) {
                                    for (let scores of scoreboard) {
                                        if (names.ID == parseInt(scores.Source)) {
                                            scores.Display_Name = names.Display_Name;
                                            break;
                                        }
                                    }
                                }

                                obj.gameTatkinSocket.emit("game finish", scoreboard);
                            });
                        });

                        obj.records.query("SELECT * FROM " + obj.demo_table + " WHERE Source = ? AND Command = ?", ["server", "demo written"], (err, isWrittenRow) => {
                            // if the demo is not written
                            if (err || isWrittenRow.length == 0) {
                                updateGlobalPlayerScore(obj);
                                writePlaces(obj, () => {
                                    // copy log to demo file
                                    obj.records.query("SELECT * FROM " + obj.demo_table, (err, rows) => {
                                        if (err) {
                                            return;
                                        }

                                        let current_demo_path = obj.demo_path + obj.demo_table + ".json";
                                        obj.demo.finishLog(null, current_demo_path, () => {
                                            let logThatItIsLogged = {
                                                Time: getTime(),
                                                Source: "server",
                                                Command: "demo written"
                                            }

                                            obj.records.query("INSERT INTO " + obj.demo_table + " SET ?", logThatItIsLogged);
                                        });
                                    });
                                });
                            }
                        });

                        // TODO: Put this in the previous brackets
                        obj.network.table().getCurrentGame.Info.whereDemoID(obj.demo_table, (rows) => {
                            if (err) {
                                console.trace(err);
                                return;
                            }

                            if (rows.length) {
                                let SAVED = {
                                    Teacher_ID: rows[0].Teacher_ID,
                                    Class_ID: rows[0].Class_ID,
                                    Game_ID: rows[0].Game_ID,
                                    Demo_ID: rows[0].Demo_ID,
                                    Date_Time: rows[0].Date_Time
                                }

                                obj.network.table().saveGame(SAVED);
                                obj.network.table().deleteCurrentGame(obj.demo_table);
                            }
                        });

                        return;
                    }

                    if (level == -1) {
                        // game is not started yet
                        obj.GameEngine.getRecord(obj.demo_table, 
                            {
                                Source: "teacher", 
                                Command: "global level time"
                            }, 
                            (freeze_time) => {

                                setTimeout(() => {
                                    obj.GameEngine.updateLevel(obj.demo_table, "0");
                                    console.log("game started");
                                }, parseInt(freeze_time) * 100);
                        });
                    } else {
                        // get level info from the .json file
                        let current_demo_path = obj.demo_path + obj.demo_table + ".json";
                        obj.demo.getLevelInfo(current_demo_path, level, (info) => {
                            // {
                            //     "Number": 9,
                            //     "Truthfulness": true,
                            //     "Word_ID": 7960,
                            //     "Word": "номинирана"
                            // }

                            obj.GameEngine.getRecord(obj.demo_table, {
                                Source: "server", Command: "current-level-time" 
                            }, (level_time) => {

                                obj.GameEngine.getRecord(obj.demo_table, {
                                    Source: "teacher", Command: "global level time" 
                                }, (global_level_time) => {

                                    if (level_time == global_level_time) {
                                        // write a stats checkpoint
                                        // so we can compare the submit times
                                        obj.GameEngine.record(obj.demo_table,
                                            {
                                                Source: "server",
                                                Command: "stats checkpoint",
                                                Data: "level start " + level
                                            });
                                    }

                                    let LEVEL_DATA = {
                                        Number: info.Number,
                                        Word_ID: info.Word_ID,
                                        Word: info.Word,
                                        Level_Time: level_time
                                    }
                                    
                                    if (level_time > 0) {
                                        obj.GameEngine.updateRecord(obj.demo_table,
                                            {
                                                Source: "server", 
                                                Command: "current-level-time", 
                                                Data: (level_time - 1).toString()
                                            }
                                        );

                                        obj.gameTatkinSocket.emit("level start", LEVEL_DATA);  
                                    } else {
                                        obj.GameEngine.getRecordTime(obj.demo_table, {
                                            Source: "server", Command: "stats checkpoint", Data: "level start " + level }, (stat_time) => {
                                            console.log("level start time: " + stat_time);
                                            // ran out of time [level finished]
                                            for (let student of connected_students) {
                                                // student is an ID
                                                obj.GameEngine.getRecordTime(obj.demo_table, {
                                                    Source: student, Command: "submit-" + level }, (answer) => {
                                                    
                                                    let dataAnswer = JSON.parse(answer.Data);
                                                    let timeAnswer = answer.Time;
                                                    
                                                    let diff = timeAnswer - stat_time;
                                                    
                                                    if (dataAnswer.Answer == info.Truthfulness) {
                                                        // its right
                                                        obj.GameEngine.record(demo_table, {
                                                            Source: student,
                                                            Command: "correct-" + level, 
                                                            Data: "1"
                                                        });

                                                        obj.GameEngine.getRecord(obj.demo_table, { Source: student, Command: "score" }, (current_score) => {
                                                            obj.GameEngine.updateRecord(obj.demo_table, { Source: student, Command: "score", Data: (parseInt(current_score) + 100).toString() });
                                                        });
                                                    } else {
                                                        // wrong
                                                        obj.GameEngine.record(demo_table, {
                                                            Source: student,
                                                            Command: "correct-" + level, 
                                                            Data: "0"
                                                        });
                                                    }

                                                    obj.GameEngine.record(demo_table, {
                                                        Source: student,
                                                        Command: "check-time-" + level, 
                                                        Data: diff.toString()
                                                    });
                                                });
                                            }
                                            
                                            // obj.gameTatkinSocket.emit("level finish", LEVEL_DATA);

                                            sendStats(obj, socket, level);
                                            resetLevelTime(obj);
                                            obj.GameEngine.updateLevel(obj.demo_table, (level+1).toString());
                                        });
                                    }
                                });
                            });
                        });
                    }
                });
            } else if (state == "wait") {

            }
        });
    });
}

/// ON (TEACHERS):
//  - make game public
//  - game start
//  - game pause
//  - game resume
//  - pick words
//  - get generated words
//  - get students info
//
// ON (STUDENTS):
//  - student join
//  - submit

/// EMIT:
//  - connection setup
//  - make game public
//  - done generating words

/// SET:
//  - set students info
//  - set students online
//  - set students connect
//  - set generated words

module.exports.socket = tatkinSocket;