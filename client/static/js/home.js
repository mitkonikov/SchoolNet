var choosingSchool = false;
var recentSchool = 1;
var school;
var registerBtnBool = true;

$(document).ready(function() {
    $('#fullPage').fullpage({
        sectionsColor: ['#44aed8', '#d8434d', 'rgb(236, 254, 72)'],
        scrollBar: false,
        navigation: true
    });

    $(document).foundation();
    
    if (localStorage.getItem('schoolnet-recent-school') !== null) {
        school = localStorage.getItem('schoolnet-recent-school');

        var SCHOOLS = getSchools()
        setTimeout(function() {
            $("#schoolBtn").text(SCHOOLS[school-1].School);
            $("#schoolBtn").css('font-size', '0.85em');
            $("#schoolBtn").css("background-color", "var(--color-border-success)");
        }, 500);
    }

    $("#password-alert-img").mouseenter(function() {
        if (!beenIncorrect) $('#password-tooltip').foundation('show');
    });
    
    $("#password-alert-img").mouseleave(function() {
        if (!beenIncorrect) $('#password-tooltip').foundation('hide');
    });

    $(document.body).css("display", "block");

    $("#password").keyup(function (event) {
        if (event.keyCode == 13) {
            logmein();
        }
    });
    
    $("#password").focusout(function() {
        if ($("#password").val() == "" || $("#password").val().length < 8) {
            alert_text("password"); // Alert that the password field is empty!
        } else {
            alert_text_dis("password"); // Disable the alert
        }
    });

    if (isTouchDevice || isTouch) {
        $("#password-tooltip").css("display", "none");
    }

    $("#parents-info-form").click(function() {
        $("#parents-info-form").addClass("rotation");
        setTimeout(() => {
            clearDOM("parents-info-form");
            let newINFO = createDIV("new-info");
            newINFO.innerHTML = "Контакт информации: <br> mitkonikov01@gmail.com";
            newINFO.classList.add("reverse-rotation");
            document.getElementById("parents-info-form").appendChild(newINFO);
            $("#parents-info-form").addClass("rotation2");
        }, 300);
    });
});

function chooseSchool() {
    $("#statSection").css("background-color", '#44aed8');
    $("#school-form").show();
    $("#stats").hide();
    $.fn.fullpage.moveTo(2);

    choosingSchool = true;
}

$(document).on("sectionUp", function() {
    if (choosingSchool) {
        resetStatSection();
    }
});

$(document).on("sectionDown", function() {
    if (choosingSchool) {
        resetStatSection();
    }
});

function resetStatSection() {
    $("#schoolBtn").removeClass('active');
    $("#schoolBtn").css("background-color", "var(--color-border-success)");

    $(this).delay(1000).queue(function() {
        $("#statSection").css("background-color", '#d8434d');
        $("#school-form").hide();
        $("#stats").show();
        choosingSchool = false;

        $(this).dequeue();
    });
}

function pickRecentSchool() {
    school = recentSchool;
    $('#schools option').each(function() {
        if($(this).val() == recentSchool) {
            $("#schoolBtn").text($(this).text());
        }
    });

    $("#schoolBtn").css('font-size', '0.85em');
    $.fn.fullpage.moveTo(1);
    resetStatSection();
}

function pickSchool() {
    $('#schools option').each(function() {
        if($(this).is(':selected')) {
            school = $(this).val();
        }
    });

    $("#schoolBtn").text($("#schools option:selected").text());
    $("#schoolBtn").css('font-size', '0.85em');

    $.fn.fullpage.moveTo(1);
    resetStatSection();
}

function gotoRegister() {
    if (registerBtnBool) {
        window.location = "/client/home/register.html";
    } else {
        window.location = "/client/home/forgot.html";
    }
}

function logmein() { 
    localStorage.setItem("schoolnet-recent-school", school);
    AJAXlogmein(school); 
}