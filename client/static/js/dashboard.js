var YEAR_CHOICE = 0;
var CLASS_CHOICE = 1;
var CLASS_ID = -1;
var CURRENT_SLIDE = 0;
var GAMES_DATA = {};

var yearChoiceScroll, classChoiceScroll;

checkStartedGames();

$(document).ready(function() {
    $(document).slideIt({
        slideWidth: false,
        scaleDown : false,
        mainDuration: 300,
        fadeInDelay: 70
    });

    getClasses();

    $("#gotoBack").click(function() {
        window.location = '/';
    });

    $("#add-class").click(function() {
        $.fn.slideIt.NOW(CURRENT_SLIDE, 1);
        CURRENT_SLIDE = 1;
    });

    $(".gotoBackSlide").click(function() {
        let toSlide = parseInt($(this).attr("data-back"));
        $.fn.slideIt.NOW(CURRENT_SLIDE, toSlide);
        CURRENT_SLIDE = toSlide;
    });

    //Click = CSS::hover, toggles class (.active) //
    var  EnterButton = $("#EnterButton"),
        LeftX = $("#LeftX"),
        RightX = $("#RightX"),
        BothX = $("#BothX"),
        CircleStroke = $("#CircleStroke");
  
    EnterButton.hover(function(){
        LeftX.toggleClass('active');
        RightX.toggleClass('active');
        BothX.toggleClass('delay');
       CircleStroke.toggleClass('delay');
    });

    yearChoiceScroll = new scrollIt("choose-year-scroll", {
        width: 130,
        height: 150,
        lineHeight: 80,
        offset: 40,
        fontSize: 80,
        position: 'absolute',
        center: true,
        customNumbers: true,
        customNumberList: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
    });

    classChoiceScroll = new scrollIt("choose-class-scroll", {
        width: 50,
        height: 150,
        lineHeight: 80,
        offset: 40,
        position: 'absolute',
        fontSize: 80,
        autoSize: true
    });

    yearChoiceScroll.setNumber(YEAR_CHOICE);
    classChoiceScroll.setNumber(CLASS_CHOICE);

    if (isTouchDevice) 
        TouchIt(document, swipeUp, swipeDown, swipeRight, swipeLeft);
    else {
        MouseIt("#choose-year-scroll", swipeUp, swipeDown, swipeRight, swipeLeft);
        MouseIt("#choose-class-scroll", swipeUp, swipeDown, swipeRight, swipeLeft);
    }

    $(".circle-loader").toggleClass("load-complete");
    $(".checkmark").toggle();

    $("#circle-add-class").click(function() {
        event.stopPropagation();
        event.stopImmediatePropagation();

        $.ajax({
            url: '/client/dashboard/query',
            type: 'POST',
            data: { 
                command : 'add-class',
                data : {
                    Class_Year : (YEAR_CHOICE + 2),
                    Class_Number : CLASS_CHOICE
                }
            },
            success: function(response) {
                if (response == 'success') {
                    Swal.fire({
						title: 'Додаден!',
						text: 'Успешно додавте клас!',
						type: 'success'
					}).then(() => {
                        clearDOM("class-list-lobby");
                        setTimeout(getClasses(), 100);
                        $.fn.slideIt.NOW(1, 0);
                        CURRENT_SLIDE = 0;
                    });
                } else {
                    Swal.fire({
						title: 'Проблем',
						text: 'Се појави проблем, пробајте пак...',
						type: 'error'
					}).then(() => {
                        $.fn.slideIt.NOW(1, 0);
                        CURRENT_SLIDE = 0;
                    });
                }
            }
        });
    });

    $("#students-container-title").click(function() {
        postAjax('dashboard/query', { 
            command : 'list-students',
            data : {
                Class_ID : CLASS_ID
            }
        }).then((response) => {
            if (response == "problem") {
                popError();
            } else if (response == "empty") {

            } else {
                clearDOM("students-list-class");
                for (r in response) {
                    putStudent(response[r]);
                }

                if (response.length > 9) {
                    $("#students-list-class").css({
                        'overflow': 'scroll',
                        'overflow-x': 'initial'
                    });
                } else {
                    $("#students-list-class").css({
                        'overflow': 'initial',
                        'overflow-x': 'initial'
                    });
                }
            }

            $.fn.slideIt.NOW(CURRENT_SLIDE, 3);
            CURRENT_SLIDE = 3;
        });
    });

    $("#add-student").click(function() {
        getRequestStudents().then((response) => {
            console.log(response);

            if (response == "problem") {
                popError();
            } else if (response == "empty") {

            } else {
                clearDOM("request-student-list");
                for (r in response) {
                    putStudentRequest(response[r]);
                }

                if (response.length > 9) {
                    $("#request-student-list").css({
                        'overflow': 'scroll',
                        'overflow-x': 'initial'
                    });
                } else {
                    $("#request-student-list").css({
                        'overflow': 'initial',
                        'overflow-x': 'initial'
                    });
                }

                $(".student-mark-net").click(function() {
                    let CHECK_IMG = $(this).find(".check-img");
                    CHECK_IMG.toggleClass("show");
                });
            }

            $.fn.slideIt.NOW(CURRENT_SLIDE, 4);
            CURRENT_SLIDE = 4;

        });
    });

    $("#confirm-students").click(function() {
        let IDs = [];

        $("#request-student-list").children().each(function() {
            let STUDENT_ID = $(this).attr("id");
            STUDENT_ID = STUDENT_ID.split("-")[1];
            STUDENT_ID = parseInt(STUDENT_ID);
            IDs.push(STUDENT_ID);
        });

        console.log(IDs);

        if (IDs.length != 0 && CLASS_ID != -1) {
            addStudentsToClass(IDs).then((response) => {
                if (response == "success") {
                    Swal.fire({
						title: 'Додаден!',
						text: 'Успешно ги додадовте учениците!',
						type: 'success'
					}).then(() => {
                        window.location = '/client/lobby/dashboard/';                        
                    });
                } else {
                    popError();
                }
            });
        } else {
            popError();
        }
    });

    $("#play-game").click(function() {
        getGames().then((response) => {
            if (response == "problem") {
                popError();
            } else if (response == "empty") {
                popError();
            } else {
                GAMES_DATA = response;

                clearDOM("available-games-list");
                for (r in response) {
                    putGame(response[r]);
                }

                if (response.length > 9) {
                    $("#available-games-list").css({
                        'overflow': 'scroll',
                        'overflow-x': 'initial'
                    });
                } else {
                    $("#available-games-list").css({
                        'overflow': 'initial',
                        'overflow-x': 'initial'
                    });
                }
            }

            $.fn.slideIt.NOW(CURRENT_SLIDE, 5);
            CURRENT_SLIDE = 5;

            // EVENT HANDLER FOR WHEN USER CHOOSES A GAME TO BE PLAYED
            clickGame();

            console.log(response);
        });
    });
});

