class game {
    constructor(gameContainer, speed) {
        const FIELD_WIDTH = 100;
        const FIELD_HEIGHT = 100;
        this.speed = speed; // game speed in ms
        this.score = 0;
        this.gameContainer = gameContainer;
        this.field = new gameField(this.gameContainer, FIELD_WIDTH, FIELD_HEIGHT);
        console.log(this);
    }
}

class gameField {
    constructor(element, width, height) {
        this.element = element;
        this.width = width;
        this.height = height;
    }
}

class cell {
    constructor() {
        console.log('create cell');
    }
}

class snake {
    constructor() {
        console.log('create snake');
    }
}

class food {
    constructor() {
        console.log('create food');
    }
}

const snakeGame = new game(document.querySelector('body'), 500);
