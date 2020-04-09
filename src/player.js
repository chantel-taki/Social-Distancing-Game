class Player {
    constructor(){
        this.img = createImg("assets/PlayerRunning.gif").hide();
        this.velocity = 0;
        this.gravity = 0.5;
       this.jmpImg = createImg("assets/PlayerJumping.gif").hide();

    }
    //setup player
    setup(){
        this.height = this.img.height;
        this.width = this.img.width - 35;
        this.x = 50;
        this.y = 200;
    }
    //display player and set up speed & gravity for player
    display() {
       this.img.position(this.x, this.y).show();
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y > height - this.height) {
            this.y = height - this.height;
        }
    }
    //jump function to be called when pressing W
    jump(){
        this.velocity = -18;
        clear();
        //this.jmpImg.show();

    }
    //duck function to be called when pressing S
   /* duck(){
        console.log("ducking");
        this.y += 20;
    } */
}
