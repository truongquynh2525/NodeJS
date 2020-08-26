class dot {
    constructor(game, x, y){
        this.game = game;
        this.x = x;
        this.y = y;
    }

    draw() {
        this.game.ctx.fillStyle = "#ffcd03";
        this.game.ctx.fillRect(this.x*grid_size + 1, this.y*grid_size + 1, grid_size - 2, grid_size -2);
    }
}