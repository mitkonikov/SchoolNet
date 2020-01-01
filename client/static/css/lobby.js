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
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $("#search-box").keyup(function (event) {
    if (event.keyCode == 13) {
      search();
    }
  });
  $("#search-icon").click(search);
});

function search() {
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

function buildSearchCard(data) {
  clearDOM("search-results");
  var profileImage = document.createElement('img');
  profileImage.src = '/client/static/img/profile.png';
  searchResultCardSmall = createDIV("search-result-card-small");
  searchResultCardSmall.id = data.ID;
  MDC_Card = createDIV("mdc-card");
  MDC_Card.classList.add("mdc-ripple-upgraded");
  MDC_Card_Action = createDIV("mdc-card__primary-action");
  searchResultCardSmallBg = createDIV("search-result-card-small-bg");
  searchResultProfilePicture = createDIV("search-result-profile-picture");
  searchResultProfilePicture.appendChild(profileImage);
  searchResultName = createDIV("search-result-name");
  searchResultName.innerHTML = data.Firstname + " " + data.Lastname;
  searchResultCardSmallBg.appendChild(searchResultProfilePicture);
  searchResultCardSmallBg.appendChild(searchResultName);
  MDC_Card_Action.appendChild(searchResultCardSmallBg);
  MDC_Card.appendChild(MDC_Card_Action);
  searchResultCardSmall.appendChild(MDC_Card);
  document.getElementById("search-results").appendChild(searchResultCardSmall);
}

function noResultsCard() {
  searchResultCardSmall = createDIV("search-result-card-small");
  MDC_Card = createDIV("mdc-card");
  MDC_Card.classList.add("mdc-ripple-upgraded");
  MDC_Card_Action = createDIV("mdc-card__primary-action");
  searchResultCardSmallBg = createDIV("search-result-card-small-bg");
  searchResultName = createDIV("search-result-no-result-text");
  searchResultName.innerHTML = "No results.";
  searchResultCardSmallBg.appendChild(searchResultName);
  MDC_Card_Action.appendChild(searchResultCardSmallBg);
  MDC_Card.appendChild(MDC_Card_Action);
  searchResultCardSmall.appendChild(MDC_Card);
  clearDOM("search-results");
  document.getElementById("search-results").appendChild(searchResultCardSmall);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0YXRpYy9qcy9tYXRlcmlhbC1sb2JieS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGljL3Njc3MvbWF0ZXJpYWwtbG9iYnkuc2NzcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImtleXVwIiwiZXZlbnQiLCJrZXlDb2RlIiwic2VhcmNoIiwiY2xpY2siLCJwb3N0QWpheCIsImNvbW1hbmQiLCJkYXRhIiwidmFsIiwidGhlbiIsInJlc29sdmUiLCJsZW5ndGgiLCJ0YWciLCJidWlsZFNlYXJjaENhcmQiLCJub1Jlc3VsdHNDYXJkIiwiY2xlYXJET00iLCJwcm9maWxlSW1hZ2UiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwic2VhcmNoUmVzdWx0Q2FyZFNtYWxsIiwiY3JlYXRlRElWIiwiaWQiLCJJRCIsIk1EQ19DYXJkIiwiY2xhc3NMaXN0IiwiYWRkIiwiTURDX0NhcmRfQWN0aW9uIiwic2VhcmNoUmVzdWx0Q2FyZFNtYWxsQmciLCJzZWFyY2hSZXN1bHRQcm9maWxlUGljdHVyZSIsImFwcGVuZENoaWxkIiwic2VhcmNoUmVzdWx0TmFtZSIsImlubmVySFRNTCIsIkZpcnN0bmFtZSIsIkxhc3RuYW1lIiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUF5QjtBQUNyQkssdUJBQXFCLEdBQUdDLFNBQVMsQ0FBQywwQkFBRCxDQUFqQztBQUNBRyxVQUFRLEdBQUdILFNBQVMsQ0FBQyxVQUFELENBQXBCO0FBQ0FHLFVBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIscUJBQXZCO0FBQ0FDLGlCQUFlLEdBQUdOLFNBQVMsQ0FBQywwQkFBRCxDQUEzQjtBQUNBTyx5QkFBdUIsR0FBR1AsU0FBUyxDQUFDLDZCQUFELENBQW5DO0FBQ0FVLGtCQUFnQixHQUFHVixTQUFTLENBQUMsOEJBQUQsQ0FBNUI7QUFDQVUsa0JBQWdCLENBQUNDLFNBQWpCLEdBQTZCLGFBQTdCO0FBRUFKLHlCQUF1QixDQUFDRSxXQUF4QixDQUFvQ0MsZ0JBQXBDO0FBQ0FKLGlCQUFlLENBQUNHLFdBQWhCLENBQTRCRix1QkFBNUI7QUFDQUosVUFBUSxDQUFDTSxXQUFULENBQXFCSCxlQUFyQjtBQUNBUCx1QkFBcUIsQ0FBQ1UsV0FBdEIsQ0FBa0NOLFFBQWxDO0FBRUFSLFVBQVEsQ0FBQyxnQkFBRCxDQUFSO0FBRUFqQixVQUFRLENBQUNvQyxjQUFULENBQXdCLGdCQUF4QixFQUEwQ0wsV0FBMUMsQ0FBc0RWLHFCQUF0RDtBQUNILEM7Ozs7Ozs7Ozs7OztBQ3JFRDtBQUFlLG9GQUF1Qix1QkFBdUIsRSIsImZpbGUiOiJsb2JieS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIlxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoXCIjc2VhcmNoLWJveFwiKS5rZXl1cChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xyXG4gICAgICAgICAgICBzZWFyY2goKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI3NlYXJjaC1pY29uXCIpLmNsaWNrKHNlYXJjaCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2VhcmNoKCkge1xyXG5cdHBvc3RBamF4KCdxdWVyeScsIHtcclxuXHRcdGNvbW1hbmQ6ICdzZWFyY2gtcmVxdWVzdCcsXHJcblx0XHRkYXRhOiAkKFwiI3NlYXJjaC1ib3hcIikudmFsKClcclxuXHR9KS50aGVuKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc29sdmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWcgb2YgcmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRTZWFyY2hDYXJkKHRhZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub1Jlc3VsdHNDYXJkKCk7XHJcbiAgICAgICAgfVxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFNlYXJjaENhcmQoZGF0YSkge1xyXG4gICAgY2xlYXJET00oXCJzZWFyY2gtcmVzdWx0c1wiKTtcclxuXHJcbiAgICB2YXIgcHJvZmlsZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IFxyXG4gICAgcHJvZmlsZUltYWdlLnNyYyA9ICcvY2xpZW50L3N0YXRpYy9pbWcvcHJvZmlsZS5wbmcnOyBcclxuXHJcbiAgICBzZWFyY2hSZXN1bHRDYXJkU21hbGwgPSBjcmVhdGVESVYoXCJzZWFyY2gtcmVzdWx0LWNhcmQtc21hbGxcIik7XHJcbiAgICBzZWFyY2hSZXN1bHRDYXJkU21hbGwuaWQgPSBkYXRhLklEO1xyXG4gICAgTURDX0NhcmQgPSBjcmVhdGVESVYoXCJtZGMtY2FyZFwiKTtcclxuICAgIE1EQ19DYXJkLmNsYXNzTGlzdC5hZGQoXCJtZGMtcmlwcGxlLXVwZ3JhZGVkXCIpO1xyXG4gICAgTURDX0NhcmRfQWN0aW9uID0gY3JlYXRlRElWKFwibWRjLWNhcmRfX3ByaW1hcnktYWN0aW9uXCIpO1xyXG4gICAgc2VhcmNoUmVzdWx0Q2FyZFNtYWxsQmcgPSBjcmVhdGVESVYoXCJzZWFyY2gtcmVzdWx0LWNhcmQtc21hbGwtYmdcIik7XHJcbiAgICBzZWFyY2hSZXN1bHRQcm9maWxlUGljdHVyZSA9IGNyZWF0ZURJVihcInNlYXJjaC1yZXN1bHQtcHJvZmlsZS1waWN0dXJlXCIpO1xyXG4gICAgc2VhcmNoUmVzdWx0UHJvZmlsZVBpY3R1cmUuYXBwZW5kQ2hpbGQocHJvZmlsZUltYWdlKTtcclxuICAgIHNlYXJjaFJlc3VsdE5hbWUgPSBjcmVhdGVESVYoXCJzZWFyY2gtcmVzdWx0LW5hbWVcIik7XHJcbiAgICBzZWFyY2hSZXN1bHROYW1lLmlubmVySFRNTCA9IGRhdGEuRmlyc3RuYW1lICsgXCIgXCIgKyBkYXRhLkxhc3RuYW1lO1xyXG5cclxuICAgIHNlYXJjaFJlc3VsdENhcmRTbWFsbEJnLmFwcGVuZENoaWxkKHNlYXJjaFJlc3VsdFByb2ZpbGVQaWN0dXJlKTtcclxuICAgIHNlYXJjaFJlc3VsdENhcmRTbWFsbEJnLmFwcGVuZENoaWxkKHNlYXJjaFJlc3VsdE5hbWUpO1xyXG4gICAgTURDX0NhcmRfQWN0aW9uLmFwcGVuZENoaWxkKHNlYXJjaFJlc3VsdENhcmRTbWFsbEJnKTtcclxuICAgIE1EQ19DYXJkLmFwcGVuZENoaWxkKE1EQ19DYXJkX0FjdGlvbik7XHJcbiAgICBzZWFyY2hSZXN1bHRDYXJkU21hbGwuYXBwZW5kQ2hpbGQoTURDX0NhcmQpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXJlc3VsdHNcIikuYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0Q2FyZFNtYWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9SZXN1bHRzQ2FyZCgpIHtcclxuICAgIHNlYXJjaFJlc3VsdENhcmRTbWFsbCA9IGNyZWF0ZURJVihcInNlYXJjaC1yZXN1bHQtY2FyZC1zbWFsbFwiKTtcclxuICAgIE1EQ19DYXJkID0gY3JlYXRlRElWKFwibWRjLWNhcmRcIik7XHJcbiAgICBNRENfQ2FyZC5jbGFzc0xpc3QuYWRkKFwibWRjLXJpcHBsZS11cGdyYWRlZFwiKTtcclxuICAgIE1EQ19DYXJkX0FjdGlvbiA9IGNyZWF0ZURJVihcIm1kYy1jYXJkX19wcmltYXJ5LWFjdGlvblwiKTtcclxuICAgIHNlYXJjaFJlc3VsdENhcmRTbWFsbEJnID0gY3JlYXRlRElWKFwic2VhcmNoLXJlc3VsdC1jYXJkLXNtYWxsLWJnXCIpO1xyXG4gICAgc2VhcmNoUmVzdWx0TmFtZSA9IGNyZWF0ZURJVihcInNlYXJjaC1yZXN1bHQtbm8tcmVzdWx0LXRleHRcIik7XHJcbiAgICBzZWFyY2hSZXN1bHROYW1lLmlubmVySFRNTCA9IFwiTm8gcmVzdWx0cy5cIjtcclxuXHJcbiAgICBzZWFyY2hSZXN1bHRDYXJkU21hbGxCZy5hcHBlbmRDaGlsZChzZWFyY2hSZXN1bHROYW1lKTtcclxuICAgIE1EQ19DYXJkX0FjdGlvbi5hcHBlbmRDaGlsZChzZWFyY2hSZXN1bHRDYXJkU21hbGxCZyk7XHJcbiAgICBNRENfQ2FyZC5hcHBlbmRDaGlsZChNRENfQ2FyZF9BY3Rpb24pO1xyXG4gICAgc2VhcmNoUmVzdWx0Q2FyZFNtYWxsLmFwcGVuZENoaWxkKE1EQ19DYXJkKTtcclxuXHJcbiAgICBjbGVhckRPTShcInNlYXJjaC1yZXN1bHRzXCIpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXJlc3VsdHNcIikuYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0Q2FyZFNtYWxsKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYXRlcmlhbC1sb2JieS5jc3NcIjsiXSwic291cmNlUm9vdCI6IiJ9