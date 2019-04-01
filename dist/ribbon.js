(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar loadImages = exports.loadImages = function loadImages(imageURLs) {\n    return new Promise(function (resolve, reject) {\n        var imagesOkCounter = 0;\n        var images = [];\n\n        for (var i = 0; i < imageURLs.length; i++) {\n            var img = new Image();\n            images.push(img);\n\n            img.onload = function () {\n                imagesOkCounter++;\n                if (imagesOkCounter >= imageURLs.length) {\n                    resolve(images);\n                }\n            };\n            img.src = imageURLs[i];\n        }\n    });\n};\n\nvar loadImage = exports.loadImage = function loadImage(imageUrl) {\n    return new Promise(function (resolve, reject) {\n        var image = new Image();\n\n        image.onload = function () {\n            resolve(image);\n        };\n\n        image.src = imageUrl;\n    });\n};\n\nvar initIconsCofig = exports.initIconsCofig = function initIconsCofig(grid, iconUrls, gridCellSize) {\n    return new Promise(function (resolve, reject) {\n\n        var loaderIcons = new PIXI.loaders.Loader();\n        var iconCounter = 1;\n\n        iconUrls.forEach(function (iconUrl) {\n            loaderIcons.add('icon' + iconCounter++, iconUrl);\n        });\n\n        loaderIcons.load(function (loader, resources) {\n            resolve(grid.map(function (item) {\n\n                // console.log(randomProperty(resources));\n                // console.log();\n\n\n                return {\n                    x: item.x - gridCellSize / 2,\n                    y: item.y - gridCellSize / 2,\n                    image: new PIXI.Sprite(randomProperty(resources).texture)\n                };\n            }));\n        });\n\n        // loadImages(iconUrls).then(\n        //     response => {\n        //         resolve(grid.map(function (item) {\n        //             return {\n        //                 x: item.x - gridCellSize / 2,\n        //                 y: item.y - gridCellSize / 2,\n        //                 image: response[getRandom(response.length)]\n        //             }\n        //         }))\n        //     }\n        // )\n    });\n};\n\nvar getRandom = exports.getRandom = function getRandom(int) {\n    return Math.floor(Math.random() * int);\n};\n\nvar generateGrid = exports.generateGrid = function generateGrid(imageUrl, gridCellSizePercent) {\n    var canvas = document.createElement('canvas'),\n        ctx = canvas.getContext('2d');\n\n    return new Promise(function (resolve, reject) {\n        var imgWidth = 0,\n            imgHeight = 0,\n            gridCellSize = 0,\n            grid = [];\n\n        loadImage(imageUrl).then(function (image) {\n            imgWidth = image.width;\n            imgHeight = image.height;\n            gridCellSize = imgWidth / 100 * gridCellSizePercent;\n            ctx.canvas.width = imgWidth;\n            ctx.canvas.height = imgHeight;\n            ctx.drawImage(image, 0, 0, imgWidth, imgHeight);\n\n            for (var x = 0; x < imgWidth; x += gridCellSize) {\n                for (var y = 0; y < imgHeight; y += gridCellSize) {\n                    if (ctx.getImageData(x, y, 1, 1).data[0] !== 0) {\n                        grid.push({ x: x / imgWidth * 100, y: y / imgHeight * 100 });\n                    }\n                }\n            }\n\n            resolve(grid);\n        });\n    });\n};\n\nvar fitSpriteToSize = exports.fitSpriteToSize = function fitSpriteToSize(sprite, toWidth, toHeight) {\n    var spriteWidth = sprite.width,\n        spriteHeight = sprite.height;\n\n    var heightCoef = spriteHeight / toHeight;\n    var widthCoef = spriteWidth / toWidth;\n\n    if (heightCoef > widthCoef) {\n        sprite.width = spriteWidth / heightCoef;\n        sprite.height = toHeight;\n    } else {\n        sprite.height = spriteWidth / heightCoef;\n        sprite.width = toWidth;\n    }\n};\n\nvar randomProperty = function randomProperty(obj) {\n    var keys = Object.keys(obj);\n    return obj[keys[keys.length * Math.random() << 0]];\n};\n\n//# sourceURL=webpack:///./src/helpers.es6?");

/***/ }),

/***/ "./src/ribbon.es6":
/*!************************!*\
  !*** ./src/ribbon.es6 ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _helpers = __webpack_require__(/*! ./helpers.es6 */ \"./src/helpers.es6\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Ribbon = function Ribbon() {\n    _classCallCheck(this, Ribbon);\n\n    var self = this;\n    var app = new PIXI.Application(1400, 1000, { backgroundColor: 0x1099bb });\n    document.body.appendChild(app.view);\n\n    var loader = new PIXI.loaders.Loader(); // you can also create your own if you want\n    var sprites = {};\n\n    loader.add('ribbon', './ribbon.png');\n\n    self.iconsUrl = ['./ribbon-icons/ribbon-icon-1.png', './ribbon-icons/ribbon-icon-2.png', './ribbon-icons/ribbon-icon-3.png', './ribbon-icons/ribbon-icon-4.png', './ribbon-icons/ribbon-icon-5.png', './ribbon-icons/ribbon-icon-6.png'];\n\n    var container = new PIXI.Container();\n\n    loader.load(function (loader, resources) {\n\n        // console.log(resources);\n\n        sprites.ribbon = new PIXI.Sprite(resources.ribbon.texture);\n\n        (0, _helpers.fitSpriteToSize)(sprites.ribbon, app.screen.width, app.screen.height);\n\n        container.addChild(sprites.ribbon);\n\n        app.stage.addChild(container);\n\n        container.x = app.screen.width / 2;\n        container.y = app.screen.height / 2;\n\n        container.pivot.x = container.width / 2;\n        container.pivot.y = container.height / 2;\n\n        self.state.gridPxInPercentX = container.width / 100;\n        self.state.gridPxInPercentY = container.height / 100;\n    });\n\n    // var texture = PIXI.Texture.fromImage('./ribbon.png');\n\n    // var bunny = PIXI.Sprite.fromImage('./ribbon.png')\n\n    // center the sprite's anchor point\n    // bunny.anchor.set(0.5);\n\n    // move the sprite to the center of the screen\n    //\n\n    // container.x = app.screen.width / 2;\n    // container.y = app.screen.height / 2;\n\n\n    // console.log(container.width);\n\n\n    // Listen for animate update\n    app.ticker.add(function (delta) {\n        // just for fun, let's rotate mr rabbit a little\n        // delta is 1 if running at 100% performance\n        // creates frame-independent transformation\n        // container.rotation += 0.1 * delta;\n    });\n\n    self.gridCellSize = 6;\n\n    self.state = {\n        grid: [],\n        gridPxInPercent: 0\n    };\n\n    (0, _helpers.generateGrid)('./ribbon.png', self.gridCellSize).then(function (response) {\n        self.state.grid = response;\n\n        // console.log(response);\n\n        (0, _helpers.initIconsCofig)(self.state.grid, self.iconsUrl, self.gridCellSize).then(function (response) {\n            self.state.grid = response;\n\n            // console.log(response[0].image.height);\n\n            self.state.grid.forEach(function (item) {\n\n                // console.log(item.image.height);\n\n\n                (0, _helpers.fitSpriteToSize)(item.image, self.state.gridPxInPercentX * self.gridCellSize, self.state.gridPxInPercentX * self.gridCellSize);\n                //\n                container.addChild(item.image);\n\n                item.image.x = self.state.gridPxInPercentX * item.x;\n                item.image.y = self.state.gridPxInPercentY * item.y;\n\n                //\n                // console.log(icon);\n                //\n                // container.addChild(sprites.ribbon);\n                //\n                // console.log(response);\n                // self.ctx.drawImage(icon.image, icon.x, icon.y, self.gridCellSize, self.gridCellSize);\n            });\n        });\n    });\n};\n\nexports.default = Ribbon;\n\n//# sourceURL=webpack:///./src/ribbon.es6?");

/***/ })

/******/ });
});