const FIELD_WIDTH = 70;
const FIELD_HEIGHT = 40;
const START_SPEED = 500;
const DIRECTION_LEFT = 37;
const DIRECTION_RIGHT = 39;
const DIRECTION_UP = 38;
const DIRECTION_DOWN = 40;
const GAME_STARTED = "start";
const GAME_PAUSED = "pause";
const GAME_OVER = "gameover";

class game {
  constructor(gameContainer, startSpeed) {
    this.lvl = 0;
    this.speed = startSpeed; // game speed in ms
    this.score = 0;
    this.status = GAME_STARTED;
    this.gameContainer = gameContainer;
    this.info = new information(this.gameContainer.querySelector(".score"));
    this.field = new gameField(
      document.querySelector(".field"),
      FIELD_WIDTH,
      FIELD_HEIGHT
    );
    this.snake = new snake();
    let foodCoord = this.generateFood();
    this.snakeFood = new food(foodCoord[0], foodCoord[1]);
    this.field.drawSnake(this.snake.getSnakeBody());
    this.field.drawHead(this.snake.getHead());
    this.field.drawFood(this.snakeFood.getFoodCoord());

    window.addEventListener("keydown", event => {
      if (event.keyCode >= 37 && event.keyCode <= 40) {
        this.snake.changeDirection(event.keyCode);
        event.preventDefault();
      }
      if (event.keyCode == 32) {
        switch (this.status) {
          case GAME_STARTED:
            this.stopGame();
            break;
          case GAME_PAUSED:
            this.startGame();
          case GAME_OVER:
            break;
          default:
            break;
        }
        this.stopGame();
      }
    });
    this.startGame();
  }
  startGame = function() {
    this.timeEngine = setInterval(() => {
      this.field.eraseSnake(this.snake.getSnakeBody());
      this.snake.move();
      if (this.compareFoodAndSnakehead()) {
        // this.score++;
        // this.lvl++;
        this.info.refresh(++this.score, ++this.lvl);
        let foodCoord = this.generateFood();
        this.snakeFood = new food(foodCoord[0], foodCoord[1]);
        this.field.drawFood(this.snakeFood.getFoodCoord());
      } else {
        this.snake.redrawTail();
      }
      this.field.drawSnake(this.snake.getSnakeBody());
      this.field.drawHead(this.snake.getHead());
    }, this.speed);
    this.status = GAME_STARTED;
  };

  stopGame = function() {
    clearInterval(this.timeEngine);
    this.status = GAME_PAUSED;
  };

  generateFood = function() {
    // let pivot = this.snake.getHead();
    let x = Math.floor(Math.random() * FIELD_HEIGHT);
    let y = Math.floor(Math.random() * FIELD_WIDTH);
    return [x, y];
  };

  compareFoodAndSnakehead = function() {
    let head = this.snake.getHead();
    let fc = this.snakeFood.getFoodCoord();
    return head[0] == fc[0] && head[1] == fc[1];
  };
}

class gameField {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.field = [];
    this.drawField();
  }

  drawField = function() {
    for (let i = 0; i < this.height; i++) {
      this.field[i] = [];
      let el = document.createElement("div");
      el.classList.add("row");
      this.element.appendChild(el);
      for (let j = 0; j < this.width; j++) {
        let cellElement = document.createElement("div");
        el.appendChild(cellElement);
        this.field[i][j] = new cell(cellElement);
        this.field[i][j].clearCell();
      }
    }
  };

  drawSnake = function(snakeBody) {
    snakeBody.forEach(i => {
      this.field[i[0]][i[1]].drawSnakeBody();
    });
  };

  drawHead = function(snakeHead) {
    this.field[snakeHead[0]][snakeHead[1]].drawHead();
  };

  eraseSnake = function(snakeBody) {
    snakeBody.forEach(i => {
      this.field[i[0]][i[1]].clearCell();
    });
  };

  drawFood = function(foodCoord) {
    this.field[foodCoord[0]][foodCoord[1]].drawFood();
  };
}

class cell {
  constructor(element) {
    this.element = element;
  }

  clearCell = function() {
    this.element.className = "cell";
  };

  drawSnakeBody = function() {
    this.element.classList.add("snakeBody");
  };

  drawHead = function() {
    this.element.classList.add("snakeHead");
  };

  drawFood = function() {
    this.element.classList.add("food");
  };
}

class snake {
  constructor() {
    this.snakeBody = [[20, 0], [20, 1], [20, 2]];
    this.head = this.snakeBody[this.snakeBody.length - 1];
    this.direction = DIRECTION_RIGHT;
  }

  getHead = function() {
    return this.head;
  };

  getSnakeBody = function() {
    return this.snakeBody;
  };
  changeDirection = function(newDirection) {
    if (Math.abs(newDirection - this.direction) % 2) {
      this.direction = newDirection;
    }
  };
  move = function() {
    switch (this.direction) {
      case DIRECTION_LEFT:
        this.head = [this.head[0], this.head[1] - 1];
        this.snakeBody.push(this.head);
        break;
      case DIRECTION_UP:
        this.head = [this.head[0] - 1, this.head[1]];
        this.snakeBody.push(this.head);
        break;
      case DIRECTION_RIGHT:
        this.head = [this.head[0], this.head[1] + 1];
        this.snakeBody.push(this.head);
        break;
      case DIRECTION_DOWN:
        this.head = [this.head[0] + 1, this.head[1]];
        this.snakeBody.push(this.head);
        break;
    }
    // ;
  };

  redrawTail = function() {
    this.snakeBody.shift();
  };
}

class food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getFoodCoord = function() {
    return [this.x, this.y];
  };
}

class information {
  constructor(hostElement) {
    this.element = hostElement;
    this.score = this.element.querySelectorAll("span")[0];
    this.level = this.element.querySelectorAll("span")[1];
  }

  refresh = function(score, lvl) {
    this.score.innerHTML = `Score: ${score}`;
    this.level.innerHTML = `Level: ${lvl}`;
  };
}
const snakeGame = new game(document.querySelector("#host"), START_SPEED);
