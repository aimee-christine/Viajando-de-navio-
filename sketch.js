var sea
var ship

function preload(){
seaImg= loadImage("sea.png")
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}


function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("black");
 
 sea=createSprite(200,39,40,10) 
 sea.addImage(seaImg)
 sea.velocityX=-4 
  

 ship=createSprite(200,200,40,10) 
 ship.addAnimation("navio",shipImg)
 ship.scale= 0.2
 ship.velocityY=-4
  
 
  
  if(sea.x<0){
  sea.x=sea.width/2;
  }
  
  
  drawSprites();}
