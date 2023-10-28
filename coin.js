class Coin {
  constructor(coinX, coinY){
    this.cX = coinX;
    this.cY = coinY;
    this.collected = false;
  }
  
  show(){
    
    if(this.collected == false){
    fill(0, 255, 0);
    }else{
      fill(0, 0);
    }
    ellipse(this.cX, this.cY, width/15, height/15);
    //ellipse(100, 100, width/25, height/25);
    
    if(keyIsDown(32)){
      this.cX = random(100, 300);
    }
  }
  
  collect(moveX, moveY){
    if(this.collected == false){
    if(dist(this.cX, this.cY, moveX+width/32, moveY+height/32) <= width/15){
      this.collected = true;
      sounds[0].play();
      allCollected += 1;
      this.cX = random(width/8, width-width/8);
      this.cY = random(height/8, height-height/8);
      score += 10;
    }
    }
    if(allCollected == 0 && work.open == 0){
      this.collected = false;
    }
    if(gameOver == true){
      this.collected = false;
    }
  }

}