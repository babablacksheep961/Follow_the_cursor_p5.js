let particle1;
function setup() {
  createCanvas(400, 400);
  particle1 = new particle(width/2, height/2);
}

function draw() {
  background(0);
  particle1.drawParticle();
  //console.log(mouseX,mouseY);
}