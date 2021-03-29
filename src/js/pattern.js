




const axioms = [
    'FF+FF+FF+FF',
    'F+F+F+F'
]

const rules = [
    {'F': 'F+F-F-F+F'},
    {'F': 'FF+F+F+F+F+F-F'}, // rings

]

const index = 0
const rule = rules[index];
const axiom = axioms[index];
let sentence = axiom;


function turtle() {

    push();

    const len = 0.5;
    const theta = PI/2;

    for (let i = 0; i < sentence.length; i++) {
        const command = sentence[i];

        if (command === 'F') {
            line(0, 0, len, 0);
            translate(len, 0);
        }

        if (command === '+') {
            rotate(theta);
        }

        if (command === '-') {
            rotate(-theta);
        }
    }
    pop();

}

function applyRule(char) {
    if (char === 'F') {
        return rule.F;
    }

    return char;
}

function generateShape() {
    const iterations = 6;

    for (let i = 0; i < iterations; i++) {
        let newSetence = '';

        for(let j = 0; j < sentence.length; j++) {
            newSetence += applyRule(sentence[j]);
        }
        sentence = newSetence;
    }


}


function drawPattern() {
    push()
    stroke(256, 256, 256, 60);
    generateShape();
    turtle();
    pop()

}