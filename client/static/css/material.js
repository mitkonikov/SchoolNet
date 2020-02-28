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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/static/js/material.js":
/*!**************************************!*\
  !*** ./client/static/js/material.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ripple_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/ripple/index */ "./node_modules/@material/ripple/index.js");
/* harmony import */ var _material_floating_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/floating-label */ "./node_modules/@material/floating-label/index.js");
/* harmony import */ var _material_line_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/line-ripple */ "./node_modules/@material/line-ripple/index.js");
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/textfield */ "./node_modules/@material/textfield/index.js");
/* harmony import */ var _material_textfield_character_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/textfield/character-counter */ "./node_modules/@material/textfield/character-counter/index.js");





$(document).ready(function () {
  var selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action, .mdc-card';
  var ripples = [].map.call(document.querySelectorAll(selector), function (el) {
    return new _material_ripple_index__WEBPACK_IMPORTED_MODULE_0__["MDCRipple"](el);
  });
  var textEls = Array.from(document.querySelectorAll('.mdc-text-field'));
  textEls.forEach(function (el) {
    return new _material_textfield__WEBPACK_IMPORTED_MODULE_3__["MDCTextField"](el);
  });
  var characterCounter = new _material_textfield_character_counter__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldCharacterCounter"](document.querySelector('.mdc-text-field-character-counter'));
  var floatingLabels = Array.from(document.querySelectorAll('.mdc-floating-label'));
  floatingLabels.forEach(function (el) {
    return new _material_floating_label__WEBPACK_IMPORTED_MODULE_1__["MDCFloatingLabel"](el);
  });
  var lineRipples = Array.from(document.querySelectorAll('.mdc-line-ripple'));
  lineRipples.forEach(function (el) {
    return new _material_line_ripple__WEBPACK_IMPORTED_MODULE_2__["MDCLineRipple"](el);
  });
});

/***/ }),

/***/ "./client/static/scss/material-theme.scss":
/*!************************************************!*\
  !*** ./client/static/scss/material-theme.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "material-theme.css");

/***/ }),

/***/ "./client/static/scss/style_common.scss":
/*!**********************************************!*\
  !*** ./client/static/scss/style_common.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "style_common.css");

/***/ }),

/***/ "./client/static/scss/style_home.scss":
/*!********************************************!*\
  !*** ./client/static/scss/style_home.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "style_home.css");

/***/ }),

/***/ "./client/static/scss/style_register.scss":
/*!************************************************!*\
  !*** ./client/static/scss/style_register.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "style_register.css");

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

/***/ "./node_modules/@material/floating-label/component.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/floating-label/component.js ***!
  \************************************************************/
/*! exports provided: MDCFloatingLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabel", function() { return MDCFloatingLabel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/floating-label/foundation.js");
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




var MDCFloatingLabel =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFloatingLabel, _super);

  function MDCFloatingLabel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCFloatingLabel.attachTo = function (root) {
    return new MDCFloatingLabel(root);
  };
  /**
   * Styles the label to produce the label shake for errors.
   * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
   */


  MDCFloatingLabel.prototype.shake = function (shouldShake) {
    this.foundation_.shake(shouldShake);
  };
  /**
   * Styles the label to float/dock.
   * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
   */


  MDCFloatingLabel.prototype["float"] = function (shouldFloat) {
    this.foundation_["float"](shouldFloat);
  };

  MDCFloatingLabel.prototype.getWidth = function () {
    return this.foundation_.getWidth();
  };

  MDCFloatingLabel.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      getWidth: function getWidth() {
        return _this.root_.scrollWidth;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCFloatingLabelFoundation"](adapter);
  };

  return MDCFloatingLabel;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/floating-label/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/floating-label/constants.js ***!
  \************************************************************/
/*! exports provided: cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
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
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake',
  ROOT: 'mdc-floating-label'
};

/***/ }),

/***/ "./node_modules/@material/floating-label/foundation.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/floating-label/foundation.js ***!
  \*************************************************************/
/*! exports provided: MDCFloatingLabelFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabelFoundation", function() { return MDCFloatingLabelFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/floating-label/constants.js");
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




var MDCFloatingLabelFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFloatingLabelFoundation, _super);

  function MDCFloatingLabelFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;

    _this.shakeAnimationEndHandler_ = function () {
      return _this.handleShakeAnimationEnd_();
    };

    return _this;
  }

  Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
    /**
     * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        getWidth: function getWidth() {
          return 0;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCFloatingLabelFoundation.prototype.init = function () {
    this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };

  MDCFloatingLabelFoundation.prototype.destroy = function () {
    this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };
  /**
   * Returns the width of the label element.
   */


  MDCFloatingLabelFoundation.prototype.getWidth = function () {
    return this.adapter_.getWidth();
  };
  /**
   * Styles the label to produce a shake animation to indicate an error.
   * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
   */


  MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

    if (shouldShake) {
      this.adapter_.addClass(LABEL_SHAKE);
    } else {
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };
  /**
   * Styles the label to float or dock.
   * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
   */


  MDCFloatingLabelFoundation.prototype["float"] = function (shouldFloat) {
    var _a = MDCFloatingLabelFoundation.cssClasses,
        LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE,
        LABEL_SHAKE = _a.LABEL_SHAKE;

    if (shouldFloat) {
      this.adapter_.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };

  MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
    this.adapter_.removeClass(LABEL_SHAKE);
  };

  return MDCFloatingLabelFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCFloatingLabelFoundation);

/***/ }),

/***/ "./node_modules/@material/floating-label/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/floating-label/index.js ***!
  \********************************************************/
/*! exports provided: MDCFloatingLabel, cssClasses, MDCFloatingLabelFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/floating-label/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabel", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCFloatingLabel"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/floating-label/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/floating-label/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabelFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCFloatingLabelFoundation"]; });

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

/***/ "./node_modules/@material/line-ripple/component.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/line-ripple/component.js ***!
  \*********************************************************/
/*! exports provided: MDCLineRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCLineRipple", function() { return MDCLineRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/line-ripple/foundation.js");
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




var MDCLineRipple =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCLineRipple, _super);

  function MDCLineRipple() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCLineRipple.attachTo = function (root) {
    return new MDCLineRipple(root);
  };
  /**
   * Activates the line ripple
   */


  MDCLineRipple.prototype.activate = function () {
    this.foundation_.activate();
  };
  /**
   * Deactivates the line ripple
   */


  MDCLineRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };
  /**
   * Sets the transform origin given a user's click location.
   * The `rippleCenter` is the x-coordinate of the middle of the ripple.
   */


  MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
    this.foundation_.setRippleCenter(xCoordinate);
  };

  MDCLineRipple.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setStyle: function setStyle(propertyName, value) {
        return _this.root_.style.setProperty(propertyName, value);
      },
      registerEventHandler: function registerEventHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCLineRippleFoundation"](adapter);
  };

  return MDCLineRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/line-ripple/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/line-ripple/constants.js ***!
  \*********************************************************/
/*! exports provided: cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
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
var cssClasses = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};


/***/ }),

/***/ "./node_modules/@material/line-ripple/foundation.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/line-ripple/foundation.js ***!
  \**********************************************************/
/*! exports provided: MDCLineRippleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCLineRippleFoundation", function() { return MDCLineRippleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/line-ripple/constants.js");
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




var MDCLineRippleFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCLineRippleFoundation, _super);

  function MDCLineRippleFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;

    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
    /**
     * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        setStyle: function setStyle() {
          return undefined;
        },
        registerEventHandler: function registerEventHandler() {
          return undefined;
        },
        deregisterEventHandler: function deregisterEventHandler() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCLineRippleFoundation.prototype.init = function () {
    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.destroy = function () {
    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.activate = function () {
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_ACTIVE);
  };

  MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
    this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
  };

  MDCLineRippleFoundation.prototype.deactivate = function () {
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
  };

  MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
    // Wait for the line ripple to be either transparent or opaque
    // before emitting the animation end event
    var isDeactivating = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);

    if (evt.propertyName === 'opacity') {
      if (isDeactivating) {
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_ACTIVE);
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
      }
    }
  };

  return MDCLineRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCLineRippleFoundation);

/***/ }),

