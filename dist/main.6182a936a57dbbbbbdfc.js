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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/kasimoka/dev/snake-game/src/index.js: Support for the experimental syntax 'classProperties' isn't currently enabled (38:15):\\n\\n\\u001b[0m \\u001b[90m 36 | \\u001b[39m        \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mstartGame()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 37 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 38 | \\u001b[39m    startGame \\u001b[33m=\\u001b[39m \\u001b[36mfunction\\u001b[39m() {\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m              \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 39 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 40 | \\u001b[39m        \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mtimeEngine \\u001b[33m=\\u001b[39m setTimeout(\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mtick\\u001b[33m.\\u001b[39mbind(\\u001b[36mthis\\u001b[39m)\\u001b[33m,\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mspeed)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 41 | \\u001b[39m        window\\u001b[33m.\\u001b[39maddEventListener(\\u001b[32m\\\"keydown\\\"\\u001b[39m\\u001b[33m,\\u001b[39m event \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\\n    at Parser.raise (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:6325:17)\\n    at Parser.expectPlugin (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:7647:18)\\n    at Parser.parseClassProperty (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:10830:12)\\n    at Parser.pushClassProperty (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:10795:30)\\n    at Parser.parseClassMemberWithIsStatic (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:10734:14)\\n    at Parser.parseClassMember (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:10668:10)\\n    at withTopicForbiddingContext (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:10623:14)\\n    at Parser.withTopicForbiddingContext (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:9702:14)\\n    at Parser.parseClassBody (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:10600:10)\\n    at Parser.parseClass (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:10574:22)\\n    at Parser.parseStatementContent (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:9871:21)\\n    at Parser.parseStatement (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:9829:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:10405:25)\\n    at Parser.parseBlockBody (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:10392:10)\\n    at Parser.parseTopLevel (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:9758:10)\\n    at Parser.parse (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:11270:17)\\n    at parse (/home/kasimoka/dev/snake-game/node_modules/@babel/parser/lib/index.js:11306:38)\\n    at parser (/home/kasimoka/dev/snake-game/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/home/kasimoka/dev/snake-game/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/home/kasimoka/dev/snake-game/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/home/kasimoka/dev/snake-game/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/home/kasimoka/dev/snake-game/node_modules/@babel/core/lib/transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });