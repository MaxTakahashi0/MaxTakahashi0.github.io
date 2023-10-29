
let bgcounter = 0;
let counter = 0;
let value = 20;
let bc;
let b;
let b2
let counterG = 0;
let counterR = 0;
let a; 
let s; 

function preload() {
   a = loadFont('assets/cattext.ttf');
   s = loadFont('assets/boring.ttf');
  }

function setup() {

  createCanvas(400, 400);
  counterR = height;
  rectMode(CENTER);
  textFont(a);
  bc = color('#008800');
  b = loadImage("assets/cat1.png");
  b2 = loadImage("assets/cat2.png");
  b3 = loadImage("assets/cat3.png");
  b4 = loadImage("assets/cat4.png");
  frameRate(10);
}
function draw() {

  if ( mouseIsPressed == false )  {
  fill(value, 20, 500);
  rect(200, 200, 500, 500);}
  fill(value+50, 20, 500);
  rect(200, 100, 500, 300);
  noStroke();
  fill(value/2, 20, value/2);
  rect(50, 150, 90, 200);
  fill(value/1.5, 20, value/2);
  ellipse(80, 160, 10, 20);



  image(b, 40, 90, 20,20);
  image(b2, mouseX, mouseY+10, 100,100);
  image(b3, mouseX+105, mouseY, 100,100);
  image(b4, mouseX+195, mouseY+10, 100,100);

  tint(255, 150);
  fill(value, 20, 500, 20);
  rect(200, 200, 500, 500);

  if ( mouseIsPressed == true )  {
    textFont(s);
    textSize((counterR)/30.5);
    textAlign(LEFT);
    fill(200);
    text("Hey fellas, let me in perhaps?", 10, counterR/2-50);
    counterR-=.75;
    if (counterR < -50) {
      counterR = height;
    }
  } else  {
  
    textFont(a);
    textSize((counterG)/3);
    textAlign(CENTER);
    fill(random(200), 255, 0);
    text("LET'S GOOOO!!!!", width/2, counterG);
  
    counterG +=1.5;
      if (counterG > width) {
        counterG = -50;
      }
  
    }

    
} 

function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

function keyPressed() { 

  if ( key == 'r' || key == 'R' ) {  
    if (value == 0) { 
      value = 255;
    } else { 
      value = 0;
    }
  }
}