/***/ "./node_modules/@material/line-ripple/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/line-ripple/index.js ***!
  \*****************************************************/
/*! exports provided: MDCLineRipple, cssClasses, MDCLineRippleFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/line-ripple/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCLineRipple", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCLineRipple"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/line-ripple/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/line-ripple/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCLineRippleFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCLineRippleFoundation"]; });

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

/***/ "./node_modules/@material/notched-outline/component.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/notched-outline/component.js ***!
  \*************************************************************/
/*! exports provided: MDCNotchedOutline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCNotchedOutline", function() { return MDCNotchedOutline; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_floating_label_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/floating-label/foundation */ "./node_modules/@material/floating-label/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/notched-outline/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/notched-outline/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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






var MDCNotchedOutline =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCNotchedOutline, _super);

  function MDCNotchedOutline() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCNotchedOutline.attachTo = function (root) {
    return new MDCNotchedOutline(root);
  };

  MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
    this.notchElement_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].NOTCH_ELEMENT_SELECTOR);
    var label = this.root_.querySelector('.' + _material_floating_label_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCFloatingLabelFoundation"].cssClasses.ROOT);

    if (label) {
      label.style.transitionDuration = '0s';
      this.root_.classList.add(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].OUTLINE_UPGRADED);
      requestAnimationFrame(function () {
        label.style.transitionDuration = '';
      });
    } else {
      this.root_.classList.add(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].NO_LABEL);
    }
  };
  /**
   * Updates classes and styles to open the notch to the specified width.
   * @param notchWidth The notch width in the outline.
   */


  MDCNotchedOutline.prototype.notch = function (notchWidth) {
    this.foundation_.notch(notchWidth);
  };
  /**
   * Updates classes and styles to close the notch.
   */


  MDCNotchedOutline.prototype.closeNotch = function () {
    this.foundation_.closeNotch();
  };

  MDCNotchedOutline.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      setNotchWidthProperty: function setNotchWidthProperty(width) {
        return _this.notchElement_.style.setProperty('width', width + 'px');
      },
      removeNotchWidthProperty: function removeNotchWidthProperty() {
        return _this.notchElement_.style.removeProperty('width');
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCNotchedOutlineFoundation"](adapter);
  };

  return MDCNotchedOutline;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/notched-outline/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/notched-outline/constants.js ***!
  \*************************************************************/
/*! exports provided: cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
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
var strings = {
  NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
};
var numbers = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
};
var cssClasses = {
  NO_LABEL: 'mdc-notched-outline--no-label',
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
  OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded'
};


/***/ }),

/***/ "./node_modules/@material/notched-outline/foundation.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/notched-outline/foundation.js ***!
  \**************************************************************/
/*! exports provided: MDCNotchedOutlineFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCNotchedOutlineFoundation", function() { return MDCNotchedOutlineFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/notched-outline/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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




var MDCNotchedOutlineFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCNotchedOutlineFoundation, _super);

  function MDCNotchedOutlineFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
    /**
     * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        setNotchWidthProperty: function setNotchWidthProperty() {
          return undefined;
        },
        removeNotchWidthProperty: function removeNotchWidthProperty() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
   */

  MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

    if (notchWidth > 0) {
      notchWidth += _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].NOTCH_ELEMENT_PADDING; // Add padding from left/right.
    }

    this.adapter_.setNotchWidthProperty(notchWidth);
    this.adapter_.addClass(OUTLINE_NOTCHED);
  };
  /**
   * Removes notched outline selector to close the notch in the outline.
   */


  MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
    this.adapter_.removeClass(OUTLINE_NOTCHED);
    this.adapter_.removeNotchWidthProperty();
  };

  return MDCNotchedOutlineFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCNotchedOutlineFoundation);

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

/***/ "./node_modules/@material/textfield/character-counter/component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/component.js ***!
  \*************************************************************************/
/*! exports provided: MDCTextFieldCharacterCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function() { return MDCTextFieldCharacterCounter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/character-counter/foundation.js");
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




var MDCTextFieldCharacterCounter =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldCharacterCounter, _super);

  function MDCTextFieldCharacterCounter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldCharacterCounter.attachTo = function (root) {
    return new MDCTextFieldCharacterCounter(root);
  };

  Object.defineProperty(MDCTextFieldCharacterCounter.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      }
    };
    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldCharacterCounterFoundation"](adapter);
  };

  return MDCTextFieldCharacterCounter;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/constants.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/constants.js ***!
  \*************************************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
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
var cssClasses = {
  ROOT: 'mdc-text-field-character-counter'
};
var strings = {
  ROOT_SELECTOR: "." + cssClasses.ROOT
};


/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/foundation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/foundation.js ***!
  \**************************************************************************/
/*! exports provided: MDCTextFieldCharacterCounterFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function() { return MDCTextFieldCharacterCounterFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/character-counter/constants.js");
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




var MDCTextFieldCharacterCounterFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldCharacterCounterFoundation, _super);

  function MDCTextFieldCharacterCounterFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      return {
        setContent: function setContent() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
    currentLength = Math.min(currentLength, maxLength);
    this.adapter_.setContent(currentLength + " / " + maxLength);
  };

  return MDCTextFieldCharacterCounterFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldCharacterCounterFoundation);

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/index.js ***!
  \*********************************************************************/
/*! exports provided: characterCountCssClasses, characterCountStrings, MDCTextFieldCharacterCounter, MDCTextFieldCharacterCounterFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/character-counter/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldCharacterCounter"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/character-counter/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldCharacterCounterFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/character-counter/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountCssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountStrings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

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

/***/ "./node_modules/@material/textfield/component.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/textfield/component.js ***!
  \*******************************************************/
/*! exports provided: MDCTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextField", function() { return MDCTextField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_floating_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/floating-label/component */ "./node_modules/@material/floating-label/component.js");
/* harmony import */ var _material_line_ripple_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/line-ripple/component */ "./node_modules/@material/line-ripple/component.js");
/* harmony import */ var _material_notched_outline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/notched-outline/component */ "./node_modules/@material/notched-outline/component.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _character_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./character-counter/component */ "./node_modules/@material/textfield/character-counter/component.js");
/* harmony import */ var _character_counter_foundation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./character-counter/foundation */ "./node_modules/@material/textfield/character-counter/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/foundation.js");
/* harmony import */ var _helper_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helper-text/component */ "./node_modules/@material/textfield/helper-text/component.js");
/* harmony import */ var _helper_text_foundation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helper-text/foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icon/component */ "./node_modules/@material/textfield/icon/component.js");
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

















