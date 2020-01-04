/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/static/js/material-lobby.js":
/*!********************************************!*\
  !*** ./client/static/js/material-lobby.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ripple_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/ripple/index */ "./node_modules/@material/ripple/index.js");

$(document).ready(function () {
  $("#search-box").keyup(function (event) {
    if (event.keyCode == 13) {
      search();
    }
  });
  $("#search-icon").click(search);
  buildPost({
    Title: "САКАМ",
    Content: "САКАМ е платформа на SchoolNet која на секој ученик му дава збор за да се искаже и да гласа за најдобрата идеа.",
    Color: "#3b8760"
  });
});

function search() {
  var searchQuery = $("#search-box").val();

  if (searchQuery.trim() != "") {
    postAjax('query', {
      command: 'search-request',
      data: $("#search-box").val()
    }).then(function (resolve) {
      if (resolve.length > 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = resolve[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var tag = _step.value;
            buildSearchCard(tag);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        noResultsCard();
      }
    });
  }
}

function buildSearchCard(data) {
  clearDOM("search-results");
  var profileImage = document.createElement('img');
  profileImage.src = '/client/static/img/profile.png';
  var searchResultCardSmall = createDIV("search-result-card-small");
  searchResultCardSmall.id = "search-result-" + data.ID;
  var MDC_Card = createDIV("mdc-card");
  MDC_Card.classList.add("mdc-ripple-upgraded");
  var MDC_Card_Action = createDIV("mdc-card__primary-action");
  var searchResultCardSmallBg = createDIV("search-result-card-small-bg");
  var searchResultProfilePicture = createDIV("search-result-profile-picture");
  searchResultProfilePicture.appendChild(profileImage);
  var searchResultName = createDIV("search-result-name");
  searchResultName.innerHTML = data.Firstname + " " + data.Lastname;
  searchResultCardSmallBg.appendChild(searchResultProfilePicture);
  searchResultCardSmallBg.appendChild(searchResultName);
  MDC_Card_Action.appendChild(searchResultCardSmallBg);
  MDC_Card.appendChild(MDC_Card_Action);
  searchResultCardSmall.appendChild(MDC_Card);
  var rippleCard = new _material_ripple_index__WEBPACK_IMPORTED_MODULE_0__["MDCRipple"](MDC_Card);
  var rippleAction = new _material_ripple_index__WEBPACK_IMPORTED_MODULE_0__["MDCRipple"](MDC_Card_Action);
  document.getElementById("search-results").appendChild(searchResultCardSmall);
  $("#search-result-" + data.ID).click(function () {
    window.location = "/client/lobby/profile.html";
  });
}

function noResultsCard() {
  var searchResultCardSmall = createDIV("search-result-card-small");
  var MDC_Card = createDIV("mdc-card");
  MDC_Card.classList.add("mdc-ripple-upgraded");
  var MDC_Card_Action = createDIV("mdc-card__primary-action");
  var searchResultCardSmallBg = createDIV("search-result-card-small-bg");
  var searchResultName = createDIV("search-result-no-result-text");
  searchResultName.innerHTML = "No results.";
  searchResultCardSmallBg.appendChild(searchResultName);
  MDC_Card_Action.appendChild(searchResultCardSmallBg);
  MDC_Card.appendChild(MDC_Card_Action);
  searchResultCardSmall.appendChild(MDC_Card);
  clearDOM("search-results");
  var rippleCard = new _material_ripple_index__WEBPACK_IMPORTED_MODULE_0__["MDCRipple"](MDC_Card);
  var rippleAction = new _material_ripple_index__WEBPACK_IMPORTED_MODULE_0__["MDCRipple"](MDC_Card_Action);
  document.getElementById("search-results").appendChild(searchResultCardSmall);
}

function buildPost(data) {
  clearDOM("posts");
  var postCardSmall = createDIV("post-card-small");
  postCardSmall.id = data.ID;
  var MDC_Card = createDIV("mdc-card");
  MDC_Card.classList.add("mdc-ripple-upgraded");
  var MDC_Card_Action = createDIV("mdc-card__primary-action");
  var postCardSmallBg = createDIV("post-card-small-bg");
  postCardSmallBg.style.backgroundColor = data.Color;
  var postTitle = createDIV("post-title");
  postTitle.innerHTML = data.Title;
  postTitle.style.fontFamily = "Roboto-Bold";
  var postContent = createDIV("post-content");
  postContent.innerHTML = data.Content;
  postCardSmallBg.appendChild(postTitle);
  postCardSmallBg.appendChild(postContent);
  MDC_Card_Action.appendChild(postCardSmallBg);
  MDC_Card.appendChild(MDC_Card_Action);
  postCardSmall.appendChild(MDC_Card);
  var rippleCard = new _material_ripple_index__WEBPACK_IMPORTED_MODULE_0__["MDCRipple"](MDC_Card);
  var rippleAction = new _material_ripple_index__WEBPACK_IMPORTED_MODULE_0__["MDCRipple"](MDC_Card_Action);
  document.getElementById("posts").appendChild(postCardSmall);
}

/***/ }),

/***/ "./client/static/scss/material-lobby.scss":
/*!************************************************!*\
  !*** ./client/static/scss/material-lobby.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "material-lobby.css");

/***/ }),

/***/ "./node_modules/@material/base/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/base/component.js ***!
  \**************************************************/
/*! exports provided: MDCComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function() { return MDCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/base/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCComponent =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root_ = root;
    this.initialize.apply(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args)); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.attachTo = function (root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]({}));
  };
  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


  MDCComponent.prototype.initialize = function () {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.

  };

  MDCComponent.prototype.getDefaultFoundation = function () {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function () {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  MDCComponent.prototype.listen = function (evtType, handler, options) {
    this.root_.addEventListener(evtType, handler, options);
  };

  MDCComponent.prototype.unlisten = function (evtType, handler, options) {
    this.root_.removeEventListener(evtType, handler, options);
  };
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */


  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
      shouldBubble = false;
    }

    var evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  };

  return MDCComponent;
}();

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCComponent);

/***/ }),

/***/ "./node_modules/@material/base/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/base/foundation.js ***!
  \***************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation =
/** @class */
function () {
  function MDCFoundation(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }

    this.adapter_ = adapter;
  }

  Object.defineProperty(MDCFoundation, "cssClasses", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "strings", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "numbers", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "defaultAdapter", {
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    },
    enumerable: true,
    configurable: true
  });

  MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);

