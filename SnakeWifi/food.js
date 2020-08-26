class food {
    constructor(game) {
        this.game = game;
        this.x = Math.floor(Math.random() * (game_width/grid_size));
        this.y = Math.floor(Math.random() * (game_height/grid_size));
    }

    update() {
        this.x = Math.floor(Math.random() * (game_width/grid_size));
        this.y = Math.floor(Math.random() * (game_height/grid_size));
    }

    draw() {
        this.game.ctx.strokeStyle = "#34eb43";
        this.game.ctx.beginPath();
        this.game.ctx.arc(this.x*grid_size + grid_size/2, this.y*grid_size + grid_size/2, grid_size/2, 0, 2 * Math.PI);
        this.game.ctx.fillStyle = "#f4fc03";    
        this.game.ctx.fill();
        this.game.ctx.stroke(); 
    }
}