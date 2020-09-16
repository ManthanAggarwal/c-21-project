var bullet,wall;
var Speed,Weight,thickness;


function setup() {
  createCanvas(1600,400);
  Speed = random(223,321);
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = (255, 255, 255);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
  bullet.velocityX = Speed
  thickness = random(22,83);
  Weight = random(30,52);
  
}


function draw() {
  background(8); 
   
  
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2){
   bullet.velocityX = 0
    var damage = 0.5*Weight*Speed*Speed/(thickness*thickness*thickness);
    
    if(damage > 10){
      wall.shapeColor = color(255,0,0)
    }
    
    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }
 
   
 drawSprites();
}