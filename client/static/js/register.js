var student;
var school = 1;
var firstname;
var lastname;
var email;
var teacheremail;
var username;
var password;
var gender;

$(document).ready(function() {
    $().slideIt();
    $("#school-form").css('display', 'block');

    $('#schools').change(function () {
        if ($("#schools option:selected").val() != 0) {
            $("#schools").css({
                'border-color': 'unset',
                'border-width': '0px',
                'background-color': 'white',
                'color': '#000'
            });
            school = $("#schools option:selected").val();
        } else {
            $("#schools").css({
                'border-color': 'var(--color-border-alert)',
                'border-width': '2px',
                'background-color': '#a24e4d',
                'color': '#fff'
            });
        }
    });
});

function nextPage() {
    changeSlide(1, 2);
}

function changeSlide(slide1, slide2) {
    if (slide2 > slide1) {
        if (slide1 == 1) {
            if (!checkSlide1()) return false;
        }

        if (slide1 == 2) {
            if (!checkSlide2()) return false;
        }
    }

    $.fn.slideIt.NOW(slide1, slide2);

    return true;
}

function pickProfessor() {
    student = false;
    $("#teacher-email-div").hide();
    $("#username-note").text("И уште едно нешто... Бидете креативни со корисничкото име!")
    $("#username").attr("placeholder", "Корисничко име")
    changeSlide(0, 1);
}

function pickStudent() {
    student = true;
    $("#teacher-email-div").show();
    changeSlide(0, 1);
}

function pickMale() {
    gender = "Male";
    $("#maleBtn").removeClass('active');
    $("#maleBtn").css('background-color', 'var(--color-border-success)');
    $("#femaleBtn").css('background-color', 'var(--color-button-main)');
}

function pickFemale() {
    gender = "Female";
    $("#femaleBtn").removeClass('active');
    $("#femaleBtn").css('background-color', 'var(--color-border-success)');
    $("#maleBtn").css('background-color', 'var(--color-button-main)');
}

function checkSlide1() {
    var failed = false;

    if (gender == null) {
        $("#femaleBtn").css('background-color', 'var(--color-border-alert)');
        $("#maleBtn").css('background-color', 'var(--color-border-alert)');
        failed = true;
    }

    if ($("#schools option:selected").val() == 0) {
        $("#schools").css({
            'border-color': 'var(--color-border-alert)',
            'border-width': '2px',
            'background-color': '#a24e4d',
            'color': '#fff'
        });

        failed = true;
    }

    firstname = $.trim($("input#firstname").val());
    lastname = $.trim($("input#lastname").val());
    

    if (firstname == "") {
        $("input#firstname").css("background-color", "rgba(255, 50, 50, 0.5)");

        $("input#firstname").on('input', function() {
            if ($("input#firstname").val() != "") {
                $("input#firstname").css("background-color", "rgba(255, 255, 255, 0.1)");
            }
        });

        failed = true;
    }

    if (lastname == "") {
        $("input#lastname").css("background-color", "rgba(255, 50, 50, 0.5)");

        $("input#lastname").on('input', function() {
            if ($("input#lastname").val() != "") {
                $("input#lastname").css("background-color", "rgba(255, 255, 255, 0.1)");
            }
        });

        failed = true;
    }

    if (failed) return false;

    return true;
}

function emailCheck(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkSlide2() {
    var failed = false;
    email = $.trim($("input#email").val());
    teacheremail = $.trim($("input#teacher-email").val());
    password = $.trim($("input#password").val());

    if (email == "" || !emailCheck(email)) {
        alert_text("email");
        failed = true;
    } else {
        alert_text_dis("email");
    }

    if (student) {
        if (teacheremail == "" || !emailCheck(teacheremail)) {
            alert_text("teacher-email");
            $("#teacher-email-note").slideDown();
            failed = true;
        } else {
            alert_text_dis("teacher-email");
        }
    }

    if (password == "") {
        alert_text("password");
        failed = true;
    } else {
        alert_text_dis("password");
    }

    if (failed) return false;
    return true;
}

function logEverything() {
    console.log(student);
    console.log(school);
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(teacheremail);
    console.log(gender);
    console.log(username);
    console.log(password);
}

function registerme() {
    /*if (typeof(Storage) !== "undefined") {
        localStorage.setItem("schoolnet-register-student", student);

        localStorage.setItem("schoolnet-register-gender", gender);
        localStorage.setItem("schoolnet-register-firstname", firstname);
        localStorage.setItem("schoolnet-register-lastname", lastname);
        localStorage.setItem("schoolnet-register-school", school);

        localStorage.setItem("schoolnet-register-email", email);
        localStorage.setItem("schoolnet-register-teacheremail", teacheremail);
    }*/

    username = $("input#username").val();
    var regex = /^[абвгдѓежзѕијклљмнњопрстќуфхцчџшАБВГДЃЕЖЗЅИЈКЛЉМНЊОПРСТЌУФХЦЧЏШ\w]*$/g;
    if (!regex.test(username)) {
        alert_text("username");
        if (student)
            $("#username-note").text("Вашиот прекар содржи карактери кои не се дозволени. Прочитајте овде.");
        else
            $("#username-note").text("Вашото корисничко име содржи карактери кои не се дозволени. Прочитајте овде.");
        return false;
    }

    username = $.trim(username);

    if (username == "" || username.length < 5) {
        alert_text("username");
        $("#username-note").text("Треба да содржи минимум 5 карактери.");
        return false;
    }

    $.ajax({
        type: "POST",
        url: "/client/registerme",
        data: { student: student, username : username, password : password, school : parseInt(school), firstname : firstname, lastname : lastname, email : email, teacheremail : teacheremail, gender : gender },
        success: function (response) {
            if (response == "success") {
                Swal.fire({
                    title: 'Супер!',
                    text: 'Регистрирани сте!',
                    type: 'success'
                }).then(() => {
                    // Redirect to home
                    window.location = "/";
                });
            } else if (response == "already taken") {
                // Come back to the username
                $("#username-note").text("Корисничкото име/Прекарот е веќе искористено во вашето училиште.");
                $("#username-note").css('background-color', 'var(--color-border-alert)');
            } else if (response == "teacher email problem") {
                // Come back to the teachers mail
                $("#teacher-email-note").slideDown();
                $("#teacher-email-note").text("Е-поштата на професорот која ја внесовте не е во нашата база на податоци. Проверете пак.");
                $("#teacher-email-note").css('background-color', 'var(--color-border-alert)');
                $.fn.slideIt.NOW(3, 2);
            } else {
                $("#username-note").text("Се појави проблем во вашата регистрација. Пробајте пак да се регистрирате. Администраторот е известен!");
                $("#username-note").css('background-color', 'var(--color-border-alert)');
				console.log(response);
            }

        }
    });

    // logEverything();
}