
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score, ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}



function setup() {
  createCanvas(500,500);

  monkey = createSprite(50,400,30,30);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.13;
  
  ground = createSprite(0,450,5500, 5)
}


function draw() {
  background("lightblue");
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  movingGround();
  if(keyDown("space") && monkey.y > 210){
    monkey.velocityY = -14;
  }
  bananaF();
  obstacleF();
  time();
  drawSprites();
  
}

function movingGround(){
  ground.velocityX =  -10
  if(ground.x === 0){
    ground.x = 1000
  }  
}  

function bananaF(){
   if(frameCount % 80 === 0){
     var ran = Math.round(random(120,200));
     banana = createSprite(500,ran,10,10);
     banana.addImage(bananaImage);
     banana.velocityX = -5;
     banana.scale = 0.1
     banana.lifetime = 200;
     
     foodGroup.add(banana);
   }  
}  

function obstacleF(){
   if(frameCount % 300 === 0){
     obstacle = createSprite(500,400,10,10);
     // obstacle.y = 400
     obstacle.addImage(obstaceImage);
     obstacle.velocityX = -5;
     obstacle.collide(ground);
     obstacle.scale = 0.1
     obstacle.lifetime = 200;
     
     obstacleGroup.add(obstacle);
   }
}

function time(){
  var survivalTime=0;
  stroke("white")
  textSize(20);
  fill("white")
  text("Score: " + score, 300, 50)

  stroke("black")
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100, 50)
}  



