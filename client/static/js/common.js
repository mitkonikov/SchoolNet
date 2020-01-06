var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));

var scrolling = [];
var $htmlBody = $('html, body');
var $body = $('body');
var canScroll = true;
var slideMoving = false;

/**
 * General function for posting to the server
 * @param {String}  client_url   Posting header
 * @param {*}       data         Data
 */
function postAjax(client_url, data) {
	return new Promise((resolve, reject) => {
        $.ajax({
            url: '/client/' + client_url,
            type: 'POST',
            data: data,
            success: function(response) {
                if (response) {
                    if (response == 'empty') resolve("empty");
                    else resolve(response);
                } else {
                    resolve("problem");
                }
            }
        });
    });
}

/*$(document).ready(function() {
    $({scroll:0}).animate({scroll:100}, {
        step: function(val) {
            window.scrollTo(0, val);
        }, duration: 100
    })
});*/

// Alert Functions
/** Enable the alert on the form 
 *  @param {text_id} ID ID of the div
*/
function alert_text(text_id) {
	$("#" + text_id).css("background-color", "rgba(255, 50, 50, 0.5)");
	$("#" + text_id).css("width", "85%");
	$("#" + text_id + "-alert-sign").show();
}

/** Disable the alert on the form 
 *  @param {text_id} ID ID of the div
*/
function alert_text_dis(text_id) {
	$("#" + text_id).css("background-color", "rgba(255, 255, 255, 0.1)");
	$("#" + text_id + "-alert-sign").hide();
	$("#" + text_id).css("width", "100%");
}

function getSchools() {
    var RESULT = [];
    $.ajax({
		url: '/client/dynamics/school.json',
		type: 'GET',
		dataType: "json",
		success: function(response) {
            for (var i = 0; i < response.length; ++i) {
                RESULT.push(response[i]);
            }
		}
    });
    return RESULT;
}

function getBasicProfileInfo(data) {
    return postAjax('query', data);
}

async function asyncUpdateDatabase(COMMAND, DATA) {
    var RESPONSE;
    await $.ajax({
		url: '/client/update',
		type: 'POST',
        data: { command : COMMAND, data : DATA },
		success: function(response) {
            RESPONSE = response;
		}
    });

    return RESPONSE;
}

var ELEMENT;

$(document).ready(function() {
    $(".ready").css('display', 'block');

    var EveryButton = $(".btn"),
        SpecialButton = $(".btn-special");

    EveryButton.click(function() { 
        var SELECTOR = $(this);
        var ID = SELECTOR.attr('id');
        $("#" + ID).addClass('active');
        setTimeout(function() { $("#" + ID).removeClass('active'); }, 400);
    });

    SpecialButton.click(function() {
        var SELECTOR = $(this);
        var ID = SELECTOR.attr('id');
        $("#" + ID).addClass('active');
        setTimeout(function() { $("#" + ID).removeClass('active'); }, 400);
    });

    var SCHOOLS = getSchools();
    setTimeout(function() {
        for (var i = 0; i < SCHOOLS.length; ++i) {
            $("#schools").append('<option value="' + (i + 1) + '">' + SCHOOLS[i].School + '</option>');
        }
    }, 500);
});

/**
* Add the Mouse Wheel Event Handler to enable scrolling detection
*/
function SchoolNetAddMouseWheelHandler(){
    var prefix = '';
    var _addEventListener;

    if (window.addEventListener){
        _addEventListener = "addEventListener";
    }else{
        _addEventListener = "attachEvent";
        prefix = 'on';
    }

     // detect available wheel event
    var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
              document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
              'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox


    if(support == 'DOMMouseScroll'){
        document[ _addEventListener ](prefix + 'MozMousePixelScroll', SchoolNetMouseWheelHandler, false);
    }

    //handle MozMousePixelScroll in older Firefox
    else{
        document[ _addEventListener ](prefix + support, SchoolNetMouseWheelHandler, false);
    }
}

