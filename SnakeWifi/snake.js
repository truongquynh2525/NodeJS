class snake {
    constructor(game) {
        this.game = game;
        this.dots = [];
        this.headSnake ;
        this.direction = "Right";

        this.createSnake();
    }

    createSnake() {
        for(let i = 0; i < 3; i++){
            this.dot = new dot(this.game, 2 - i, 0);
            this.dots.push(this.dot);
        }
        this.headSnake = this.dots[0];
    }

    moveEvent() {
        window.addEventListener('keydown', (evt) => {
            const direction = evt.key.replace('Arrow', '');
            this.direction = direction;
        });
    }

    reload() {
        for(let i = this.dots.length - 1; i > 0; i--){
            this.dots[i].x = this.dots[i - 1].x;
            this.dots[i].y = this.dots[i - 1].y;
        }
    }

    update() {
        this.moveEvent();
        this.reload();

        switch(this.direction) {
            case 'Up': {
                this.headSnake.y--;
                break;
            }; 
            case 'Down': {
                this.headSnake.y++;
                break;
            };
            case 'Left': {
                this.headSnake.x--;
                break;
            };
            case 'Right': {
                this.headSnake.x++;         
                break;
            };
        }
        this.gameOver();
    }

    draw() {
        this.dots.forEach((i) => {
            i.draw();
        });
    }

    clearScreen() {
        this.game.ctx.fillStyle = '#000000';
        this.game.ctx.fillRect(0, 0, game_width, game_height);
    }

    newGame() {
        this.dots = [];
        this.direction = "Right";
        this.createSnake();
        alert("You lose");
        this.clearScreen();
    }

    gameOver() {
        if(this.headSnake.x < 0 || this.headSnake.x >= game_width/grid_size) {
            this.newGame();
        }
        
        if(this.headSnake.y < 0 || this.headSnake.y >= game_height/grid_size) {
            this.newGame();
        }

        if(this.dots.length > 0) {
            for(let i = this.dots.length - 1; i > 0; i--) {
                if(this.headSnake.x == this.dots[i].x && this.headSnake.y == this.dots[i].y) {
                    this.newGame();
                    break;
                }
            }
        }
    }
}