/***/ }),

/***/ "./node_modules/@material/dom/events.js":
/*!**********************************************!*\
  !*** ./node_modules/@material/dom/events.js ***!
  \**********************************************/
/*! exports provided: applyPassive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function() { return applyPassive; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */

function applyPassive(globalObj, forceRefresh) {
  if (globalObj === void 0) {
    globalObj = window;
  }

  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported_1 = false;

    try {
      globalObj.document.addEventListener('test', function () {
        return undefined;
      }, {
        get passive() {
          isSupported_1 = true;
          return isSupported_1;
        }

      });
    } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.


    supportsPassive_ = isSupported_1;
  }

  return supportsPassive_ ? {
    passive: true
  } : false;
}

/***/ }),

/***/ "./node_modules/@material/dom/ponyfill.js":
/*!************************************************!*\
  !*** ./node_modules/@material/dom/ponyfill.js ***!
  \************************************************/
/*! exports provided: closest, matches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;

  while (el) {
    if (matches(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}

/***/ }),

/***/ "./node_modules/@material/ripple/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/component.js ***!
  \****************************************************/
/*! exports provided: MDCRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return MDCRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var MDCRipple =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRipple, _super);

  function MDCRipple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.disabled = false;
    return _this;
  }

  MDCRipple.attachTo = function (root, opts) {
    if (opts === void 0) {
      opts = {
        isUnbounded: undefined
      };
    }

    var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }

    return ripple;
  };

  MDCRipple.createAdapter = function (instance) {
    return {
      addClass: function addClass(className) {
        return instance.root_.classList.add(className);
      },
      browserSupportsCssVars: function browserSupportsCssVars() {
        return _util__WEBPACK_IMPORTED_MODULE_5__["supportsCssVariables"](window);
      },
      computeBoundingRect: function computeBoundingRect() {
        return instance.root_.getBoundingClientRect();
      },
      containsEventTarget: function containsEventTarget(target) {
        return instance.root_.contains(target);
      },
      deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function getWindowPageOffset() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function isSurfaceActive() {
        return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"])(instance.root_, ':active');
      },
      isSurfaceDisabled: function isSurfaceDisabled() {
        return Boolean(instance.disabled);
      },
      isUnbounded: function isUnbounded() {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function removeClass(className) {
        return instance.root_.classList.remove(className);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        return instance.root_.style.setProperty(varName, value);
      }
    };
  };

  Object.defineProperty(MDCRipple.prototype, "unbounded", {
    get: function get() {
      return Boolean(this.unbounded_);
    },
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    },
    enumerable: true,
    configurable: true
  });

  MDCRipple.prototype.activate = function () {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCRipple.prototype.getDefaultFoundation = function () {
    return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCRippleFoundation"](MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function () {
    var root = this.root_;
    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
  };
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   */


  MDCRipple.prototype.setUnbounded_ = function () {
    this.foundation_.setUnbounded(Boolean(this.unbounded_));
  };

  return MDCRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/ripple/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};

/***/ }),

/***/ "./node_modules/@material/ripple/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/ripple/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCRippleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return MDCRippleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



 // Activation events registered on the root element of each instance for activation

var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

var activatedTargets = [];

var MDCRippleFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRippleFoundation, _super);

  function MDCRippleFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;

    _this.activationAnimationHasEnded_ = false;
    _this.activationTimer_ = 0;
    _this.fgDeactivationRemovalTimer_ = 0;
    _this.fgScale_ = '0';
    _this.frame_ = {
      width: 0,
      height: 0
    };
    _this.initialSize_ = 0;
    _this.layoutFrame_ = 0;
    _this.maxRadius_ = 0;
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.activationState_ = _this.defaultActivationState_();

    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;

      _this.runDeactivationUXLogicIfReady_();
    };

    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    _this.deactivateHandler_ = function () {
      return _this.deactivate_();
    };

    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    return _this;
  }

  Object.defineProperty(MDCRippleFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        browserSupportsCssVars: function browserSupportsCssVars() {
          return true;
        },
        computeBoundingRect: function computeBoundingRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        containsEventTarget: function containsEventTarget() {
          return true;
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        },
        deregisterResizeHandler: function deregisterResizeHandler() {
          return undefined;
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return {
            x: 0,
            y: 0
          };
        },
        isSurfaceActive: function isSurfaceActive() {
          return true;
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return true;
        },
        isUnbounded: function isUnbounded() {
          return true;
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {
          return undefined;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        registerResizeHandler: function registerResizeHandler() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        updateCssVariable: function updateCssVariable() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCRippleFoundation.prototype.init = function () {
    var _this = this;

    var supportsPressRipple = this.supportsPressRipple_();
    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      var _a = MDCRippleFoundation.cssClasses,
          ROOT_1 = _a.ROOT,
          UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.addClass(ROOT_1);

        if (_this.adapter_.isUnbounded()) {
          _this.adapter_.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


          _this.layoutInternal_();
        }
      });
    }
  };

  MDCRippleFoundation.prototype.destroy = function () {
    var _this = this;

    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }

      var _a = MDCRippleFoundation.cssClasses,
          ROOT_2 = _a.ROOT,
          UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.removeClass(ROOT_2);

        _this.adapter_.removeClass(UNBOUNDED_2);

        _this.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  };
  /**
   * @param evt Optional event containing position information.
   */


  MDCRippleFoundation.prototype.activate = function (evt) {
    this.activate_(evt);
  };

  MDCRippleFoundation.prototype.deactivate = function () {
    this.deactivate_();
  };

  MDCRippleFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };

  MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  };

  MDCRippleFoundation.prototype.handleFocus = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };

  MDCRippleFoundation.prototype.handleBlur = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };
  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   */


  MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
    return this.adapter_.browserSupportsCssVars();
  };

  MDCRippleFoundation.prototype.defaultActivationState_ = function () {
    return {
      activationEvent: undefined,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  /**
   * supportsPressRipple Passed from init to save a redundant function call
   */


  MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
    var _this = this;

    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
      });

      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
  };

  MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
    var _this = this;

    if (evt.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
      });
    }
  };

  MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
    var _this = this;

    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  };

  MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
    var _this = this;

    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
    });
  };

  MDCRippleFoundation.prototype.removeCssVars_ = function () {
    var _this = this;

    var rippleStrings = MDCRippleFoundation.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function (key) {
      if (key.indexOf('VAR_') === 0) {
        _this.adapter_.updateCssVariable(rippleStrings[key], null);
      }
    });
  };

  MDCRippleFoundation.prototype.activate_ = function (evt) {
    var _this = this;

    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    var activationState = this.activationState_;

    if (activationState.isActivated) {
      return;
    } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


    var previousActivationEvent = this.previousActivationEvent_;
    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;

    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = evt === undefined;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
      return _this.adapter_.containsEventTarget(target);
    });

    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (evt !== undefined) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers_(evt);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);

        if (activationState.wasElementMadeActive) {
          _this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        _this.activationState_ = _this.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
    return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
  };

  MDCRippleFoundation.prototype.animateActivation_ = function () {
    var _this = this;

    var _a = MDCRippleFoundation.strings,
        VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
        VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation.cssClasses,
        FG_DEACTIVATION = _b.FG_DEACTIVATION,
        FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal_();
    var translateStart = '';
    var translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates_(),
          startPoint = _c.startPoint,
          endPoint = _c.endPoint;

      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations

    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.

    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () {
      return _this.activationTimerCallback_();
    }, DEACTIVATION_TIMEOUT_MS);
  };

  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
    var _a = this.activationState_,
        activationEvent = _a.activationEvent,
        wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;

    if (wasActivatedByPointer) {
      startPoint = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getNormalizedEventCoords"])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    } // Center the element around the start point.


    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };
    var endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };
    return {
      startPoint: startPoint,
      endPoint: endPoint
    };
  };

  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
    var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.


    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState_,
        hasDeactivationUXRun = _a.hasDeactivationUXRun,
        isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(FG_DEACTIVATION);
      }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].FG_DEACTIVATION_MS);
    }
  };

  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  };

  MDCRippleFoundation.prototype.resetActivationState_ = function () {
    var _this = this;

    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.

    setTimeout(function () {
      return _this.previousActivationEvent_ = undefined;
    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  };

  MDCRippleFoundation.prototype.deactivate_ = function () {
    var _this = this;

    var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

    if (!activationState.isActivated) {
      return;
    }

    var state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, activationState);

    if (activationState.isProgrammatic) {
      requestAnimationFrame(function () {
        return _this.animateDeactivation_(state);
      });
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(function () {
        _this.activationState_.hasDeactivationUXRun = true;

        _this.animateDeactivation_(state);

        _this.resetActivationState_();
      });
    }
  };

  MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer,
        wasElementMadeActive = _a.wasElementMadeActive;

    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.layoutInternal_ = function () {
    var _this = this;

    this.frame_ = this.adapter_.computeBoundingRect();
    var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.

    var getBoundedRadius = function getBoundedRadius() {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

    var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE); // Unbounded ripple size should always be even number to equally center align.

    if (this.adapter_.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize_ = initialSize - 1;
    } else {
      this.initialSize_ = initialSize;
    }

    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
    this.updateLayoutCssVars_();
  };

  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
    var _a = MDCRippleFoundation.strings,
        VAR_FG_SIZE = _a.VAR_FG_SIZE,
        VAR_LEFT = _a.VAR_LEFT,
        VAR_TOP = _a.VAR_TOP,
        VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };
      this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
      this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
    }
  };

  return MDCRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCRippleFoundation);

