const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles = [];
var snow;
function setup() {
  createCanvas(800,400);
    //paricles.createSprite();
  bg =loadImage("snow2.jpg");
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(bg);  
  
  Engine.update(engine);


  if(frameCount%60 == 0){
    particles.push(new Snow(random(50,750),random(0,350)));
  
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();   
  }

  
  drawSprites();
}