var MDCTextField =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextField, _super);

  function MDCTextField() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextField.attachTo = function (root) {
    return new MDCTextField(root);
  };

  MDCTextField.prototype.initialize = function (rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function rippleFactory(el, foundation) {
        return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_7__["MDCRipple"](el, foundation);
      };
    }

    if (lineRippleFactory === void 0) {
      lineRippleFactory = function lineRippleFactory(el) {
        return new _material_line_ripple_component__WEBPACK_IMPORTED_MODULE_5__["MDCLineRipple"](el);
      };
    }

    if (helperTextFactory === void 0) {
      helperTextFactory = function helperTextFactory(el) {
        return new _helper_text_component__WEBPACK_IMPORTED_MODULE_13__["MDCTextFieldHelperText"](el);
      };
    }

    if (characterCounterFactory === void 0) {
      characterCounterFactory = function characterCounterFactory(el) {
        return new _character_counter_component__WEBPACK_IMPORTED_MODULE_9__["MDCTextFieldCharacterCounter"](el);
      };
    }

    if (iconFactory === void 0) {
      iconFactory = function iconFactory(el) {
        return new _icon_component__WEBPACK_IMPORTED_MODULE_15__["MDCTextFieldIcon"](el);
      };
    }

    if (labelFactory === void 0) {
      labelFactory = function labelFactory(el) {
        return new _material_floating_label_component__WEBPACK_IMPORTED_MODULE_4__["MDCFloatingLabel"](el);
      };
    }

    if (outlineFactory === void 0) {
      outlineFactory = function outlineFactory(el) {
        return new _material_notched_outline_component__WEBPACK_IMPORTED_MODULE_6__["MDCNotchedOutline"](el);
      };
    }

    this.input_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].INPUT_SELECTOR);
    var labelElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].LABEL_SELECTOR);
    this.label_ = labelElement ? labelFactory(labelElement) : null;
    var lineRippleElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].LINE_RIPPLE_SELECTOR);
    this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
    var outlineElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].OUTLINE_SELECTOR);
    this.outline_ = outlineElement ? outlineFactory(outlineElement) : null; // Helper text

    var helperTextStrings = _helper_text_foundation__WEBPACK_IMPORTED_MODULE_14__["MDCTextFieldHelperTextFoundation"].strings;
    var nextElementSibling = this.root_.nextElementSibling;
    var hasHelperLine = nextElementSibling && nextElementSibling.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_11__["cssClasses"].HELPER_LINE);
    var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
    this.helperText_ = helperTextEl ? helperTextFactory(helperTextEl) : null; // Character counter

    var characterCounterStrings = _character_counter_foundation__WEBPACK_IMPORTED_MODULE_10__["MDCTextFieldCharacterCounterFoundation"].strings;
    var characterCounterEl = this.root_.querySelector(characterCounterStrings.ROOT_SELECTOR); // If character counter is not found in root element search in sibling element.

    if (!characterCounterEl && hasHelperLine && nextElementSibling) {
      characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
    }

    this.characterCounter_ = characterCounterEl ? characterCounterFactory(characterCounterEl) : null;
    this.leadingIcon_ = null;
    this.trailingIcon_ = null;
    var iconElements = this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].ICON_SELECTOR);

    if (iconElements.length > 0) {
      if (iconElements.length > 1) {
        // Has both icons.
        this.leadingIcon_ = iconFactory(iconElements[0]);
        this.trailingIcon_ = iconFactory(iconElements[1]);
      } else {
        if (this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_11__["cssClasses"].WITH_LEADING_ICON)) {
          this.leadingIcon_ = iconFactory(iconElements[0]);
        } else {
          this.trailingIcon_ = iconFactory(iconElements[0]);
        }
      }
    }

    this.ripple = this.createRipple_(rippleFactory);
  };

  MDCTextField.prototype.destroy = function () {
    if (this.ripple) {
      this.ripple.destroy();
    }

    if (this.lineRipple_) {
      this.lineRipple_.destroy();
    }

    if (this.helperText_) {
      this.helperText_.destroy();
    }

    if (this.characterCounter_) {
      this.characterCounter_.destroy();
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.destroy();
    }

    if (this.trailingIcon_) {
      this.trailingIcon_.destroy();
    }

    if (this.label_) {
      this.label_.destroy();
    }

    if (this.outline_) {
      this.outline_.destroy();
    }

    _super.prototype.destroy.call(this);
  };
  /**
   * Initializes the Text Field's internal state based on the environment's
   * state.
   */


  MDCTextField.prototype.initialSyncWithDOM = function () {
    this.disabled = this.input_.disabled;
  };

  Object.defineProperty(MDCTextField.prototype, "value", {
    get: function get() {
      return this.foundation_.getValue();
    },

    /**
     * @param value The value to set on the input.
     */
    set: function set(value) {
      this.foundation_.setValue(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "disabled", {
    get: function get() {
      return this.foundation_.isDisabled();
    },

    /**
     * @param disabled Sets the Text Field disabled or enabled.
     */
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "valid", {
    get: function get() {
      return this.foundation_.isValid();
    },

    /**
     * @param valid Sets the Text Field valid or invalid.
     */
    set: function set(valid) {
      this.foundation_.setValid(valid);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "required", {
    get: function get() {
      return this.input_.required;
    },

    /**
     * @param required Sets the Text Field to required.
     */
    set: function set(required) {
      this.input_.required = required;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "pattern", {
    get: function get() {
      return this.input_.pattern;
    },

    /**
     * @param pattern Sets the input element's validation pattern.
     */
    set: function set(pattern) {
      this.input_.pattern = pattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "minLength", {
    get: function get() {
      return this.input_.minLength;
    },

    /**
     * @param minLength Sets the input element's minLength.
     */
    set: function set(minLength) {
      this.input_.minLength = minLength;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "maxLength", {
    get: function get() {
      return this.input_.maxLength;
    },

    /**
     * @param maxLength Sets the input element's maxLength.
     */
    set: function set(maxLength) {
      // Chrome throws exception if maxLength is set to a value less than zero
      if (maxLength < 0) {
        this.input_.removeAttribute('maxLength');
      } else {
        this.input_.maxLength = maxLength;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "min", {
    get: function get() {
      return this.input_.min;
    },

    /**
     * @param min Sets the input element's min.
     */
    set: function set(min) {
      this.input_.min = min;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "max", {
    get: function get() {
      return this.input_.max;
    },

    /**
     * @param max Sets the input element's max.
     */
    set: function set(max) {
      this.input_.max = max;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "step", {
    get: function get() {
      return this.input_.step;
    },

    /**
     * @param step Sets the input element's step.
     */
    set: function set(step) {
      this.input_.step = step;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "helperTextContent", {
    /**
     * Sets the helper text element content.
     */
    set: function set(content) {
      this.foundation_.setHelperTextContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "leadingIconAriaLabel", {
    /**
     * Sets the aria label of the leading icon.
     */
    set: function set(label) {
      this.foundation_.setLeadingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "leadingIconContent", {
    /**
     * Sets the text content of the leading icon.
     */
    set: function set(content) {
      this.foundation_.setLeadingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "trailingIconAriaLabel", {
    /**
     * Sets the aria label of the trailing icon.
     */
    set: function set(label) {
      this.foundation_.setTrailingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "trailingIconContent", {
    /**
     * Sets the text content of the trailing icon.
     */
    set: function set(content) {
      this.foundation_.setTrailingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "useNativeValidation", {
    /**
     * Enables or disables the use of native validation. Use this for custom validation.
     * @param useNativeValidation Set this to false to ignore native input validation.
     */
    set: function set(useNativeValidation) {
      this.foundation_.setUseNativeValidation(useNativeValidation);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Focuses the input element.
   */

  MDCTextField.prototype.focus = function () {
    this.input_.focus();
  };
  /**
   * Recomputes the outline SVG path for the outline element.
   */


  MDCTextField.prototype.layout = function () {
    var openNotch = this.foundation_.shouldFloat;
    this.foundation_.notchOutline(openNotch);
  };

  MDCTextField.prototype.getDefaultFoundation = function () {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
    var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.getRootAdapterMethods_(), this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_()); // tslint:enable:object-literal-sort-keys


    return new _foundation__WEBPACK_IMPORTED_MODULE_12__["MDCTextFieldFoundation"](adapter, this.getFoundationMap_());
  };

  MDCTextField.prototype.getRootAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      },
      registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {
        var getAttributesList = function getAttributesList(mutationsList) {
          return mutationsList.map(function (mutation) {
            return mutation.attributeName;
          }).filter(function (attributeName) {
            return attributeName;
          });
        };

        var observer = new MutationObserver(function (mutationsList) {
          return handler(getAttributesList(mutationsList));
        });
        var config = {
          attributes: true
        };
        observer.observe(_this.input_, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
        return observer.disconnect();
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCTextField.prototype.getInputAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      getNativeInput: function getNativeInput() {
        return _this.input_;
      },
      isFocused: function isFocused() {
        return document.activeElement === _this.input_;
      },
      registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
        return _this.input_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
        return _this.input_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCTextField.prototype.getLabelAdapterMethods_ = function () {
    var _this = this;

    return {
      floatLabel: function floatLabel(shouldFloat) {
        return _this.label_ && _this.label_["float"](shouldFloat);
      },
      getLabelWidth: function getLabelWidth() {
        return _this.label_ ? _this.label_.getWidth() : 0;
      },
      hasLabel: function hasLabel() {
        return Boolean(_this.label_);
      },
      shakeLabel: function shakeLabel(shouldShake) {
        return _this.label_ && _this.label_.shake(shouldShake);
      }
    };
  };

  MDCTextField.prototype.getLineRippleAdapterMethods_ = function () {
    var _this = this;

    return {
      activateLineRipple: function activateLineRipple() {
        if (_this.lineRipple_) {
          _this.lineRipple_.activate();
        }
      },
      deactivateLineRipple: function deactivateLineRipple() {
        if (_this.lineRipple_) {
          _this.lineRipple_.deactivate();
        }
      },
      setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
        if (_this.lineRipple_) {
          _this.lineRipple_.setRippleCenter(normalizedX);
        }
      }
    };
  };

  MDCTextField.prototype.getOutlineAdapterMethods_ = function () {
    var _this = this;

    return {
      closeOutline: function closeOutline() {
        return _this.outline_ && _this.outline_.closeNotch();
      },
      hasOutline: function hasOutline() {
        return Boolean(_this.outline_);
      },
      notchOutline: function notchOutline(labelWidth) {
        return _this.outline_ && _this.outline_.notch(labelWidth);
      }
    };
  };
  /**
   * @return A map of all subcomponents to subfoundations.
   */


  MDCTextField.prototype.getFoundationMap_ = function () {
    return {
      characterCounter: this.characterCounter_ ? this.characterCounter_.foundation : undefined,
      helperText: this.helperText_ ? this.helperText_.foundation : undefined,
      leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
      trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : undefined
    };
  };

  MDCTextField.prototype.createRipple_ = function (rippleFactory) {
    var _this = this;

    var isTextArea = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_11__["cssClasses"].TEXTAREA);
    var isOutlined = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_11__["cssClasses"].OUTLINED);

    if (isTextArea || isOutlined) {
      return null;
    } // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_7__["MDCRipple"].createAdapter(this), {
      isSurfaceActive: function isSurfaceActive() {
        return _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"](_this.input_, ':active');
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.input_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.input_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      }
    }); // tslint:enable:object-literal-sort-keys


    return rippleFactory(this.root_, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_8__["MDCRippleFoundation"](adapter));
  };

  return MDCTextField;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/textfield/constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/textfield/constants.js ***!
  \*******************************************************/
/*! exports provided: cssClasses, strings, numbers, VALIDATION_ATTR_WHITELIST, ALWAYS_FLOAT_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_ATTR_WHITELIST", function() { return VALIDATION_ATTR_WHITELIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALWAYS_FLOAT_TYPES", function() { return ALWAYS_FLOAT_TYPES; });
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
var strings = {
  ARIA_CONTROLS: 'aria-controls',
  ICON_SELECTOR: '.mdc-text-field__icon',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-floating-label',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  OUTLINE_SELECTOR: '.mdc-notched-outline'
};
var cssClasses = {
  DENSE: 'mdc-text-field--dense',
  DISABLED: 'mdc-text-field--disabled',
  FOCUSED: 'mdc-text-field--focused',
  FULLWIDTH: 'mdc-text-field--fullwidth',
  HELPER_LINE: 'mdc-text-field-helper-line',
  INVALID: 'mdc-text-field--invalid',
  NO_LABEL: 'mdc-text-field--no-label',
  OUTLINED: 'mdc-text-field--outlined',
  ROOT: 'mdc-text-field',
  TEXTAREA: 'mdc-text-field--textarea',
  WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
  WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon'
};
var numbers = {
  DENSE_LABEL_SCALE: 0.923,
  LABEL_SCALE: 0.75
};
/**
 * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */

var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];
/**
 * Label should always float for these types as they show some UI even if value is empty.
 */

var ALWAYS_FLOAT_TYPES = ['color', 'date', 'datetime-local', 'month', 'range', 'time', 'week'];


/***/ }),

/***/ "./node_modules/@material/textfield/foundation.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/textfield/foundation.js ***!
  \********************************************************/
/*! exports provided: MDCTextFieldFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function() { return MDCTextFieldFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
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



var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var INTERACTION_EVENTS = ['click', 'keydown'];

var MDCTextFieldFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldFoundation, _super);
  /**
   * @param adapter
   * @param foundationMap Map from subcomponent names to their subfoundations.
   */


  function MDCTextFieldFoundation(adapter, foundationMap) {
    if (foundationMap === void 0) {
      foundationMap = {};
    }

    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldFoundation.defaultAdapter, adapter)) || this;

    _this.isFocused_ = false;
    _this.receivedUserInput_ = false;
    _this.isValid_ = true;
    _this.useNativeValidation_ = true;
    _this.helperText_ = foundationMap.helperText;
    _this.characterCounter_ = foundationMap.characterCounter;
    _this.leadingIcon_ = foundationMap.leadingIcon;
    _this.trailingIcon_ = foundationMap.trailingIcon;

    _this.inputFocusHandler_ = function () {
      return _this.activateFocus();
    };

    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus();
    };

    _this.inputInputHandler_ = function () {
      return _this.handleInput();
    };

    _this.setPointerXOffset_ = function (evt) {
      return _this.setTransformOrigin(evt);
    };

    _this.textFieldInteractionHandler_ = function () {
      return _this.handleTextFieldInteraction();
    };

    _this.validationAttributeChangeHandler_ = function (attributesList) {
      return _this.handleValidationAttributeChange(attributesList);
    };

    return _this;
  }

  Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "numbers", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat_", {
    get: function get() {
      var type = this.getNativeInput_().type;
      return _constants__WEBPACK_IMPORTED_MODULE_2__["ALWAYS_FLOAT_TYPES"].indexOf(type) >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
    get: function get() {
      return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
    get: function get() {
      return !this.isFocused_ && !this.isValid() && !!this.getValue();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return true;
        },
        registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {
          return undefined;
        },
        deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {
          return undefined;
        },
        registerInputInteractionHandler: function registerInputInteractionHandler() {
          return undefined;
        },
        deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {
          return undefined;
        },
        registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {
          return new MutationObserver(function () {
            return undefined;
          });
        },
        deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {
          return undefined;
        },
        getNativeInput: function getNativeInput() {
          return null;
        },
        isFocused: function isFocused() {
          return false;
        },
        activateLineRipple: function activateLineRipple() {
          return undefined;
        },
        deactivateLineRipple: function deactivateLineRipple() {
          return undefined;
        },
        setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {
          return undefined;
        },
        shakeLabel: function shakeLabel() {
          return undefined;
        },
        floatLabel: function floatLabel() {
          return undefined;
        },
        hasLabel: function hasLabel() {
          return false;
        },
        getLabelWidth: function getLabelWidth() {
          return 0;
        },
        hasOutline: function hasOutline() {
          return false;
        },
        notchOutline: function notchOutline() {
          return undefined;
        },
        closeOutline: function closeOutline() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldFoundation.prototype.init = function () {
    var _this = this;

    if (this.adapter_.isFocused()) {
      this.inputFocusHandler_();
    } else if (this.adapter_.hasLabel() && this.shouldFloat) {
      this.notchOutline(true);
      this.adapter_.floatLabel(true);
    }

    this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
    POINTERDOWN_EVENTS.forEach(function (evtType) {
      _this.adapter_.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
    });
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
    });
    this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
    this.setCharacterCounter_(this.getValue().length);
  };

  MDCTextFieldFoundation.prototype.destroy = function () {
    var _this = this;

    this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
    POINTERDOWN_EVENTS.forEach(function (evtType) {
      _this.adapter_.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
    });
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
    });
    this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
  };
  /**
   * Handles user interactions with the Text Field.
   */


  MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
    var nativeInput = this.adapter_.getNativeInput();

    if (nativeInput && nativeInput.disabled) {
      return;
    }

    this.receivedUserInput_ = true;
  };
  /**
   * Handles validation attribute changes
   */


  MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
    var _this = this;

    attributesList.some(function (attributeName) {
      if (_constants__WEBPACK_IMPORTED_MODULE_2__["VALIDATION_ATTR_WHITELIST"].indexOf(attributeName) > -1) {
        _this.styleValidity_(true);

        return true;
      }

      return false;
    });

    if (attributesList.indexOf('maxlength') > -1) {
      this.setCharacterCounter_(this.getValue().length);
    }
  };
  /**
   * Opens/closes the notched outline.
   */


  MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
    if (!this.adapter_.hasOutline()) {
      return;
    }

    if (openNotch) {
      var isDense = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DENSE);
      var labelScale = isDense ? _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DENSE_LABEL_SCALE : _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].LABEL_SCALE;
      var labelWidth = this.adapter_.getLabelWidth() * labelScale;
      this.adapter_.notchOutline(labelWidth);
    } else {
      this.adapter_.closeOutline();
    }
  };
  /**
   * Activates the text field focus state.
   */


  MDCTextFieldFoundation.prototype.activateFocus = function () {
    this.isFocused_ = true;
    this.styleFocused_(this.isFocused_);
    this.adapter_.activateLineRipple();

    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }

    if (this.helperText_) {
      this.helperText_.showToScreenReader();
    }
  };
  /**
   * Sets the line ripple's transform origin, so that the line ripple activate
   * animation will animate out from the user's click location.
   */


  MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
    var touches = evt.touches;
    var targetEvent = touches ? touches[0] : evt;
    var targetClientRect = targetEvent.target.getBoundingClientRect();
    var normalizedX = targetEvent.clientX - targetClientRect.left;
    this.adapter_.setLineRippleTransformOrigin(normalizedX);
  };
  /**
   * Handles input change of text input and text area.
   */


  MDCTextFieldFoundation.prototype.handleInput = function () {
    this.autoCompleteFocus();
    this.setCharacterCounter_(this.getValue().length);
  };
  /**
   * Activates the Text Field's focus state in cases when the input value
   * changes without user input (e.g. programmatically).
   */


  MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
    if (!this.receivedUserInput_) {
      this.activateFocus();
    }
  };
  /**
   * Deactivates the Text Field's focus state.
   */


  MDCTextFieldFoundation.prototype.deactivateFocus = function () {
    this.isFocused_ = false;
    this.adapter_.deactivateLineRipple();
    var isValid = this.isValid();
    this.styleValidity_(isValid);
    this.styleFocused_(this.isFocused_);

    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }

    if (!this.shouldFloat) {
      this.receivedUserInput_ = false;
    }
  };

  MDCTextFieldFoundation.prototype.getValue = function () {
    return this.getNativeInput_().value;
  };
  /**
   * @param value The value to set on the input Element.
   */


  MDCTextFieldFoundation.prototype.setValue = function (value) {
    // Prevent Safari from moving the caret to the end of the input when the value has not changed.
    if (this.getValue() !== value) {
      this.getNativeInput_().value = value;
    }

    this.setCharacterCounter_(value.length);
    var isValid = this.isValid();
    this.styleValidity_(isValid);

    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }
  };
  /**
   * @return The custom validity state, if set; otherwise, the result of a native validity check.
   */


  MDCTextFieldFoundation.prototype.isValid = function () {
    return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;
  };
  /**
   * @param isValid Sets the custom validity state of the Text Field.
   */


  MDCTextFieldFoundation.prototype.setValid = function (isValid) {
    this.isValid_ = isValid;
    this.styleValidity_(isValid);
    var shouldShake = !isValid && !this.isFocused_ && !!this.getValue();

    if (this.adapter_.hasLabel()) {
      this.adapter_.shakeLabel(shouldShake);
    }
  };
  /**
   * Enables or disables the use of native validation. Use this for custom validation.
   * @param useNativeValidation Set this to false to ignore native input validation.
   */


  MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
    this.useNativeValidation_ = useNativeValidation;
  };

  MDCTextFieldFoundation.prototype.isDisabled = function () {
    return this.getNativeInput_().disabled;
  };
  /**
   * @param disabled Sets the text-field disabled or enabled.
   */


  MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
    this.getNativeInput_().disabled = disabled;
    this.styleDisabled_(disabled);
  };
  /**
   * @param content Sets the content of the helper text.
   */


  MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
    if (this.helperText_) {
      this.helperText_.setContent(content);
    }
  };
  /**
   * Sets the aria label of the leading icon.
   */


  MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the leading icon.
   */


  MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setContent(content);
    }
  };
  /**
   * Sets the aria label of the trailing icon.
   */


  MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
    if (this.trailingIcon_) {
      this.trailingIcon_.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the trailing icon.
   */


  MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
    if (this.trailingIcon_) {
      this.trailingIcon_.setContent(content);
    }
  };
  /**
   * Sets character counter values that shows characters used and the total character limit.
   */


  MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {
    if (!this.characterCounter_) {
      return;
    }

    var maxLength = this.getNativeInput_().maxLength;

    if (maxLength === -1) {
      throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
    }

    this.characterCounter_.setCounterValue(currentLength, maxLength);
  };
  /**
   * @return True if the Text Field input fails in converting the user-supplied value.
   */


  MDCTextFieldFoundation.prototype.isBadInput_ = function () {
    // The badInput property is not supported in IE 11 💩.
    return this.getNativeInput_().validity.badInput || false;
  };
  /**
   * @return The result of native validity checking (ValidityState.valid).
   */


  MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {
    return this.getNativeInput_().validity.valid;
  };
  /**
   * Styles the component based on the validity state.
   */


  MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {
    var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

    if (isValid) {
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.addClass(INVALID);
    }

    if (this.helperText_) {
      this.helperText_.setValidity(isValid);
    }
  };
  /**
   * Styles the component based on the focused state.
   */


  MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {
    var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

    if (isFocused) {
      this.adapter_.addClass(FOCUSED);
    } else {
      this.adapter_.removeClass(FOCUSED);
    }
  };
  /**
   * Styles the component based on the disabled state.
   */


  MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {
    var _a = MDCTextFieldFoundation.cssClasses,
        DISABLED = _a.DISABLED,
        INVALID = _a.INVALID;

    if (isDisabled) {
      this.adapter_.addClass(DISABLED);
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.removeClass(DISABLED);
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.setDisabled(isDisabled);
    }

    if (this.trailingIcon_) {
      this.trailingIcon_.setDisabled(isDisabled);
    }
  };
  /**
   * @return The native text input element from the host environment, or an object with the same shape for unit tests.
   */


  MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
    // this.adapter_ may be undefined in foundation unit tests. This happens when testdouble is creating a mock object
    // and invokes the shouldShake/shouldFloat getters (which in turn call getValue(), which calls this method) before
    // init() has been called from the MDCTextField constructor. To work around that issue, we return a dummy object.
    var nativeInput = this.adapter_ ? this.adapter_.getNativeInput() : null;
    return nativeInput || {
      disabled: false,
      maxLength: -1,
      type: 'input',
      validity: {
        badInput: false,
        valid: true
      },
      value: ''
    };
  };

  return MDCTextFieldFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldFoundation);

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/component.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/component.js ***!
  \*******************************************************************/
/*! exports provided: MDCTextFieldHelperText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return MDCTextFieldHelperText; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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




var MDCTextFieldHelperText =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldHelperText, _super);

  function MDCTextFieldHelperText() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldHelperText.attachTo = function (root) {
    return new MDCTextFieldHelperText(root);
  };

  Object.defineProperty(MDCTextFieldHelperText.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldHelperTextFoundation"](adapter);
  };

  return MDCTextFieldHelperText;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/constants.js ***!
  \*******************************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
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
  HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
  ROOT: 'mdc-text-field-helper-text'
};
var strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
  ROOT_SELECTOR: "." + cssClasses.ROOT
};


/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/foundation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/foundation.js ***!
  \********************************************************************/
/*! exports provided: MDCTextFieldHelperTextFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return MDCTextFieldHelperTextFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/helper-text/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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




var MDCTextFieldHelperTextFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldHelperTextFoundation, _super);

  function MDCTextFieldHelperTextFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCTextFieldHelperTextFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldHelperTextFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldHelperTextFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        removeAttr: function removeAttr() {
          return undefined;
        },
        setContent: function setContent() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Sets the content of the helper text field.
   */

  MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {
    this.adapter_.setContent(content);
  };
  /**
   * @param isPersistent Sets the persistency of the helper text.
   */


  MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
    if (isPersistent) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
    }
  };
  /**
   * @param isValidation True to make the helper text act as an error validation message.
   */


  MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {
    if (isValidation) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
    }
  };
  /**
   * Makes the helper text visible to the screen reader.
   */


  MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {
    this.adapter_.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_HIDDEN);
  };
  /**
   * Sets the validity of the helper text based on the input validity.
   */


  MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {
    var helperTextIsPersistent = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
    var helperTextIsValidationMsg = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ROLE, 'alert');
    } else {
      this.adapter_.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ROLE);
    }

    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
      this.hide_();
    }
  };
  /**
   * Hides the help text from screen readers.
   */


  MDCTextFieldHelperTextFoundation.prototype.hide_ = function () {
    this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_HIDDEN, 'true');
  };

  return MDCTextFieldHelperTextFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldHelperTextFoundation);

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/index.js ***!
  \***************************************************************/
