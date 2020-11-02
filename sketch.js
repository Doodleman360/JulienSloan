// Constants
Y_AXIS = 1;
X_AXIS = 2;
let c1, c2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    c1 = color(204, 102, 0);
    c2 = color(0, 102, 153);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    // Background
    setGradient(0, 0, width, height, c2, c1, Y_AXIS);
    fill(20,20,100);
    makeShape(200, height - 200, 10, 0);
    fill(0,0,100);
    makeShape(200, height - 160, 15, 200);
    fill(0,0,50);
    makeShape(200, height - 120, 15, 400);
    fill(0,0,0);
    makeShape(200, height - 80, 15, 800);
}

function mousePressed() {
    noiseSeed(int(random(200)));
}

function makeShape(max,yOffset, scale, offset) {

    noStroke();
    beginShape();
    for (let i = 1; i <= max; i++) {
        vertex(map(i, 2, max, 0, width), yOffset+(noise((i+offset)/scale)*100));
    }
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