class Baloon {
    constructor(x, y, width, height, color){
        //this.health = health;
        this.x = 500;
        this.y = 500;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    goRight() {
        this.x += 1;
    }

    goLeft() {
        this.x -= 1;
    }

    //receiveDamage()
}