/***/ }),

/***/ "./node_modules/@material/ripple/index.js":
/*!************************************************!*\
  !*** ./node_modules/@material/ripple/index.js ***!
  \************************************************/
/*! exports provided: util, MDCRipple, cssClasses, strings, numbers, MDCRippleFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./node_modules/@material/ripple/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["MDCRipple"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCRippleFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/***/ }),

/***/ "./node_modules/@material/ripple/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/ripple/util.js ***!
  \***********************************************/
/*! exports provided: supportsCssVariables, getNormalizedEventCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() { return getNormalizedEventCoords; });
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;

function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug'; // Append to head instead of body because this script might be invoked in the
  // head, in which case the body doesn't exist yet. The probe works either way.

  document.head.appendChild(node); // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';

  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  return hasPseudoVarBug;
}

function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

  if (!supportsFunctionPresent) {
    return false;
  }

  var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari

  var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVars = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVars = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }

  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return {
      x: 0,
      y: 0
    };
  }

  var x = pageOffset.x,
      y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY; // Determine touch point relative to the ripple container.

  if (evt.type === 'touchstart') {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }

  return {
    x: normalizedX,
    y: normalizedY
  };
}

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return _assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};


function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __exportStar(m, exports) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}
;
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}
;
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
}

/***/ }),

/***/ 1:
/*!*******************************************************************************************!*\
  !*** multi ./client/static/scss/material-lobby.scss ./client/static/js/material-lobby.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./client/static/scss/material-lobby.scss */"./client/static/scss/material-lobby.scss");
