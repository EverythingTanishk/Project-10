var ship, ship_moving, shipImg;
var sea, seaImg, invisibleGround;
function preload(){
ship_moving=loadAnimation("ship-1.png","ship-2.png");
seaImg=loadImage("sea.png");
}


function setup(){
  createCanvas(400,400);
  
  //creating ship
  ship=createSprite(150,100,20,50);
  ship.addAnimation(ship_moving);

 

  sea=createSprite(200,200);
  sea.scale=0.3;
  sea.addImage(seaImg);
  sea.velocityX=-0.4;
}
function draw() {
 background("blue");
 if(sea.x<0){
   sea.x = sea.width/2;
 }
 ship=createSprite(150,100,20,50);
 sea.addImage(seaImg);
  sea.velocityX=-0.4;
  ship.addAnimation(ship_moving);
drawSprites();
} 