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

var buttonEls = Array.from(document.querySelectorAll('.mdc-button'));
buttonEls.forEach(function (el) {
  return new _material_ripple_index__WEBPACK_IMPORTED_MODULE_0__["MDCRipple"](el);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0YXRpYy9qcy9tYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGljL3Njc3MvbWF0ZXJpYWwtdGhlbWUuc2NzcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50LnRzIiwid2VicGFjazovLy9mb3VuZGF0aW9uLnRzIiwid2VicGFjazovLy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vL3BvbnlmaWxsLnRzIiwid2VicGFjazovLy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vL2luZGV4LnRzIiwid2VicGFjazovLy91dGlsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiXSwibmFtZXMiOlsiYnV0dG9uRWxzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiTURDUmlwcGxlIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJwIiwiaGFzT3duUHJvcGVydHkiLCJfX2V4dGVuZHMiLCJfXyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiY3JlYXRlIiwiX19hc3NpZ24iLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY2FsbCIsImFwcGx5IiwiX19yZXN0IiwiZSIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiZGVmaW5lUHJvcGVydHkiLCJfX3BhcmFtIiwicGFyYW1JbmRleCIsImRlY29yYXRvciIsIl9fbWV0YWRhdGEiLCJtZXRhZGF0YUtleSIsIm1ldGFkYXRhVmFsdWUiLCJtZXRhZGF0YSIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsImYiLCJ5IiwiZyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInYiLCJvcCIsIlR5cGVFcnJvciIsInBvcCIsInB1c2giLCJfX2V4cG9ydFN0YXIiLCJtIiwiZXhwb3J0cyIsIl9fdmFsdWVzIiwibyIsIl9fcmVhZCIsImFyIiwiZXJyb3IiLCJfX3NwcmVhZCIsImNvbmNhdCIsIl9fc3ByZWFkQXJyYXlzIiwiaWwiLCJrIiwiYSIsImoiLCJqbCIsIl9fYXdhaXQiLCJfX2FzeW5jR2VuZXJhdG9yIiwiYXN5bmNJdGVyYXRvciIsInEiLCJyZXN1bWUiLCJzZXR0bGUiLCJmdWxmaWxsIiwic2hpZnQiLCJfX2FzeW5jRGVsZWdhdG9yIiwiX19hc3luY1ZhbHVlcyIsIl9fbWFrZVRlbXBsYXRlT2JqZWN0IiwiY29va2VkIiwicmF3IiwiX19pbXBvcnRTdGFyIiwibW9kIiwiX19lc01vZHVsZSIsIl9faW1wb3J0RGVmYXVsdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxp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O0FBQUVELFVBQU0sQ0FBQ0MsR0FBUCxHQUFhQSxHQUFiO0FBQW1COztBQUMvRyxTQUFPRCxNQUFQO0FBQ0g7QUFBQTtBQUVNLFNBQVNFLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBQzlCLE1BQUlBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFmLEVBQTJCLE9BQU9ELEdBQVA7QUFDM0IsTUFBSW5ELE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSW1ELEdBQUcsSUFBSSxJQUFYLEVBQWlCLEtBQUssSUFBSWxCLENBQVQsSUFBY2tCLEdBQWQ7QUFBbUIsUUFBSTNHLE1BQU0sQ0FBQ0ksY0FBUCxDQUFzQmMsSUFBdEIsQ0FBMkJ5RixHQUEzQixFQUFnQ2xCLENBQWhDLENBQUosRUFBd0NqQyxNQUFNLENBQUNpQyxDQUFELENBQU4sR0FBWWtCLEdBQUcsQ0FBQ2xCLENBQUQsQ0FBZjtBQUEzRDtBQUNqQmpDLFFBQU0sV0FBTixHQUFpQm1ELEdBQWpCO0FBQ0EsU0FBT25ELE1BQVA7QUFDSDtBQUVNLFNBQVNxRCxlQUFULENBQXlCRixHQUF6QixFQUE4QjtBQUNqQyxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFTQTtBQUFYLEdBQXZDO0FBQ0gsQyIsImZpbGUiOiJtYXRlcmlhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7TURDUmlwcGxlfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4JztcclxuXHJcbmNvbnN0IGJ1dHRvbkVscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1kYy1idXR0b24nKSk7XHJcbmJ1dHRvbkVscy5mb3JFYWNoKChlbCkgPT4gbmV3IE1EQ1JpcHBsZShlbCkpOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYXRlcmlhbC10aGVtZS5jc3NcIjsiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgYXBwbHlQYXNzaXZlIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9ldmVudHMnO1xuaW1wb3J0IHsgbWF0Y2hlcyB9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnO1xuaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG52YXIgTURDUmlwcGxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1JpcHBsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENSaXBwbGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1EQ1JpcHBsZS5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290LCBvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHsgaXNVbmJvdW5kZWQ6IHVuZGVmaW5lZCB9OyB9XG4gICAgICAgIHZhciByaXBwbGUgPSBuZXcgTURDUmlwcGxlKHJvb3QpO1xuICAgICAgICAvLyBPbmx5IG92ZXJyaWRlIHVuYm91bmRlZCBiZWhhdmlvciBpZiBvcHRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICAgICAgaWYgKG9wdHMuaXNVbmJvdW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IG9wdHMuaXNVbmJvdW5kZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJpcHBsZTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXRpbC5zdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpOyB9LFxuICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IH0sXG4gICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpOyB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2Uucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9KTsgfSxcbiAgICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0Y2hlcyhpbnN0YW5jZS5yb290XywgJzphY3RpdmUnKTsgfSxcbiAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKGluc3RhbmNlLmRpc2FibGVkKTsgfSxcbiAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKGluc3RhbmNlLnVuYm91bmRlZCk7IH0sXG4gICAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKHZhck5hbWUsIHZhbHVlKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSk7IH0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlLnByb3RvdHlwZSwgXCJ1bmJvdW5kZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMudW5ib3VuZGVkXyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHVuYm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy51bmJvdW5kZWRfID0gQm9vbGVhbih1bmJvdW5kZWQpO1xuICAgICAgICAgICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzLnJvb3RfO1xuICAgICAgICB0aGlzLnVuYm91bmRlZCA9ICdtZGNSaXBwbGVJc1VuYm91bmRlZCcgaW4gcm9vdC5kYXRhc2V0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgICAqIHByb3RlY3RlZCBvciBwcml2YXRlIHByb3BlcnR5IGluc2lkZSBhIGdldHRlci9zZXR0ZXIsIGxpa2UgdW5ib3VuZGVkIGFib3ZlLlxuICAgICAqIEJ5IGFjY2Vzc2luZyB0aGUgcHJvdGVjdGVkIHByb3BlcnR5IGluc2lkZSBhIG1ldGhvZCwgd2Ugc29sdmUgdGhhdCBwcm9ibGVtLlxuICAgICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAgICovXG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5zZXRVbmJvdW5kZWRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVuYm91bmRlZChCb29sZWFuKHRoaXMudW5ib3VuZGVkXykpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1JpcHBsZTtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENSaXBwbGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzIH0gZnJvbSAnLi91dGlsJztcbi8vIEFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gdGhlIHJvb3QgZWxlbWVudCBvZiBlYWNoIGluc3RhbmNlIGZvciBhY3RpdmF0aW9uXG52YXIgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93bicsXG5dO1xuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG52YXIgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbXG4gICAgJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCcsICdtb3VzZXVwJywgJ2NvbnRleHRtZW51Jyxcbl07XG4vLyBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG52YXIgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xudmFyIE1EQ1JpcHBsZUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDUmlwcGxlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENSaXBwbGVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnU2NhbGVfID0gJzAnO1xuICAgICAgICBfdGhpcy5mcmFtZV8gPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICAgICAgX3RoaXMuaW5pdGlhbFNpemVfID0gMDtcbiAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgX3RoaXMubWF4UmFkaXVzXyA9IDA7XG4gICAgICAgIF90aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7IGxlZnQ6IDAsIHRvcDogMCB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0ZV8oZSk7IH07XG4gICAgICAgIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmRlYWN0aXZhdGVfKCk7IH07XG4gICAgICAgIF90aGlzLmZvY3VzSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVGb2N1cygpOyB9O1xuICAgICAgICBfdGhpcy5ibHVySGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVCbHVyKCk7IH07XG4gICAgICAgIF90aGlzLnJlc2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGF5b3V0KCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IDAsIHk6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdXBwb3J0c1ByZXNzUmlwcGxlID0gdGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcbiAgICAgICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8xID0gX2EuUk9PVCwgVU5CT1VOREVEXzEgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFJPT1RfMSk7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEXzEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1RfMiA9IF9hLlJPT1QsIFVOQk9VTkRFRF8yID0gX2EuVU5CT1VOREVEO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhST09UXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBldnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZV8oZXZ0KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZV8oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldFVuYm91bmRlZCA9IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgdmFyIFVOQk9VTkRFRCA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5VTkJPVU5ERUQ7XG4gICAgICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zdXBwb3J0c1ByZXNzUmlwcGxlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmF0aW9uRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiBmYWxzZSxcbiAgICAgICAgICAgIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogZmFsc2UsXG4gICAgICAgICAgICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBzdXBwb3J0c1ByZXNzUmlwcGxlIFBhc3NlZCBmcm9tIGluaXQgdG8gc2F2ZSBhIHJlZHVuZGFudCBmdW5jdGlvbiBjYWxsXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXJSb290SGFuZGxlcnNfID0gZnVuY3Rpb24gKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlbW92ZUNzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmlwcGxlU3RyaW5ncyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhyaXBwbGVTdHJpbmdzKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUocmlwcGxlU3RyaW5nc1trZXldLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZV8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgICAgICB2YXIgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgPSB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgICAgICAgdmFyIGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZXZ0ICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZXZ0LnR5cGU7XG4gICAgICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA9IGV2dCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuYWN0aXZhdGlvbkV2ZW50ID0gZXZ0O1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzQWN0aXZhdGVkQnlQb2ludGVyID0gYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID8gZmFsc2UgOiBldnQgIT09IHVuZGVmaW5lZCAmJiAoZXZ0LnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGV2dC50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZXZ0LnR5cGUgPT09ICdwb2ludGVyZG93bicpO1xuICAgICAgICB2YXIgaGFzQWN0aXZhdGVkQ2hpbGQgPSBldnQgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLmNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KTsgfSk7XG4gICAgICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzLnB1c2goZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGV2dCk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmVcbiAgICAgICAgICAgICAgICAmJiBldnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICYmIChldnQua2V5ID09PSAnICcgfHwgZXZ0LmtleUNvZGUgPT09IDMyKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNwYWNlIHdhcyBwcmVzc2VkLCB0cnkgYWdhaW4gd2l0aGluIGFuIHJBRiBjYWxsIHRvIGRldGVjdCA6YWN0aXZlLCBiZWNhdXNlIGRpZmZlcmVudCBVQXMgcmVwb3J0XG4gICAgICAgICAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjM1OTcxXG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjkzNzQxXG4gICAgICAgICAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgICAgICAgICAgLy8gdmFyaWFibGUgaXMgc2V0IHdpdGhpbiBhIHJBRiBjYWxsYmFjayBmb3IgYSBzdWJtaXQgYnV0dG9uIGludGVyYWN0aW9uICgjMjI0MSkuXG4gICAgICAgICAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gX3RoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZXZ0KTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSBpbW1lZGlhdGVseSBpZiBlbGVtZW50IHdhcyBub3QgbWFkZSBhY3RpdmUuXG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXyA9IF90aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHJldHVybiAoZXZ0ICE9PSB1bmRlZmluZWQgJiYgZXZ0LnR5cGUgPT09ICdrZXlkb3duJykgPyB0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZUFjdGl2ZSgpIDogdHJ1ZTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVBY3RpdmF0aW9uXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUID0gX2EuVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX0VORDtcbiAgICAgICAgdmFyIF9iID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBGR19ERUFDVElWQVRJT04gPSBfYi5GR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT04gPSBfYi5GR19BQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMgPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM7XG4gICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgICAgICB2YXIgdHJhbnNsYXRlRW5kID0gJyc7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB2YXIgX2MgPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKSwgc3RhcnRQb2ludCA9IF9jLnN0YXJ0UG9pbnQsIGVuZFBvaW50ID0gX2MuZW5kUG9pbnQ7XG4gICAgICAgICAgICB0cmFuc2xhdGVTdGFydCA9IHN0YXJ0UG9pbnQueCArIFwicHgsIFwiICsgc3RhcnRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICAgICAgdHJhbnNsYXRlRW5kID0gZW5kUG9pbnQueCArIFwicHgsIFwiICsgZW5kUG9pbnQueSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIHRyYW5zbGF0ZVN0YXJ0KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAgICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCk7IH0sIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgYWN0aXZhdGlvbkV2ZW50ID0gX2EuYWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXI7XG4gICAgICAgIHZhciBzdGFydFBvaW50O1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGFjdGl2YXRpb25FdmVudCwgdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dQYWdlT2Zmc2V0KCksIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5mcmFtZV8ud2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuZnJhbWVfLmhlaWdodCAvIDIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgeDogc3RhcnRQb2ludC54IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiBzdGFydFBvaW50LnkgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGVuZFBvaW50ID0ge1xuICAgICAgICAgICAgeDogKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgICAgIHk6ICh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBzdGFydFBvaW50OiBzdGFydFBvaW50LCBlbmRQb2ludDogZW5kUG9pbnQgfTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJvdGggd2hlbiBhIHBvaW50aW5nIGRldmljZSBpcyByZWxlYXNlZCwgYW5kIHdoZW4gdGhlIGFjdGl2YXRpb24gYW5pbWF0aW9uIGVuZHMuXG4gICAgICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgICAgICB2YXIgRkdfREVBQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTjtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBoYXNEZWFjdGl2YXRpb25VWFJ1biA9IF9hLmhhc0RlYWN0aXZhdGlvblVYUnVuLCBpc0FjdGl2YXRlZCA9IF9hLmlzQWN0aXZhdGVkO1xuICAgICAgICB2YXIgYWN0aXZhdGlvbkhhc0VuZGVkID0gaGFzRGVhY3RpdmF0aW9uVVhSdW4gfHwgIWlzQWN0aXZhdGVkO1xuICAgICAgICBpZiAoYWN0aXZhdGlvbkhhc0VuZGVkICYmIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXykge1xuICAgICAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH0sIG51bWJlcnMuRkdfREVBQ1RJVkFUSU9OX01TKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgRkdfQUNUSVZBVElPTiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZXNldEFjdGl2YXRpb25TdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgICAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQ7IH0sIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhdGUgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpOyB9KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVEZWFjdGl2YXRpb25fID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlID0gX2Eud2FzRWxlbWVudE1hZGVBY3RpdmU7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dEludGVybmFsXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdmFyIG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuICAgICAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgICAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICAgICAgdmFyIGdldEJvdW5kZWRSYWRpdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyhfdGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3coX3RoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuICAgICAgICAvLyBSaXBwbGUgaXMgc2l6ZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGFyZ2VzdCBkaW1lbnNpb24gb2YgdGhlIHN1cmZhY2UsIHRoZW4gc2NhbGVzIHVwIHVzaW5nIGEgQ1NTIHNjYWxlIHRyYW5zZm9ybVxuICAgICAgICB2YXIgaW5pdGlhbFNpemUgPSBNYXRoLmZsb29yKG1heERpbSAqIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5JTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGUgc2l6ZSBzaG91bGQgYWx3YXlzIGJlIGV2ZW4gbnVtYmVyIHRvIGVxdWFsbHkgY2VudGVyIGFsaWduLlxuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpICYmIGluaXRpYWxTaXplICUgMiAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBpbml0aWFsU2l6ZSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTaXplXyA9IGluaXRpYWxTaXplO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmdTY2FsZV8gPSBcIlwiICsgdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG4gICAgICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZUxheW91dENzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19TSVpFID0gX2EuVkFSX0ZHX1NJWkUsIFZBUl9MRUZUID0gX2EuVkFSX0xFRlQsIFZBUl9UT1AgPSBfYS5WQVJfVE9QLCBWQVJfRkdfU0NBTEUgPSBfYS5WQVJfRkdfU0NBTEU7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIHRoaXMuaW5pdGlhbFNpemVfICsgXCJweFwiKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0ICsgXCJweFwiKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgdGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcCArIFwicHhcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENSaXBwbGVGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBhcHBseVBhc3NpdmUgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0XG4gKiBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c1Bhc3NpdmVfO1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmRcbiAqIGlmIHNvLCB1c2UgdGhlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChnbG9iYWxPYmogPT09IHZvaWQgMCkgeyBnbG9iYWxPYmogPSB3aW5kb3c7IH1cbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICB2YXIgaXNTdXBwb3J0ZWRfMSA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sIHtcbiAgICAgICAgICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTdXBwb3J0ZWRfMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1N1cHBvcnRlZF8xO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICB9IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZW1wdHkgY2Fubm90IHRocm93IGVycm9yIGR1ZSB0byB0ZXN0cy4gdHNsaW50IGFsc28gZGlzYWJsZXMgY29uc29sZS5sb2cuXG4gICAgICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZF8xO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlXyA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICAgICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbnlmaWxsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIC8vIFJpcHBsZSBpcyBhIHNwZWNpYWwgY2FzZSB3aGVyZSB0aGUgXCJyb290XCIgY29tcG9uZW50IGlzIHJlYWxseSBhIFwibWl4aW5cIiBvZiBzb3J0cyxcbiAgICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gICAgLy8gQ1NTIGNsYXNzIHRoYXQgYWxsIG90aGVyIENTUyBjbGFzc2VzIGRlcml2ZSBmcm9tLlxuICAgIEJHX0ZPQ1VTRUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQnLFxuICAgIEZHX0FDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24nLFxuICAgIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbiAgICBST09UOiAnbWRjLXJpcHBsZS11cGdyYWRlZCcsXG4gICAgVU5CT1VOREVEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyxcbn07XG5leHBvcnQgdmFyIHN0cmluZ3MgPSB7XG4gICAgVkFSX0ZHX1NDQUxFOiAnLS1tZGMtcmlwcGxlLWZnLXNjYWxlJyxcbiAgICBWQVJfRkdfU0laRTogJy0tbWRjLXJpcHBsZS1mZy1zaXplJyxcbiAgICBWQVJfRkdfVFJBTlNMQVRFX0VORDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kJyxcbiAgICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gICAgVkFSX0xFRlQ6ICctLW1kYy1yaXBwbGUtbGVmdCcsXG4gICAgVkFSX1RPUDogJy0tbWRjLXJpcHBsZS10b3AnLFxufTtcbmV4cG9ydCB2YXIgbnVtYmVycyA9IHtcbiAgICBERUFDVElWQVRJT05fVElNRU9VVF9NUzogMjI1LFxuICAgIEZHX0RFQUNUSVZBVElPTl9NUzogMTUwLFxuICAgIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gICAgUEFERElORzogMTAsXG4gICAgVEFQX0RFTEFZX01TOiAzMDAsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuZXhwb3J0IHsgdXRpbCB9O1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvXG4gKiBkZXRlY3QgQ1NTIGN1c3RvbSB2YXJpYWJsZSBzdXBwb3J0LlxuICovXG52YXIgc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuZnVuY3Rpb24gZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopIHtcbiAgICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzExNDk1NDQ4L1xuICAgIHZhciBkb2N1bWVudCA9IHdpbmRvd09iai5kb2N1bWVudDtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vZGUuY2xhc3NOYW1lID0gJ21kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWcnO1xuICAgIC8vIEFwcGVuZCB0byBoZWFkIGluc3RlYWQgb2YgYm9keSBiZWNhdXNlIHRoaXMgc2NyaXB0IG1pZ2h0IGJlIGludm9rZWQgaW4gdGhlXG4gICAgLy8gaGVhZCwgaW4gd2hpY2ggY2FzZSB0aGUgYm9keSBkb2Vzbid0IGV4aXN0IHlldC4gVGhlIHByb2JlIHdvcmtzIGVpdGhlciB3YXkuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAgIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgdmFyIGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc1BzZXVkb1ZhckJ1Zztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3dPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIHZhciBDU1MgPSB3aW5kb3dPYmouQ1NTO1xuICAgIHZhciBzdXBwb3J0c0Nzc1ZhcnMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gICAgaWYgKHR5cGVvZiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPT09ICdib29sZWFuJyAmJiAhZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gICAgfVxuICAgIHZhciBzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCA9IENTUyAmJiB0eXBlb2YgQ1NTLnN1cHBvcnRzID09PSAnZnVuY3Rpb24nO1xuICAgIGlmICghc3VwcG9ydHNGdW5jdGlvblByZXNlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyA9IENTUy5zdXBwb3J0cygnLS1jc3MtdmFycycsICd5ZXMnKTtcbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgICAvLyBTZWU6IFJFQURNRSBzZWN0aW9uIG9uIFNhZmFyaVxuICAgIHZhciB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMgPSAoQ1NTLnN1cHBvcnRzKCcoLS1jc3MtdmFyczogeWVzKScpICYmXG4gICAgICAgIENTUy5zdXBwb3J0cygnY29sb3InLCAnIzAwMDAwMDAwJykpO1xuICAgIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcnMgPSAhZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJzID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICghZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9IHN1cHBvcnRzQ3NzVmFycztcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFycztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXZ0LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gICAgaWYgKCFldnQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICB2YXIgeCA9IHBhZ2VPZmZzZXQueCwgeSA9IHBhZ2VPZmZzZXQueTtcbiAgICB2YXIgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgICB2YXIgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuICAgIHZhciBub3JtYWxpemVkWDtcbiAgICB2YXIgbm9ybWFsaXplZFk7XG4gICAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIHZhciB0b3VjaEV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBtb3VzZUV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IG1vdXNlRXZlbnQucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gbW91c2VFdmVudC5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgcmV0dXJuIHsgeDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=