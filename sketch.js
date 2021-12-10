
var trex ,trex_running;
var invisibleGround
var ground, groundImage

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(300,100,20,20)
  trex.addAnimation("running",trex_running)
  trex.scale = 0.5
  trex.x = 50
  //ground 
  ground = createSprite(300,180,600,15)
  ground.addImage(groundImage)
  ground.x = ground.width/2
  ground.velocityX = -3

  invisibleGround = createSprite(300,190,600,14)
  invisibleGround.visible = false
}

function draw(){
  background(220)
  
  //making ur trex jump: space bar key
  if(keyDown("space") && trex.y > 140){
    trex.velocityY = -13 
  }
  if(ground.x < 0){
  ground.x = ground.width/2
  }
  //giving gravity to trex
  trex.velocityY += 0.8
  
  trex.collide(invisibleGround)
  drawSprites()
}