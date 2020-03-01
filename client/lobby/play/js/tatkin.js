var WORD = "";
var WORD_ID = -1;

var LOBBY_SOCKET;
var SOCKET;

var CURRENT_SLIDE = 0;
let GOT_AWARDS = false;

var SUBMITTED = false;
var SMALL_TIMER = 1000;
var ST_INTERVAL;

$(document).ready(function() {
    $(document).slideIt({
        scaleDown : false,
        slideWidth: false,
        translateFactor: false,
        easing: "easeInOutCubic"
    });

    addHover(".option");
    addHover(".full-option");
    addHover("#correct");
    addHover("#incorrect");

    $(".gotoContribute").click(function() {
        window.location = '/client/lobby/contribute/tatkin.html';
    });

    $(".gotoBack").click(function() {
        window.location = '/';
    });

    $("#cont-gotoBack-wrap").click(function() {
        window.location = '/';
    });

    $(".option-contribute").click(function() {
        contribute(this);
    });

    getWord();
    getGames().then((response) => {
        if (response == "empty") {
            return;
        }
        
        clearDOM("game-lobby-GAMES");

        for (r in response) {
            addGameJSON(response[r]);
        }

        // Add a event handler for clicks on the container
        $(".game-lobby-GAME-container").click(function() {
            event.stopPropagation();
            event.stopImmediatePropagation();
    
            GAME_ID = $(this).attr("id").split("-")[1];
            console.log(GAME_ID);
            
            enterGame(GAME_ID);
        });
    });
    
    setUpSocket();

    $("#correct").click(submitCorrect);
    $("#incorrect").click(submitIncorrect);

    // FOR DEV
    // $.fn.slideIt.NOW(CURRENT_SLIDE, 1);
    /*setPlayerAwards({
        Place: 1,
        prevScore: 300,
        gameScore: 800,
        Level: 1,
        maxLevelXP: 3000
    });*/
});

function setUpSocket() {
    // CONNECT TO THE SOCKET.IO
    LOBBY_SOCKET = io('/game');

    LOBBY_SOCKET.on("make game public", function() {
        getGames().then((response) => {
            if (response == "empty") {
                return;
            }
            
            clearDOM("game-lobby-GAMES");
    
            for (r in response) {
                addGameJSON(response[r]);
            }
    
            // Add a event handler for clicks on the container
            $(".game-lobby-GAME-container").click(function() {
                event.stopPropagation();
                event.stopImmediatePropagation();
        
                GAME_ID = $(this).attr("id").split("-")[1];
                console.log(GAME_ID);
                
                enterGame(GAME_ID);
            });
        });
    });
}

function enterGame(GAME_ID) {
    // CONNECT TO THE SOCKET.IO
    $.fn.slideIt.NOW(CURRENT_SLIDE, 2);
    CURRENT_SLIDE = 2;
    GOT_AWARDS = false;
    
    SOCKET = io('/game/tatkin');

    SOCKET.emit("student join", {
        Game_ID : GAME_ID
    });

    /*
    SOCKET.on("game start countdown", (data) => {
        console.log("game starts countdown : " + data.sec);
    });*/

    SOCKET.on("level start", (data) => {
        if (typeof data.Level_Time != undefined) {
            if (data.Level_Time) {
                // set the big timer
                $("#big-timer").text(data.Level_Time);
                
                // set the small timer
                SMALL_TIMER = 1000; // TODO: Find out why..
                clearInterval(ST_INTERVAL);
                ST_INTERVAL = setInterval(() => {
                    if (SMALL_TIMER < 10) {
                        clearInterval(ST_INTERVAL);
                        return;
                    }

                    SMALL_TIMER -= 10;
                    let DISPLAY_TIMER = (parseInt((SMALL_TIMER + Math.random() * 7))).toString();
                    // console.log(DISPLAY_TIMER);

                    if (DISPLAY_TIMER.length < 3) {
                        DISPLAY_TIMER += "0";
                    } 

                    $("#small-timer").text("." + DISPLAY_TIMER);
                }, 10);
            }
        }

        if (data.level == 0) {
            // waiting for the teacher to start the level

        } else {
            // start the level with the given data
            if (CURRENT_SLIDE != 1 || $("#word").text() != data.Word) {
                SOCKET.emit("get player score");

                // reset buttons
                $("#correct").removeClass("submitted");
                $("#correct").removeClass("locked");
                $("#incorrect").removeClass("submitted");
                $("#incorrect").removeClass("locked");

                // update word
                $("#word").text(data.Word);
                $("#word").attr("WORD_NUMBER", data.Number);
                $("#word").attr("WORD_ID", data.Word_ID);

                SUBMITTED = false;

                // try to slide (happens if the slide is not 1)
                $.fn.slideIt.NOW(CURRENT_SLIDE, 1);
                CURRENT_SLIDE = 1;
            }
        }
    });

    SOCKET.on("game pause", (data) => {
        console.log("game paused");

        if (CURRENT_SLIDE != 2) {
            $.fn.slideIt.NOW(CURRENT_SLIDE, 2);
            CURRENT_SLIDE = 2;
        }

        $("#message").text("Професорот ја паузираше играта");
    });

    SOCKET.on("game finish", function(data) {
        console.log("game finished");
        console.log(data);

        if (!GOT_AWARDS) {
            SOCKET.emit("get player awards");
            GOT_AWARDS = true;
        }

        clearDOM("leaderboard-container");

        data.sort((a, b) => { return a.Place - b.Place });

        for (let best of data) {
            addLeaderboardStudent(best);
        }

        // AND SLIDE IT
        $.fn.slideIt.NOW(CURRENT_SLIDE, 3);
        CURRENT_SLIDE = 3;
    });

    SOCKET.on("set player score", setPlayerScore);
    SOCKET.on("set player awards", setPlayerAwards);

    getGameInfo(GAME_ID).then((response) => {
        console.log("GET GAME INFO: ");

        // ID ; Teacher_ID ; Class_ID ; Game_ID ; Room_ID ; Demo_ID ; (Demo_ID_Current)
    });
}

