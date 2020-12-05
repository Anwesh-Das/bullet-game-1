var wall,thickness;
var bullet,speed,weight;
var bulletweight,bulletspeed;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  
   background("lightblue");

   if(hascollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    console.log(damage);
    if(damage > 10){
       wall.shapeColor = "red";
    }
 
    if(damage < 10){
       wall.shapeColor = "green";
    }
 
 }

  drawSprites();
}

function hascollided(bullet,wall){

   bulletRightEdge = bullet.x + bullet.width;
   wallLeftEdge = wall.x;

   if(bulletRightEdge >= wallLeftEdge){
     return true;
   }

   return false;

}