/*! exports provided: helperTextCssClasses, helperTextStrings, MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/helper-text/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldHelperText"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldHelperTextFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/helper-text/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextCssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextStrings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

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

/***/ "./node_modules/@material/textfield/icon/component.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/component.js ***!
  \************************************************************/
/*! exports provided: MDCTextFieldIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return MDCTextFieldIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/icon/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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




var MDCTextFieldIcon =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldIcon, _super);

  function MDCTextFieldIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldIcon.attachTo = function (root) {
    return new MDCTextFieldIcon(root);
  };

  Object.defineProperty(MDCTextFieldIcon.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldIcon.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      getAttr: function getAttr(attr) {
        return _this.root_.getAttribute(attr);
      },
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      },
      notifyIconAction: function notifyIconAction() {
        return _this.emit(_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldIconFoundation"].strings.ICON_EVENT, {}
        /* evtData */
        , true
        /* shouldBubble */
        );
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldIconFoundation"](adapter);
  };

  return MDCTextFieldIcon;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/textfield/icon/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/constants.js ***!
  \************************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
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
var strings = {
  ICON_EVENT: 'MDCTextField:icon',
  ICON_ROLE: 'button'
};
var cssClasses = {
  ROOT: 'mdc-text-field__icon'
};


