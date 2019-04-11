var NAME = "Name";
var ABOUT = "Description";

function logmeout() {
    window.location = "/client/logout";
}

PAGE_CURRENT = 1;

OFFSETS = [[-13, -13],
           [-13, -13],
           [-13, -13]];

POSITIONS = [[-60, 0],
             [0, 0],
             [60, 0]];

SHAPES = ["tri", "rect", "circle"];

KEYS = {};
KEYS["OPACITY"] = 0.65;

class Center {
  constructor(X, Y) {
    this.X = X;
    this.Y = Y;
  }
}

CENTER = new Center(150, 32);

$(document).ready(function() {
  //TouchIt(this); DOESNT WORK
  $(document).slideIt({
    scaleDown : false,
    mainDuration: 300,
    fadeInDelay: 70,
    fadeInOut: false
  });

  // GET BASIC PROFILE INFO
  var BASIC_INFO = getBasicProfileInfo();
  setTimeout(function() {
    $("#profile-name").text(BASIC_INFO[0]["Display_Name"]);
    $("#profile-desc").text(BASIC_INFO[0]["About"]);
	  NAME =  $("#profile-name").text();
	  ABOUT = $("#profile-desc").text();
  }, 500);

  window.onmessage = function(e){
    if (e.data.startsWith('state')) {
      slideInfo = e.data.split("-");
      $.fn.slideIt.NOW(slideInfo[1], slideInfo[2]);
    }
};
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

function swipeLeft() {
  if (PAGE_CURRENT == 0) changeTo1();
  else if (PAGE_CURRENT == 1) changeTo2();
  else if (PAGE_CURRENT == 2) changeTo0();
}

function swipeRight() {
    if (PAGE_CURRENT == 0) changeTo2();
    else if (PAGE_CURRENT == 1) changeTo0();
    else if (PAGE_CURRENT == 2) changeTo1();
}

NAME_CLASS = ".h-";
NAME = "#header-";
NAME_MAIN = NAME + "main-";

function changeTo2() {
    if (PAGE_CURRENT != 2) {
        /*if (PAGE_CURRENT == 1)
            conIt(NAME, "tri", "rect", "circle", "left");
        else if (PAGE_CURRENT == 0)
            conIt(NAME, "circle", "tri", "rect", "right");*/

    $.fn.slideIt.NOW(PAGE_CURRENT, 2);
    PAGE_CURRENT = 2;
    
    $("#header-main-text").text("PROFILE");
    }
}

function changeTo1() {
    if (PAGE_CURRENT != 1) {
        if (PAGE_CURRENT == 2)
        	conIt(NAME, "rect", "circle", "tri", "right");
        else if (PAGE_CURRENT == 0)
        	conIt(NAME, "circle", "tri", "rect", "left");
        
      $.fn.slideIt.NOW(PAGE_CURRENT, 1);
      PAGE_CURRENT = 1;
    
      $("#header-main-text").text("PLAY");
    }
}

function changeTo0() {
    if (PAGE_CURRENT != 0) {
        if (PAGE_CURRENT == 1)
          conIt(NAME, "tri", "rect", "circle", "right");
        else if (PAGE_CURRENT == 2)
          conIt(NAME, "rect", "circle", "tri", "left");

    $.fn.slideIt.NOW(PAGE_CURRENT, 0);
    PAGE_CURRENT = 0;
    $("#header-main-text").text("NEWS");
    }
}

function initHandlers() {
    $(NAME_MAIN + "circle").click(function() {
        changeTo2();
    });

    $(NAME_MAIN + "rect").click(function() {
        changeTo1();
    });

    $(NAME_MAIN + "tri").click(function() {
        changeTo0();
    });
}

function conIt(name, fig1, fig2, fig3, side) {
  nameIn = name + "main-";
  return moveIt(nameIn + fig1, nameIn + fig2, nameIn + fig3, side);
}

function getOriginName(fig) {
  return fig.split("-")[2];
}

function getOriginIndex(fig) {
  for (var i = 0; i < SHAPES.length; ++i) {
    if (SHAPES[i] == fig) {
      	return i;
    }
  }
  
  return -1;
}

function initHeader() {
  for (var i = 0; i < SHAPES.length; ++i) {
		$(NAME_MAIN + SHAPES[i]).css({
			x : (parseFloat(CENTER.X) + parseFloat(OFFSETS[i][0]) + parseFloat(POSITIONS[i][0])),
			y : (parseFloat(CENTER.Y) + parseFloat(OFFSETS[i][1]) + parseFloat(POSITIONS[i][1]))
		});
  }
}

function fromToX(figFrom, figTo) {
	//fromIndex = getOriginIndex(getOriginName(figFrom));
	//toIndex = getOriginIndex(getOriginName(figTo));
	fromPos = POSITIONS[figFrom][0];
	toPos = POSITIONS[figTo][0];
	
	return Math.abs(toPos - fromPos);
}

function moveIt(fig1, fig2, fig3, side) {
  if (side == "left") {
    
    fig3trX = parseFloat($(fig3).css('x'));
    fig3trY = parseFloat($(fig3).css('y'));
		fromTo3 = fromToX(2, 1);
    $({translate : 0}).animate({ translate: 1.00 },
            { step: function(now, fx) {
             		scaleNow = 1; // now*1.7;
                opacityNow = now;
                index_current = getOriginIndex(getOriginName(fig3));
                translateNowX = fig3trX-(now*fromTo3);
                translateNowY = fig3trY;
              
                if (scaleNow < 1) scaleNow = 1;
                if (opacityNow < KEYS["OPACITY"]) opacityNow = KEYS["OPACITY"];
                $(fig3).css({
									x : translateNowX,
									y : translateNowY,
									opacity : opacityNow
								});
            }, duration: "300", easing: "swing", queue: false, 
						 function () { 
							 //$(this).removeAttr('style'); 
						 }
        });
    
    fig2trX = parseFloat($(fig2).css('x'));
    fig2trY = parseFloat($(fig2).css('y'));
		fromTo2 = fromToX(1, 0);
    $({translate : 0}).animate({ translate: 1.00 },
            { step: function(now, fx) {
                index_current = getOriginIndex(getOriginName(fig2));
                translateNowX = fig2trX-(now*fromTo2);
                translateNowY = fig2trY;
                scaleNow = 1; // fig2sc-(now/1.7);
                opacityNow = 1 - now;
              
                if (opacityNow < KEYS["OPACITY"]) opacityNow = KEYS["OPACITY"];
							
                $(fig2).css({
									x : translateNowX,
									y : translateNowY,
									opacity : opacityNow
								});
            }, duration: "300", easing: "swing", queue: false, 
						 function () { 
							 //$(this).removeAttr("style"); 
						 }
        });

    fig1trX = parseFloat($(fig1).css('x'));
	fig1trY = parseFloat($(fig1).css('y'));
	
    $({translate : 0}).animate({ translate: 1.00 },
        { step: function(now, fx) {
            translateNowX = fig1trX+now*-40;
            translateNowY = fig1trY;
            opacityNow = 1-now;
             	
			$(fig1).css({
				x : translateNowX,
				y : translateNowY,
				opacity: opacityNow
			});
        }, duration: "300", easing: "swing", queue: false
    });
    
	$(fig1 + "-repeat").css('x', fig3trX);
	$(fig1 + "-repeat").css('y', fig3trY);

    $(fig1 + "-repeat").css("opacity", "0");
	$(fig1 + "-repeat").css("display", "block");
	
    $({ translate : 0.00 }).animate({ translate: 1.00 },
            { step: function(now, fx) {
				translateNowX = parseFloat(CENTER.X) + POSITIONS[2][0]+40-now*(40);
                translateNowX += parseFloat(OFFSETS[index_current][0]);
                translateNowY = CENTER.Y;
                translateNowY += parseFloat(OFFSETS[index_current][1]);
                opacityNow = now;
              
                if (opacityNow > KEYS["OPACITY"]) opacityNow = KEYS["OPACITY"];
              	
							$(fig1 + "-repeat").css({
									x : translateNowX,
									y : translateNowY,
									opacity: opacityNow
								});
            }, duration: "300", easing: "swing", queue: false
        });
    
    setTimeout(function() {     
      index_current = getOriginIndex(getOriginName(fig1));
			
			$(fig1).css({
				x : (parseFloat(CENTER.X) + parseFloat(OFFSETS[index_current][0]) + parseFloat(POSITIONS[2][0])),
				y : (parseFloat(CENTER.Y) + parseFloat(OFFSETS[index_current][1]) + parseFloat(POSITIONS[2][1]))
								});
			
      $(fig1).css("display", "block");
      $(fig1).css("opacity", "0.65");
      $(fig1 + "-repeat").css("display", "none");
    }, 500);
    
    return true;
  }
  
  return false;
}

$(document).ready(function() {
    initHeader();
    initHandlers();
});