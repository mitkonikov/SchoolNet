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
  buildPost({
    Title: "САКАМ",
    Content: "САКАМ е платформа на SchoolNet која на секој ученик му дава збор за да се искаже и да гласа за најдобрата идеа."
  });
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

function buildPost(data) {
  clearDOM("posts");
  postCardSmall = createDIV("post-card-small");
  postCardSmall.id = data.ID;
  MDC_Card = createDIV("mdc-card");
  MDC_Card.classList.add("mdc-ripple-upgraded");
  MDC_Card_Action = createDIV("mdc-card__primary-action");
  postCardSmallBg = createDIV("post-card-small-bg");
  postCardSmallBg.style.backgroundColor = "#3b8760";
  postTitle = createDIV("post-title");
  postTitle.innerHTML = data.Title;
  postContent = createDIV("post-content");
  postContent.innerHTML = data.Content;
  postCardSmallBg.appendChild(postTitle);
  postCardSmallBg.appendChild(postContent);
  MDC_Card_Action.appendChild(postCardSmallBg);
  MDC_Card.appendChild(MDC_Card_Action);
  postCardSmall.appendChild(MDC_Card);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0YXRpYy9qcy9tYXRlcmlhbC1sb2JieS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGljL3Njc3MvbWF0ZXJpYWwtbG9iYnkuc2NzcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImtleXVwIiwiZXZlbnQiLCJrZXlDb2RlIiwic2VhcmNoIiwiY2xpY2siLCJidWlsZFBvc3QiLCJUaXRsZSIsIkNvbnRlbnQiLCJwb3N0QWpheCIsImNvbW1hbmQiLCJkYXRhIiwidmFsIiwidGhlbiIsInJlc29sdmUiLCJsZW5ndGgiLCJ0YWciLCJidWlsZFNlYXJjaENhcmQiLCJub1Jlc3VsdHNDYXJkIiwiY2xlYXJET00iLCJwcm9maWxlSW1hZ2UiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwic2VhcmNoUmVzdWx0Q2FyZFNtYWxsIiwiY3JlYXRlRElWIiwiaWQiLCJJRCIsIk1EQ19DYXJkIiwiY2xhc3NMaXN0IiwiYWRkIiwiTURDX0NhcmRfQWN0aW9uIiwic2VhcmNoUmVzdWx0Q2FyZFNtYWxsQmciLCJzZWFyY2hSZXN1bHRQcm9maWxlUGljdHVyZSIsImFwcGVuZENoaWxkIiwic2VhcmNoUmVzdWx0TmFtZSIsImlubmVySFRNTCIsIkZpcnN0bmFtZSIsIkxhc3RuYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJwb3N0Q2FyZFNtYWxsIiwicG9zdENhcmRTbWFsbEJnIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3N0VGl0bGUiLCJwb3N0Q29udGVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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QUFELENBQXBCO0FBQ0FHLFVBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIscUJBQXZCO0FBQ0FDLGlCQUFlLEdBQUdOLFNBQVMsQ0FBQywwQkFBRCxDQUEzQjtBQUVBZ0IsaUJBQWUsR0FBR2hCLFNBQVMsQ0FBQyxvQkFBRCxDQUEzQjtBQUNBZ0IsaUJBQWUsQ0FBQ0MsS0FBaEIsQ0FBc0JDLGVBQXRCLEdBQXdDLFNBQXhDO0FBRUFDLFdBQVMsR0FBR25CLFNBQVMsQ0FBQyxZQUFELENBQXJCO0FBQ0FtQixXQUFTLENBQUNSLFNBQVYsR0FBc0J4QixJQUFJLENBQUNKLEtBQTNCO0FBRUFxQyxhQUFXLEdBQUdwQixTQUFTLENBQUMsY0FBRCxDQUF2QjtBQUNBb0IsYUFBVyxDQUFDVCxTQUFaLEdBQXdCeEIsSUFBSSxDQUFDSCxPQUE3QjtBQUVBZ0MsaUJBQWUsQ0FBQ1AsV0FBaEIsQ0FBNEJVLFNBQTVCO0FBQ0FILGlCQUFlLENBQUNQLFdBQWhCLENBQTRCVyxXQUE1QjtBQUNBZCxpQkFBZSxDQUFDRyxXQUFoQixDQUE0Qk8sZUFBNUI7QUFDQWIsVUFBUSxDQUFDTSxXQUFULENBQXFCSCxlQUFyQjtBQUNBUyxlQUFhLENBQUNOLFdBQWQsQ0FBMEJOLFFBQTFCO0FBRUE1QixVQUFRLENBQUN1QyxjQUFULENBQXdCLE9BQXhCLEVBQWlDTCxXQUFqQyxDQUE2Q00sYUFBN0M7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNyR0Q7QUFBZSxvRkFBdUIsdUJBQXVCLEUiLCJmaWxlIjoibG9iYnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiI3NlYXJjaC1ib3hcIikua2V5dXAoZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgc2VhcmNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNzZWFyY2gtaWNvblwiKS5jbGljayhzZWFyY2gpO1xyXG5cclxuICAgIGJ1aWxkUG9zdCh7XHJcbiAgICAgICAgVGl0bGU6IFwi0KHQkNCa0JDQnFwiLFxyXG4gICAgICAgIENvbnRlbnQ6IFwi0KHQkNCa0JDQnCDQtSDQv9C70LDRgtGE0L7RgNC80LAg0L3QsCBTY2hvb2xOZXQg0LrQvtGY0LAg0L3QsCDRgdC10LrQvtGYINGD0YfQtdC90LjQuiDQvNGDINC00LDQstCwINC30LHQvtGAINC30LAg0LTQsCDRgdC1INC40YHQutCw0LbQtSDQuCDQtNCwINCz0LvQsNGB0LAg0LfQsCDQvdCw0ZjQtNC+0LHRgNCw0YLQsCDQuNC00LXQsC5cIlxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2VhcmNoKCkge1xyXG5cdHBvc3RBamF4KCdxdWVyeScsIHtcclxuXHRcdGNvbW1hbmQ6ICdzZWFyY2gtcmVxdWVzdCcsXHJcblx0XHRkYXRhOiAkKFwiI3NlYXJjaC1ib3hcIikudmFsKClcclxuXHR9KS50aGVuKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc29sdmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWcgb2YgcmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRTZWFyY2hDYXJkKHRhZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub1Jlc3VsdHNDYXJkKCk7XHJcbiAgICAgICAgfVxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFNlYXJjaENhcmQoZGF0YSkge1xyXG4gICAgY2xlYXJET00oXCJzZWFyY2gtcmVzdWx0c1wiKTtcclxuXHJcbiAgICB2YXIgcHJvZmlsZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IFxyXG4gICAgcHJvZmlsZUltYWdlLnNyYyA9ICcvY2xpZW50L3N0YXRpYy9pbWcvcHJvZmlsZS5wbmcnOyBcclxuXHJcbiAgICBzZWFyY2hSZXN1bHRDYXJkU21hbGwgPSBjcmVhdGVESVYoXCJzZWFyY2gtcmVzdWx0LWNhcmQtc21hbGxcIik7XHJcbiAgICBzZWFyY2hSZXN1bHRDYXJkU21hbGwuaWQgPSBkYXRhLklEO1xyXG4gICAgTURDX0NhcmQgPSBjcmVhdGVESVYoXCJtZGMtY2FyZFwiKTtcclxuICAgIE1EQ19DYXJkLmNsYXNzTGlzdC5hZGQoXCJtZGMtcmlwcGxlLXVwZ3JhZGVkXCIpO1xyXG4gICAgTURDX0NhcmRfQWN0aW9uID0gY3JlYXRlRElWKFwibWRjLWNhcmRfX3ByaW1hcnktYWN0aW9uXCIpO1xyXG4gICAgc2VhcmNoUmVzdWx0Q2FyZFNtYWxsQmcgPSBjcmVhdGVESVYoXCJzZWFyY2gtcmVzdWx0LWNhcmQtc21hbGwtYmdcIik7XHJcbiAgICBzZWFyY2hSZXN1bHRQcm9maWxlUGljdHVyZSA9IGNyZWF0ZURJVihcInNlYXJjaC1yZXN1bHQtcHJvZmlsZS1waWN0dXJlXCIpO1xyXG4gICAgc2VhcmNoUmVzdWx0UHJvZmlsZVBpY3R1cmUuYXBwZW5kQ2hpbGQocHJvZmlsZUltYWdlKTtcclxuICAgIHNlYXJjaFJlc3VsdE5hbWUgPSBjcmVhdGVESVYoXCJzZWFyY2gtcmVzdWx0LW5hbWVcIik7XHJcbiAgICBzZWFyY2hSZXN1bHROYW1lLmlubmVySFRNTCA9IGRhdGEuRmlyc3RuYW1lICsgXCIgXCIgKyBkYXRhLkxhc3RuYW1lO1xyXG5cclxuICAgIHNlYXJjaFJlc3VsdENhcmRTbWFsbEJnLmFwcGVuZENoaWxkKHNlYXJjaFJlc3VsdFByb2ZpbGVQaWN0dXJlKTtcclxuICAgIHNlYXJjaFJlc3VsdENhcmRTbWFsbEJnLmFwcGVuZENoaWxkKHNlYXJjaFJlc3VsdE5hbWUpO1xyXG4gICAgTURDX0NhcmRfQWN0aW9uLmFwcGVuZENoaWxkKHNlYXJjaFJlc3VsdENhcmRTbWFsbEJnKTtcclxuICAgIE1EQ19DYXJkLmFwcGVuZENoaWxkKE1EQ19DYXJkX0FjdGlvbik7XHJcbiAgICBzZWFyY2hSZXN1bHRDYXJkU21hbGwuYXBwZW5kQ2hpbGQoTURDX0NhcmQpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXJlc3VsdHNcIikuYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0Q2FyZFNtYWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9SZXN1bHRzQ2FyZCgpIHtcclxuICAgIHNlYXJjaFJlc3VsdENhcmRTbWFsbCA9IGNyZWF0ZURJVihcInNlYXJjaC1yZXN1bHQtY2FyZC1zbWFsbFwiKTtcclxuICAgIE1EQ19DYXJkID0gY3JlYXRlRElWKFwibWRjLWNhcmRcIik7XHJcbiAgICBNRENfQ2FyZC5jbGFzc0xpc3QuYWRkKFwibWRjLXJpcHBsZS11cGdyYWRlZFwiKTtcclxuICAgIE1EQ19DYXJkX0FjdGlvbiA9IGNyZWF0ZURJVihcIm1kYy1jYXJkX19wcmltYXJ5LWFjdGlvblwiKTtcclxuICAgIHNlYXJjaFJlc3VsdENhcmRTbWFsbEJnID0gY3JlYXRlRElWKFwic2VhcmNoLXJlc3VsdC1jYXJkLXNtYWxsLWJnXCIpO1xyXG4gICAgc2VhcmNoUmVzdWx0TmFtZSA9IGNyZWF0ZURJVihcInNlYXJjaC1yZXN1bHQtbm8tcmVzdWx0LXRleHRcIik7XHJcbiAgICBzZWFyY2hSZXN1bHROYW1lLmlubmVySFRNTCA9IFwiTm8gcmVzdWx0cy5cIjtcclxuXHJcbiAgICBzZWFyY2hSZXN1bHRDYXJkU21hbGxCZy5hcHBlbmRDaGlsZChzZWFyY2hSZXN1bHROYW1lKTtcclxuICAgIE1EQ19DYXJkX0FjdGlvbi5hcHBlbmRDaGlsZChzZWFyY2hSZXN1bHRDYXJkU21hbGxCZyk7XHJcbiAgICBNRENfQ2FyZC5hcHBlbmRDaGlsZChNRENfQ2FyZF9BY3Rpb24pO1xyXG4gICAgc2VhcmNoUmVzdWx0Q2FyZFNtYWxsLmFwcGVuZENoaWxkKE1EQ19DYXJkKTtcclxuXHJcbiAgICBjbGVhckRPTShcInNlYXJjaC1yZXN1bHRzXCIpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXJlc3VsdHNcIikuYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0Q2FyZFNtYWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRQb3N0KGRhdGEpIHtcclxuICAgIGNsZWFyRE9NKFwicG9zdHNcIik7XHJcblxyXG4gICAgcG9zdENhcmRTbWFsbCA9IGNyZWF0ZURJVihcInBvc3QtY2FyZC1zbWFsbFwiKTtcclxuICAgIHBvc3RDYXJkU21hbGwuaWQgPSBkYXRhLklEO1xyXG4gICAgTURDX0NhcmQgPSBjcmVhdGVESVYoXCJtZGMtY2FyZFwiKTtcclxuICAgIE1EQ19DYXJkLmNsYXNzTGlzdC5hZGQoXCJtZGMtcmlwcGxlLXVwZ3JhZGVkXCIpO1xyXG4gICAgTURDX0NhcmRfQWN0aW9uID0gY3JlYXRlRElWKFwibWRjLWNhcmRfX3ByaW1hcnktYWN0aW9uXCIpO1xyXG5cclxuICAgIHBvc3RDYXJkU21hbGxCZyA9IGNyZWF0ZURJVihcInBvc3QtY2FyZC1zbWFsbC1iZ1wiKTtcclxuICAgIHBvc3RDYXJkU21hbGxCZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzYjg3NjBcIjtcclxuXHJcbiAgICBwb3N0VGl0bGUgPSBjcmVhdGVESVYoXCJwb3N0LXRpdGxlXCIpO1xyXG4gICAgcG9zdFRpdGxlLmlubmVySFRNTCA9IGRhdGEuVGl0bGU7XHJcblxyXG4gICAgcG9zdENvbnRlbnQgPSBjcmVhdGVESVYoXCJwb3N0LWNvbnRlbnRcIik7XHJcbiAgICBwb3N0Q29udGVudC5pbm5lckhUTUwgPSBkYXRhLkNvbnRlbnQ7XHJcblxyXG4gICAgcG9zdENhcmRTbWFsbEJnLmFwcGVuZENoaWxkKHBvc3RUaXRsZSk7XHJcbiAgICBwb3N0Q2FyZFNtYWxsQmcuYXBwZW5kQ2hpbGQocG9zdENvbnRlbnQpO1xyXG4gICAgTURDX0NhcmRfQWN0aW9uLmFwcGVuZENoaWxkKHBvc3RDYXJkU21hbGxCZyk7XHJcbiAgICBNRENfQ2FyZC5hcHBlbmRDaGlsZChNRENfQ2FyZF9BY3Rpb24pO1xyXG4gICAgcG9zdENhcmRTbWFsbC5hcHBlbmRDaGlsZChNRENfQ2FyZCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3N0c1wiKS5hcHBlbmRDaGlsZChwb3N0Q2FyZFNtYWxsKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYXRlcmlhbC1sb2JieS5jc3NcIjsiXSwic291cmNlUm9vdCI6IiJ9