const FIELD_WIDTH = 100;
const FIELD_HEIGHT = 40;
const START_SPEED = 100;

class game {
  constructor(gameContainer, startSpeed) {
    this.lvl = 0;
    this.speed = startSpeed; // game speed in ms
    this.score = 0;
    this.gameContainer = gameContainer;
    // this.gameContainer.innerHTML = "";
    // this.drawHeader();
    // this.drawInfo();
    this.drawGameField();
    // setInterval(() => {
    //     this.info.refresh(++this.score, --this.lvl);
    // }, 500);
  }

  drawGameField = function() {
    this.fieldElement = document.createElement("div");
    this.fieldElement.classList.add("field");
    this.gameContainer.appendChild(this.fieldElement);
    this.field = new gameField(this.fieldElement, FIELD_WIDTH, FIELD_HEIGHT);
    this.fieldArray = this.field.drawField();
    // return this.fieldArray();
  };
}

class gameField {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.field = [];
  }

  drawField = function() {
    for (let i = 0; i < this.height; i++) {
      this.field[i] = [];
      let el = document.createElement("div");
      el.classList.add("row");
      this.element.appendChild(el);
      for (let j = 0; j < this.width; j++) {
        let cellElement = document.createElement("div");
        // cellElement.classList.add("cell");
        el.appendChild(cellElement);
        this.field[i][j] = new cell(cellElement);
        this.field[i][j].clearCell();
      }
    }
    // return this.field;
  };

  drawSnake = function(snakeBody) {
    console.log(snakeBody);
  };

  drawHead = function(snakeHead) {
    console.log(snakeHead);
  };
}

class cell {
  constructor(element) {
    this.element = element;
  }

  clearCell = function() {
    this.element.className = "cell";
  };
}

class snake {
  constructor() {
    this.snakeBody = [[20, 0], [20, 1], [20, 2]];
    this.head = this.snakeBody[this.snakeBody.length - 1];
  }

  getHead = function() {
    return this.head;
  };

  getSnakeBody = function() {
    return this.snakeBody;
  };
}

class food {
  constructor() {
    console.log("create food");
  }
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
