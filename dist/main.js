/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/burger_menu.js":
/*!****************************!*\
  !*** ./src/burger_menu.js ***!
  \****************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  document.getElementById(\"burger\").addEventListener(\"click\", function () {\n    document.querySelector(\".header\").classList.toggle(\"active\");\n    document.querySelector(\"body\").classList.toggle(\"lock\");\n    document.querySelectorAll(\".menu_link\").forEach(function (link) {\n      link.classList.remove(\"static-underline\");\n      link.style.textAlign = \"center\";\n    });\n  });\n});\nvar navLinks = document.querySelectorAll(\".nav_link\");\nnavLinks.forEach(function (link) {\n  link.addEventListener(\"click\", function () {\n    document.querySelector(\".header\").classList.remove(\"active\");\n    document.querySelector(\"body\").classList.remove(\"lock\");\n  });\n});\n\n//# sourceURL=webpack://kseniia/./src/burger_menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger_menu */ \"./src/burger_menu.js\");\n/* harmony import */ var _burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_burger_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://kseniia/./src/index.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ (() => {

eval("const slider = document.querySelector('.slider_line');\nconst leftButton = document.querySelector('.button_left');\nconst rightButton = document.querySelector('.button_right');\nconst slides = Array.from(slider.querySelectorAll('.slide'));\nconst slideCount = slides.length;\nlet slideIndex = 0;\nlet slideWidth = 100;\nlet slideInterval = 8000;\nleftButton.addEventListener('click', showPreviousSlide);\nrightButton.addEventListener('click', showNextSlide);\nslider.addEventListener('click', showNextSlide);\nlet autoSlideInterval = setInterval(showNextSlide, slideInterval);\nfunction showPreviousSlide() {\n  slideIndex = (slideIndex - 1 + slideCount) % slideCount;\n  updateSlider();\n}\nfunction showNextSlide() {\n  slideIndex = (slideIndex + 1) % slideCount;\n  updateSlider();\n}\nfunction updateSlider() {\n  slides.forEach((slide, index) => {\n    showSlides();\n    if (index === slideIndex) {\n      slide.style.display = 'block';\n    } else {\n      slide.style.display = 'none';\n    }\n  });\n}\nfunction showSlides() {\n  slider.style.transition = \"transform 1s ease\";\n  slider.style.transform = `translateX(${-slideIndex * slideWidth}%)`;\n  updateActiveDot();\n}\nupdateSlider();\n\n//# sourceURL=webpack://kseniia/./src/slider.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://kseniia/./src/scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;