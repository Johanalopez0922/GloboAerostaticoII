var bg, bgImg;
var bottomGround;
var topGround;
var balloon, balloonImg;
var obsTop1, obsTop2;
var obsBottom1, obsBottom2, obsBottom3;
var topObstaclesGroup, bottomObstaclesGroup; 

function preload() {
  bgImg = loadImage("assets/bg.png");
  balloonImg = loadAnimation(
    "assets/balloon1.png",
    "assets/balloon2.png",
    "assets/balloon3.png"
  );

  obsTop1 = loadImage("assets/obsTop1.png");
  obsTop2 = loadImage("assets/obsTop2.png");

  obsBottom1 = loadImage("assets/obsBottom1.png");
  obsBottom2 = loadImage("assets/obsBottom2.png");
  obsBottom3 = loadImage("assets/obsBottom3.png");
}

function setup() {
  createCanvas(600, 600);

  bg = createSprite(165, 485, 1, 1);
  bg.addImage(bgImg);
  bg.scale = 1.3;

  bottomGround = createSprite(200, 390, 800, 20);
  bottomGround.visible = true;

  topGround = createSprite(200, 10, 800, 20);
  topGround.visible = true;

  balloon = createSprite(100, 200, 20, 50);
  balloon.addAnimation("balloon", balloonImg);
  balloon.scale = 0.2;

  topObstaclesGroup = new Group(); 
  bottomObstaclesGroup = new Group(); 
}

function draw() {
  background("black");

  if (keyDown("space")) {
    balloon.velocityY = -6;
  }

  balloon.velocityY = balloon.velocityY + 2;

  spawnObstaclesTop();
  spawnObstaclesBottom()
  drawSprites();
}

function spawnObstaclesTop(){
  if (World.frameCount % 60 === 0) {
    console.log(frameCount);
    obstacleTop = createSprite(600, 50, 40, 50);
    obstacleTop.velocityX = -4;
    obstacleTop.scale = 0.1;
    // Posiciones "y" aleatorias para los obstaculos superiores
    obstacleTop.y = Math.round(random(10, 100));

    //Agregar las Imagenes aleatorias
        
    // Asignando lifetime a la variables
    obstacleTop.lifetime = 600;
    balloon.depth = balloon.depth + 1;
    topObstaclesGroup.add(obstacleTop);
  }
}

function spawnObstaclesBottom(){
  if (World.frameCount % 60 === 0) {
    obstacleBottom = createSprite(600, 350, 40, 50);
    obstacleBottom.addImage(obsBottom1);
    obstacleBottom.debug = true;

    obstacleBottom.scale = 0.07;
    obstacleBottom.velocityX = -4;
    //Agregar las Imagenes aleatorias
    
    // Asignar lifetime a la variable
    obstacleBottom.lifetime = 600;
    balloon.depth = balloon.depth + 1;
    bottomObstaclesGroup.add(obstacleBottom);
  }
}
