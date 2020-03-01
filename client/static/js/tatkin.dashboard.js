var SOCKET;
var TATKIN_SOCKET;
var PUBLIC = false;
var STARTED = false;
var PAUSED = false;
var GENERATING_WORDS = false;
var CAN_REFRESH = true;

var CHECKBOXES = {};
var TEXTBOXES = {
    "level-time-txt" : 10,
    "time-to-start-level" : 10
};

var TEXTSUFFIX = {
    "level-time-txt" : "s",
    "time-to-start-level" : "s"
}

var LEVEL_ANSWERS = [];
var LEVEL_TIMES = [];

$(document).ready(function() {
    SOCKET = io('/game');
    TATKIN_SOCKET = io('/game/tatkin');

    // error handlers
    SOCKET.on("error", onSocketError);
    TATKIN_SOCKET.on("error", onSocketError);

    TATKIN_SOCKET.on("connection setup", (data) => {
        if (!data.firstTime) {
            // if the teacher is not here for the first time
            // TODO: Override: false
            TATKIN_SOCKET.emit("get generated words", { Override: true, wordCount : 10 });
        }
    });

    TATKIN_SOCKET.on("done generating words", () => {
        GENERATING_WORDS = false;

        setTimeout(() => {
            TATKIN_SOCKET.emit("get generated words", { Override: true, wordCount : 10 });
        }, 1000);
    });

    TATKIN_SOCKET.on("set generated words", (data) => {
        console.log(data);
        clearDOM("words-container");
        for (let word in data) {
            addWord("words-container", data[word]);
        }

        $("#pick-btn").removeClass("generating");
        $("#pick-btn").text("Генерирај зборови");

        $(".word-renew").click(refreshWord);
        CAN_REFRESH = true;
    });
    
    TATKIN_SOCKET.on("set students info", (data) => {
        clearDOM("students");

        // console.log(data);
        for (let student of data) {
            addStudent(student);
        }
    });

    TATKIN_SOCKET.on("level start", (data) => {
        TATKIN_SOCKET.emit("get students info");
    });

    TATKIN_SOCKET.on("set statistics level", (data) => {
        // { Level : ... , CorrectAnswers: ... , AverageTime: ... }
        // console.log("stat data: ")
        // console.log(data);

        LEVEL_ANSWERS[parseInt(data.Level)].y = data.CorrectAnswers;
        LEVEL_TIMES[parseInt(data.Level)].y = parseInt(data.AverageTime)/1000;

        reloadStats();
    });
    
    for (let i = 0; i < 10; ++i) {
        LEVEL_ANSWERS.push({ x: i + 1, y : undefined });
        LEVEL_TIMES.push({ x: i + 1, y : undefined });
    }

    // button handlers
    $("#start-button").click(startButtonClicked);
    $("#pick-btn").click(pickButtonClicked);
    $("#pick-done-btn").click(pickDoneButtonClicked);
    $("#pause-button").click(pauseGame);
    $(".refresh-icon").click(refreshStats);
    $(".word-renew").click(refreshWord);

    $("#pause-button").hide();
    $("#play-icon").hide();

    // checkbox handler
    $(".checkbox").click(function() {
        let ID = $(this).attr("id");
        if (typeof CHECKBOXES[ID] === "undefined") {
            CHECKBOXES[ID] = true;
            $(this).addClass("check");
            $("#time-to-start-level").hide();
        } else {
            CHECKBOXES[ID] = !CHECKBOXES[ID];
            if (CHECKBOXES[ID]) {
                $(this).addClass("check");
                $("#time-to-start-level").hide();
            } else {
                $(this).removeClass("check");
                $("#time-to-start-level").show();
            }
        }
    });

    // populate the textboxes
    for (txt in TEXTBOXES) {
        $("#" + txt).children(".txt-value").text(TEXTBOXES[txt] + TEXTSUFFIX[txt]);
    }

    // textbox handlers
    $(".txt-down").click(function() {
        let ID = $(this).parent().attr("id");

        TEXTBOXES[ID]--;
        $(this).parent().children(".txt-value").text(TEXTBOXES[ID] + TEXTSUFFIX[ID]);
    });

    $(".txt-up").click(function() {
        let ID = $(this).parent().attr("id");

        TEXTBOXES[ID]++;
        $(this).parent().children(".txt-value").text(TEXTBOXES[ID] + TEXTSUFFIX[ID]);
    });

    setTimeout(() => {
        reloadStats();
    },1000);

    // get the students
    TATKIN_SOCKET.emit("get students info");
});

