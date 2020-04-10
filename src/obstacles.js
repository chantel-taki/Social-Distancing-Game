
class Obstacles {
    constructor(){
        this.height = 10;
        this.width = 10;
        this.x = width;
        this.y = 170;
        this.img = createImg("assets/corona.png").hide();
    }
    display(){
        this.x -= 6;
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
        this.height = 155;
        this.width = 220;
    }
    display(){
        this.x -= 4;
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