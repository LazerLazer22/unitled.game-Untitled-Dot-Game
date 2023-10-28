let coin = [];

roomMax = 10;

let vX = 0;
let vY = 0;

let color = [0, 0, 0];

let openLeft = false;
let openRight = false;
let openUp = false;
let openDown = false;

let friction = true;

let allCollected = 0;

let moveX = 0;
let moveY = 0;

let timer = 10;

let start = false;
let gameOver = false;

let sounds = [];

let score = 0;

level = 1;

function preload(){
  sounds.push(loadSound('702806__matrixxx__soothing-waterdrop-click.wav'));
  sounds.push(loadSound('60013__qubodup__whoosh.flac'));
  sounds.push(loadSound('363920__samsterbirdies__8-bit-error.wav'));
  sounds.push(loadSound('523763__matrixxx__select-granted-06.wav'));
  sounds.push(loadSound('657948__matrixxx__family-friendly-inspect-sound-ui-or-in-game-notification.wav'));


}

function setup() {
  createCanvas(windowHeight, windowHeight);
  
  for (i = 0; i < 10; i++){
    coin[i] = new Coin(random(width/8, width-width/8), random(height/8, height-height/8));
  }
  
  work = new Work();
  
  textAlign(CENTER, CENTER);
  noStroke();
  
  moveX = width/2-width/16;
  moveY = height/2-height/16;
  
}

function draw() {
  background(0, 75);
  
  if (keyIsDown(16)){
    if(start == false){
      gameOver = false;
      sounds[3].play(0, 1, 0.5);
      timer = 10;
    }
    start = true;
  }
  if (start == true){
  if(work.open == 0){
    if(frameCount%(40-level) == 0){
      timer -= 1;
      if(timer != -1){
      sounds[4].play(0, 1, 1-(timer*0.1));
      }
    }
  }
  if (timer <= -1){
    start = false;
    gameOver = true;
    sounds[2].play(0, 1, 0.1);
    timer = 10;
  }
  
  for (j = 0; j < coin.length; j++){
  coin[j].show();
  coin[j].collect(moveX, moveY);
  }
  work.roomSwap();
  work.playerMove();
  work.playerBump();
    fill(255, 255, 255, 50);
    textSize(width/10);
    text("Level " + level, width/2, height/10);
    text("Score: " + score, width/2, height/1.1);
    textSize(width/(1+timer));
    if(work.open == 0){
    text(timer, width/2+random(-width/(40*(timer+1)), width/(40*(timer+1))), height/2+random(-height/(40*(timer+1)), height/(40*(timer+1))));
    }else{
      text(timer, width/2, height/2);
    }
  }else if (gameOver == false){
    fill(0, 150, 255);
    textSize(width/10);
    text("untitled.game", width/2, height/3);
    textSize(width/20);
    text("WASD or Arrow Keys to Move", width/2, height/1.75);
    text("SHIFT to Start", width/2, height/1.5);
  }else{
    allCollected = 0;
    levelNumber = 1;
    textSize(width/8);
    fill(255, 0, 0);
    text("GAME OVER", width/2+random(-width/200, width/200), height/3+random(-height/200, height/200));
    textSize(width/15);
    text("You Reached Level " + level, width/2, height/2);
    text("and Scored " + score + " Points!!!", width/2, height/1.75);
    textSize(width/25);
    text("SHIFT to Restart", width/2, height/1.5);
  }
    
}