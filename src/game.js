class Game {
  constructor() {
    // Creates arrays to push obstacles/people
    this.obstacles = [];
    this.people = [];
    this.startGame = false;
    this.endGame = false;
    this.score = 0;
  }
  initialize() {
    //initialize/generate the player and background
    // if(this.startGame = true){
    this.player = new Player();
    this.background = new Background();
    this.items = [];
    //  }
  }
  // setup the player in game
  setup() {
    this.player.setup();
  }
  display() {
    //clear the display after movements
    //clear();
    //display the background & player
    this.background.display();
    this.player.display();
    textSize(100);
    text("Score: " + this.score, 15, 80);
    //push obstacles  to array at frame count
    if (frameCount % 900 === 0) {
      this.obstacles.push(new Obstacles());
    }
    this.obstacles.forEach((obstacle) => {
      obstacle.display();
    });
    // check if collided with player, if so, end the game
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.collision(this.player)) {
        obstacle.img.hide();
        this.endGame = true;
      } else {
        return !obstacle.collision(this.player);
      }
    });
    //push people to array at frame count
    if (frameCount % 1250 === 0) {
      this.people.push(new People());
    }
    this.people.forEach((person) => {
      person.display();
    });
    // check if collided with player, if so, end the game
    this.people = this.people.filter((person) => {
      if (person.collision(this.player)) {
        person.img.hide();
        this.endGame = true;
      } else {
        return !person.collision(this.player);
      }
    });
    //push items to array at frame count
    if (frameCount % 200 === 0) {
      this.items.push(new Items());
    }
    //display items
    this.items.forEach((item) => {
      item.display();
    });
    //filter and hide items once collected
    this.items = this.items.filter((item, index) => {
      if (item.collect(this.player)) {
        item.img.hide();
        this.score += 1;
        return false;
      } else {
        return true;
      }
    });
   // console.log(this.items.length);
    this.items.forEach((item) => {
      if (this.endGame) {
        item.img.hide();
        document.querySelector("canvas").style.visibility = "hidden";
      }
    });
    this.people.forEach((person) => {
      if (this.endGame) {
        person.img.hide();
        document.querySelector("canvas").style.visibility = "hidden";
      }
    });
    this.obstacles.forEach((obstacle) => {
      if (this.endGame) {
        obstacle.img.hide();
        document.querySelector("canvas").style.visibility = "hidden";
      }
    });
  }
}