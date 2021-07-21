var ship, ship_moving, shipImg;
var sea, seaImg, invisibleGround;
function preload(){
ship_moving=loadAnimation("ship-3.png","ship-1.png");
seaImg=loadImage("sea.png");
}


function setup(){
  createCanvas(400,400);
  
  //creating ship

 

  sea=createSprite(200,200);
  sea.scale=0.3;
  sea.addImage(seaImg);
  sea.velocityX=-0.4;
  ship=createSprite(100,200,20,50);
  ship.addAnimation("ship", ship_moving);
  ship.scale=0.3;
}
function draw() {
 background("blue");
 if(sea.x<0){
   sea.x = sea.width/2;
 }
 
  sea.velocityX=-0.4;
drawSprites();
} 