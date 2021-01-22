class particle {
  constructor(x,y) {
    this.p = createVector(x,y);
    this.vel = createVector(0,0);
    
  }
  move() {
    let mouse = createVector(mouseX,mouseY);
    let acc = p5.Vector.sub(mouse,this.p);
    this.vel = p5.Vector.add(this.vel,acc);
    this.vel.limit(5);
    if(acc.mag() < 2)
     this.vel.setMag(0);
    this.p = p5.Vector.add(this.p,this.vel);
  }
  checkedge() {
    if(this.p.x > width)
      this.p.x = 0;
    if(this.p.y > height)
      this.p.y = 0;
    if(this.p.x < 0)
      this.p.x = width;
    if(this.p.y < 0)
      this.p.y = height;
    
  }
  drawParticle() {
    stroke(220);
    this.checkedge();
    circle(this.p.x,this.p.y,20);
    this.move();
    
  }
}