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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'snake.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar FIELD_WIDTH = 70;\nvar FIELD_HEIGHT = 40;\nvar BONUS = 75;\nvar START_SPEED = 300;\nvar SPEED_KOEF = 0.9;\nvar DIRECTION_LEFT = 37;\nvar DIRECTION_RIGHT = 39;\nvar DIRECTION_UP = 38;\nvar DIRECTION_DOWN = 40;\nvar GAME_STARTED = \"START\";\nvar GAME_PAUSED = \"PAUSE\";\nvar GAME_OVER = \"GAMEOVER\";\n\nvar game = function game(gameContainer, startSpeed) {\n  _classCallCheck(this, game);\n\n  _defineProperty(this, \"startGame\", function () {\n    var _this = this;\n\n    this.timeEngine = setTimeout(this.tick.bind(this), this.speed);\n    window.addEventListener(\"keydown\", function (event) {\n      if (event.keyCode >= 37 && event.keyCode <= 40) {\n        _this.snake.changeDirection(event.keyCode);\n\n        event.preventDefault();\n      }\n\n      if (event.keyCode == 32) {\n        event.preventDefault();\n\n        switch (_this.status) {\n          case GAME_STARTED:\n            _this.stopGame();\n\n            break;\n\n          case GAME_PAUSED:\n            _this.resumeGame();\n\n            break;\n\n          case GAME_OVER:\n            break;\n\n          default:\n            break;\n        }\n      }\n    }, false);\n  });\n\n  _defineProperty(this, \"tick\", function () {\n    if (this.status == GAME_STARTED) {\n      this.field.eraseSnake(this.snake.getSnakeBody());\n      this.snake.move();\n\n      if (this.scoreBonus > 0) {\n        this.scoreBonus--;\n      }\n\n      if (this.checkWall()) {\n        this.stopGame();\n        this.status = GAME_OVER;\n        alert('GAME_OVER');\n        return;\n      }\n\n      if (this.checkCanibalism()) {\n        this.stopGame();\n        this.status = GAME_OVER;\n        alert('CANIBALISM!, GAME_OVER');\n        return;\n      }\n\n      if (this.compareFoodAndSnakehead()) {\n        this.speed = Math.floor(this.speed * SPEED_KOEF);\n        this.score += this.scoreBonus;\n        this.info.refresh(++this.score, ++this.lvl);\n        this.scoreBonus = BONUS;\n        var foodCoord = this.generateFood();\n        this.snakeFood = new food(foodCoord[0], foodCoord[1]);\n        this.field.drawFood(this.snakeFood.getFoodCoord());\n      } else {\n        this.snake.redrawTail();\n      }\n\n      this.field.drawSnake(this.snake.getSnakeBody());\n      this.field.drawHead(this.snake.getHead());\n      this.timeEngine = setTimeout(this.tick.bind(this), this.speed);\n    }\n  });\n\n  _defineProperty(this, \"resumeGame\", function () {\n    this.timeEngine = setTimeout(this.tick.bind(this), this.speed);\n    this.status = GAME_STARTED;\n  });\n\n  _defineProperty(this, \"stopGame\", function () {\n    clearTimeout(this.timeEngine);\n    this.status = GAME_PAUSED;\n  });\n\n  _defineProperty(this, \"generateFood\", function () {\n    var _this2 = this;\n\n    var x = Math.floor(Math.random() * FIELD_HEIGHT);\n    var y = Math.floor(Math.random() * FIELD_WIDTH);\n    var body = this.snake.getSnakeBody();\n    body.forEach(function (i) {\n      if (i[0] == y && i[1] == x) {\n        return _this2.generateFood();\n      }\n    });\n    return [x, y];\n  });\n\n  _defineProperty(this, \"compareFoodAndSnakehead\", function () {\n    var head = this.snake.getHead();\n    var fc = this.snakeFood.getFoodCoord();\n    return head[0] == fc[0] && head[1] == fc[1];\n  });\n\n  _defineProperty(this, \"checkWall\", function () {\n    var head = this.snake.getHead();\n    return !(head[0] >= 0 && head[0] < FIELD_HEIGHT && head[1] >= 0 && head[1] < FIELD_WIDTH);\n  });\n\n  _defineProperty(this, \"checkCanibalism\", function () {\n    var isCanibalism = false;\n    var head = this.snake.getHead();\n    var body = this.snake.getSnakeBody();\n    body.pop();\n    body.forEach(function (i) {\n      if (i[0] == head[0] && i[1] == head[1]) {\n        isCanibalism = true;\n      }\n    });\n    return isCanibalism;\n  });\n\n  this.lvl = 0;\n  this.speed = startSpeed; // game speed in ms\n\n  this.score = 0;\n  this.scoreBonus = BONUS;\n  this.status = GAME_STARTED;\n  this.gameContainer = gameContainer;\n  this.info = new information(this.gameContainer.querySelector(\".score\"));\n  this.field = new gameField(document.querySelector(\".field\"), FIELD_WIDTH, FIELD_HEIGHT);\n  this.snake = new snake();\n\n  var _foodCoord = this.generateFood();\n\n  this.snakeFood = new food(_foodCoord[0], _foodCoord[1]);\n  this.field.drawSnake(this.snake.getSnakeBody());\n  this.field.drawHead(this.snake.getHead());\n  this.field.drawFood(this.snakeFood.getFoodCoord());\n  this.startGame();\n};\n\nvar gameField = function gameField(element, width, height) {\n  _classCallCheck(this, gameField);\n\n  _defineProperty(this, \"drawField\", function () {\n    for (var i = 0; i < this.height; i++) {\n      this.field[i] = [];\n      var el = document.createElement(\"div\");\n      el.classList.add(\"row\");\n      this.element.appendChild(el);\n\n      for (var j = 0; j < this.width; j++) {\n        var cellElement = document.createElement(\"div\");\n        el.appendChild(cellElement);\n        this.field[i][j] = new cell(cellElement);\n        this.field[i][j].clearCell();\n      }\n    }\n  });\n\n  _defineProperty(this, \"drawSnake\", function (snakeBody) {\n    var _this3 = this;\n\n    snakeBody.forEach(function (i) {\n      _this3.field[i[0]][i[1]].drawSnakeBody();\n    });\n  });\n\n  _defineProperty(this, \"drawHead\", function (snakeHead) {\n    this.field[snakeHead[0]][snakeHead[1]].drawHead();\n  });\n\n  _defineProperty(this, \"eraseSnake\", function (snakeBody) {\n    var _this4 = this;\n\n    snakeBody.forEach(function (i) {\n      _this4.field[i[0]][i[1]].clearCell();\n    });\n  });\n\n  _defineProperty(this, \"drawFood\", function (foodCoord) {\n    this.field[foodCoord[0]][foodCoord[1]].drawFood();\n  });\n\n  this.element = element;\n  this.width = width;\n  this.height = height;\n  this.field = [];\n  this.drawField();\n};\n\nvar cell = function cell(element) {\n  _classCallCheck(this, cell);\n\n  _defineProperty(this, \"clearCell\", function () {\n    this.element.className = \"cell\";\n  });\n\n  _defineProperty(this, \"drawSnakeBody\", function () {\n    this.element.classList.add(\"snakeBody\");\n  });\n\n  _defineProperty(this, \"drawHead\", function () {\n    this.element.classList.add(\"snakeHead\");\n  });\n\n  _defineProperty(this, \"drawFood\", function () {\n    this.element.classList.add(\"food\");\n  });\n\n  this.element = element;\n};\n\nvar snake = function snake() {\n  _classCallCheck(this, snake);\n\n  _defineProperty(this, \"getHead\", function () {\n    return this.head;\n  });\n\n  _defineProperty(this, \"getSnakeBody\", function () {\n    return this.snakeBody.slice();\n  });\n\n  _defineProperty(this, \"changeDirection\", function (newDirection) {\n    if (Math.abs(newDirection - this.direction) % 2) {\n      this.direction = newDirection;\n    }\n  });\n\n  _defineProperty(this, \"move\", function () {\n    switch (this.direction) {\n      case DIRECTION_LEFT:\n        this.head = [this.head[0], this.head[1] - 1];\n        this.snakeBody.push(this.head);\n        break;\n\n      case DIRECTION_UP:\n        this.head = [this.head[0] - 1, this.head[1]];\n        this.snakeBody.push(this.head);\n        break;\n\n      case DIRECTION_RIGHT:\n        this.head = [this.head[0], this.head[1] + 1];\n        this.snakeBody.push(this.head);\n        break;\n\n      case DIRECTION_DOWN:\n        this.head = [this.head[0] + 1, this.head[1]];\n        this.snakeBody.push(this.head);\n        break;\n    } // ;\n\n  });\n\n  _defineProperty(this, \"redrawTail\", function () {\n    this.snakeBody.shift();\n  });\n\n  this.snakeBody = [[20, 0], [20, 1], [20, 2]];\n  this.head = this.snakeBody[this.snakeBody.length - 1];\n  this.direction = DIRECTION_RIGHT;\n};\n\nvar food = function food(x, y) {\n  _classCallCheck(this, food);\n\n  _defineProperty(this, \"getFoodCoord\", function () {\n    return [this.x, this.y];\n  });\n\n  this.x = x;\n  this.y = y;\n};\n\nvar information = function information(hostElement) {\n  _classCallCheck(this, information);\n\n  _defineProperty(this, \"refresh\", function (score, lvl) {\n    this.score.innerHTML = \"Score: \".concat(score);\n    this.level.innerHTML = \"Level: \".concat(lvl);\n  });\n\n  this.element = hostElement;\n  this.score = this.element.querySelectorAll(\"span\")[0];\n  this.level = this.element.querySelectorAll(\"span\")[1];\n};\n\nvar snakeGame = new game(document.querySelector(\"#host\"), START_SPEED);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });