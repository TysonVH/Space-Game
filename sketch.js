
var gameState = 0;
var spaceShip, asteroid1, asteroid2, UFO, backgroundS, enemy;


function preload(){
asteroid1 = loadImage("Images/Imported_Planet1.gif");
asteroid2 = loadImage("Images/Imported_Planet2.gif");
backgroundS1 = loadImage("Images/Space_Game_background.jpg");
UFO = loadImage("Images/UFO_Import.gif");
spaceShip1 = loadImage("Images/Imported piskel.gif");
}

function setup(){
createCanvas(1000,800)
console.log("hello");
backgroundS = createSprite(50,50,20,20)
backgroundS.addImage(backgroundS1)
backgroundS.scale = 2.5
backgroundS.x = backgroundS.width/2
backgroundS.velocityX = -2
spaceShip = createSprite(100,300,50,50)
spaceShip.addImage(spaceShip1)
spaceShip.scale = 0.5

}

function draw(){
  background("white");
  //console.log("hello")
console.log("this is ",gameState)


if(backgroundS.x < 0){
  backgroundS.x = backgroundS.width/2
  console.log("hello");
}

if(gameState===0){

console.log("hello");


  
   
    console.log("hello");
if(keyWentDown("UP_ARROW")){
  spaceShip.velocityY = -4
}
if(keyWentUp("UP_ARROW")){
  spaceShip.velocityY = 0
}
if(keyWentDown("DOWN_ARROW")){
  spaceShip.velocityY = +4
}
if(keyWentUp("DOWN_ARROW")){
  spaceShip.velocityY = 0
}
Enemies();
if(spaceShip.isTouching(enemy)){
  gameState = 1
  

}
console.log("hello");
}
else if(gameState===1){
  console.log("hello");
  backgroundS.velocityX = 0
  spaceShip.velocityY = 0
  enemy.velocityX = 0
 
}
drawSprites();
}

function Enemies(){
  if(frameCount%80===0){
enemy = createSprite(1000,400,30,30)
enemy.y = Math.round(random(100,700))
//console.log(enemy.y)
enemy.velocityX = -3
var rand = Math.round(random(1,3))
switch(rand){
  case 1:enemy.addImage(asteroid1)
       break;
  case 2:enemy.addImage(asteroid2)
        break;
  case 3:enemy.addImage(UFO)
        break;
  default:break
}
enemy.scale = 0.3
enemy.lifetime = 500
  }

}