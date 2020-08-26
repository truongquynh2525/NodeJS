class game {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = game_width;
        this.canvas.height = game_height;
        document.body.appendChild(this.canvas);

        this.socket = io("http://localhost:2000/");

        this.snake = new snake(this);
        this.food = new food(this);
        
        this.listenServer();
        this.loop();
    }

    listenServer() {
        this.socket.on("server-send-direction", (direction) => {
            this.snake.direction = direction;
        });
    }

    loop() {
        this.clearScreen();
        this.draw();
        this.update();
        setTimeout(() => {
            this.loop();
        }, timer);
    }

    score() {
        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = "20px Arial";
        this.mark = this.snake.dots.length - 3;
        this.ctx.fillText("Point: " + this.mark, 0, 20);
    }

    update() {
        this.score();
        this.snake.update();
        if(this.snake.headSnake.x == this.food.x && this.snake.headSnake.y == this.food.y) {
            this.snake.reload();
            switch(this.snake.direction) {
                case 'Up': {
                    this.snake.headSnake.y--;
                    break;
                }; 
                case 'Down': {
                    this.snake.headSnake.y++;
                    break;
                };
                case 'Left': {
                    this.snake.headSnake.x--;
                    break;
                };
                case 'Right': {
                    this.snake.headSnake.x++;         
                    break;
                };
            }
            this.snake.dots.push(new dot(this, this.snake.headSnake.x, this.snake.headSnake.y));

            this.food.update();
            console.log("eat");
        }
    }

    clearScreen() {
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(0, 0, game_width, game_height);
    }

    draw() {
        this.snake.draw();
        this.food.draw();
    }
}

var g = new game();