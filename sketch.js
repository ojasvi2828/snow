
var particles = [];
var snow;
function setup() {
  createCanvas(800,400);
    //paricles.createSprite();
  bg =loadImage("snow2.jpg");


}

function draw() {
  background(bg);  
  



  if(frameCount%60 == 0){
    snow.push(new Snow(random(300,700),5));
  
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();   
  }

  
  drawSprites();
}