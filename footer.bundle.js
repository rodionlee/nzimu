"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknzimu"] = self["webpackChunknzimu"] || []).push([["footer"],{

/***/ "./src/scripts/footer.js":
/*!*******************************!*\
  !*** ./src/scripts/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphics_image_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../graphics/image-icon.svg */ \"./src/graphics/image-icon.svg\");\n\nclass footer extends HTMLElement {\n  connectedCallback() {\n    this.innerHTML = `\n    <footer>\n\n    <div class=\"contactsContainer\">\n\n      <a class=\"contactItem\" href=\"tel:+260 95 5700701\">\n        <img class=\"contactIcon\" src=\"./image-icon.svg\">\n        +260 95 5700701\n      </a>\n\n      <p class=\"contactItem\">\n        <img class=\"contactIcon\" src=\"./image-icon.svg\">\n        Lusaka, Zambia\n      </p>\n\n      <a class=\"contactItem\" href=\"https:/wa.me/260955700701/\">\n        <img class=\"socialMediaIcon\" src=\"./image-icon.svg\">\n      </a>\n\n      <a class=\"contactItem\" href=\"https:/facebook.com/\">\n        <img class=\"socialMediaIcon\" src=\"./image-icon.svg\">\n      </a>\n\n      <a class=\"contactItem\" href=\"https:/instagram.com/\">\n        <img class=\"socialMediaIcon\" src=\"./image-icon.svg\">\n      </a>\n    \n    </div>\n    \n    <nav class=\"menu\">\n\n      <a class=\"link\" href=\"./index.html\">\n        Home\n      </a>\n\n      <a class=\"link\" href=\"./about.html\">\n        About\n      </a>\n\n      <a class=\"link\" href=\"./contact.html\">\n        Contact\n      </a>\n\n      <a class=\"link\" href=\"./services.html\">\n        Services\n      </a>\n\n      <a class=\"link\" href=\"./equipment.html\">\n        Equipment\n      </a>\n      \n      <a class=\"link\" href=\"./blog.html\">\n        Blog\n      </a>\n\n      <a class=\"link\" href=\"./privacy.html\">\n        Privacy\n      </a>\n\n      <a class=\"link\" href=\"./terms.html\">\n        Terms\n      </a>\n    \n    </nav>\n\n    <p id=\"footerCopyright\"></p>\n          \n  </footer>\n  `;\n  }\n}\ncustomElements.define(\"footer-component\", footer);\nconst footerCopyright = document.querySelector(\"#footerCopyright\");\nconst currentYear = new Date().getFullYear();\nfooterCopyright.innerHTML = `Copyright © ${currentYear} Nzimu Apiculture Services`;\n\n//# sourceURL=webpack://nzimu/./src/scripts/footer.js?");

/***/ }),

/***/ "./src/graphics/image-icon.svg":
/*!*************************************!*\
  !*** ./src/graphics/image-icon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"image-icon.svg\";\n\n//# sourceURL=webpack://nzimu/./src/graphics/image-icon.svg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/footer.js"));
/******/ }
]);