/***/ }),

/***/ "./node_modules/@material/textfield/icon/foundation.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/foundation.js ***!
  \*************************************************************/
/*! exports provided: MDCTextFieldIconFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return MDCTextFieldIconFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/icon/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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



var INTERACTION_EVENTS = ['click', 'keydown'];

var MDCTextFieldIconFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldIconFoundation, _super);

  function MDCTextFieldIconFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldIconFoundation.defaultAdapter, adapter)) || this;

    _this.savedTabIndex_ = null;

    _this.interactionHandler_ = function (evt) {
      return _this.handleInteraction(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCTextFieldIconFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldIconFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldIconFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        getAttr: function getAttr() {
          return null;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        removeAttr: function removeAttr() {
          return undefined;
        },
        setContent: function setContent() {
          return undefined;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        },
        notifyIconAction: function notifyIconAction() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldIconFoundation.prototype.init = function () {
    var _this = this;

    this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCTextFieldIconFoundation.prototype.destroy = function () {
    var _this = this;

    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {
    if (!this.savedTabIndex_) {
      return;
    }

    if (disabled) {
      this.adapter_.setAttr('tabindex', '-1');
      this.adapter_.removeAttr('role');
    } else {
      this.adapter_.setAttr('tabindex', this.savedTabIndex_);
      this.adapter_.setAttr('role', _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ICON_ROLE);
    }
  };

  MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {
    this.adapter_.setAttr('aria-label', label);
  };

  MDCTextFieldIconFoundation.prototype.setContent = function (content) {
    this.adapter_.setContent(content);
  };

  MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {
    var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;

    if (evt.type === 'click' || isEnterKey) {
      this.adapter_.notifyIconAction();
    }
  };

  return MDCTextFieldIconFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldIconFoundation);

/***/ }),