function startButtonClicked() {
    if (!PUBLIC) {
        let options = TEXTBOXES;
        for (let check in CHECKBOXES) {
            options[check] = CHECKBOXES[check];
        }

        console.log("Sending options: " + options);

        var childs = document.getElementById("start-button").children;
        setTimeout(() => childs[0].innerHTML = "ЗАПОЧНИ", 1000);

        TATKIN_SOCKET.emit("make game public", options);
        
        // blur the options
        $("#bluring-div").addClass("blur");
        $("#o-s-2").addClass("blur");

        PUBLIC = true;
    } else {
        $("#pause-button").show();
        $("#pause-icon").show();
        $("#start-button").hide();

        TATKIN_SOCKET.emit("game start");
    }
}

function pickButtonClicked() {
    TATKIN_SOCKET.emit("pick words", { wordCount : 10 });
    GENERATING_WORDS = true;
    $("#pick-btn").text("Генерирање зборови...");
    $("#pick-btn").addClass("generating");
}

function pickDoneButtonClicked() {
    $("#bluring-div").addClass("blur");
    
    // TATKIN_SOCKET.emit("done pick words");
}

function addWord(list_id, data) {
    WORD = createDIV("word");
    WORD.innerHTML = data.Word;

    if (data.Truthfulness) {
        WORD.classList.add("true");
    } else {
        WORD.classList.add("false");
    }

    REFRESH_ICON = createDIV("refresh-icon");
    REFRESH_ICON.classList.add("word-renew");
    REFRESH_ICON.id = "word-" + data.Number;
    
    WORD.appendChild(REFRESH_ICON);

    document.getElementById(list_id).appendChild(WORD);
}

function addStudent(data) {
    console.log(data);

    STUDENT = createDIV("student-rank");
    STUDENT.id = "student-" + data.ID;

    DEC = createDIV("onhover-slide");
    RANK_ICON = createDIV("rank-icon");
    STUDENT_NAME = createDIV("student-name");
    STUDENT_NAME.innerHTML = data.Display_Name;
    STUDENT_SCORE = createDIV("student-score");
    
    if (data.Score > 0) STUDENT_SCORE.innerHTML = data.Score;
    else STUDENT_SCORE.innerHTML = 0;

    STUDENT.appendChild(DEC);
    STUDENT.appendChild(RANK_ICON);
    STUDENT.appendChild(STUDENT_NAME);
    STUDENT.appendChild(STUDENT_SCORE);

    document.getElementById("students").appendChild(STUDENT);

    if (data.Online) {
        $("#student-" + data.ID).children(".rank-icon").addClass("connected");
    } else
        $("#student-" + data.ID).children(".rank-icon").removeClass("connected");
}

function refreshStats() {
    let ID = $(this).attr("id");
    if (ID.includes("stats")) {
        ID = ID.split("-stats-refresh")[0];

        // TODO: READ STATS DATA
        document.getElementById(ID + "-frame").contentWindow.postMessage("refresh>screen");
    }
}

function refreshWord() {
    if (CAN_REFRESH) {
        let ID = $(this).attr("id");
        console.log("WORD REFRESH: " + ID);

        TATKIN_SOCKET.emit("pick word", { Number: ID.split("-")[1] });
        setTimeout(() => TATKIN_SOCKET.emit("get generated words", { Override: true, wordCount: 10 }), 100);
    
        CAN_REFRESH = false;
    }
}

function pauseGame() {
    if (!PAUSED) {
        TATKIN_SOCKET.emit("game pause");
        $("#pause-icon").hide();
        $("#play-icon").show();
        PAUSED = true;
    } else {
        TATKIN_SOCKET.emit("game resume");
        $("#play-icon").hide();
        $("#pause-icon").show();
        PAUSED = false;
    }
}

function reloadStats() {
    let HOVER = { x: false, y : true };
    let SUFFIX = { x: "", y : "s" };

    document.getElementById("average-time-frame").contentWindow.postMessage("data>" + JSON.stringify(LEVEL_TIMES));
    document.getElementById("average-time-frame").contentWindow.postMessage("hover>" + JSON.stringify(HOVER));
    document.getElementById("average-time-frame").contentWindow.postMessage("suffix>" + JSON.stringify(SUFFIX));
    
    document.getElementById("guess-rate-frame").contentWindow.postMessage("data>" + JSON.stringify(LEVEL_ANSWERS));
    document.getElementById("guess-rate-frame").contentWindow.postMessage("hover>" + JSON.stringify(HOVER));
}

function onSocketError(err) {
    Swal.fire({
        title: 'Проблем',
        text: 'Се појави проблем, пробајте пак...',
        type: 'error'
    }).then(() => {
        window.location = '/';
    });

    console.log(err);
}