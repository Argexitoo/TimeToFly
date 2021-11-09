class Enemy {
    constructor(x, y, width, height, color){
        //this.health = health;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.interval;
    }
    
    _moveDown() {
        this.interval = setInterval(() => {
            this.y = this.y + 2;
        },70)
    }
}