class Baloon {
    constructor(x, y, width, height, color){
        //this.health = health;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    goRight() {
        this.x = this.x + 1;
    }

    goLeft() {
        this.x = this.x - 1;
    }

    //receiveDamage()
}