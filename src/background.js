
class Background {
    constructor() {
        this.images = [
            { src: loadImage("assets/Layer1.png"), x: 0, speed: 5 },
            { src: loadImage("assets/Layer2.png"), x: 0, speed: 5 },
            { src: loadImage("assets/Layer3.png"), x: 0, speed: 6 },
            { src: loadImage("assets/Layer4.png"), x: 0, speed: 6 },
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


