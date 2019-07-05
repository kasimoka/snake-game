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
    this.drawInfo();
    this.drawGameField();
    // setInterval(() => {
    //     this.info.refresh(++this.score, --this.lvl);
    // }, 500);
  }

  drawHeader = function() {
    this.header = document.createElement("h1");
    this.gameContainer.appendChild(this.header);
    this.header.textContent = "SIMPLE SNAKE GAME. Enjoy =)";
  };

  drawGameField = function() {
    this.fieldElement = document.createElement("div");
    this.fieldElement.classList.add("field");
    this.gameContainer.appendChild(this.fieldElement);
    this.field = new gameField(this.fieldElement, FIELD_WIDTH, FIELD_HEIGHT);
    this.field.drawField();
  };

  drawInfo = function() {
    this.info = new information(this.gameContainer);
    this.info.refresh(this.score, this.lvl);
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
    // this.element.textContent = "";
    for (let i = 0; i < this.height; i++) {
      this.field[i] = [];
      let el = document.createElement("div");
      el.classList.add("row");
      this.element.appendChild(el);
      for (let j = 0; j < this.width; j++) {
        let cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        el.appendChild(cellElement);
        this.field[i][j] = new cell(cellElement);
      }
    }
  };
}

class cell {
  constructor(element) {
    this.element = element;
  }

  clearCell = function() {
    this.element.className = "";
  };
}

class snake {
  constructor() {
    console.log("create snake");
  }
}

class food {
  constructor() {
    console.log("create food");
  }
}

class information {
  constructor(hostElement) {
    this.element = document.createElement("div");
    this.score = document.createElement("span");
    this.level = document.createElement("span");
    hostElement.appendChild(this.element);
    this.element.classList.add("score");
    this.element.appendChild(this.score);
    this.element.appendChild(document.createElement("br"));
    this.element.appendChild(this.level);
  }

  refresh = function(score, lvl) {
    this.score.innerHTML = `Score: ${score}`;
    this.level.innerHTML = `Level: ${lvl}`;
  };
}
const snakeGame = new game(document.querySelector("#host"), START_SPEED);
