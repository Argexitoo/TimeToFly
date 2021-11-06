class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.baloon = new Baloon(100, 25, 30, 30, "red");
        this.enemy = new Enemy(25, 25, 30, 30, "black");
        this.enemies = [];
    }

    _drawBaloon(){
        this.ctx.fillStyle = this.baloon.color;
        this.ctx.fillRect(this.baloon.x, this.baloon.y, this.baloon.width, this.baloon.height)
    }

    _drawEnemy() {
        this.ctx.fillStyle = this.enemy.color;
        this.ctx.fillRect(this.enemy.x, this.enemy.y, this.enemy.width, this.enemy.height)
    }

    _generatEnemies(){
        let newEnemy = new Enemy()
        this.enemies.push(newEnemy)
        setInterval(() => {
            this.x = Math.floor(Math.random() * this.x)
        }, 500)
        // setInterval
        // Generar enemics random a x randoms
        // fer push a larray que tinc al constructor
        // anar cridant a les funcions de pintar-se i de moure's
    }

    //_clean() {
       // this.ctx.fillStyle = "white";
        //this.ctx.fillRect(0, 0, 1430, 715);
     // }

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
        this._generatEnemies();
        window.requestAnimationFrame(this._renderfFrame.bind(this));
        this._assignControls();
    
       
    }

    start() {
        console.log("starting");
        
        window.requestAnimationFrame(this._renderfFrame.bind(this));
}
}
