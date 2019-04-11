/*!
 * Slide IT - Simple, light-weight javascript library for sliders
 * https://github.com/mitkonikov/JS
 * @license MIT licensed
 *
 * Copyright (C) 2019 
 * Mitko Nikov
 * 
 * Depended upon jquery
 * Inspired by fullpage.js
 *  => https://github.com/alvarotrigo/fullPage.js
 */

(function(global, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
          return factory($, global, global.document, global.Math);
        });
    } else if (typeof exports === "object" && exports) {
        module.exports = factory(require('jquery'), global, global.document, global.Math);
    } else {
        factory(jQuery, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : this, function($, window, document, Math, undefined) {
    'use strict';

    var WRAPPER =               "sit-wrapper";
    var WRAPPER_SEL =           '.' + WRAPPER;

    var SLIDE =                 "sit-slide";
    var SLIDE_SEL =             '.' + SLIDE;

    var SLIDE_ID_SEL =          "#sit-slide-";

    var INACTIVE_SLIDE =        "sit-inactive";
    var INACTIVE_SLIDE_SEL =    '.' + INACTIVE_SLIDE;

    var ACTIVE_SLIDE =          "sit-active";
    var ACTIVE_SLIDE_SEL =      '.' + ACTIVE_SLIDE;

    var SIDE_LEFT =             "left";
    var SIDE_RIGHT =            "right";

    var $window = $(window);
    var $document = $(document);

    $.fn.slideIt = function(options) {
        // common jQuery objects
        var $htmlBody = $('html, body');
        var $body = $('body');

        var SIT = $.fn.slideIt;

        // Create some defaults, extending them with any options that were provided
        options = $.extend({
            scaleDown: true,
            scaleDownFactor: 0.9,                           // 0 - 1 (float range)
            scaleDownDuration: 200,                         // NEEDS WORK
            translateFactor: false,                         // in px
            slideWidth: 15.75,                              // in em
            mainDuration: 500,
            fadeInDelay: 200,
            fadeInOut: true,
            easing: "linear"                                // NEEDS WORK
        }, options);

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));

        $(INACTIVE_SLIDE_SEL).css('display', 'none');
        $(SLIDE_SEL).css({
            'position': 'absolute',
            'width': options.slideWidth + 'em'
        });

        if (options.translateFactor == false) {
            options.translateFactor = $(".sit-section").width();
        }

        /** 
         * SlideIt is the main function that animates the sliding between `slide1` and `slide2` 
         * @param {slide1} slide1 The first slide (string)
         * @param {slide1} slide1 The second slide (string)
         * */
        SIT.NOW = function(slide1, slide2) {
            var settings = {
                duration: options.mainDuration, 
                queue: false, 
                easing: options.easing
            }

            if (!options.scaleDown) options.scaleDownFactor = 1;

        	if (slide2 > slide1) {
                slideRight(slide1, slide2, settings)
            } else if (slide1 > slide2) {
                slideLeft(slide1, slide2, settings)
            }
        }

        function slideRight(slide1, slide2, settings) {
            // TRANSLATE
            positionSecondSlide(slide2, SIDE_RIGHT);

            // 1. SCALED DOWN
            // 2. TRANSLATED WHILE FADE OUT
            if (options.scaleDown) {
                $(SLIDE_ID_SEL + slide1).animate({ scale:  1.00 - options.scaleDownFactor },
                    { step: function(now, fx) {
                        SCALE(this, 1.00 - now);
                    }, duration: options.scaleDownDuration
                });
            }
            
            $(SLIDE_ID_SEL + slide1).animate({ translate: -options.translateFactor },
                { step: function(now, fx) {
                    TRANSFORM(this, options.scaleDownFactor, options.scaleDownFactor, now, 0);
                }}, settings
            );
            
            hideSlide(slide1);

            if (options.scaleDown) {
                setTimeout(() => showSecondSlide(slide2, settings, SIDE_RIGHT), options.fadeInDelay)
            } else {
                showSecondSlide(slide2, settings, SIDE_RIGHT);
            }
            
            if (options.scaleDown) {
                setTimeout(function() {
                    $(SLIDE_ID_SEL + slide2).animate({ scale: (1.00 - options.scaleDownFactor) },
                        { step: function(now, fx) {
                            SCALE(this, (options.scaleDownFactor + now));
                        }, duration: options.scaleDownDuration
                    });
                }, options.fadeInDelay);
            }
        }

        function slideLeft(slide1, slide2, settings) {
            // TRANSLATE
            positionSecondSlide(slide2, SIDE_LEFT);
            
            // 1. SCALED DOWN
            if (options.scaleDown) {
                $(SLIDE_ID_SEL + slide1).animate({ scale: (1.00 - options.scaleDownFactor) },
                    { step: function(now, fx) {
                        SCALE(this, 1.00-now);
                    }, duration: options.scaleDownDuration
                });
            }
            
            // 2. TRANSLATED WHILE FADE OUT
            $(SLIDE_ID_SEL + slide1).animate({ translate: options.translateFactor },
                { step: function(now, fx) {
                    TRANSFORM(this, options.scaleDownFactor, options.scaleDownFactor, now, 0);
                }}, settings
            );
            
            hideSlide(slide1);
            
            if (options.scaleDown) {
                setTimeout(() => showSecondSlide(slide2, settings, SIDE_LEFT), options.fadeInDelay)
            } else {
                showSecondSlide(slide2, settings, SIDE_LEFT);
            }

            if (options.scaleDown) {
                setTimeout(function() {
                    $(SLIDE_ID_SEL + slide2).animate({ scale: (1.00 - options.scaleDownFactor) },
                        { step: function(now, fx) {
                            SCALE(this, (options.scaleDownFactor + now));
                        }, duration: options.scaleDownDuration
                    });
                }, options.fadeInDelay);
            }
        }

        function showSecondSlide(slide, settings, SIDE) {
            showSlide(slide);

            $(SLIDE_ID_SEL + slide).animate({ translate: options.translateFactor },
                { 
                    step: function(now, fx) {
                        if (SIDE == SIDE_RIGHT)
                            TRANSFORM(this, options.scaleDownFactor, options.scaleDownFactor, (options.translateFactor - now), 0);
                        else
                            TRANSFORM(this, options.scaleDownFactor, options.scaleDownFactor, (-options.translateFactor + now), 0);
                    }
                }, settings
            );
        }

        function hideSlide(slide) {
            if (options.fadeInOut)
                $(SLIDE_ID_SEL + slide).fadeOut({ duration : options.mainDuration, queue : false});
            else {
                setTimeout(function() {
                    $(SLIDE_ID_SEL + slide).css('opacity', '0');
                    $(SLIDE_ID_SEL + slide).css('display', 'none');
                }, options.mainDuration);
            }
        }

        function showSlide(slide) {
            if (options.fadeInOut)
                $(SLIDE_ID_SEL + slide).animate({'opacity':'1'}, { duration: options.mainDuration, queue: false });
            else
                $(SLIDE_ID_SEL + slide).css('opacity', '1');
        }

        /** Prepare the second unvisible slide to come it
         * @param {slide} Slide The number of the slide
         * @param {side}  Side  From which side is comming
         */
        function positionSecondSlide(slide, side) {
            $(SLIDE_ID_SEL + slide).css('opacity', '0');
            $(SLIDE_ID_SEL + slide).css('display', 'block');
            if (options.scaleDown) scaleDown(slide);

            var translatePx = options.translateFactor;
            if (side === SIDE_LEFT) translatePx *= -1;
            $(SLIDE_ID_SEL + slide).css('transform', 'translate(' + translatePx + 'px)');
            $(SLIDE_ID_SEL + slide).css('-webkit-transform', 'translate(' + translatePx + 'px)');
            $(SLIDE_ID_SEL + slide).css('-moz-transform', 'translate(' + translatePx + 'px)');
        }
        
        /** Scale down before sliding it and after */
        function scaleDown(slide) {
            SCALE(SLIDE_ID_SEL + slide, options.scaleDownFactor);
        }

        function SCALE(slide, scaleFactor) {
            var translateX = 0, translateY = 0;
            if ($(slide).css('transform') !== undefined) {
                var MATRIX = $(slide).css('transform').split(',');
                var translateX = parseFloat(MATRIX[4]);
                var translateY = parseFloat(MATRIX[5]);
            }

            TRANSFORM(slide, scaleFactor, scaleFactor, translateX, translateY);
        }

        /** For now, this function only translates in X */
        function TRANSLATE(slide, translateFactor) {
            var MATRIX = $(slide).css('transform').split(',');
            var scaleX = parseFloat(MATRIX[0].split('(')[1]);
            var scaleY = parseFloat(MATRIX[3]);
            var translateY = parseFloat(MATRIX[5]);

            TRANSFORM(slide, scaleX, scaleY, translateFactor, translateY);
        }

        function TRANSFORM(slide, scaleX, scaleY, translateX, translateY) {
            $(slide).css('transform',           'scale(' + scaleX + ', ' + scaleY + ') translate(' + translateX + 'px, ' + translateY + ')');
            $(slide).css('-webkit-transform',   'scale(' + scaleX + ', ' + scaleY + ') translate(' + translateX + 'px, ' + translateY + ')');
            $(slide).css('-moz-transform',      'scale(' + scaleX + ', ' + scaleY + ') translate(' + translateX + 'px, ' + translateY + ')');
        }
    }
});