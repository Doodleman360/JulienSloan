// Constants
Y_AXIS = 1;
X_AXIS = 2;
let b1, b2, c1, c2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //fullScreen();
    c1 = color(204, 102, 0);
    c2 = color(0, 102, 153);

    //noLoop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    // Background
    //setGradient(0, 0, width/2, height, b1, b2, X_AXIS);
    //setGradient(width/2, 0, width/2, height, b2, b1, X_AXIS);
    setGradient(0, 0, width, height, c2, c1, Y_AXIS);
    fill(20,20,100);
    makeShape(200, 0, 20, 0);
    fill(0,0,50);
    makeShape(200, 20, 15, 200);
    fill(0,0,20);
    makeShape(200, 40, 15, 200);
    fill(0,0,0);
    makeShape(200, 60, 15, 200);
}

function mousePressed() {
    noiseSeed(int(random(200)));
}

function makeShape(max,yOffset, scale, offset) {

    noStroke();
    beginShape();
    vertex(0, height/2);
    //scale = mouseY;

    //println(max);
    for (let i = 1; i <= max; i++) {
        vertex(map(i, 2, max, 0, width), height/2+yOffset+(noise((i+offset)/scale)*100));
    }


    vertex(width, height/2);
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
}

function setGradient(x, y, w, h, c1, c2, axis ) {

    noFill();

    if (axis == Y_AXIS) {  // Top to bottom gradient
        for (let i = y; i <= y+h; i++) {
            let inter = map(i, y, y+h, 0, 1);
            let c = lerpColor(c1, c2, inter);
            stroke(c);
            line(x, i, x+w, i);
        }
    } else if (axis == X_AXIS) {  // Left to right gradient
        for (let i = x; i <= x+w; i++) {
            let inter = map(i, x, x+w, 0, 1);
            let c = lerpColor(c1, c2, inter);
            stroke(c);
            line(i, y, i, y+h);
        }
    }
}