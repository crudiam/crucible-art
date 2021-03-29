



function drawPotion() {

    stroke(256, 256, 256, 80)
    trippleCircles(50, 150, 50, 20, 50, 50, 20);
    // trippleCircles(50, 150, 100, 20, 50, 80, 50);

}





function drawWaterLevel(x, y, h, r) {
    push();

    strokeWeight(0.4);
    ellipse(x, y + h, r, r/7);                                                                                                                                                                                                                   
    
    const inc = 5;                                                                                                                                                                                                                               
    const rx = r / 2;                                                                                                                                                                                                                            
    const ry = r / 7 / 2;                                                                                                                                                                                                                        

    for(let i = 0; i < 180 / inc; i++) {                                                                                                                                                                                                         
        const a1 = i * inc;                                                                                                                                                                                                                        
        const a2 = -(i + 5) * inc;                                                                                                                                                                                                                 
        
        
        const t1 = Math.tan(a1 /360 * Math.PI);                                                                                                                                                                                                    
        const t2 = Math.tan(a2 /360 * Math.PI);                                                                                                                                                                                                    
        
        const p1x = x + (rx * (1 - t1 ** 2) / (1 + t1 ** 2));                                                                                                                                                                                      
        const p1y = y + h + ry * 2 * t1 / (1 + t1 ** 2);                                                                                                                                                                                           
        const p2x = x + (rx * (1 - t2 ** 2) / (1 + t2 ** 2));                                                                                                                                                                                      
        const p2y = (y + h) + (ry * 2 * t2 / (1 + t2 ** 2));                                                                                                                                                                                       
        
        line(p2x, p2y, p1x, p1y);                                                                                                                                                                                                                  
    }                                                                                                                                                                                                                                            


    pop();

}

function drawCork(x, y, r, h) {
    push();
    strokeWeight(0.2);
    const margin = 20;

    const r1 = r * 1.1;
    const r2 = r * 0.9;
    const topY = y - h - margin / 2;
    const botY = y - h + margin / 2;


    ellipse(x, topY, r1, r1/7);
    arc(x, botY, r2, r2/7, 0, PI);
    
    const inc = 5;
    const rx = r / 2;
    const ry = r / 7 / 2;

    for (let i = 0;  i < 180 / inc; i++) {
        const a = i * inc;
        const t = Math.tan(a / 360 * Math.PI);

        const p1x = x + (r1/2 * (1 - t ** 2) / (1 + t ** 2));                                                                                                                                                                                      
        const p1y = topY + r1/7/2 * 2 * t / (1 + t ** 2);                                                                                                                                                                                          
        const p2x = x + (r2/2 * (1 - t ** 2) / (1 + t ** 2));                                                                                                                                                                                      
        const p2y = botY + (r2/7/2 * 2 * t / (1 + t ** 2)); 
        line(p2x, p2y, p1x, p1y);
    }

    pop();
}

function trippleCircles(r1, r2, r3, h1, h2, h3, h4) {

    const x = width / 2;
    const y = 3 * height / 5;
    push();
    strokeWeight(1);
    fill(168, 204, 215, 180)
    stroke(168, 204, 215, 256)

    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = 'black';
    // fill(256, 256, 256, 100);
    // fill(35, 172, 96, 80);
    // fill(139, 0, 139 );


    const bodyHeight = h1 + h2 + h3 + h4;
    const neckHeight = (bodyHeight / 4) + h1;


    beginShape();
    // neck
    curveVertex(x - r1/2, y - neckHeight)
    curveVertex(x - r1/3, y - neckHeight)
    curveVertex(x - r1/3, y)
    // body
    curveVertex(x - r1/2, y + h1)
    curveVertex(x - r2/2, y + h1 + h2)
    curveVertex(x - r3/2, y + h1 + h2 + h3)
    curveVertex(x, y + h1 + h2 + h3 + h4)
    curveVertex(x + r3/2, y + h1 + h2 + h3)
    curveVertex(x + r2/2, y + h1 + h2)
    curveVertex(x + r1/2, y + h1)
    //neck
    curveVertex(x + r1/3, y)
    curveVertex(x + r1/3, y - neckHeight)
    curveVertex(x + r1/2, y - neckHeight)
    endShape();

    pop()

    push();
    // fill(255, 65, 98, 200);
    // fill(255, 40, 77, 200);
    // fill(244, 0, 42, 200);
    // fill(258, 167, 194);
    fill(255, 0, 122);
    stroke(168, 204, 215, 256);

    // fill(35, 172, 96, 80);
    // fill(139, 0, 139 );
    // ellipse(x, y + h, r, r/7);                                                                                                                                                                                                                   
    arc(x, y + h1 + h2, r2, r2/7, PI, 0);

    beginShape();
    curveVertex(x - r1/2, y + h1)
    curveVertex(x - r2/2, y + h1 + h2)
    curveVertex(x - r3/2, y + h1 + h2 + h3)
    curveVertex(x, y + h1 + h2 + h3 + h4)
    curveVertex(x + r3/2, y + h1 + h2 + h3)
    curveVertex(x + r2/2, y + h1 + h2)
    curveVertex(x + r1/2, y + h1)
    endShape();

    
    drawWaterLevel(x, y, h1 + h2, r2);

    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'black';
    fill(168, 204, 215, 256);
    
    stroke(0);
    // stroke(256);
    drawCork(x, y, r1 / 1.5, neckHeight);
    pop();

}