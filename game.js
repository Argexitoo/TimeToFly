class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.baloon = new Baloon(100, 25, 30, 30, "red");
        //this.enemy = new Enemy(25, 25, 30, 30, "black");
        this.enemies = [];
        this.interval;
    }

    _drawBaloon(){
        this.ctx.fillStyle = this.baloon.color;
        this.ctx.fillRect(this.baloon.x, this.baloon.y, this.baloon.width, this.baloon.height)
    }

    _drawEnemy(enemy) {
        this.ctx.fillStyle = enemy.color;
        this.ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height)
    }


    _getRandom(){
        let random = Math.floor(Math.random() * 1430);
        return random;
    }

     _generateEnemies(){
        setInterval(() => {  
            let newEnemy = new Enemy(this._getRandom(), -35, 30, 30, "blue");
            this.enemies.push(newEnemy);
        }, 500);
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
                    break;
                case "ArrowUp":
                    this.baloon.goUp();
                    break;
                case "ArrowDown":
                    this.baloon.goDown();
                    break
            }
        })
    }

    _moveDownGeneratedBalloons(){
        setInterval(() => {
            for (let i = 0; i < this.enemies.length; i++){
                this.enemies[i]._moveDown();
           }
        }, 100)
    }

    _renderfFrame(){
        this._clean();
        this._drawBaloon();
        for (let i = 0; i < this.enemies.length; i++){
            this._drawEnemy(this.enemies[i]);
       }
        window.requestAnimationFrame(this._renderfFrame.bind(this));
    }

    start() {
        this._assignControls();
        this._generateEnemies();
        this._moveDownGeneratedBalloons();
        window.requestAnimationFrame(this._renderfFrame.bind(this));
    }
}