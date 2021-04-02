

// const bias = 4; // checkout bias


// const rand2 = () => {
//     return random(2000) / 1000 - 1
// }


// const rrand = () => {
//     return rand2() + -0.3;
// }

// const branch = (start, end, config, seed, gen) => {
//     let branched = false;
//     const direction = p5.Vector.sub(end, start);
//     let generation = gen !== undefined ? gen + 1 : 0;





//     return {
//         draw: () => {
//             push();
//             // stroke(48, 38, 30);
//             stroke(240); //, 256, 256, 230);
//     drawingContext.shadowBlur = 10;
//     drawingContext.shadowColor = 'black';
//             strokeWeight(12 * Math.pow((config.generations - generation) / config.generations, 2));
//             line(start.x, start.y, end.x, end.y);



//             if (
//                 false && 
//                 config.generations / 2 < generation && 
//                 random(0, 1) < config.leaf_probability
//             ) {
//                 push();
//                 // rotate(random(0, 2 * PI))
//                 stroke(43, 79, 1, 256);
//                 fill(92, 169, 4, 256)
//                 const start = random(0, 2 * PI);
//                 arc(end.x, end.y, 20, 6, start, start + PI/2);
//                 pop();
//             }

//             pop();
//         },

//         branchOut: () => {
//             const branches = [];
//             seed.updateRandomSeed();

//             const branchRight = config.split_probability > random(0, 1);
//             const branchLeft = config.split_probability > random(0, 1);

//             /**
//              * @todo: do it for each?
//              */
//             let growthLevel = 0.67; // calculate from config.
//             direction.mult(growthLevel); // varying length

//             /**
//              * @todo: 
//              * add randomness to each branches rotation angle
//              */
//             if (branchRight) {
//                 // const rotation = config.split_angle * (1 + rrand() * config.split_rotation_variation);
//                 const rotation = config.split_angle;
//                 const directionRight = direction.copy().rotate(rotation); // random rotations?
//                 branches.push(branch(end, p5.Vector.add(end, directionRight), config, seed, generation));
//             }

//             if (branchLeft) {
//                 // const rotation = -config.split_angle * (1 - rrand() * config.split_rotation_variation);
//                 const rotation = - config.split_angle;
//                 const directionLeft = direction.copy().rotate(rotation); // random rotations?
//                 branches.push(branch(end, p5.Vector.add(end, directionLeft), config, seed, generation));
//             }

//             branched = true;
//             return branches;
//         },
//         branchedOut: () => branched
//     }
// }


// let length;

// const initializeTree = (seed) => {
//     seed.updateRandomSeed();

//     const config = {
//         size: random(100, 200),
//         generations: 13, // Math.floor(random(4, 13)),
//         split_angle: PI / 8, // random(0, PI/2),
//         length_variation: random(0, 1),
//         split_probability: random(0.8, 1),
//         split_rotation_variation: random(0, 1),
//         flower_probability: random(0, 1), 
//         leaf_probability: random(0, 1), 
//     };

//     let tree = [];

//     const start = createVector(width/2,  5 * height / 6);
//     const end = createVector(width/2,  5 * height / 6 - config.size);
//     length = p5.Vector.sub(end, start);

//     const root = branch(start, end, config, seed);
//     tree.push(root);

//     for (let i = 0; i < config.generations; i++) {
//         tree = tree.reduce((branches, current) => {
//             if (current.branchedOut()) {
//                 return [...branches, current];
//             }


//             return [
//                 ...branches,
//                 current,
//                 ...current.branchOut()
//             ]

//         }, []);
//     }


//     return {
//         draw: () => tree.forEach(branch => branch.draw())
//     }
// }



function tree() {


let size;
let maxLevel;
let rot;
let lenRand;
let branchProb;
let rotRand;
let leafProb;
let flowerProb;

let paramSeed = 0;

	

function initConfig() {
    size = 110;
    maxLevel = 4;
    rot = (PI / 2) / 4;
    lenRand = 1;
    branchProb = 0.923;
    rotRand = 0.1;
    leafProb = 0;
    flowerProb = 0;
}



let growing = false;
let prog;
let randBias = 0;
let randSeed = 0;

function startGrow() {
    growing = true;
    prog = 1;
    grow();
}




function drawTree() {
    push();
	stroke(255, 255, 255);
	translate(width / 2, height);
	translate(0, - height/5 +15);

    const seed = 1234;
	branch(1, seed);
    pop();
}

function branch(level, seed){
	randomSeed(seed);
	
	var seed1 = random(1000),
		seed2 = random(1000);
		
	var growthLevel = 1;
	strokeWeight(12 * Math.pow((maxLevel - level + 1) / maxLevel, 2));

	var len = growthLevel * size* (1 + rand2() * lenRand);
    
	line(0, 0, 0, - (len / level));
	translate(0, - (len / level));
	
	
	var doBranch1 = rand() < branchProb;
	var doBranch2 = rand() < branchProb;
	
	var doLeaves = rand() < leafProb;
	var doFlowers = rand() < flowerProb;
	
	if (level < maxLevel) {
		var r1 = rot * (1 + rrand() * rotRand);
		var r2 = -rot * (1 - rrand() * rotRand);
		
		if ( doBranch1 ) {
			push();
			rotate(r1);
			branch(level + 1, seed1);
			pop();
		}

		if ( doBranch2 ) {
			push();
			rotate(r2);
			branch(level + 1, seed2);
			pop();
		}
	}


    if ((level >= maxLevel - 2 || (!doBranch1 && !doBranch2)) && doLeaves ) {
		var p = Math.min(1, Math.max(0, level));
		
		var leafSize = (size / 100) * p * (1 / 6) * (len / level);

        push();

		strokeWeight(1);
		stroke(97, 138, 61);
        fill(97, 138, 61)
		rotate(-PI);

        arc(0, 0, 20, 20, 0, PI / 2, OPEN);
        pop();



	}  
	
	if ( (level >= maxLevel || (!doBranch1 && !doBranch2)) && doFlowers ) {
		var p = Math.min(1, Math.max(0, level));
		
		var flowerSize = (size / 100) * p * (1 / 6) * (len / level);

		strokeWeight(1);
		stroke(240 + 15 * rand2(), 140 + 15 * rand2(), 140 + 15 * rand2());
		
		rotate(-PI);
		for ( var i=0 ; i<=8 ; i++ )
		{
			line(0, 0, 0, -(flowerSize * (1 + 0.5 * rand2())));
			rotate(2 * PI/8);
		}
	}

 
    

}


function rand()
{
	return random(1000) / 1000;
}

function rand2()
{
	return random(2000) / 1000 - 1;
}

function rrand()
{
	return rand2() + randBias;
}

return () => {
    initConfig();
    drawTree();
}
}