function popError() {
    Swal.fire({
        title: 'Проблем',
        text: 'Се појави проблем, пробајте пак...',
        type: 'error'
    }).then(() => {
        window.location = '/';
    });
}

function addStudentsToClass(ids) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/client/dashboard/query',
            type: 'POST',
            data: { 
                command : 'add-students-to-class',
                data : {
                    Class_ID : CLASS_ID,
                    Students_IDs : ids
                }
            },
            success: function(response) {
                if (response) {
                    if (response == "success") resolve("success");
                    else resolve("failed");
                } else {
                    resolve("problem");
                }
            }
        });
    });
}

function getClasses() {
    postAjax('dashboard/query', { 
        command : 'list-class',
        data : null
    }).then((response) => {
        if (response == "problem") {
            popError();
            return;
        }

        if (response != "empty") {
            clearDOM("class-list-lobby");
            for (var r in response) {
                // console.log(response[r]);
                putClass(response[r]);
            }

            clickClass();
        }
    })
}

function clickClass() {
    // LIST THE ONLINE STUDENTS
    $(".class-net").click(function() {
        event.stopPropagation();
        event.stopImmediatePropagation();

        CLASS_ID = $(this).attr("id").split("-")[1];

        getBestStudents().then((responseBest) => {
            if (responseBest == "problem") {
                popError();
            } else if (responseBest == "empty" || responseBest.length == 0) {
                
            } else {
                clearDOM("best-active-students");
                for (r in responseBest) {
                    putBestStudent(responseBest[r]);
                }
            }
        });

        $.fn.slideIt.NOW(0, 2);
        CURRENT_SLIDE = 2;
    });
}

