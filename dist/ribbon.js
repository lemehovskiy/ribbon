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

/***/ "./src/ribbon.es6":
/*!************************!*\
  !*** ./src/ribbon.es6 ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\n Version: 1.0.0\n Author: lemehovskiy\n Website: http://lemehovskiy.github.io\n Repo: https://github.com/lemehovskiy/ribbon\n */\n\n\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n(function ($) {\n    var Ribbon = function () {\n        function Ribbon(element, options) {\n            _classCallCheck(this, Ribbon);\n\n            var self = this;\n\n            //extend by function call\n            self.settings = $.extend(true, {\n\n                test_property: false\n\n            }, options);\n\n            self.$element = $(element);\n\n            //extend by data options\n            self.data_options = self.$element.data('ribbon');\n            self.settings = $.extend(true, self.settings, self.data_options);\n\n            self.canvas = null;\n            self.context = null;\n            self.FPS = 30;\n\n            self.init();\n        }\n\n        _createClass(Ribbon, [{\n            key: 'init',\n            value: function init() {\n\n                var self = this;\n\n                window.requestAnimFrame = function () {\n                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {\n                        window.setTimeout(callback, 1000 / FPS);\n                    };\n                }();\n\n                var body = document.querySelector('body');\n\n                self.canvas = document.createElement('canvas');\n\n                self.$element.append(self.canvas);\n\n                self.canvas.style.position = 'absolute';\n                self.canvas.style.top = 0;\n                self.canvas.style.bottom = 0;\n                self.canvas.style.left = 0;\n                self.canvas.style.right = 0;\n                self.canvas.style.zIndex = 2;\n                self.canvas.style.cursor = 'pointer';\n\n                self.context = self.canvas.getContext('2d');\n\n                self.canvas.width = self.$element.outerWidth();\n                self.canvas.height = self.$element.outerWidth();\n\n                window.onresize = self.on_resize;\n\n                self.context.rect(20, 20, 150, 100);\n                self.context.stroke();\n\n                self.loop();\n            }\n        }, {\n            key: 'on_resize',\n            value: function on_resize() {}\n        }, {\n            key: 'update',\n            value: function update() {\n                var self = this;\n            }\n        }, {\n            key: 'clear',\n            value: function clear() {\n                var self = this;\n\n                self.context.clearRect(0, 0, innerWidth, innerHeight);\n            }\n        }, {\n            key: 'render',\n            value: function render() {\n\n                var self = this;\n\n                var canvas_center_x = self.canvas.width / 2;\n                var canvas_center_y = self.canvas.height / 2;\n            }\n        }, {\n            key: 'loop',\n            value: function loop() {\n\n                var self = this;\n\n                self.clear();\n                self.update();\n                self.render();\n\n                window.requestAnimFrame(function () {\n                    self.loop();\n                });\n            }\n        }]);\n\n        return Ribbon;\n    }();\n\n    $.fn.ribbon = function () {\n        var $this = this,\n            opt = arguments[0],\n            args = Array.prototype.slice.call(arguments, 1),\n            length = $this.length,\n            i = void 0,\n            ret = void 0;\n        for (i = 0; i < length; i++) {\n            if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object' || typeof opt == 'undefined') $this[i].ribbon = new Ribbon($this[i], opt);else ret = $this[i].ribbon[opt].apply($this[i].ribbon, args);\n            if (typeof ret != 'undefined') return ret;\n        }\n        return $this;\n    };\n})(jQuery);\n\n//# sourceURL=webpack:///./src/ribbon.es6?");

/***/ })

/******/ });
});