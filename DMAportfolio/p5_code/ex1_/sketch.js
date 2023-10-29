function setup() {
  createCanvas (360,360)
  background(0, 500, 200);
 

}

function draw() {

  rect (mouseX-15,mouseY-15,40,40);

    fill(255, random(500), 100);
    stroke(255, 102, 0);

    bezier(0, 180, mouseX, mouseY, mouseX, mouseY, 360, 180);

  for (let i = 0; i < 400; i += 20) {
    for (let i = 0; i < mouseX*2; i += random) {

      tint(255, i);
      
      rect (i-200,mouseX-300,mouseY,random(20));
    
    }
  }
    fill(200,random(500),100)

  for (let i = 0; i < 400; i += 20) {
    for (let i = 0; i < mouseY; i += 100) {

      tint(10, random);
      
      rect (i+mouseX,120,20,);
    
    }
  }
    let a = mouseY;


const from = color(0, 500, 200);
const to = color(72, 20, 50);
colorMode(RGB);
const interA = lerpColor(from, to, 0.40);
const interB = lerpColor(from, to, 0.70); 
const interC = lerpColor(from, to, 0.90);
if (a > 180) {
  fill(interA);
  stroke(120)
} else {
  fill(interB);
  stroke(200)

}
bezier(180, 0, mouseY, random(200*10), mouseY, mouseX, 180, 360);
rect (mouseX-15,mouseY-15,40,40);
    
}

