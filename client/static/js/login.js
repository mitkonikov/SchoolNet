var firstTime_1 = true;
var beenIncorrect = false;
var logging = true; // Used for forgetting-password-form

// A function for sending an AJAX REQUEST
/** Function for sending and receiving the AJAX request on the login form */
function AJAXlogmein(school) {
  var username = $('input#nickname').val();
	var password = $('input#password').val();
	var regex = /^[абвгдѓежзѕијклљмнњопрстќуфхцчџшАБВГДЃЕЖЗЅИЈКЛЉМНЊОПРСТЌУФХЦЧЏШ\w]*$/g;
	if (school != undefined) {
	  if ($.trim(username) != '' && regex.test(username)) {
			alert_text_dis("nickname");
			if ($.trim(password) != '') {
				if (password.length >= 8) {
					alert_text_dis("password");
					if (!firstTime_1 && beenIncorrect) {
						$("#alert-login-form").animate({height: 'toggle'});
					} else if (firstTime_1) { firstTime_1 = false; }
					$.ajax({
						type: "POST",
						url: "/client/signin",
						data: { username : username, password : password, school : school },
						success: function (response) {
							if (response == "success") {
								// Redirect to home
								window.location = "/client/lobby/";
							} else if (response == "incorrect") {
								alert_text("nickname");
								alert_text("password");
								$("#form-msg").text("Прекарот и/или лозинката се погрешни!");
								$("#alert-login-form").animate({height: 'toggle'});

								registerBtnBool = false;
								$("#registerBtn").text("Ја заборави лозинката?");
								beenIncorrect = true;
							} else if (response == "school not registered") {
								$("#form-msg").text("Училиштето не е регистрирано!");
								$("#alert-login-form").animate({height: 'toggle'});
								beenIncorrect = true;
							} else if (response == "not verified") {
								// Redirect to verify.php for verification
								window.location = "verify.html";
							} else {
								$("#form-msg").text("Се појави проблем во вашата најава. Пробајте пак да се најавите. Администраторот е известен!");
								$("#alert-login-form").animate({height: 'toggle'});
								beenIncorrect = true;
								console.log(response);
							}
						}
					});
				} else {
					alert_text("password"); // Alert that the password field is not sufficiently long!
				}
			} else {
				alert_text("password"); // Alert that the password field is empty!
			}
	  } else {
			alert_text("nickname"); // Alert that the email field is empty!
		}
	} else {
		$("#schoolBtn").css("background-color", "var(--color-border-alert)");
	}
}