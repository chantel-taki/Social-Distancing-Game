
class Items {
    constructor(){
        this.height = 5;
        this.width = 5;
        this.x = width;
        this.y = 480;
        this.img = createImg("assets/TP.png").hide();
    }
    display(){
        this.x -=4;
        this.img.position(this.x, this.y).show();
    }
    collect(player) {
        let leftSide = this.x;
        let rightSide = this.x + this.width;
        let topSide = this. y;
        let bottomSide = this.y + this.height;

        let playerLeft = player.x;
        let playerRight = player.x + player.width;
        let playerTop = player.y;
        let playerBottom = player.y + player.height;

        let collectX = (leftSide > playerLeft && leftSide < playerRight) || (rightSide > playerLeft && rightSide < playerRight);
        let collectY = (topSide > playerTop && topSide < playerBottom) || (bottomSide > playerTop && bottomSide < playerBottom);

        let collected = collectX && collectY;

        return collected;


    }
}

   class Sanitizer  {
        constructor(){
            this.height = 5;
            this.width = 5;
            this.x = width;
            this.y = 480;
            this.img = createImg("assets/Sanitizer.png").hide();
        }
        display(){
            this.x -=4;
            this.img.position(this.x, this.y).show();
        }
        collect(player) {
            let leftSide = this.x;
            let rightSide = this.x + this.width;
            let topSide = this. y;
            let bottomSide = this.y + this.height;
    
            let playerLeft = player.x;
            let playerRight = player.x + player.width;
            let playerTop = player.y;
            let playerBottom = player.y + player.height;
    
            let collectX = (leftSide > playerLeft && leftSide < playerRight) || (rightSide > playerLeft && rightSide < playerRight);
            let collectY = (topSide > playerTop && topSide < playerBottom) || (bottomSide > playerTop && bottomSide < playerBottom);
    
            let collected = collectX && collectY;
    
            return collected;
    
    
        }
}