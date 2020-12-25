var jungle;
var dog
var score = 0;
var PLAY;
var gameState = PLAY;
var cherry;
var cactus;
var cherryGroup,cactusGroup;

function preload(){
jungleImage=loadImage("jungle.jpg")
dogImage=loadImage("dog.png")
cherryImage=loadImage("cherry.png")
cactusImage=loadImage("cactus.png")
}
 
function setup() {
 createCanvas(400,400)
  jungle=createSprite(400,400);
  jungle.addImage(jungleImage);
  jungle.velocityX=-3;
  
  dog=createSprite(80,320,20,20);
  dog.addImage(dogImage);
  dog.scale=0.1;
  
  
  
   ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

  cherryGroup = new Group();
  cactusGroup = new Group();
}

function draw() {
 background("lightblue");

  if (jungle.x < 0){
      jungle.x = jungle.width/2;
    }

  if(ground.x<0) {
    ground.x=ground.width/2
  }
  
   if(keyDown("space")) {
        dog.velocityY = -12;
    }
      dog.velocityY = dog.velocityY + 0.8;
  
      dog.collide(ground);
  
    if (gameState===PLAY){
     ground.visible = false;
   }
  
    if(cherryGroup.isTouching(dog)){
      cherryGroup.destroyEach();
      score = score + 5;
    }
  
  spawncherry();
  spawncactus();
  
   drawSprites();
  
  
   stroke("white");
  textSize(15);
  fill("white");
  text("Score: "+score,300,60)

}

function spawncherry(){
  if(frameCount%80===0){
    cherry=createSprite(600,150,10,15)
    cherry.y=random(150,200)
    cherry.velocityX=-4
    cherry.addImage(cherryImage)
    cherry.scale=0.2
    cherry.lifetime = 300;
    cherryGroup.add(cherry)
  }
}

function spawncactus(){
  if(frameCount%80==0){
    cactus=createSprite(600,330,20,15)
    cactus.velocityX=-3
    cactus.addImage(cactusImage)
    cactus.scale=0.4;
  }
}

