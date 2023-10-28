class Work {
  constructor() {
    this.open = 0;
    this.light = 0;
    this.lightOn = true;
    
  }
  roomSwap() {
    /*if (keyIsDown(49)){
      openLeft = true;
    }else{
      openLeft = false;
    }
    if (keyIsDown(50)){
      openRight = true;
    }else{
      openRight = false;
    }
    if (keyIsDown(51)){
      openUp = true;
    }else{
      openUp = false;
    }
    if (keyIsDown(52)){
      openDown = true;
    }else{
      openDown = false;
    }*/
    
    if (allCollected >= coin.length){
      this.open = int(random(1, 4.99));
      allCollected = coin.length-1;
      score += timer*100;
    }
    
    if(this.open == 1){
      openLeft = true;
    }
    if(this.open == 2){
      openRight = true;
    }
    if(this.open == 3){
      openUp = true;
    }
    if(this.open == 4){
      openDown = true;
    }
    
      if(this.lightOn == true){
        this.light += 2.5;
      }else{
        this.light -= 2.5;
      }
    if(this.light > 150){
      this.lightOn = false;
    }
    if(this.light < 0){
      this.lightOn = true;
    }
    
    fill(0, this.light, this.light+105, 80);
    if(openLeft == true){
      rect(-width/80, 0, width/20, height, 7);
    }
    if(openRight == true){
      rect(width-width/30, 0, width/20, height, 7);
    }
    if(openUp == true){
      rect(0, -height/80, width, height/20, 7);
    }
    if(openDown == true){
      rect(0, height-height/30, width, height/20, 7);
    }
  }
  playerMove() {
    
    moveX += vX;
  moveY += vY;
    
    if(friction == true){
  if (vX < 0 && keyIsDown(37) == false && keyIsDown(65) == false){
    vX = vX/2;
  }
  if (vX > 0 && keyIsDown(39) == false && keyIsDown(68) == false){
    vX = vX/2;
  }
  if (vY < 0 && keyIsDown(38) == false && keyIsDown(87) == false){
    vY = vY/2;
  }
  if (vY > 0 && keyIsDown(40) == false && keyIsDown(83) == false){
    vY = vY/2;
  }
  }
  
  fill(0, 150, 255);
  rect(moveX, moveY, width/16, height/16, 7);
  if(gameOver == true){
    moveX = width/2-width/16;
    moveY = height/2-height/16;
  }
  if (keyIsDown(37) || keyIsDown(65)){
    vX -= width/500;
  }
  if (keyIsDown(39) || keyIsDown(68)){
    vX += width/500;
  }
  if (keyIsDown(38) || keyIsDown(87)){
    vY -= height/500;
  }
  if (keyIsDown(40) || keyIsDown(83)){
    vY += height/500;
  }
  }
  playerBump() {
  if(openLeft == true){
    if (moveX < -width/16){
      moveX = width+width/16;
      openLeft = false;
      sounds[1].play();
      allCollected = 0;
      level += 1;
      timer = 10;
      this.open = 0;
    }
    }else if (moveX < 0){
      moveX = 0;
      vX = -vX;
    }
  if(openRight == true){
    if (moveX > width+width/16){
      moveX = -width/16;
      openRight = false;
      sounds[1].play();
      allCollected = 0;
      level += 1;
      timer = 10;
      this.open = 0;
    }
    }else if (moveX > width-25){
      moveX = width-width/16;
      vX = -vX;
    }
  if(openUp == true){
    if (moveY < -height/16){
      moveY = height+height/16;
      openUp = false;
      sounds[1].play();
      allCollected = 0;
      level += 1;
      timer = 10;
      this.open = 0;
    }
    }else if (moveY < 0){
      moveY = 0;
      vY = -vY;
    }
  if(openDown == true){
    if (moveY > height+height/16){
      moveY = -height/16;
      openDown = false;
      sounds[1].play();
      allCollected = 0;
      level += 1;
      timer = 10;
      this.open = 0;
    }
    }else if (moveY > height-25){
      moveY = height-height/16;
      vY = -vY;
    }
  }
  
}