let game = new Game();
let value = 0;
let score = localStorage.getItem("gameScore");
//starting screen
let startImg;
let endImg;

if (!score) {
  score = 0;
}

function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("assets/happy.mp3");
  coughSound = loadSound("assets/cough.mp3");
  jumpSound = loadSound("assets/Jump.mp3");
  grabSound = loadSound("assets/pop.ogg");
  game.initialize();
  startImg = createImg("assets/StartScreen.gif").hide();
  endImg = createImg("assets/EndScreen.gif").hide();
}
function setup() {
  createCanvas(960, 540);
  game.setup();
  mySound.play();
  mySound.loop();
  mySound.setVolume(0.3);
}
function draw() {
  clear();
  if (game.startGame && !game.endGame) {
    game.display();
    score = game.score;
    textSize(50);
    text("Score: " + score, 700, 40);
    //console.log(frameRate());
    frameRate(500);
    //if(game.items.collect){
    //  grabSound.play();
   // }
  } else if (!game.startGame && !game.endGame) {
    startImg.show();
  }
  if (game.endGame) {
    endImg.show();
    score = game.score;
    //hide player and start img
    game.player.img.hide();
    startImg.hide();
    //play coughing sound at end screen
    coughSound.play();
    coughSound.loop();
    coughSound.setVolume(1);
    //hide corona/people/tp
    game.items.forEach((item) => {
      item.img.hide();
    });
    game.sanitizer.forEach((item) => {
      item.img.hide();
    });
    game.people.forEach((person) => {
      person.img.hide();
    });
    game.obstacles.forEach((obstacle) => {
      obstacle.img.hide();
    });
    noLoop();
  }
}
function keyPressed() {
  // W key
  if (keyCode === 87) {
    game.player.jump();
    jumpSound.play();
    clear();
  }
  // S key
  /*
  if (keyCode === 83) {
    game.player.duck();
  } */
  if (keyCode === 13) {
    game.startGame = true;
    startImg.hide();

  }
  if (keyCode === 13 && game.endGame === true) {
    window.location.reload();
  }
}

/*function keyReleased(){
  if (value === 0) {
    value = 87;
    console.log("release");
  } else {
    value = 0;
  }
  return false;
} */