/***/ "./node_modules/@material/textfield/icon/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/textfield/icon/index.js ***!
  \********************************************************/
/*! exports provided: iconCssClasses, iconStrings, MDCTextFieldIcon, MDCTextFieldIconFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/icon/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldIcon"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/icon/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldIconFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/icon/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconCssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconStrings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

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

/***/ "./node_modules/@material/textfield/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/textfield/index.js ***!
  \***************************************************/
/*! exports provided: MDCTextField, cssClasses, strings, numbers, VALIDATION_ATTR_WHITELIST, ALWAYS_FLOAT_TYPES, MDCTextFieldFoundation, characterCountCssClasses, characterCountStrings, helperTextCssClasses, helperTextStrings, iconCssClasses, iconStrings, MDCTextFieldCharacterCounter, MDCTextFieldCharacterCounterFoundation, MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation, MDCTextFieldIcon, MDCTextFieldIconFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextField", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextField"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_ATTR_WHITELIST", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["VALIDATION_ATTR_WHITELIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ALWAYS_FLOAT_TYPES", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["ALWAYS_FLOAT_TYPES"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldFoundation"]; });

/* harmony import */ var _character_counter_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-counter/index */ "./node_modules/@material/textfield/character-counter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountCssClasses", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["characterCountCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountStrings", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["characterCountStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["MDCTextFieldCharacterCounter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["MDCTextFieldCharacterCounterFoundation"]; });

/* harmony import */ var _helper_text_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper-text/index */ "./node_modules/@material/textfield/helper-text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextCssClasses", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["helperTextCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextStrings", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["helperTextStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldHelperText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldHelperTextFoundation"]; });

/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon/index */ "./node_modules/@material/textfield/icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconCssClasses", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["iconCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconStrings", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["iconStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextFieldIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextFieldIconFoundation"]; });

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