function setPlayerScore(data) {
    $("#score-rt").text(parseInt(data.Score));
}

function setPlayerAwards(data) {
    // personal awards
    // data.Place
    // data.prevScore
    // data.gameScore
    // data.Level
    // data.maxLevelXP
    // data.Correct?

    if (data.prevScore) {
        $("#level-xp").show();
        $("#level-xp").text(data.prevScore + " XP");
    } else {
        $("#level-xp").text("");
    }

    let XP = data.prevScore + data.gameScore;
    let prevXP_WIDTH = 100.00 * data.prevScore / data.maxLevelXP;
    let postXP_WIDTH = 100.00 * XP / data.maxLevelXP;

    $("#final-level").text(data.Level);
    $("#final-xp").text(data.gameScore);
    $("#final-place").text(data.Place);
    $("#progressbar-xp").css("width", prevXP_WIDTH + "%");

    setTimeout(() => {
        // animate the awards

        $({s : prevXP_WIDTH}).animate({ s: postXP_WIDTH }, {
            duration: 3000,
            step: function(now, fx) {
                // now: ex: 30%-60% => 40%
                let diff = postXP_WIDTH - prevXP_WIDTH; // 30%
                let diffNow = now - prevXP_WIDTH; // 10%

                let nowXP = XP * now / postXP_WIDTH;
                $("#progressbar-xp").css("width", now + "%");
                $("#level-xp").text(parseInt(nowXP) + " XP");
            }
        });

        $("#level-xp").text(XP + " XP");

    }, 1000);
}

function getGameInfo(GAME_ID) {
    return postAjax('query', {
        game : 'game-info',
        command : 'get-game-info',
        data : {
            Game_ID: GAME_ID
        }
    });
}

/**
 * Ajax request that lists the public games from the profesors
 */
function getGames() {
    return postAjax('query', {
        game    : 'tatkin',
        command : 'list-games'
    });
}

function addGameJSON(data) {
    addGame(data.ID, data.Fullname, null);
}

/**
 * Adds a div element with the game info
 * @param {*} ID        Game_ID
 * @param {*} PROF      Profesor's name
 * @param {*} STUDS     Number of connected students
 */
function addGame(ID, PROF, STUDS) {
    let GAME = document.createElement("div");
    GAME.classList.add("game-lobby-GAME-container");
    GAME.id = "game-" + ID;
    let GAME_PROF_DIV = document.createElement("div");
    GAME_PROF_DIV.classList.add("prof");
    GAME_PROF_DIV.innerHTML = "Професор: {PROF} <br>".replace("{PROF}", PROF);
    
    if (STUDS != null) {
        GAME_STUD_DIV = document.createElement("div");
        GAME_STUD_DIV.classList.add("stud");
        GAME_STUD_DIV.innerHTML = "Вклучени ученици: {STUDS}".replace("{STUDS}", STUDS); 
    }

    GAME.appendChild(GAME_PROF_DIV);

    if (STUDS != null) GAME.appendChild(GAME_STUD_DIV);
    document.getElementById("game-lobby-GAMES").appendChild(GAME);
}

