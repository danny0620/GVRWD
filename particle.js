class Particle {

  constructor(position) {
    this.acceleration = createVector(0, 0.09);
    this.velocity = createVector(random(-10, 10), random(-4, 4));
    this.position = position.copy();
    this.lifespan = 30.0;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= -1.5
  }

  display() {
    stroke(300, this.lifespan);
    strokeWeight(10);
    fill(100, this.lifespan);
    ellipse(this.position.x, this.position.y, 1, 0.8);
    let c = color(150,255, 10);
    fill(c);
    noStroke();
    rect(0,450,900, 600);
  }

  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
