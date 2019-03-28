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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ribbon = __webpack_require__(3);

var _ribbon2 = _interopRequireDefault(_ribbon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ribbon = new _ribbon2.default();

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ribbon.es6");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers.es6":
/*!*************************!*\
  !*** ./src/helpers.es6 ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar loadImages = exports.loadImages = function loadImages(imageURLs) {\n    return new Promise(function (resolve, reject) {\n        var imagesOkCounter = 0;\n        var images = [];\n\n        for (var i = 0; i < imageURLs.length; i++) {\n            var img = new Image();\n            images.push(img);\n\n            img.onload = function () {\n                imagesOkCounter++;\n                if (imagesOkCounter >= imageURLs.length) {\n                    resolve(images);\n                }\n            };\n            img.src = imageURLs[i];\n        }\n    });\n};\n\nvar loadImage = exports.loadImage = function loadImage(imageUrl) {\n    return new Promise(function (resolve, reject) {\n        var image = new Image();\n\n        image.onload = function () {\n            resolve(image);\n        };\n\n        image.src = imageUrl;\n    });\n};\n\nvar initIconsCofig = exports.initIconsCofig = function initIconsCofig(grid, iconUrls, gridCellSize) {\n    return new Promise(function (resolve, reject) {\n        loadImages(iconUrls).then(function (response) {\n            resolve(grid.map(function (item) {\n                return {\n                    x: item.x - gridCellSize / 2,\n                    y: item.y - gridCellSize / 2,\n                    image: response[getRandom(response.length)]\n                };\n            }));\n        });\n    });\n};\n\nvar getRandom = exports.getRandom = function getRandom(int) {\n    return Math.floor(Math.random() * int);\n};\n\nvar generateGrid = exports.generateGrid = function generateGrid(imageUrl, ctx, gridCellSize) {\n    return new Promise(function (resolve, reject) {\n        var imgWidth = 0,\n            imgHeight = 0,\n            grid = [];\n\n        loadImage(imageUrl).then(function (image) {\n            imgWidth = image.width / 1.5;\n            imgHeight = image.height / 1.5;\n            ctx.canvas.width = imgWidth;\n            ctx.canvas.height = imgHeight;\n            ctx.drawImage(image, 0, 0, imgWidth, imgHeight);\n\n            for (var x = 0; x < imgWidth; x += gridCellSize) {\n                for (var y = 0; y < imgHeight; y += gridCellSize) {\n                    if (ctx.getImageData(x, y, 1, 1).data[0] !== 0) {\n                        grid.push({ x: x, y: y });\n                    }\n                }\n            }\n\n            resolve(grid);\n        });\n    });\n};\n\n//# sourceURL=webpack:///./src/helpers.es6?");

/***/ }),

/***/ "./src/ribbon.es6":
/*!************************!*\
  !*** ./src/ribbon.es6 ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _helpers = __webpack_require__(/*! ./helpers.es6 */ \"./src/helpers.es6\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Ribbon = function Ribbon() {\n    _classCallCheck(this, Ribbon);\n\n    var self = this;\n\n    self.canvas = document.getElementById('canvas');\n    self.ctx = canvas.getContext('2d');\n    self.gridCellSize = 6;\n\n    self.state = {\n        grid: [],\n        icons: []\n    };\n\n    self.iconUrls = ['./ribbon-icons/ribbon-icon-1.png', './ribbon-icons/ribbon-icon-2.png', './ribbon-icons/ribbon-icon-3.png', './ribbon-icons/ribbon-icon-4.png', './ribbon-icons/ribbon-icon-5.png', './ribbon-icons/ribbon-icon-6.png', './ribbon-icons/ribbon-icon-7.png', './ribbon-icons/ribbon-icon-8.png', './ribbon-icons/ribbon-icon-9.png'];\n\n    self.ribbonImage = './ribbon.png';\n\n    (0, _helpers.generateGrid)(self.ribbonImage, self.ctx, self.gridCellSize).then(function (response) {\n        self.state.grid = response;\n        (0, _helpers.initIconsCofig)(self.state.grid, self.iconUrls, self.gridCellSize).then(function (response) {\n            self.state.icons = response;\n\n            self.state.icons.forEach(function (icon) {\n                self.ctx.drawImage(icon.image, icon.x, icon.y, self.gridCellSize, self.gridCellSize);\n            });\n        });\n    });\n};\n\nexports.default = Ribbon;\n\n//# sourceURL=webpack:///./src/ribbon.es6?");

/***/ })

/******/ });
});

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map