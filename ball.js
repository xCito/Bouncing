let GRAVITY = 1.5;

function Ball(x, y, diam, mass) {
    this.pos = createVector(x,y);
    this.vel = createVector(random(-10,10), random(-30,30));
    this.acc = createVector(0, GRAVITY);
    this.mass = mass;
    this.diam = diam;

    this.colr = color(random(10,255),random(10,255),random(10,255));
}

Ball.prototype.draw = function() {
    fill(this.colr);
    ellipse(this.pos.x, this.pos.y, this.diam);
};

Ball.prototype.update = function() {
    this.acc.mult(this.mass);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.boundary();
};

Ball.prototype.boundary = function() {
    let rad = this.diam/2;

    if(this.pos.x - rad <= 0) {         // Wall left
        this.vel.x *= -1;
        this.pos.x = rad;
    }
    if(this.pos.x + rad >= width) {     // Wall right
        this.vel.x *= -1;
        this.pos.x = width - rad;
    }
    // if(this.pos.y - rad <= 0) {      // Ceiling
    //     this.vel.y *= -1;
    //     this.pos.y = rad;
    // }
    if(this.pos.y + rad >= height) {    // Floor
        this.vel.y *= -1;
        this.pos.y = height - rad;
    }
    // console.log(this.vel.y);
};

Ball.prototype.randomBounce = function() {
    let dir = createVector(0, random(-30,0));
    this.vel.add(dir);
};