function addLeaderboardStudent(student_data) {
    let BEST = createDIV("best-scores");
    BEST.id ="best-" + student_data.ID;
    
    let PLACE = createDIV("place");
    PLACE.innerHTML = student_data.Place;

    let NAME = createDIV("name");
    NAME.innerHTML = student_data.Display_Name;

    let SCORE = createDIV("score");
    SCORE.innerHTML = parseInt(student_data.Data);

    BEST.appendChild(PLACE);
    BEST.appendChild(NAME);
    BEST.appendChild(SCORE);

    document.getElementById("leaderboard-container").appendChild(BEST);
}

function displayWord() {
    // TODO: Make it pretty :D
    $("#word").text(WORD);
}

/**
 * Function that gets a random word for contribution
 */
function getWord() {
    return postAjax('query', { 
        game : 'contribute-tatkin',
        command : 'get-word'
    }).then((response) => {
        WORD = response.Word;
        WORD_ID = response.ID;
        displayWord();
    });
}

function submitCorrect() {
    // Number, Word_ID, Word, Answer
    if (SUBMITTED) return;

    console.log("submitting correct");

    $("#correct").addClass("submitted");
    $("#incorrect").addClass("locked");

    let WORD = $("#word").text();
    let WORD_ID = $("#word").attr("WORD_ID");
    let WORD_NUMBER = $("#word").attr("WORD_NUMBER");
    let ANSWER = true;

    let SUBMIT_DATA = {
        Word: WORD,
        Word_ID: WORD_ID,
        Number: WORD_NUMBER,
        Answer: ANSWER
    }

    SOCKET.emit("submit", SUBMIT_DATA);
    SUBMITTED = true;
}

function submitIncorrect() {
    // Number, Word_ID, Word, Answer
    if (SUBMITTED) return;

    console.log("submitting incorrect");

    $("#correct").addClass("locked");
    $("#incorrect").addClass("submitted");

    let WORD = $("#word").text();
    let WORD_ID = $("#word").attr("WORD_ID");
    let WORD_NUMBER = $("#word").attr("WORD_NUMBER");
    let ANSWER = false;

    let SUBMIT_DATA = {
        Word: WORD,
        Word_ID: WORD_ID,
        Number: WORD_NUMBER,
        Answer: ANSWER
    }

    SOCKET.emit("submit", SUBMIT_DATA);
    SUBMITTED = true;
}

function contribute(element) {
    var WHAT = element.id;

    if (WHAT == 'skip') {
        getWord();
        return;
    }

    postAjax('query', { 
        game : 'contribute-tatkin',
        command : 'contribute',
        data: {
            word : WORD,
            word_id: WORD_ID,
            type: WHAT
        }
    }).then((response) => {
        if (response == 'success') {
            getWord();
        } else if (response == 'failed') {
            alert('We have some problems, please try later...');
        }
    });
}

function addHover(classElement) {
    $(classElement).mouseenter(function() {
        BG_NOW = $(this).css('background-color');
        if (sumColor(BG_NOW)) {
            DARKEN_NOW = shadeColor(BG_NOW, -10);
            $(this).css('background-color', DARKEN_NOW);
        }
    });

    $(classElement).mouseleave(function() {
        BG_NOW = $(this).css('background-color');
        if (sumColor(BG_NOW)) {
            LIGHTEN_NOW = shadeColor(BG_NOW, 12);
            $(this).css('background-color', LIGHTEN_NOW);
        }
    });
}

function sumColor(color_0) {
    color_1 = color_0.split('(');
    color = color_1[1].split(',');

    var R = parseInt(color[0]);
    var G = parseInt(color[1]);
    var B = parseInt(color[2]);

    var sum = (R+G+B)/3;

    if (sum > 30) return true;
    return false;
}

function shadeColor(color_0, percent) {
    color_1 = color_0.split('(');
    color = color_1[1].split(',');

    var R = parseInt(color[0]);
    var G = parseInt(color[1]);
    var B = parseInt(color[2]);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}