function clickGame() {
    $(".avail-game-net").click(function() {
        event.stopPropagation();
        event.stopImmediatePropagation();

        GAME_ID = $(this).attr("id").split("-")[1];

        console.log(GAME_ID);

        for (g in GAMES_DATA) {
            if (GAMES_DATA[g].ID == GAME_ID) {
                // window.location = GAMES_DATA[g].Path_Dashboard;
                playGame(GAME_ID).then((response) => {
                    if (response == "problem") {
                        popError();
                    } else if (response == "empty") {
                        popError();
                    } else {
                        window.location = GAMES_DATA[g].Path_Dashboard;
                    }
                });
                break;
            }
        }
    });
}

function playGame(GAME_ID) {
    return postAjax('dashboard/query', { 
        command : 'play-game',
        data : {
            Class_ID : CLASS_ID, 
            Game_ID : GAME_ID
        }
    });
}

function getBestStudents() {
    return postAjax('dashboard/query', { 
        command : 'list-best-students',
        data : {
            Class_ID : CLASS_ID
        }
    });
}

function getRequestStudents() {
    return postAjax('dashboard/query', { 
        command : 'list-request-students',
        data : null
    });
}

function getGames() {
    return postAjax('dashboard/query', { 
        command : 'list-available-games',
        data : {
            Class_ID : CLASS_ID
        }
    });
}

function checkGames() {
    return postAjax('dashboard/query', { 
        command : 'started-games'
    });
}

function checkStartedGames() {
    checkGames().then((response) => {
        if (response == "problem") {
            popError();
        } else if (response == "empty") {
            // no started games
        } else {
            window.location = response.Path_Dashboard;
        }
    });
}

var ClassValues = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
function decodeClass(num) {
    num--;
    if (num >= 0 && num < 10) return ClassValues[num];
    return '-1';
}

function putClass(data) {
    // classYear, classNum, totalStuds, onlineStuds
    let CLASS = document.createElement("div");
    CLASS.classList.add("class-net");
    CLASS.id = "class-" + data.ID;
    let CLASS_NAME = createDIV("class-name");
    // CLASS YEAR
    let CLASS_NAME_YEAR = createDIV("class-name-year");
    CLASS_NAME_YEAR.innerHTML = decodeClass(data.Class_Year);
    // CLASS NUM
    let CLASS_NAME_NUM = createDIV("class-name-num");
    CLASS_NAME_NUM.innerHTML = data.Class_Number;
    // CLASS iNFO
    let CLASS_INFO = createDIV("class-info");
    let CLASS_STUD_ICONS = createDIV("studs-icons");
    CLASS_INFO.appendChild(CLASS_STUD_ICONS);

    let ONLINE_STUDS_ICON = createDIV("online-studs-icon");
    let TOTAL_STUDS_ICON = createDIV("total-studs-icon");

    let ONLINE_STUDS_NUM = document.createElement("div");
    ONLINE_STUDS_NUM.id = "online-studs-num";
    
    // NEEDS DATA!!!
    ONLINE_STUDS_NUM.innerHTML = data.onlineStudents;

    let TOTAL_STUDS_NUM = document.createElement("div");
    TOTAL_STUDS_NUM.id = "total-studs-num";
    
    // NEEDS DATA!!!
    TOTAL_STUDS_NUM.innerHTML = data.offlineStudents;

    CLASS_NAME.appendChild(CLASS_NAME_YEAR);
    CLASS_NAME.appendChild(CLASS_NAME_NUM);

    CLASS_INFO.innerHTML = "Ученици:";
    CLASS_INFO.appendChild(CLASS_STUD_ICONS);
    CLASS_STUD_ICONS.appendChild(ONLINE_STUDS_ICON);
    CLASS_STUD_ICONS.appendChild(TOTAL_STUDS_NUM);
    CLASS_STUD_ICONS.appendChild(TOTAL_STUDS_ICON);
    CLASS_STUD_ICONS.appendChild(ONLINE_STUDS_NUM);

    let CLASS_AFTER = createDIV("class-name-after");

    CLASS.appendChild(CLASS_NAME);
    CLASS.appendChild(CLASS_INFO);
    CLASS.appendChild(CLASS_AFTER);

    document.getElementById("class-list-lobby").appendChild(CLASS);
}