/**
* Scrolling detection using mousewheel event
*/
function SchoolNetMouseWheelHandler(e) {
    var curTime = new Date().getTime();
    var isNormalScroll = $(COMPLETELY_SEL).hasClass(NORMAL_SCROLL);

    //autoscrolling and not zooming?
    // if(options.autoScrolling && !controlPressed && !isNormalScroll){
        // cross-browser wheel delta
        e = e || window.event;
        var value = e.wheelDelta || -e.deltaY || -e.detail;
        var delta = Math.max(-1, Math.min(1, value));

        var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
        var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

        //Limiting the array to 150 (lets not waste memory!)
        if(scrollings.length > 149){
            scrollings.shift();
        }

        //keeping record of the previous scrollings
        scrollings.push(Math.abs(value));

        //preventing to scroll the site on mouse wheel when scrollbar is present
        if(options.scrollBar){
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
        }

        //time difference between the last scroll and the current one
        var timeDiff = curTime-prevTime;
        prevTime = curTime;

        //haven't they scrolled in a while?
        //(enough to be consider a different scrolling action to scroll another section)
        if(timeDiff > 200){
            //emptying the array, we dont care about old scrollings for our averages
            scrollings = [];
        }

        if(canScroll){
            var averageEnd = getAverage(scrollings, 10);
            var averageMiddle = getAverage(scrollings, 70);
            var isAccelerating = averageEnd >= averageMiddle;

            //to avoid double swipes...
            if(isAccelerating && isScrollingVertically){
                //scrolling down?
                if (delta < 0) {
                    scrolling('down');

                //scrolling up?
                }else {
                    scrolling('up');
                }
            }
        }

        return false;
}

/**
* As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
* this way we make sure that is really a touch event what IE is detecting.
*/
function isReallyTouch(e){
    //if is not IE   ||  IE is detecting `touch` or `pen`
    return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
}

function swipeUp() {
    alert("Up");
}

function TouchIt(document, swipeUp, swipeDown, swipeRight, swipeLeft) {
    var
        ce = function(e, n) {
            var a = document.createEvent("CustomEvent");
            a.initCustomEvent(n, true, true, e.target.detail);
            e.target.dispatchEvent(a);
            a = null;
            return false
        },
        nm = true,
        sp = {
            x: 0,
            y: 0
        },
        ep = {
            x: 0,
            y: 0
        },
        touch = {
            touchstart: function(e) {
                sp = {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY
                }
            },
            touchmove: function(e) {
                nm = false;
                ep = {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY
                }
            },
            touchend: function(e) {
                if (nm) {
                    ce(e, 'fc')
                } else {
                    var x = ep.x - sp.x,
                        xr = Math.abs(x),
                        y = ep.y - sp.y,
                        yr = Math.abs(y);
                    if (Math.max(xr, yr) > 20) {
                        ce(e, (xr > yr ? (x < 0 ? swipeLeft(e.target.detail) : swipeRight(e.target.detail)) : (y < 0 ? swipeUp(e.target.detail) : swipeDown(e.target.detail))))
                    }
                };
                nm = true;
            },
            touchcancel: function(e) {
                nm = false
            }
        };
    for (var a in touch) {
        document.addEventListener(a, touch[a], false);
    }
}

function MouseIt(element, swipeUp, swipeDown, swipeRight, swipeLeft) {
    var
        ce = function(e, n) {
            var a = document.createEvent("CustomEvent");
            a.initCustomEvent(n, true, true, element);
            e.target.dispatchEvent(a);
            a = null;
            return false
        },
        nm = true,
        sp = {
            x: 0,
            y: 0
        },
        ep = {
            x: 0,
            y: 0
        },
        mouse = {
            mousedown: function(e) {
                sp = {
                    x: e.clientX,
                    y: e.clientY
                }
            },
            mousemove: function(e) {
                nm = false;
                ep = {
                    x: e.clientX,
                    y: e.clientY
                }
            },
            mouseup: function(e) {
                if (nm) {
                    ce(e, 'fc')
                } else {
                    var x = ep.x - sp.x,
                        xr = Math.abs(x),
                        y = ep.y - sp.y,
                        yr = Math.abs(y);
                    if (Math.max(xr, yr) > 10) {
                        ce(e, (xr > yr ? (x < 0 ? swipeLeft(element) : swipeRight(element)) : (y < 0 ? swipeUp(element) : swipeDown(element))))
                    }
                };
                // nm = true;
            },
            mouseleave: function(e) {
                nm = false
            }
        };

    $(element).on('mousedown', mouse['mousedown']);
    $(document).on('mousemove', mouse['mousemove']);
    $(document).on('mouseup', mouse['mouseup']);
    $(document).on('mouseleave', mouse['mouseleave']);
}

/**
 * Creates a DIV element
 * @param {String} Class The class attribute of the div
 */
function createDIV(Class) {
    RESULT = document.createElement("div");
    RESULT.classList.add(Class);
    return RESULT;
}

/**
 * Removes every children in a DOM element
 * Used for clearing custom lists
 * @param {*} id ID of the container 
 */
function clearDOM(id) {
    myNode = document.getElementById(id);
    if (myNode != null) {
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }
}

function logmeout() {
    window.location = "/client/logout";
}