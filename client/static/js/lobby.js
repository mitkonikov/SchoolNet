var NAME = "Name";
var ABOUT = "Description";

function logmeout() {
    window.location = "/client/logout";
}

$(document).ready(function() {
	$("#gotoDashboard").hide();
	$("#tatkin-logo").show();

	//TouchIt(this); DOESNT WORK
	$(document).slideIt({
		scaleDown : false,
		mainDuration: 300,
		fadeInDelay: 70
	});

	// GET BASIC PROFILE INFO
	var BASIC_INFO = getBasicProfileInfo();
	setTimeout(function() {
			if (BASIC_INFO[0]["Role"] == "1") {
				$("#gotoDashboard").slideDown();
			}
		$("#profile-name").text(BASIC_INFO[0]["Display_Name"]);
		if (BASIC_INFO[0]["About"] != "") $("#profile-desc").text(BASIC_INFO[0]["About"]);
		NAME =  $("#profile-name").text();
		ABOUT = $("#profile-desc").text();
	}, 500);

  	window.onmessage = function(e){
    	if (e.data.startsWith('state')) {
			slideInfo = e.data.split("-");
			$.fn.slideIt.NOW(slideInfo[1], slideInfo[2]);
		}
	};

	$("#gotoDashboard").on('mouseenter', function() {
		$("#gotoDashboard-effect").addClass('shover');
	}).on('touchenter', function() {
		$("#gotoDashboard-effect").addClass('shover');
	});

	$("#gotoDashboard").on('mouseleave', function() {
		$("#gotoDashboard-effect").removeClass('shover');
	}).on('touchleave', function() {
		$("#gotoDashboard-effect").removeClass('shover');
	});

	$("#stats-tatkin-cont").hide();
	getStatistics().then((response) => {
		// TODO: MAKE CONTAINERS FOR DIFFERENT GAMES
		if (response != "empty") {
			if (response.Score_Tatkin != 0) {
				$("#no-stats-msg").hide();
				$("#stats-tatkin-cont").children("#stats-xp-cont").children("#stats-xp").text(response.Score_Tatkin);
				$("#stats-tatkin-cont").show();
			}
		}
	});

	$("#search-box").keyup(function (event) {
        if (event.keyCode == 13) {
            search();
        }
    });
});

function changeSWALTheme() {
	$(".swal2-popup").css({
		'background-color': 'var(--color-1-3-1)',
		'color': 'var(--color-text-main)'
	});

	$(".swal2-title").css({
		'color': 'var(--color-text-main)'
	});

	$(".swal2-content").css({
		'color': 'var(--color-text-main)'
	});
}

/**
 * Ajax request that lists all user statistics
 */
function getStatistics() {
	return postAjax('query', {
		stats : 'me'
	});
}

async function changeName() {
	await Swal.fire({
		title: 'Промена на име',
		text: 'Сакате да си го промените името кое се прикажува? Повелете, слободно...',
		input: 'text',
		confirmButtonText: 'ПРОМЕНИ',
		inputPlaceholder: 'Ново име',
		onBeforeOpen: changeSWALTheme,
		inputValidator: (value) => {
			if (!value) return "Хмм... Мислам дека не работи така :)";
			if (value.length < 5) return "Не штеди... Помалку од пет букви не е дозволено!";
		}
	}).then((result) => {
		newNAME = $.trim(result.value);
		if (newNAME) {
			asyncUpdateDatabase('display-name-change', { displayname : newNAME }).then((RESPONSE) => {
				if (RESPONSE == 'success') {
					$("#profile-name").text(newNAME);
				} else {
					Swal.fire({
						title: 'Проблем',
						text: 'Се појави проблем со промената, пробајте пак...',
						type: 'error'
					});
				}
			});
		}
	})
}

async function changeDesc() {
	await Swal.fire({
		title: 'Промена на опис',
		text: 'Описот може да содржи најмногу 250 букви.',
		input: 'text',
		confirmButtonText: 'ПРОМЕНИ',
		inputPlaceholder: 'Нов опис',
		onBeforeOpen: changeSWALTheme,
		inputValidator: (value) => {
			if (!value) return "Хмм... Мислам дека не работи така :)";
			if (value.length < 5) return "Не штеди... Помалку од пет букви не е дозволено!";
			if (value.length > 250) return "Реков веќе! Да нема повеќе од 250 букви!";
		}
	}).then((result) => {
		newDESC = $.trim(result.value);
		if (newDESC) {
			asyncUpdateDatabase('desc-change', { description : newDESC }).then((RESPONSE) => {
				if (RESPONSE == 'success') {
					$("#profile-desc").text(newDESC);
				} else {
					Swal.fire({
						title: 'Проблем',
						text: 'Се појави проблем со промената, пробајте пак...',
						type: 'error'
					});
				}
			});
		}
	})
}

function search() {
	postSearch().then((resolve) => {
		console.log(resolve);
	});
}

function postSearch() {
	return postAjax('query', {
		search_request: $("#search-box").text()
	});
}