function putStudentRequest(data) {
    // ID, Display_Name, Online

    let STUDENT = createDIV("student-mark-net");
    STUDENT.id = "student-" + data.ID;

    let STUDENT_ICON = createDIV("student-online-icon");
    let STUDENT_CHECK = createDIV("check-img");
    if (data.Online == 1) STUDENT_ICON.classList.add("online");
    else STUDENT_ICON.classList.add("offline");

    let STUDENT_NAME = createDIV("center-v");
    STUDENT_NAME.id = "student-name";
    if (typeof data.Display_Name !== "undefined") {
        STUDENT_NAME.innerHTML = data.Display_Name;
        
        STUDENT.appendChild(STUDENT_ICON).appendChild(STUDENT_CHECK);
        STUDENT.appendChild(STUDENT_NAME);

        document.getElementById("request-student-list").appendChild(STUDENT);
    }
}

function putStudent(data) {
    // ID, Display_Name, Online
    
    let STUDENT = createDIV("student-net");
    STUDENT.id = "student-" + data.ID;

    let STUDENT_ICON = createDIV("student-online-icon");
    if (data.Online == 1) STUDENT_ICON.classList.add("online");
    else STUDENT_ICON.classList.add("offline");

    let STUDENT_NAME = createDIV("center-v");
    STUDENT_NAME.id = "student-name";
    if (typeof data.Display_Name !== "undefined") {
        STUDENT_NAME.innerHTML = data.Display_Name;
        
        STUDENT.appendChild(STUDENT_ICON);
        STUDENT.appendChild(STUDENT_NAME);

        document.getElementById("students-list-class").appendChild(STUDENT);
    }
}

function putBestStudent(data) {
    let STUDENT = createDIV("student-small-net");
    STUDENT.id = "student-" + data.ID;

    let STUDENT_ICON = createDIV("student-small-online-icon");
    if (data.Online == 1) STUDENT_ICON.classList.add("online");
    else STUDENT_ICON.classList.add("offline");

    let STUDENT_NAME = createDIV("center-v");
    STUDENT_NAME.id = "student-small-name";
    if (typeof data.Display_Name !== "undefined") {
        STUDENT_NAME.innerHTML = data.Display_Name;
        
        STUDENT.appendChild(STUDENT_ICON);
        STUDENT.appendChild(STUDENT_NAME);

        document.getElementById("best-active-students").appendChild(STUDENT);
    }
}

function putGame(data) {
    let GAME = createDIV("avail-game-net");
    GAME.id = "game-" + data.ID;

    let GAME_ICON = createDIV("avail-game-icon");

    let GAME_NAME = createDIV("center-v");
    GAME_NAME.id = "avail-game-net";
    if (typeof data.Name !== "undefined") {
        GAME_NAME.innerHTML = data.Name;
        
        GAME.appendChild(GAME_ICON);
        GAME.appendChild(GAME_NAME);

        document.getElementById("available-games-list").appendChild(GAME);
    }
    
}

function createDIV(id) {
    RESULT = document.createElement("div");
    RESULT.classList.add(id);
    return RESULT;
}

function swipeUp(target) {
    if (target == '#choose-year-scroll') {
        if (YEAR_CHOICE < 9) {
            YEAR_CHOICE++;
            yearChoiceScroll.setNumber(YEAR_CHOICE);
        }
    } else if (target == '#choose-class-scroll') {
        if (CLASS_CHOICE <= 20) {
            CLASS_CHOICE++;
            classChoiceScroll.setNumber(CLASS_CHOICE);
        }
    }
}

function swipeDown(target) {
    if (target == '#choose-year-scroll') {
        if (YEAR_CHOICE - 1 != -1) {
            YEAR_CHOICE--;
            yearChoiceScroll.setNumber(YEAR_CHOICE);
        }
    } else if (target == '#choose-class-scroll') {
        if (CLASS_CHOICE - 1 != 0) {
            CLASS_CHOICE--;
            classChoiceScroll.setNumber(CLASS_CHOICE);
        }
    }
}

function swipeRight(target) {
    
}

function swipeLeft(target) {

}