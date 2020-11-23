var bullet, thickness,wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness,200);
 wall.shapeColor ="pink";

}

function draw() {
  background(0,0,0); 
  
 if(hasCollied(bullet,wall)){
  bullet.velocityX = 0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  if(damage > 10){
    wall.shapeColor = "red";
  }
  if(damage < 10){
    wall.shapeColor = "green";
  }

 }

  drawSprites();
}

function hasCollied(lbullet,lwall){
  bulletRigh=lbullet.x + lbullet.width;
  wallleft = lwall.x;
  if(bulletRigh>=wallleft){
    return true;

  }
  return false;

}