/*!
 * Scroll IT - Simple, light-weight javascript library for all kinds of scroll functions
 * https://github.com/mitkonikov/JS
 * @license MIT licensed
 *
 * Copyright (C) 2019 
 * Mitko Nikov
 * 
 * Depended upon jquery
 * Inspired by gScrollNumber.js
 *  => https://github.com/GYFlash/gScrollNumber.js
 */

function scrollIt(element, options) {
    this.$window = $(window);
    this.$$document = $(document);
    this.$htmlBody = $('html, body');
    this.$body = $('body');
    this.CONTAINER = $("#" + element);
    this.currentValue = 0;
    this.CONTAINER.css({
        position: "relative",
        padding: "0",
        overflow: "hidden"
    });

    // Create some defaults, extending them with any options that were provided
    this.options = $.extend({
        width: 10,
        height: this.CONTAINER.height(),
        fontSize: 10,
        color: 'white',
        autoSize: false,
        lineHeight: this.CONTAINER.height(),
        offset: 0,
        center: false,
        position: 'relative',
        customNumbers: false,
        customNumberList: false
    }, options);

    this.CONTAINER.css({
        height: this.options.height,
        width: this.options.width,
        float: 'left'
    });

    if (this.options.position == 'absolute') {
        this.CONTAINER.css({
            position: 'absolute'
        });
    }
    
    this.COLUMN = '<span class="g-num-item" style="top: 0;">';
    if (this.options.customNumbers) {
        for (var number in this.options.customNumberList) {
            this.COLUMN += '<i>' + this.options.customNumberList[number] + '</i>';
        }
    } else {
        for (var i = 0; i < 10; ++i) {
            this.COLUMN += '<i>' + i + '</i>';
        }
    }
    this.COLUMN += '<i>.</i>';
    this.COLUMN += '</span>';
}

scrollIt.prototype.setNumber = function (value) {
    var SCROLLIT = this;

    SCROLLIT.currentValue = value;
    var valueString = value.toString();
    if (SCROLLIT.options.autoSize) {
        SCROLLIT.CONTAINER.css({
            "width": valueString.length * SCROLLIT.options.width + "px"
        });
    }
    
    var oldLength = SCROLLIT.CONTAINER.children(".g-num-item").length;

    if (valueString.length > oldLength) {
        for (var i = 0; i < valueString.length - oldLength; i++) {
            SCROLLIT.CONTAINER.append(SCROLLIT.COLUMN);
            if (this.options.center) {
                SCROLLIT.CONTAINER.children(".g-num-item").eq(oldLength + i).css({
                    left: '50%',
                    transform: 'translate(-50%, 0)'
                });
            } else {
                SCROLLIT.CONTAINER.children(".g-num-item").eq(oldLength + i).css({
                    right: SCROLLIT.options.width * (oldLength + i) + "px"
                });
            }
        }
    } else if (valueString.length < oldLength) {
        for (var i = 0; i < oldLength - valueString.length; i++) {
            SCROLLIT.CONTAINER.children(".g-num-item:last").remove();
        }
    }

    SCROLLIT.CONTAINER.children(".g-num-item").css({
        position: "absolute",
        width: SCROLLIT.options.width + "px",
        height: 11 * SCROLLIT.options.height + "px"
    });

    SCROLLIT.CONTAINER.children(".g-num-item").children("i").css({
        width: SCROLLIT.options.width + "px",
        height: SCROLLIT.options.lineHeight + "px",
        lineHeight: SCROLLIT.options.lineHeight + "px",
        textAlign: "center",
        fontSize: SCROLLIT.options.fontSize + "px",
        color: SCROLLIT.options.color,
        display: "block",
        fontStyle: "normal"
    });

    setTimeout(function() {
        for (var i = 0; i < valueString.length; i++) {
            var y = 0;
            if (valueString[i] != ".") {
                y = - (parseInt(valueString[i]) * SCROLLIT.options.lineHeight);
            } else {
                y = - (10 * SCROLLIT.options.height);
            }
            
            SCROLLIT.CONTAINER.children(".g-num-item").eq(valueString.length - i - 1).css({
                top: (y + SCROLLIT.options.offset) + "px",
                transition: "top 1.0s"
            })
        }
    }, 0);
}

scrollIt.prototype.getCurrentValue = function() {
    return this.currentValue;
}