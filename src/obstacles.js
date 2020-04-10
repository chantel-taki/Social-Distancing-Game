
class Obstacles {
    constructor(){
        this.height = 6;
        this.width = 6;
        this.x = width;
        this.y = 180;
        this.img = createImg("assets/corona.png").hide();
    }
    display(){
        this.x -= 8;
        this.img.position(this.x, this.y).show();
    }

    collision(player) {
        let leftSide = this.x;
        let rightSide = this.x + this.width;
        let topSide = this. y;
        let bottomSide = this.y + this.height;

        let playerLeft = player.x;
        let playerRight = player.x + player.width;
        let playerTop = player.y;
        let playerBottom = player.y + player.height;

        let colideOnX = (leftSide > playerLeft && leftSide < playerRight) || (rightSide > playerLeft && rightSide < playerRight);
        let colideOnY = (topSide > playerTop && topSide < playerBottom) || (bottomSide > playerTop && bottomSide < playerBottom);

        let collided = colideOnX && colideOnY;
        return collided;


    }
}

class People {
    constructor(){
       
        this.x = width;
        this.y = 300;
        this.img = createImg("assets/PersonIdle.gif").hide();
        this.height = 80;
        this.width = 60;
    }
    display(){
        this.x -= 5;
        this.img.position(this.x, this.y).show();
    }
    collision(player) {
        let leftSide = this.x;
        let rightSide = this.x + this.width;
        let topSide = this. y;
        let bottomSide = this.y + this.height;

        let playerLeft = player.x;
        let playerRight = player.x + player.width;
        let playerTop = player.y;
        let playerBottom = player.y + player.height;

        let colideOnX = (leftSide > playerLeft && leftSide < playerRight) || (rightSide > playerLeft && rightSide < playerRight);
        let colideOnY = (topSide > playerTop && topSide < playerBottom) || (bottomSide > playerTop && bottomSide < playerBottom);

        let collided = colideOnX && colideOnY;
        return collided;


    }
}