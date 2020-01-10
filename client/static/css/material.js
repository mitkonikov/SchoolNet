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




var selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action, .mdc-card';
var ripples = [].map.call(document.querySelectorAll(selector), function (el) {
  return new _material_ripple_index__WEBPACK_IMPORTED_MODULE_0__["MDCRipple"](el);
});
var textEls = Array.from(document.querySelectorAll('.mdc-text-field'));
textEls.forEach(function (el) {
  return new _material_textfield__WEBPACK_IMPORTED_MODULE_3__["MDCTextField"](el);
});
var floatingLabels = Array.from(document.querySelectorAll('.mdc-floating-label'));
floatingLabels.forEach(function (el) {
  return new _material_floating_label__WEBPACK_IMPORTED_MODULE_1__["MDCFloatingLabel"](el);
});
var lineRipples = Array.from(document.querySelectorAll('.mdc-line-ripple'));
lineRipples.forEach(function (el) {
  return new _material_line_ripple__WEBPACK_IMPORTED_MODULE_2__["MDCLineRipple"](el);
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
/*!*************************************************************************************!*\
  !*** multi ./client/static/scss/material-theme.scss ./client/static/js/material.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./client/static/scss/material-theme.scss */"./client/static/scss/material-theme.scss");
module.exports = __webpack_require__(/*! ./client/static/js/material.js */"./client/static/js/material.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0YXRpYy9qcy9tYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGljL3Njc3MvbWF0ZXJpYWwtdGhlbWUuc2NzcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50LnRzIiwid2VicGFjazovLy9mb3VuZGF0aW9uLnRzIiwid2VicGFjazovLy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vL3BvbnlmaWxsLnRzIiwid2VicGFjazovLy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vL2luZGV4LnRzIiwid2VicGFjazovLy91dGlsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiXSwibmFtZXMiOlsic2VsZWN0b3IiLCJyaXBwbGVzIiwibWFwIiwiY2FsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImVsIiwiTURDUmlwcGxlIiwidGV4dEVscyIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJNRENUZXh0RmllbGQiLCJmbG9hdGluZ0xhYmVscyIsIk1EQ0Zsb2F0aW5nTGFiZWwiLCJsaW5lUmlwcGxlcyIsIk1EQ0xpbmVSaXBwbGUiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fZXh0ZW5kcyIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcHBseSIsIl9fcmVzdCIsImUiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImRlZmluZVByb3BlcnR5IiwiX19wYXJhbSIsInBhcmFtSW5kZXgiLCJkZWNvcmF0b3IiLCJfX21ldGFkYXRhIiwibWV0YWRhdGFLZXkiLCJtZXRhZGF0YVZhbHVlIiwibWV0YWRhdGEiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiX19nZW5lcmF0b3IiLCJib2R5IiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJwb3AiLCJwdXNoIiwiX19leHBvcnRTdGFyIiwibSIsImV4cG9ydHMiLCJfX3ZhbHVlcyIsIm8iLCJfX3JlYWQiLCJhciIsImVycm9yIiwiX19zcHJlYWQiLCJjb25jYXQiLCJfX3NwcmVhZEFycmF5cyIsImlsIiwiayIsImEiLCJqIiwiamwiLCJfX2F3YWl0IiwiX19hc3luY0dlbmVyYXRvciIsImFzeW5jSXRlcmF0b3IiLCJxIiwicmVzdW1lIiwic2V0dGxlIiwiZnVsZmlsbCIsInNoaWZ0IiwiX19hc3luY0RlbGVnYXRvciIsIl9fYXN5bmNWYWx1ZXMiLCJfX21ha2VUZW1wbGF0ZU9iamVjdCIsImNvb2tlZCIsInJhdyIsIl9faW1wb3J0U3RhciIsIm1vZCIsIl9fZXNNb2R1bGUiLCJfX2ltcG9ydERlZmF1bHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFD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YWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHtNRENSaXBwbGV9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnO1xyXG5pbXBvcnQge01EQ0Zsb2F0aW5nTGFiZWx9IGZyb20gJ0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbCc7XHJcbmltcG9ydCB7TURDTGluZVJpcHBsZX0gZnJvbSAnQG1hdGVyaWFsL2xpbmUtcmlwcGxlJztcclxuaW1wb3J0IHtNRENUZXh0RmllbGR9IGZyb20gJ0BtYXRlcmlhbC90ZXh0ZmllbGQnO1xyXG5cclxuY29uc3Qgc2VsZWN0b3IgPSAnLm1kYy1idXR0b24sIC5tZGMtaWNvbi1idXR0b24sIC5tZGMtY2FyZF9fcHJpbWFyeS1hY3Rpb24sIC5tZGMtY2FyZCc7XHJcbmNvbnN0IHJpcHBsZXMgPSBbXS5tYXAuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgZnVuY3Rpb24oZWwpIHtcclxuICByZXR1cm4gbmV3IE1EQ1JpcHBsZShlbCk7XHJcbn0pO1xyXG5cclxuY29uc3QgdGV4dEVscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1kYy10ZXh0LWZpZWxkJykpO1xyXG50ZXh0RWxzLmZvckVhY2goKGVsKSA9PiBuZXcgTURDVGV4dEZpZWxkKGVsKSk7XHJcblxyXG5jb25zdCBmbG9hdGluZ0xhYmVscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1kYy1mbG9hdGluZy1sYWJlbCcpKTtcclxuZmxvYXRpbmdMYWJlbHMuZm9yRWFjaCgoZWwpID0+IG5ldyBNRENGbG9hdGluZ0xhYmVsKGVsKSk7XHJcblxyXG5jb25zdCBsaW5lUmlwcGxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1kYy1saW5lLXJpcHBsZScpKTtcclxubGluZVJpcHBsZXMuZm9yRWFjaCgoZWwpID0+IG5ldyBNRENMaW5lUmlwcGxlKGVsKSk7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm1hdGVyaWFsLXRoZW1lLmNzc1wiOyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG52YXIgTURDVGV4dEZpZWxkSWNvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUZXh0RmllbGRJY29uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RleHRGaWVsZEljb24oKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDVGV4dEZpZWxkSWNvbi5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkSWNvbihyb290KTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRJY29uLnByb3RvdHlwZSwgXCJmb3VuZGF0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDVGV4dEZpZWxkSWNvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBnZXRBdHRyOiBmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gX3RoaXMucm9vdF8uZ2V0QXR0cmlidXRlKGF0dHIpOyB9LFxuICAgICAgICAgICAgc2V0QXR0cjogZnVuY3Rpb24gKGF0dHIsIHZhbHVlKSB7IHJldHVybiBfdGhpcy5yb290Xy5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIF90aGlzLnJvb3RfLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTsgfSxcbiAgICAgICAgICAgIHNldENvbnRlbnQ6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucm9vdF8udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikgeyByZXR1cm4gX3RoaXMubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHsgcmV0dXJuIF90aGlzLnVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgbm90aWZ5SWNvbkFjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZW1pdChNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5zdHJpbmdzLklDT05fRVZFTlQsIHt9IC8qIGV2dERhdGEgKi8sIHRydWUgLyogc2hvdWxkQnViYmxlICovKTsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUZXh0RmllbGRJY29uO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1RleHRGaWVsZEljb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIElOVEVSQUNUSU9OX0VWRU5UUyA9IFsnY2xpY2snLCAna2V5ZG93biddO1xudmFyIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zYXZlZFRhYkluZGV4XyA9IG51bGw7XG4gICAgICAgIF90aGlzLmludGVyYWN0aW9uSGFuZGxlcl8gPSBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5oYW5kbGVJbnRlcmFjdGlvbihldnQpOyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2VlIHtAbGluayBNRENUZXh0RmllbGRJY29uQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdldEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5SWNvbkFjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNhdmVkVGFiSW5kZXhfID0gdGhpcy5hZGFwdGVyXy5nZXRBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICBJTlRFUkFDVElPTl9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuaW50ZXJhY3Rpb25IYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIElOVEVSQUNUSU9OX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5zZXREaXNhYmxlZCA9IGZ1bmN0aW9uIChkaXNhYmxlZCkge1xuICAgICAgICBpZiAoIXRoaXMuc2F2ZWRUYWJJbmRleF8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQXR0cigncm9sZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCd0YWJpbmRleCcsIHRoaXMuc2F2ZWRUYWJJbmRleF8pO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCdyb2xlJywgc3RyaW5ncy5JQ09OX1JPTEUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QXJpYUxhYmVsID0gZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cignYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRDb250ZW50ID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUludGVyYWN0aW9uID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaXNFbnRlcktleSA9IGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleUNvZGUgPT09IDEzO1xuICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdjbGljaycgfHwgaXNFbnRlcktleSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlJY29uQWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBhcHBseVBhc3NpdmUgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0XG4gKiBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c1Bhc3NpdmVfO1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmRcbiAqIGlmIHNvLCB1c2UgdGhlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChnbG9iYWxPYmogPT09IHZvaWQgMCkgeyBnbG9iYWxPYmogPSB3aW5kb3c7IH1cbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICB2YXIgaXNTdXBwb3J0ZWRfMSA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sIHtcbiAgICAgICAgICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTdXBwb3J0ZWRfMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1N1cHBvcnRlZF8xO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICB9IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZW1wdHkgY2Fubm90IHRocm93IGVycm9yIGR1ZSB0byB0ZXN0cy4gdHNsaW50IGFsc28gZGlzYWJsZXMgY29uc29sZS5sb2cuXG4gICAgICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZF8xO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlXyA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICAgICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbnlmaWxsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIHN0cmluZ3MgPSB7XG4gICAgSUNPTl9FVkVOVDogJ01EQ1RleHRGaWVsZDppY29uJyxcbiAgICBJQ09OX1JPTEU6ICdidXR0b24nLFxufTtcbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIFJPT1Q6ICdtZGMtdGV4dC1maWVsZF9faWNvbicsXG59O1xuZXhwb3J0IHsgc3RyaW5ncywgY3NzQ2xhc3NlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vY2hhcmFjdGVyLWNvdW50ZXIvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9oZWxwZXItdGV4dC9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL2ljb24vaW5kZXgnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG9cbiAqIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAgIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gICAgLy8gQXBwZW5kIHRvIGhlYWQgaW5zdGVhZCBvZiBib2R5IGJlY2F1c2UgdGhpcyBzY3JpcHQgbWlnaHQgYmUgaW52b2tlZCBpbiB0aGVcbiAgICAvLyBoZWFkLCBpbiB3aGljaCBjYXNlIHRoZSBib2R5IGRvZXNuJ3QgZXhpc3QgeWV0LiBUaGUgcHJvYmUgd29ya3MgZWl0aGVyIHdheS5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIC8vIFRoZSBidWcgZXhpc3RzIGlmIDo6YmVmb3JlIHN0eWxlIGVuZHMgdXAgcHJvcGFnYXRpbmcgdG8gdGhlIHBhcmVudCBlbGVtZW50LlxuICAgIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gICAgLy8gYnV0IEZpcmVmb3ggaXMga25vd24gdG8gc3VwcG9ydCBDU1MgY3VzdG9tIHByb3BlcnRpZXMgY29ycmVjdGx5LlxuICAgIC8vIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3dPYmouZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICB2YXIgaGFzUHNldWRvVmFyQnVnID0gY29tcHV0ZWRTdHlsZSAhPT0gbnVsbCAmJiBjb21wdXRlZFN0eWxlLmJvcmRlclRvcFN0eWxlID09PSAnc29saWQnO1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gaGFzUHNldWRvVmFyQnVnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XG4gICAgdmFyIENTUyA9IHdpbmRvd09iai5DU1M7XG4gICAgdmFyIHN1cHBvcnRzQ3NzVmFycyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgICB9XG4gICAgdmFyIHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gQ1NTICYmIHR5cGVvZiBDU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gICAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NDY2OVxuICAgIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gICAgdmFyIHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChDU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICAgICAgQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKSk7XG4gICAgaWYgKGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgfHwgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzKSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFycyA9ICFkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcnMgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJzO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhldnQsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgICBpZiAoIWV2dCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIHZhciB4ID0gcGFnZU9mZnNldC54LCB5ID0gcGFnZU9mZnNldC55O1xuICAgIHZhciBkb2N1bWVudFggPSB4ICsgY2xpZW50UmVjdC5sZWZ0O1xuICAgIHZhciBkb2N1bWVudFkgPSB5ICsgY2xpZW50UmVjdC50b3A7XG4gICAgdmFyIG5vcm1hbGl6ZWRYO1xuICAgIHZhciBub3JtYWxpemVkWTtcbiAgICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gICAgaWYgKGV2dC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgdmFyIHRvdWNoRXZlbnQgPSBldnQ7XG4gICAgICAgIG5vcm1hbGl6ZWRYID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICAgICAgbm9ybWFsaXplZFkgPSB0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBldnQ7XG4gICAgICAgIG5vcm1hbGl6ZWRYID0gbW91c2VFdmVudC5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICAgICAgbm9ybWFsaXplZFkgPSBtb3VzZUV2ZW50LnBhZ2VZIC0gZG9jdW1lbnRZO1xuICAgIH1cbiAgICByZXR1cm4geyB4OiBub3JtYWxpemVkWCwgeTogbm9ybWFsaXplZFkgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==