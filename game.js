class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.baloon = new Baloon(50, 400, 30, 30, "red");
        this.enemy = new Enemy(25, 25, 30, 30, "black")
    }

    _drawBaloon(){
        console.log(this.baloon);
        this.ctx.fillStyle("red");
        this.ctx.fillRect(this.baloon.x, this.baloon.y, this.baloon.width, this.baloon.height)
    }

    _drawEnemy() {
        this.ctx.fillStyle(this.enemy.color);
        this.ctx.fillRect(this.enemy.x, this.enemy.y, this.enemy.width, this.enemy.height)
    }

    _generatEnemies(){
        // setInterval
        // Generar enemics random a x randoms
        // fer push a larray que tinc al constructor
        // anar cridant a les funcions de pintar-se i de moure's
    }

    _clean() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, 1430, 715);
      }

    _assignControls(){
        document.addEventListener("keydown", (event) => {
            switch(event.code) {
                case "ArrowLeft":
                    this.baloon.goLeft();
                    break;
                case "ArrowRight":
                    this.baloon.goRight();
            }
        })
    }

    

    _renderfFrame(){
        console.log("rendering");
        this._clean();
        this._drawBaloon();
        this._drawEnemy();
        this.enemy._moveDown();
        window.requestAnimationFrame(this._renderfFrame.bind(this));
        // window request animation frame
    }

    start() {
        console.log("starting");
        this._assignControls();
        window.requestAnimationFrame(this._renderfFrame.bind(this));
    }

}