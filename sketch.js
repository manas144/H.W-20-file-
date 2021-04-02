var d
var speed,weight;
var car, wall;  
function setup() {
  createCanvas(1600,400);
speed=random(55,90)
weight=random(400,1500)
car = createSprite(50,200,50,50);
wall=createSprite(800,200,60,height/2);
car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
 d=(0.5*speed*speed*weight)/22500  
 if (car.isTouching(wall)){
   car.velocityX=0
   if (d>180){
     car.shapeColor="red"
   }
   if (d<180 && d>100){
     car.shapeColor="yellow"
   }
   if (d<100){
     car.shapecolor="green"
   }
 }
  drawSprites();
  
}