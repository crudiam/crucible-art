const WIDTH = 729;
const HEIGHT = 729;
let seed;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    seed = initSeed()();
}

function draw() {
    noLoop();
    // background(26, 4, 3)
    loadFont('src/fonts/Everson\ Mono.ttf', init);
}

let _ii = 10;

function renderSymbol(x, y) {
    const symbols = Object.keys(symbolMap);
    const index = _ii;
    _ii += 5;
    const symbol = symbols[index];
    push()
    textAlign(CENTER);
    textSize(30);
    translate(0, 8)
    fill(256)
    text(symbol, x, y);
    pop();
}


function init(font) {
    textFont(font, 36);
    circlesAndStuff()
    // pattern()();
    tree()();
    potion()();
}



function circlesAndStuff() {
    push();
    stroke(256, 256, 256, 260);
    strokeWeight(2);
    noFill();
    
    // center
    stroke(218, 165, 32);
    stroke(89, 68, 13);
    stroke(153, 116, 23);
    ellipse(width/2, height/2, 513, 513);

    fill(0, 13, 26);
    ellipse(width/2, height/2, 480, 480);
    stars();
    noFill();

    // top
    ellipse(width/2, height/11 , 70, 70);
    renderSymbol(width / 2, height / 11);

    // bot
    renderSymbol(width / 2, 10 * height / 11);
    ellipse(width/2, 10 * height/11 , 70, 70);


    // left
    ellipse(width/11, height/2 , 70, 70);
    renderSymbol(width/11, height/2);

    // right
    ellipse(10 * width/11, height/2 , 70, 70);
    renderSymbol(10 * width/11, height/2);



    // ellipse(width/2, 4 * height/8 , 150, 150);
    // ellipse(width/2, 5 * height/8 , 150, 150);
    // ellipse(width/2, 6 * height/8 , 150, 150);
    // ellipse(width/2, 7 * height/8 , 150, 150);


    // ellipse(width/2, 2 * height/8 , 150, 150);

    // ellipse(width/2, height/8 , 150, 150);
    // ellipse(width/2, height/8 , 150, 150);
    // ellipse(width/2, height/8 , 150, 150);

    push()
    translate(width/2, height/2)
    rotate(PI / 4)
    rectMode(CENTER);
    rect(0, 0, 513, 513);
    rotate(PI / 4)
    rect(0, 0, 513, 513);
    pop()
    pop();
}



function stars() {
    push();
    stroke(256)
    fill(256)
    for (let i = 0; i < 200; i++) {
        const x = random(width/2 - 240, width/2 + 240);
        const y = random(height/2 - 240, height/2 + 240);
        if (Math.sqrt(x*x + y*y) < 240) {
            continue;
        }
        ellipse(x, y, 0.1, 0.1)

    }
    pop();
}