/***/ 0:
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** multi ./client/static/scss/material-theme.scss ./client/static/js/material.js ./client/static/scss/style_common.scss ./client/static/scss/style_register.scss ./client/static/scss/style_home.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./client/static/scss/material-theme.scss */"./client/static/scss/material-theme.scss");
__webpack_require__(/*! ./client/static/js/material.js */"./client/static/js/material.js");
__webpack_require__(/*! ./client/static/scss/style_common.scss */"./client/static/scss/style_common.scss");
__webpack_require__(/*! ./client/static/scss/style_register.scss */"./client/static/scss/style_register.scss");
module.exports = __webpack_require__(/*! ./client/static/scss/style_home.scss */"./client/static/scss/style_home.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0YXRpYy9qcy9tYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGljL3Njc3MvbWF0ZXJpYWwtdGhlbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGljL3Njc3Mvc3R5bGVfY29tbW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0YXRpYy9zY3NzL3N0eWxlX2hvbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGljL3Njc3Mvc3R5bGVfcmVnaXN0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50LnRzIiwid2VicGFjazovLy9mb3VuZGF0aW9uLnRzIiwid2VicGFjazovLy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vL3BvbnlmaWxsLnRzIiwid2VicGFjazovLy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vL2luZGV4LnRzIiwid2VicGFjazovLy91dGlsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3RvciIsInJpcHBsZXMiLCJtYXAiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImVsIiwiTURDUmlwcGxlIiwidGV4dEVscyIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJNRENUZXh0RmllbGQiLCJjaGFyYWN0ZXJDb3VudGVyIiwiTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlciIsInF1ZXJ5U2VsZWN0b3IiLCJmbG9hdGluZ0xhYmVscyIsIk1EQ0Zsb2F0aW5nTGFiZWwiLCJsaW5lUmlwcGxlcyIsIk1EQ0xpbmVSaXBwbGUiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fZXh0ZW5kcyIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcHBseSIsIl9fcmVzdCIsImUiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImRlZmluZVByb3BlcnR5IiwiX19wYXJhbSIsInBhcmFtSW5kZXgiLCJkZWNvcmF0b3IiLCJfX21ldGFkYXRhIiwibWV0YWRhdGFLZXkiLCJtZXRhZGF0YVZhbHVlIiwibWV0YWRhdGEiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiX19nZW5lcmF0b3IiLCJib2R5IiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJwb3AiLCJwdXNoIiwiX19leHBvcnRTdGFyIiwibSIsImV4cG9ydHMiLCJfX3ZhbHVlcyIsIm8iLCJfX3JlYWQiLCJhciIsImVycm9yIiwiX19zcHJlYWQiLCJjb25jYXQiLCJfX3NwcmVhZEFycmF5cyIsImlsIiwiayIsImEiLCJqIiwiamwiLCJfX2F3YWl0IiwiX19hc3luY0dlbmVyYXRvciIsImFzeW5jSXRlcmF0b3IiLCJxIiwicmVzdW1lIiwic2V0dGxlIiwiZnVsZmlsbCIsInNoaWZ0IiwiX19hc3luY0RlbGVnYXRvciIsIl9fYXN5bmNWYWx1ZXMiLCJfX21ha2VUZW1wbGF0ZU9iamVjdCIsImNvb2tlZCIsInJhdyIsIl9faW1wb3J0U3RhciIsIm1vZCIsIl9fZXNNb2R1bGUiLCJfX2ltcG9ydERlZmF1bHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQU07QUFDdEIsTUFBTUMsUUFBUSxHQUFHLHFFQUFqQjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxHQUFHQyxHQUFILENBQU9DLElBQVAsQ0FBWUwsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQkosUUFBMUIsQ0FBWixFQUFpRCxVQUFTSyxFQUFULEVBQWE7QUFDNUUsV0FBTyxJQUFJQyxnRUFBSixDQUFjRCxFQUFkLENBQVA7QUFDRCxHQUZlLENBQWhCO0FB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QUlBLEdBQUcsQ0FBQ0MsVUFBZixFQUEyQixPQUFPRCxHQUFQO0FBQzNCLE1BQUluRCxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUltRCxHQUFHLElBQUksSUFBWCxFQUFpQixLQUFLLElBQUlsQixDQUFULElBQWNrQixHQUFkO0FBQW1CLFFBQUkxRyxNQUFNLENBQUNJLGNBQVAsQ0FBc0J2QixJQUF0QixDQUEyQjZILEdBQTNCLEVBQWdDbEIsQ0FBaEMsQ0FBSixFQUF3Q2pDLE1BQU0sQ0FBQ2lDLENBQUQsQ0FBTixHQUFZa0IsR0FBRyxDQUFDbEIsQ0FBRCxDQUFmO0FBQTNEO0FBQ2pCakMsUUFBTSxXQUFOLEdBQWlCbUQsR0FBakI7QUFDQSxTQUFPbkQsTUFBUDtBQUNIO0FBRU0sU0FBU3FELGVBQVQsQ0FBeUJGLEdBQXpCLEVBQThCO0FBQ2pDLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVNBO0FBQVgsR0FBdkM7QUFDSCxDIiwiZmlsZSI6Im1hdGVyaWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHtNRENSaXBwbGV9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnO1xyXG5pbXBvcnQge01EQ0Zsb2F0aW5nTGFiZWx9IGZyb20gJ0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbCc7XHJcbmltcG9ydCB7TURDTGluZVJpcHBsZX0gZnJvbSAnQG1hdGVyaWFsL2xpbmUtcmlwcGxlJztcclxuaW1wb3J0IHtNRENUZXh0RmllbGQsIE1EQ1RleHRGaWVsZEZvdW5kYXRpb259IGZyb20gJ0BtYXRlcmlhbC90ZXh0ZmllbGQnO1xyXG5pbXBvcnQge01EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJ9IGZyb20gJ0BtYXRlcmlhbC90ZXh0ZmllbGQvY2hhcmFjdGVyLWNvdW50ZXInO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdG9yID0gJy5tZGMtYnV0dG9uLCAubWRjLWljb24tYnV0dG9uLCAubWRjLWNhcmRfX3ByaW1hcnktYWN0aW9uLCAubWRjLWNhcmQnO1xyXG4gIGNvbnN0IHJpcHBsZXMgPSBbXS5tYXAuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgZnVuY3Rpb24oZWwpIHtcclxuICAgIHJldHVybiBuZXcgTURDUmlwcGxlKGVsKTtcclxuICB9KTtcclxuICBcclxuICBjb25zdCB0ZXh0RWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWRjLXRleHQtZmllbGQnKSk7XHJcbiAgdGV4dEVscy5mb3JFYWNoKChlbCkgPT4gbmV3IE1EQ1RleHRGaWVsZChlbCkpO1xyXG5cclxuICBjb25zdCBjaGFyYWN0ZXJDb3VudGVyID0gbmV3IE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYy10ZXh0LWZpZWxkLWNoYXJhY3Rlci1jb3VudGVyJykpO1xyXG5cclxuICBjb25zdCBmbG9hdGluZ0xhYmVscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1kYy1mbG9hdGluZy1sYWJlbCcpKTtcclxuICBmbG9hdGluZ0xhYmVscy5mb3JFYWNoKChlbCkgPT4gbmV3IE1EQ0Zsb2F0aW5nTGFiZWwoZWwpKTtcclxuXHJcbiAgY29uc3QgbGluZVJpcHBsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZGMtbGluZS1yaXBwbGUnKSk7XHJcbiAgbGluZVJpcHBsZXMuZm9yRWFjaCgoZWwpID0+IG5ldyBNRENMaW5lUmlwcGxlKGVsKSk7XHJcbn0pOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYXRlcmlhbC10aGVtZS5jc3NcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3R5bGVfY29tbW9uLmNzc1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdHlsZV9ob21lLmNzc1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdHlsZV9yZWdpc3Rlci5jc3NcIjsiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ1RleHRGaWVsZEljb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVGV4dEZpZWxkSWNvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUZXh0RmllbGRJY29uKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ1RleHRGaWVsZEljb24uYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZEljb24ocm9vdCk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkSWNvbi5wcm90b3R5cGUsIFwiZm91bmRhdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl87XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1RleHRGaWVsZEljb24ucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgZ2V0QXR0cjogZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmdldEF0dHJpYnV0ZShhdHRyKTsgfSxcbiAgICAgICAgICAgIHNldEF0dHI6IGZ1bmN0aW9uIChhdHRyLCB2YWx1ZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiBfdGhpcy5yb290Xy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7IH0sXG4gICAgICAgICAgICBzZXRDb250ZW50OiBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJvb3RfLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHsgcmV0dXJuIF90aGlzLmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7IHJldHVybiBfdGhpcy51bmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIG5vdGlmeUljb25BY3Rpb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmVtaXQoTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24uc3RyaW5ncy5JQ09OX0VWRU5ULCB7fSAvKiBldnREYXRhICovLCB0cnVlIC8qIHNob3VsZEJ1YmJsZSAqLyk7IH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGV4dEZpZWxkSWNvbjtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENUZXh0RmllbGRJY29uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBJTlRFUkFDVElPTl9FVkVOVFMgPSBbJ2NsaWNrJywgJ2tleWRvd24nXTtcbnZhciBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2F2ZWRUYWJJbmRleF8gPSBudWxsO1xuICAgICAgICBfdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlZSB7QGxpbmsgTURDVGV4dEZpZWxkSWNvbkFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnZXRBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIHNldEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0Q29udGVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUljb25BY3Rpb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zYXZlZFRhYkluZGV4XyA9IHRoaXMuYWRhcHRlcl8uZ2V0QXR0cigndGFiaW5kZXgnKTtcbiAgICAgICAgSU5URVJBQ1RJT05fRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBJTlRFUkFDVElPTl9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RGlzYWJsZWQgPSBmdW5jdGlvbiAoZGlzYWJsZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNhdmVkVGFiSW5kZXhfKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHIoJ3JvbGUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cigndGFiaW5kZXgnLCB0aGlzLnNhdmVkVGFiSW5kZXhfKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cigncm9sZScsIHN0cmluZ3MuSUNPTl9ST0xFKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24ucHJvdG90eXBlLnNldEFyaWFMYWJlbCA9IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Q29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q29udGVudChjb250ZW50KTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGlzRW50ZXJLZXkgPSBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMztcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAnY2xpY2snIHx8IGlzRW50ZXJLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5SWNvbkFjdGlvbigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdFxuICogcGFzc2l2ZSBldmVudCBsaXN0ZW5lciBzdXBwb3J0LlxuICovXG52YXIgc3VwcG9ydHNQYXNzaXZlXztcbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycywgYW5kXG4gKiBpZiBzbywgdXNlIHRoZW0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XG4gICAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgdmFyIGlzU3VwcG9ydGVkXzEgPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LCB7XG4gICAgICAgICAgICAgICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3VwcG9ydGVkXzEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWRfMTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWVtcHR5IGNhbm5vdCB0aHJvdyBlcnJvciBkdWUgdG8gdGVzdHMuIHRzbGludCBhbHNvIGRpc2FibGVzIGNvbnNvbGUubG9nLlxuICAgICAgICBzdXBwb3J0c1Bhc3NpdmVfID0gaXNTdXBwb3J0ZWRfMTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV8gPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEEgXCJwb255ZmlsbFwiIGlzIGEgcG9seWZpbGwgdGhhdCBkb2Vzbid0IG1vZGlmeSB0aGUgZ2xvYmFsIHByb3RvdHlwZSBjaGFpbi5cbiAqIFRoaXMgbWFrZXMgcG9ueWZpbGxzIHNhZmVyIHRoYW4gdHJhZGl0aW9uYWwgcG9seWZpbGxzLCBlc3BlY2lhbGx5IGZvciBsaWJyYXJpZXMgbGlrZSBNREMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xvc2VzdCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICB9XG4gICAgdmFyIGVsID0gZWxlbWVudDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHZhciBuYXRpdmVNYXRjaGVzID0gZWxlbWVudC5tYXRjaGVzXG4gICAgICAgIHx8IGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yXG4gICAgICAgIHx8IGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3I7XG4gICAgcmV0dXJuIG5hdGl2ZU1hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb255ZmlsbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBzdHJpbmdzID0ge1xuICAgIElDT05fRVZFTlQ6ICdNRENUZXh0RmllbGQ6aWNvbicsXG4gICAgSUNPTl9ST0xFOiAnYnV0dG9uJyxcbn07XG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBST09UOiAnbWRjLXRleHQtZmllbGRfX2ljb24nLFxufTtcbmV4cG9ydCB7IHN0cmluZ3MsIGNzc0NsYXNzZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vZm91bmRhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2NoYXJhY3Rlci1jb3VudGVyL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vaGVscGVyLXRleHQvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9pY29uL2luZGV4Jztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvXG4gKiBkZXRlY3QgQ1NTIGN1c3RvbSB2YXJpYWJsZSBzdXBwb3J0LlxuICovXG52YXIgc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuZnVuY3Rpb24gZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopIHtcbiAgICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzExNDk1NDQ4L1xuICAgIHZhciBkb2N1bWVudCA9IHdpbmRvd09iai5kb2N1bWVudDtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vZGUuY2xhc3NOYW1lID0gJ21kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWcnO1xuICAgIC8vIEFwcGVuZCB0byBoZWFkIGluc3RlYWQgb2YgYm9keSBiZWNhdXNlIHRoaXMgc2NyaXB0IG1pZ2h0IGJlIGludm9rZWQgaW4gdGhlXG4gICAgLy8gaGVhZCwgaW4gd2hpY2ggY2FzZSB0aGUgYm9keSBkb2Vzbid0IGV4aXN0IHlldC4gVGhlIHByb2JlIHdvcmtzIGVpdGhlciB3YXkuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAgIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgdmFyIGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc1BzZXVkb1ZhckJ1Zztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3dPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIHZhciBDU1MgPSB3aW5kb3dPYmouQ1NTO1xuICAgIHZhciBzdXBwb3J0c0Nzc1ZhcnMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gICAgaWYgKHR5cGVvZiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPT09ICdib29sZWFuJyAmJiAhZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gICAgfVxuICAgIHZhciBzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCA9IENTUyAmJiB0eXBlb2YgQ1NTLnN1cHBvcnRzID09PSAnZnVuY3Rpb24nO1xuICAgIGlmICghc3VwcG9ydHNGdW5jdGlvblByZXNlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyA9IENTUy5zdXBwb3J0cygnLS1jc3MtdmFycycsICd5ZXMnKTtcbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgICAvLyBTZWU6IFJFQURNRSBzZWN0aW9uIG9uIFNhZmFyaVxuICAgIHZhciB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMgPSAoQ1NTLnN1cHBvcnRzKCcoLS1jc3MtdmFyczogeWVzKScpICYmXG4gICAgICAgIENTUy5zdXBwb3J0cygnY29sb3InLCAnIzAwMDAwMDAwJykpO1xuICAgIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcnMgPSAhZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJzID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICghZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9IHN1cHBvcnRzQ3NzVmFycztcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFycztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXZ0LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gICAgaWYgKCFldnQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICB2YXIgeCA9IHBhZ2VPZmZzZXQueCwgeSA9IHBhZ2VPZmZzZXQueTtcbiAgICB2YXIgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgICB2YXIgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuICAgIHZhciBub3JtYWxpemVkWDtcbiAgICB2YXIgbm9ybWFsaXplZFk7XG4gICAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIHZhciB0b3VjaEV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBtb3VzZUV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IG1vdXNlRXZlbnQucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gbW91c2VFdmVudC5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgcmV0dXJuIHsgeDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=