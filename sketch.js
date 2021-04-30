let bg;
let SS_Duck = [];
let potato, mouth;


function preload() {
    bg = loadImage('assets/background.jpeg');
    for (let i = 0; i < 19; i++) {
        SS_Duck[i] = loadImage('assets/duck_sheet/tile0'+i+'.png');
    }

}

function setup() {
    createCanvas(displayWidth, displayHeight);
    background(220);
    image(bg, 0, 0, displayWidth, displayHeight);
    imageMode(CENTER);
    textSize(32);
    fill(255);
}

let index = 4;
let time = 0;
let xduck = 0;
let off = 0.0;
function draw() {
    time += deltaTime
    image(bg, displayWidth/2, displayHeight/2, displayWidth, displayHeight);
    //off = off + 0.05;

    xduck = xduck + 1  * (deltaTime / 50);
    //print(displayHeight)
    if(xduck > width) {
        xduck = 0;
    }
    image(SS_Duck[index],xduck,windowHeight-(SS_Duck[index].height/2-10));
    if(time > 200) {
        time = 0;
        if (++index > 7) {
            index = 4;
        }
    }
    text("Sorry this website is currently down for server relocation", 50, 50)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}