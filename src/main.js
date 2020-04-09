
let game = new Game();
//starting screen
let startImg;
let endImg;



function preload (){
  soundFormats('mp3', 'ogg');
 mySound = loadSound('assets/happy.mp3')
 coughSound = loadSound('assets/cough.mp3')
 jumpSound = loadSound('assets/Jump.mp3')
 game.initialize();
 startImg = createImg("assets/StartScreen.gif").hide();
 endImg = createImg("assets/EndScreen.gif").hide();
}

function setup() { 
  createCanvas(1920, 1080);
  game.setup();
  mySound.play();
  mySound.loop();
  mySound.setVolume(0.3);
  

  } 
  
  function draw() { 
    clear();
    if (game.startGame && !game.endGame){
      game.display();
      console.log(frameRate());
      frameRate(120);
    }  else if (!game.startGame && !game.endGame){
      startImg.show();
    }
   if (game.endGame){
      endImg.show();
      game.player.img.hide();
      startImg.hide();
      coughSound.play();
      coughSound.loop();
      coughSound.setVolume(1);
      
     // game.background.images.splice(0, 4)
     // game.background.images.src.forEach(element => {
       // element.hide();
     // });
     // game.items.splice(0, game.items.length);
     /* game.people.img.forEach(element => {
        element.hide();
      }); */
    }
 
  }

  function keyPressed(){
    // W key
    if (keyCode === 87) {
      game.player.jump();
      jumpSound.play();
    // game.player.img = createImg("assets/Player Jumping.gif").show();
      clear();
    }
    // S key
    if (keyCode === 83) {
      game.player.duck();
    }

    if (keyCode === 13) {
      game.startGame = true;
      startImg.hide();
      console.log("start");
    }
    if (keyCode === 13 && game.endGame === true) {
      window.location.reload();
    }

   
  }