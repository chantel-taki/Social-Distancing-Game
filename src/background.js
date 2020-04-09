
class Background {
    constructor() {
       // this.random = 0;
        this.images = [
            { src: loadImage("assets/Layer1.png"), x: 0, speed: 8 },
            { src: loadImage("assets/Layer2.png"), x: 0, speed: 8 },
            { src: loadImage("assets/Layer3.png"), x: 0, speed: 10 },
            { src: loadImage("assets/Layer4.png"), x: 0, speed: 10 },
        ];
    }
    move(img) {
        img.x -= img.speed;
        image(img.src, img.x, 0);
        image(img.src, img.x + width, 0);
        if (img.x <= -width) {
            img.x = 0;
        } 
    }
    display() {
        this.images.forEach(image => {
            this.move(image);
        });
   
    }
    
}