module.exports = __webpack_require__(/*! ./client/static/js/material-lobby.js */"./client/static/js/material-lobby.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0YXRpYy9qcy9tYXRlcmlhbC1sb2JieS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGljL3Njc3MvbWF0ZXJpYWwtbG9iYnkuc2NzcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50LnRzIiwid2VicGFjazovLy9mb3VuZGF0aW9uLnRzIiwid2VicGFjazovLy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vL3BvbnlmaWxsLnRzIiwid2VicGFjazovLy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vL2luZGV4LnRzIiwid2VicGFjazovLy91dGlsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJrZXl1cCIsImV2ZW50Iiwia2V5Q29kZSIsInNlYXJjaCIsImNsaWNrIiwiYnVpbGRQb3N0IiwiVGl0bGUiLCJDb250ZW50IiwiQ29sb3IiLCJzZWFyY2hRdWVyeSIsInZhbCIsInRyaW0iLCJwb3N0QWpheCIsImNvbW1hbmQiLCJkYXRhIiwidGhlbiIsInJlc29sdmUiLCJsZW5ndGgiLCJ0YWciLCJidWlsZFNlYXJjaENhcmQiLCJub1Jlc3VsdHNDYXJkIiwiY2xlYXJET00iLCJwcm9maWxlSW1hZ2UiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwic2VhcmNoUmVzdWx0Q2FyZFNtYWxsIiwiY3JlYXRlRElWIiwiaWQiLCJJRCIsIk1EQ19DYXJkIiwiY2xhc3NMaXN0IiwiYWRkIiwiTURDX0NhcmRfQWN0aW9uIiwic2VhcmNoUmVzdWx0Q2FyZFNtYWxsQmciLCJzZWFyY2hSZXN1bHRQcm9maWxlUGljdHVyZSIsImFwcGVuZENoaWxkIiwic2VhcmNoUmVzdWx0TmFtZSIsImlubmVySFRNTCIsIkZpcnN0bmFtZSIsIkxhc3RuYW1lIiwicmlwcGxlQ2FyZCIsIk1EQ1JpcHBsZSIsInJpcHBsZUFjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwid2luZG93IiwibG9jYXRpb24iLCJwb3N0Q2FyZFNtYWxsIiwicG9zdENhcmRTbWFsbEJnIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3N0VGl0bGUiLCJmb250RmFtaWx5IiwicG9zdENvbnRlbnQiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsImhhc093blByb3BlcnR5IiwiX19leHRlbmRzIiwiX18iLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImNyZWF0ZSIsIl9fYXNzaWduIiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImNhbGwiLCJhcHBseSIsIl9fcmVzdCIsImUiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImRlZmluZVByb3BlcnR5IiwiX19wYXJhbSIsInBhcmFtSW5kZXgiLCJkZWNvcmF0b3IiLCJfX21ldGFkYXRhIiwibWV0YWRhdGFLZXkiLCJtZXRhZGF0YVZhbHVlIiwibWV0YWRhdGEiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsIl8iLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwiZiIsInkiLCJnIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwidiIsIm9wIiwiVHlwZUVycm9yIiwicG9wIiwicHVzaCIsIl9fZXhwb3J0U3RhciIsIm0iLCJleHBvcnRzIiwiX192YWx1ZXMiLCJvIiwiX19yZWFkIiwiYXIiLCJlcnJvciIsIl9fc3ByZWFkIiwiY29uY2F0IiwiX19zcHJlYWRBcnJheXMiLCJpbCIsImsiLCJhIiwiaiIsImpsIiwiX19hd2FpdCIsIl9fYXN5bmNHZW5lcmF0b3IiLCJhc3luY0l0ZXJhdG9yIiwicSIsInJlc3VtZSIsInNldHRsZSIsImZ1bGZpbGwiLCJzaGlmdCIsIl9fYXN5bmNEZWxlZ2F0b3IiLCJfX2FzeW5jVmFsdWVzIiwiX19tYWtlVGVtcGxhdGVPYmplY3QiLCJjb29rZWQiLCJyYXciLCJfX2ltcG9ydFN0YXIiLCJtb2QiLCJfX2VzTW9kdWxlIiwiX19pbXBvcnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFD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QUFBM0Q7QUFDakJoQyxRQUFNLFdBQU4sR0FBaUJrRCxHQUFqQjtBQUNBLFNBQU9sRCxNQUFQO0FBQ0g7QUFFTSxTQUFTb0QsZUFBVCxDQUF5QkYsR0FBekIsRUFBOEI7QUFDakMsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBU0E7QUFBWCxHQUF2QztBQUNILEMiLCJmaWxlIjoibG9iYnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJpbXBvcnQge01EQ1JpcHBsZX0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9pbmRleCc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoXCIjc2VhcmNoLWJveFwiKS5rZXl1cChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xyXG4gICAgICAgICAgICBzZWFyY2goKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI3NlYXJjaC1pY29uXCIpLmNsaWNrKHNlYXJjaCk7XHJcblxyXG4gICAgYnVpbGRQb3N0KHtcclxuICAgICAgICBUaXRsZTogXCLQodCQ0JrQkNCcXCIsXHJcbiAgICAgICAgQ29udGVudDogXCLQodCQ0JrQkNCcINC1INC/0LvQsNGC0YTQvtGA0LzQsCDQvdCwIFNjaG9vbE5ldCDQutC+0ZjQsCDQvdCwINGB0LXQutC+0Zgg0YPRh9C10L3QuNC6INC80YMg0LTQsNCy0LAg0LfQsdC+0YAg0LfQsCDQtNCwINGB0LUg0LjRgdC60LDQttC1INC4INC00LAg0LPQu9Cw0YHQsCDQt9CwINC90LDRmNC00L7QsdGA0LDRgtCwINC40LTQtdCwLlwiLFxyXG4gICAgICAgIENvbG9yOiBcIiMzYjg3NjBcIlxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2VhcmNoKCkge1xyXG4gICAgbGV0IHNlYXJjaFF1ZXJ5ID0gJChcIiNzZWFyY2gtYm94XCIpLnZhbCgpO1xyXG4gICAgaWYgKHNlYXJjaFF1ZXJ5LnRyaW0oKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgcG9zdEFqYXgoJ3F1ZXJ5Jywge1xyXG4gICAgICAgICAgICBjb21tYW5kOiAnc2VhcmNoLXJlcXVlc3QnLFxyXG4gICAgICAgICAgICBkYXRhOiAkKFwiI3NlYXJjaC1ib3hcIikudmFsKClcclxuICAgICAgICB9KS50aGVuKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNvbHZlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHRhZyBvZiByZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVpbGRTZWFyY2hDYXJkKHRhZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub1Jlc3VsdHNDYXJkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRTZWFyY2hDYXJkKGRhdGEpIHtcclxuICAgIGNsZWFyRE9NKFwic2VhcmNoLXJlc3VsdHNcIik7XHJcblxyXG4gICAgbGV0IHByb2ZpbGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyBcclxuICAgIHByb2ZpbGVJbWFnZS5zcmMgPSAnL2NsaWVudC9zdGF0aWMvaW1nL3Byb2ZpbGUucG5nJzsgXHJcblxyXG4gICAgbGV0IHNlYXJjaFJlc3VsdENhcmRTbWFsbCA9IGNyZWF0ZURJVihcInNlYXJjaC1yZXN1bHQtY2FyZC1zbWFsbFwiKTtcclxuICAgIHNlYXJjaFJlc3VsdENhcmRTbWFsbC5pZCA9IFwic2VhcmNoLXJlc3VsdC1cIiArIGRhdGEuSUQ7XHJcbiAgICBsZXQgTURDX0NhcmQgPSBjcmVhdGVESVYoXCJtZGMtY2FyZFwiKTtcclxuICAgIE1EQ19DYXJkLmNsYXNzTGlzdC5hZGQoXCJtZGMtcmlwcGxlLXVwZ3JhZGVkXCIpO1xyXG4gICAgbGV0IE1EQ19DYXJkX0FjdGlvbiA9IGNyZWF0ZURJVihcIm1kYy1jYXJkX19wcmltYXJ5LWFjdGlvblwiKTtcclxuXHJcbiAgICBsZXQgc2VhcmNoUmVzdWx0Q2FyZFNtYWxsQmcgPSBjcmVhdGVESVYoXCJzZWFyY2gtcmVzdWx0LWNhcmQtc21hbGwtYmdcIik7XHJcbiAgICBsZXQgc2VhcmNoUmVzdWx0UHJvZmlsZVBpY3R1cmUgPSBjcmVhdGVESVYoXCJzZWFyY2gtcmVzdWx0LXByb2ZpbGUtcGljdHVyZVwiKTtcclxuICAgIHNlYXJjaFJlc3VsdFByb2ZpbGVQaWN0dXJlLmFwcGVuZENoaWxkKHByb2ZpbGVJbWFnZSk7XHJcbiAgICBsZXQgc2VhcmNoUmVzdWx0TmFtZSA9IGNyZWF0ZURJVihcInNlYXJjaC1yZXN1bHQtbmFtZVwiKTtcclxuICAgIHNlYXJjaFJlc3VsdE5hbWUuaW5uZXJIVE1MID0gZGF0YS5GaXJzdG5hbWUgKyBcIiBcIiArIGRhdGEuTGFzdG5hbWU7XHJcblxyXG4gICAgc2VhcmNoUmVzdWx0Q2FyZFNtYWxsQmcuYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0UHJvZmlsZVBpY3R1cmUpO1xyXG4gICAgc2VhcmNoUmVzdWx0Q2FyZFNtYWxsQmcuYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0TmFtZSk7XHJcbiAgICBNRENfQ2FyZF9BY3Rpb24uYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0Q2FyZFNtYWxsQmcpO1xyXG4gICAgTURDX0NhcmQuYXBwZW5kQ2hpbGQoTURDX0NhcmRfQWN0aW9uKTtcclxuICAgIHNlYXJjaFJlc3VsdENhcmRTbWFsbC5hcHBlbmRDaGlsZChNRENfQ2FyZCk7XHJcblxyXG4gICAgY29uc3QgcmlwcGxlQ2FyZCA9IG5ldyBNRENSaXBwbGUoTURDX0NhcmQpO1xyXG4gICAgY29uc3QgcmlwcGxlQWN0aW9uID0gbmV3IE1EQ1JpcHBsZShNRENfQ2FyZF9BY3Rpb24pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXJlc3VsdHNcIikuYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0Q2FyZFNtYWxsKTtcclxuXHJcbiAgICAkKFwiI3NlYXJjaC1yZXN1bHQtXCIgKyBkYXRhLklEKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvY2xpZW50L2xvYmJ5L3Byb2ZpbGUuaHRtbFwiO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vUmVzdWx0c0NhcmQoKSB7XHJcbiAgICBsZXQgc2VhcmNoUmVzdWx0Q2FyZFNtYWxsID0gY3JlYXRlRElWKFwic2VhcmNoLXJlc3VsdC1jYXJkLXNtYWxsXCIpO1xyXG4gICAgbGV0IE1EQ19DYXJkID0gY3JlYXRlRElWKFwibWRjLWNhcmRcIik7XHJcbiAgICBNRENfQ2FyZC5jbGFzc0xpc3QuYWRkKFwibWRjLXJpcHBsZS11cGdyYWRlZFwiKTtcclxuICAgIGxldCBNRENfQ2FyZF9BY3Rpb24gPSBjcmVhdGVESVYoXCJtZGMtY2FyZF9fcHJpbWFyeS1hY3Rpb25cIik7XHJcblxyXG4gICAgbGV0IHNlYXJjaFJlc3VsdENhcmRTbWFsbEJnID0gY3JlYXRlRElWKFwic2VhcmNoLXJlc3VsdC1jYXJkLXNtYWxsLWJnXCIpO1xyXG4gICAgbGV0IHNlYXJjaFJlc3VsdE5hbWUgPSBjcmVhdGVESVYoXCJzZWFyY2gtcmVzdWx0LW5vLXJlc3VsdC10ZXh0XCIpO1xyXG4gICAgc2VhcmNoUmVzdWx0TmFtZS5pbm5lckhUTUwgPSBcIk5vIHJlc3VsdHMuXCI7XHJcblxyXG4gICAgc2VhcmNoUmVzdWx0Q2FyZFNtYWxsQmcuYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0TmFtZSk7XHJcbiAgICBNRENfQ2FyZF9BY3Rpb24uYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0Q2FyZFNtYWxsQmcpO1xyXG4gICAgTURDX0NhcmQuYXBwZW5kQ2hpbGQoTURDX0NhcmRfQWN0aW9uKTtcclxuICAgIHNlYXJjaFJlc3VsdENhcmRTbWFsbC5hcHBlbmRDaGlsZChNRENfQ2FyZCk7XHJcblxyXG4gICAgY2xlYXJET00oXCJzZWFyY2gtcmVzdWx0c1wiKTtcclxuXHJcbiAgICBjb25zdCByaXBwbGVDYXJkID0gbmV3IE1EQ1JpcHBsZShNRENfQ2FyZCk7XHJcbiAgICBjb25zdCByaXBwbGVBY3Rpb24gPSBuZXcgTURDUmlwcGxlKE1EQ19DYXJkX0FjdGlvbik7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtcmVzdWx0c1wiKS5hcHBlbmRDaGlsZChzZWFyY2hSZXN1bHRDYXJkU21hbGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFBvc3QoZGF0YSkge1xyXG4gICAgY2xlYXJET00oXCJwb3N0c1wiKTtcclxuXHJcbiAgICBsZXQgcG9zdENhcmRTbWFsbCA9IGNyZWF0ZURJVihcInBvc3QtY2FyZC1zbWFsbFwiKTtcclxuICAgIHBvc3RDYXJkU21hbGwuaWQgPSBkYXRhLklEO1xyXG4gICAgbGV0IE1EQ19DYXJkID0gY3JlYXRlRElWKFwibWRjLWNhcmRcIik7XHJcbiAgICBNRENfQ2FyZC5jbGFzc0xpc3QuYWRkKFwibWRjLXJpcHBsZS11cGdyYWRlZFwiKTtcclxuICAgIGxldCBNRENfQ2FyZF9BY3Rpb24gPSBjcmVhdGVESVYoXCJtZGMtY2FyZF9fcHJpbWFyeS1hY3Rpb25cIik7XHJcblxyXG4gICAgbGV0IHBvc3RDYXJkU21hbGxCZyA9IGNyZWF0ZURJVihcInBvc3QtY2FyZC1zbWFsbC1iZ1wiKTtcclxuICAgIHBvc3RDYXJkU21hbGxCZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBkYXRhLkNvbG9yO1xyXG5cclxuICAgIGxldCBwb3N0VGl0bGUgPSBjcmVhdGVESVYoXCJwb3N0LXRpdGxlXCIpO1xyXG4gICAgcG9zdFRpdGxlLmlubmVySFRNTCA9IGRhdGEuVGl0bGU7XHJcbiAgICBwb3N0VGl0bGUuc3R5bGUuZm9udEZhbWlseSA9IFwiUm9ib3RvLUJvbGRcIjtcclxuXHJcbiAgICBsZXQgcG9zdENvbnRlbnQgPSBjcmVhdGVESVYoXCJwb3N0LWNvbnRlbnRcIik7XHJcbiAgICBwb3N0Q29udGVudC5pbm5lckhUTUwgPSBkYXRhLkNvbnRlbnQ7XHJcblxyXG4gICAgcG9zdENhcmRTbWFsbEJnLmFwcGVuZENoaWxkKHBvc3RUaXRsZSk7XHJcbiAgICBwb3N0Q2FyZFNtYWxsQmcuYXBwZW5kQ2hpbGQocG9zdENvbnRlbnQpO1xyXG4gICAgTURDX0NhcmRfQWN0aW9uLmFwcGVuZENoaWxkKHBvc3RDYXJkU21hbGxCZyk7XHJcbiAgICBNRENfQ2FyZC5hcHBlbmRDaGlsZChNRENfQ2FyZF9BY3Rpb24pO1xyXG4gICAgcG9zdENhcmRTbWFsbC5hcHBlbmRDaGlsZChNRENfQ2FyZCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJpcHBsZUNhcmQgPSBuZXcgTURDUmlwcGxlKE1EQ19DYXJkKTtcclxuICAgIGNvbnN0IHJpcHBsZUFjdGlvbiA9IG5ldyBNRENSaXBwbGUoTURDX0NhcmRfQWN0aW9uKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3RzXCIpLmFwcGVuZENoaWxkKHBvc3RDYXJkU21hbGwpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1hdGVyaWFsLWxvYmJ5LmNzc1wiOyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBhcHBseVBhc3NpdmUgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL2V2ZW50cyc7XG5pbXBvcnQgeyBtYXRjaGVzIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCc7XG5pbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbnZhciBNRENSaXBwbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDUmlwcGxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1JpcHBsZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTURDUmlwcGxlLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QsIG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0geyBpc1VuYm91bmRlZDogdW5kZWZpbmVkIH07IH1cbiAgICAgICAgdmFyIHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgICAgIC8vIE9ubHkgb3ZlcnJpZGUgdW5ib3VuZGVkIGJlaGF2aW9yIGlmIG9wdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgICAgICBpZiAob3B0cy5pc1VuYm91bmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByaXBwbGUudW5ib3VuZGVkID0gb3B0cy5pc1VuYm91bmRlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmlwcGxlO1xuICAgIH07XG4gICAgTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyk7IH0sXG4gICAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNvbnRhaW5zKHRhcmdldCk7IH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH0pOyB9LFxuICAgICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYXRjaGVzKGluc3RhbmNlLnJvb3RfLCAnOmFjdGl2ZScpOyB9LFxuICAgICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJvb2xlYW4oaW5zdGFuY2UuZGlzYWJsZWQpOyB9LFxuICAgICAgICAgICAgaXNVbmJvdW5kZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJvb2xlYW4oaW5zdGFuY2UudW5ib3VuZGVkKTsgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2Uucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiBmdW5jdGlvbiAodmFyTmFtZSwgdmFsdWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKTsgfSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGUucHJvdG90eXBlLCBcInVuYm91bmRlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy51bmJvdW5kZWRfKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodW5ib3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgICAgICAgICB0aGlzLnNldFVuYm91bmRlZF8oKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdF87XG4gICAgICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiByb290LmRhdGFzZXQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbG9zdXJlIENvbXBpbGVyIHRocm93cyBhbiBhY2Nlc3MgY29udHJvbCBlcnJvciB3aGVuIGRpcmVjdGx5IGFjY2Vzc2luZyBhXG4gICAgICogcHJvdGVjdGVkIG9yIHByaXZhdGUgcHJvcGVydHkgaW5zaWRlIGEgZ2V0dGVyL3NldHRlciwgbGlrZSB1bmJvdW5kZWQgYWJvdmUuXG4gICAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAgICogVGhhdCdzIHdoeSB0aGlzIGZ1bmN0aW9uIGV4aXN0cy5cbiAgICAgKi9cbiAgICBNRENSaXBwbGUucHJvdG90eXBlLnNldFVuYm91bmRlZF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKEJvb2xlYW4odGhpcy51bmJvdW5kZWRfKSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDUmlwcGxlO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1JpcHBsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMgfSBmcm9tICcuL3V0aWwnO1xuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbnZhciBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gW1xuICAgICd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJyxcbl07XG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbnZhciBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnLFxuXTtcbi8vIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbnZhciBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG52YXIgTURDUmlwcGxlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENSaXBwbGVGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1JpcHBsZUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdTY2FsZV8gPSAnMCc7XG4gICAgICAgIF90aGlzLmZyYW1lXyA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgICAgICBfdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5tYXhSYWRpdXNfID0gMDtcbiAgICAgICAgX3RoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHsgbGVmdDogMCwgdG9wOiAwIH07XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRlXyhlKTsgfTtcbiAgICAgICAgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGVhY3RpdmF0ZV8oKTsgfTtcbiAgICAgICAgX3RoaXMuZm9jdXNIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUZvY3VzKCk7IH07XG4gICAgICAgIF90aGlzLmJsdXJIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUJsdXIoKTsgfTtcbiAgICAgICAgX3RoaXMucmVzaXplSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sYXlvdXQoKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogMCwgeTogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNVbmJvdW5kZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UXzEgPSBfYS5ST09ULCBVTkJPVU5ERURfMSA9IF9hLlVOQk9VTkRFRDtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoUk9PVF8xKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERURfMSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8yID0gX2EuUk9PVCwgVU5CT1VOREVEXzIgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFJPT1RfMik7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGV2dCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlXyhldnQpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VW5ib3VuZGVkID0gZnVuY3Rpb24gKHVuYm91bmRlZCkge1xuICAgICAgICB2YXIgVU5CT1VOREVEID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLlVOQk9VTkRFRDtcbiAgICAgICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnN1cHBvcnRzUHJlc3NSaXBwbGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgICAgICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVtb3ZlQ3NzVmFyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByaXBwbGVTdHJpbmdzID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJpcHBsZVN0cmluZ3MpO1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShyaXBwbGVTdHJpbmdzW2tleV0sIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdm9pZCByZWFjdGluZyB0byBmb2xsb3ctb24gZXZlbnRzIGZpcmVkIGJ5IHRvdWNoIGRldmljZSBhZnRlciBhbiBhbHJlYWR5LXByb2Nlc3NlZCB1c2VyIGludGVyYWN0aW9uXG4gICAgICAgIHZhciBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgICAgICB2YXIgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBldnQgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBldnQudHlwZTtcbiAgICAgICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZXZ0ID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBldnQ7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGV2dCAhPT0gdW5kZWZpbmVkICYmIChldnQudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBldnQudHlwZSA9PT0gJ3BvaW50ZXJkb3duJyk7XG4gICAgICAgIHZhciBoYXNBY3RpdmF0ZWRDaGlsZCA9IGV2dCAhPT0gdW5kZWZpbmVkICYmIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJiBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gX3RoaXMuYWRhcHRlcl8uY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpOyB9KTtcbiAgICAgICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAgICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaChldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZXZ0KTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZVxuICAgICAgICAgICAgICAgICYmIGV2dCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgJiYgKGV2dC5rZXkgPT09ICcgJyB8fCBldnQua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgcmV0dXJuIChldnQgIT09IHVuZGVmaW5lZCAmJiBldnQudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZUFjdGl2YXRpb25fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORCA9IF9hLlZBUl9GR19UUkFOU0xBVEVfRU5EO1xuICAgICAgICB2YXIgX2IgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIEZHX0RFQUNUSVZBVElPTiA9IF9iLkZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTiA9IF9iLkZHX0FDVElWQVRJT047XG4gICAgICAgIHZhciBERUFDVElWQVRJT05fVElNRU9VVF9NUyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5ERUFDVElWQVRJT05fVElNRU9VVF9NUztcbiAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgICAgIHZhciB0cmFuc2xhdGVFbmQgPSAnJztcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHZhciBfYyA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpLCBzdGFydFBvaW50ID0gX2Muc3RhcnRQb2ludCwgZW5kUG9pbnQgPSBfYy5lbmRQb2ludDtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gc3RhcnRQb2ludC54ICsgXCJweCwgXCIgKyBzdGFydFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgICAgICB0cmFuc2xhdGVFbmQgPSBlbmRQb2ludC54ICsgXCJweCwgXCIgKyBlbmRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgICAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKTsgfSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBhY3RpdmF0aW9uRXZlbnQgPSBfYS5hY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlcjtcbiAgICAgICAgdmFyIHN0YXJ0UG9pbnQ7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoYWN0aXZhdGlvbkV2ZW50LCB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmZyYW1lXy53aWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2VudGVyIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgc3RhcnQgcG9pbnQuXG4gICAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgZW5kUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiAodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IHN0YXJ0UG9pbnQ6IHN0YXJ0UG9pbnQsIGVuZFBvaW50OiBlbmRQb2ludCB9O1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYm90aCB3aGVuIGEgcG9pbnRpbmcgZGV2aWNlIGlzIHJlbGVhc2VkLCBhbmQgd2hlbiB0aGUgYWN0aXZhdGlvbiBhbmltYXRpb24gZW5kcy5cbiAgICAgICAgLy8gVGhlIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gc2hvdWxkIG9ubHkgcnVuIGFmdGVyIGJvdGggb2YgdGhvc2Ugb2NjdXIuXG4gICAgICAgIHZhciBGR19ERUFDVElWQVRJT04gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8sIGhhc0RlYWN0aXZhdGlvblVYUnVuID0gX2EuaGFzRGVhY3RpdmF0aW9uVVhSdW4sIGlzQWN0aXZhdGVkID0gX2EuaXNBY3RpdmF0ZWQ7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uSGFzRW5kZWQgPSBoYXNEZWFjdGl2YXRpb25VWFJ1biB8fCAhaXNBY3RpdmF0ZWQ7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICAgICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBGR19BQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT047XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlc2V0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHVuZGVmaW5lZDsgfSwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGF0ZSA9IHRzbGliXzEuX19hc3NpZ24oe30sIGFjdGl2YXRpb25TdGF0ZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7IH0pO1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmhhc0RlYWN0aXZhdGlvblVYUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZURlYWN0aXZhdGlvbl8gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlciwgd2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfYS53YXNFbGVtZW50TWFkZUFjdGl2ZTtcbiAgICAgICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlciB8fCB3YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0SW50ZXJuYWxfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB2YXIgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG4gICAgICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAgICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAgICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgICAgICB2YXIgZ2V0Qm91bmRlZFJhZGl1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KF90aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyhfdGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICAgICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG4gICAgICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgICAgIHZhciBpbml0aWFsU2l6ZSA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBzaXplIHNob3VsZCBhbHdheXMgYmUgZXZlbiBudW1iZXIgdG8gZXF1YWxseSBjZW50ZXIgYWxpZ24uXG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkgJiYgaW5pdGlhbFNpemUgJSAyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTaXplXyA9IGluaXRpYWxTaXplIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFNpemVfID0gaW5pdGlhbFNpemU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZ1NjYWxlXyA9IFwiXCIgKyB0aGlzLm1heFJhZGl1c18gLyB0aGlzLmluaXRpYWxTaXplXztcbiAgICAgICAgdGhpcy51cGRhdGVMYXlvdXRDc3NWYXJzXygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUudXBkYXRlTGF5b3V0Q3NzVmFyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncywgVkFSX0ZHX1NJWkUgPSBfYS5WQVJfRkdfU0laRSwgVkFSX0xFRlQgPSBfYS5WQVJfTEVGVCwgVkFSX1RPUCA9IF9hLlZBUl9UT1AsIFZBUl9GR19TQ0FMRSA9IF9hLlZBUl9GR19TQ0FMRTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0laRSwgdGhpcy5pbml0aWFsU2l6ZV8gKyBcInB4XCIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICAgICAgICAgIHRvcDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgdGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnQgKyBcInB4XCIpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCB0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wICsgXCJweFwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ1JpcHBsZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3RcbiAqIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzUGFzc2l2ZV87XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZFxuICogaWYgc28sIHVzZSB0aGVtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGdsb2JhbE9iaiA9PT0gdm9pZCAwKSB7IGdsb2JhbE9iaiA9IHdpbmRvdzsgfVxuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHZhciBpc1N1cHBvcnRlZF8xID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSwge1xuICAgICAgICAgICAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAgICAgICAgICAgICBpc1N1cHBvcnRlZF8xID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkXzE7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH0gLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1lbXB0eSBjYW5ub3QgdGhyb3cgZXJyb3IgZHVlIHRvIHRlc3RzLiB0c2xpbnQgYWxzbyBkaXNhYmxlcyBjb25zb2xlLmxvZy5cbiAgICAgICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkXzE7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBBIFwicG9ueWZpbGxcIiBpcyBhIHBvbHlmaWxsIHRoYXQgZG9lc24ndCBtb2RpZnkgdGhlIGdsb2JhbCBwcm90b3R5cGUgY2hhaW4uXG4gKiBUaGlzIG1ha2VzIHBvbnlmaWxscyBzYWZlciB0aGFuIHRyYWRpdGlvbmFsIHBvbHlmaWxscywgZXNwZWNpYWxseSBmb3IgbGlicmFyaWVzIGxpa2UgTURDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgfVxuICAgIHZhciBlbCA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbmF0aXZlTWF0Y2hlcyA9IGVsZW1lbnQubWF0Y2hlc1xuICAgICAgICB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICAgIHJldHVybiBuYXRpdmVNYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9ueWZpbGwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAgIC8vIGdpdmVuIHRoYXQgaXQncyBhbiAndXBncmFkZScgdG8gYW4gZXhpc3RpbmcgY29tcG9uZW50LiBUaGF0IGJlaW5nIHNhaWQgaXQgaXMgdGhlIHJvb3RcbiAgICAvLyBDU1MgY2xhc3MgdGhhdCBhbGwgb3RoZXIgQ1NTIGNsYXNzZXMgZGVyaXZlIGZyb20uXG4gICAgQkdfRk9DVVNFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCcsXG4gICAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gICAgRkdfREVBQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb24nLFxuICAgIFJPT1Q6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkJyxcbiAgICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxufTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICAgIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICAgIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxuICAgIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0JyxcbiAgICBWQVJfTEVGVDogJy0tbWRjLXJpcHBsZS1sZWZ0JyxcbiAgICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG59O1xuZXhwb3J0IHZhciBudW1iZXJzID0ge1xuICAgIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsXG4gICAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsXG4gICAgSU5JVElBTF9PUklHSU5fU0NBTEU6IDAuNixcbiAgICBQQURESU5HOiAxMCxcbiAgICBUQVBfREVMQVlfTVM6IDMwMCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5leHBvcnQgeyB1dGlsIH07XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG9cbiAqIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAgIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gICAgLy8gQXBwZW5kIHRvIGhlYWQgaW5zdGVhZCBvZiBib2R5IGJlY2F1c2UgdGhpcyBzY3JpcHQgbWlnaHQgYmUgaW52b2tlZCBpbiB0aGVcbiAgICAvLyBoZWFkLCBpbiB3aGljaCBjYXNlIHRoZSBib2R5IGRvZXNuJ3QgZXhpc3QgeWV0LiBUaGUgcHJvYmUgd29ya3MgZWl0aGVyIHdheS5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIC8vIFRoZSBidWcgZXhpc3RzIGlmIDo6YmVmb3JlIHN0eWxlIGVuZHMgdXAgcHJvcGFnYXRpbmcgdG8gdGhlIHBhcmVudCBlbGVtZW50LlxuICAgIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gICAgLy8gYnV0IEZpcmVmb3ggaXMga25vd24gdG8gc3VwcG9ydCBDU1MgY3VzdG9tIHByb3BlcnRpZXMgY29ycmVjdGx5LlxuICAgIC8vIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3dPYmouZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICB2YXIgaGFzUHNldWRvVmFyQnVnID0gY29tcHV0ZWRTdHlsZSAhPT0gbnVsbCAmJiBjb21wdXRlZFN0eWxlLmJvcmRlclRvcFN0eWxlID09PSAnc29saWQnO1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gaGFzUHNldWRvVmFyQnVnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XG4gICAgdmFyIENTUyA9IHdpbmRvd09iai5DU1M7XG4gICAgdmFyIHN1cHBvcnRzQ3NzVmFycyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgICB9XG4gICAgdmFyIHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gQ1NTICYmIHR5cGVvZiBDU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gICAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NDY2OVxuICAgIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gICAgdmFyIHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChDU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICAgICAgQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKSk7XG4gICAgaWYgKGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgfHwgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzKSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFycyA9ICFkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcnMgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJzO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhldnQsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgICBpZiAoIWV2dCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIHZhciB4ID0gcGFnZU9mZnNldC54LCB5ID0gcGFnZU9mZnNldC55O1xuICAgIHZhciBkb2N1bWVudFggPSB4ICsgY2xpZW50UmVjdC5sZWZ0O1xuICAgIHZhciBkb2N1bWVudFkgPSB5ICsgY2xpZW50UmVjdC50b3A7XG4gICAgdmFyIG5vcm1hbGl6ZWRYO1xuICAgIHZhciBub3JtYWxpemVkWTtcbiAgICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gICAgaWYgKGV2dC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgdmFyIHRvdWNoRXZlbnQgPSBldnQ7XG4gICAgICAgIG5vcm1hbGl6ZWRYID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICAgICAgbm9ybWFsaXplZFkgPSB0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBldnQ7XG4gICAgICAgIG5vcm1hbGl6ZWRYID0gbW91c2VFdmVudC5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICAgICAgbm9ybWFsaXplZFkgPSBtb3VzZUV2ZW50LnBhZ2VZIC0gZG9jdW1lbnRZO1xuICAgIH1cbiAgICByZXR1cm4geyB4OiBub3JtYWxpemVkWCwgeTogbm9ybWFsaXplZFkgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==