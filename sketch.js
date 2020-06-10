let balls = [];

function setup() {
    let canvas = createCanvas(displayWidth-20, displayHeight-300);
    background(10);
    for(var i=0; i<6; ++i) {
        balls.push( new Ball(100,100,80,1) );
    }

    canvas.parent('canvas-holder');
}

function draw() {
    background(10);
    for(var b of balls) {
        b.draw();
        b.update();
    }
}

let button = document.getElementById('bounceBtn');
button.addEventListener("click", () => {
    balls.forEach( (ball) => { 
        ball.randomBounce();
    });
});

let moreBtn = document.getElementById('moreBalls');
moreBtn.addEventListener("click", () => {
    balls.push(new Ball(100,100,80,1));
});

let killBtn = document.getElementById('killMoment');
killBtn.addEventListener("click", ()=> {
    balls.forEach( (ball) => { ball.vel.y = 0; });
});