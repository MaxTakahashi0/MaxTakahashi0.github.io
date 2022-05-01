
var ballx = 300; // width/2 ?
var bally = 300;
var ballSize = 40;
var score =0;
var img1, img2;
var gameState = "L1";


function preload() {

  img1 = loadImage('https://MaxTakahashi0.github.io/skele1.gif');
    img2 = loadImage('https://MaxTakahashi0.github.io/grave.jpg');
          img4 = loadImage('https://MaxTakahashi0.github.io/confetti.png');
}

function setup() {
  createCanvas(600, 600);
  let c =color(260, 260, 260); //text color
  fill(c);
  textAlign(CENTER);
  textSize(20);
} // end of setup


function draw() {
  
if(gameState == "L1"){
  background(img2);
  levelOne();
}
if(gameState == "L2"){
  background(280,230,160);
  levelTwo();
}
if(gameState == "L3"){
  background(280,230,160);
  background(img1);
  levelThree();
}
if(gameState == "bonus"){
  background(img2);
  background(img4);
  background(img1);
  bonus();
}
  
  text(("Score: " + score), width/2, 40);

} // end of draw

function levelOne(){
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx+69, bally+85, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-150);
    bally = random(height-150);
    score = score +1;
  } // end if
  if (score>=5){
    gameState= "L2";}

  
    
  
  line(ballx+69, bally+85, mouseX, mouseY);
  
//  ellipse(ballx, bally, ballSize, ballSize);

   image(img1, ballx, bally);
  
  
} // end of level 1

  
function levelTwo(){
  text("level 2", width/2, height-20);
  var distToBall = dist(ballx+69, bally+85, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-150);
    bally = random(height-150);
    score = score +1;
  } // end if
  if (score>=10){
    gameState= "L3";}
    
  
//  ellipse(ballx, bally, ballSize, ballSize);

   image(img1, ballx, bally);
   
} //end of level 2

function levelThree(){
  text("level 3", width/2, height-20);
  var distToBall = dist(ballx+69, bally+85, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-150);
    bally = random(height-150);
    score = score +1;
  } // end if
  if (score>=20){
    gameState= "bonus";}

  
//  ellipse(ballx, bally, ballSize, ballSize);

   image(img1, ballx, bally);
   
} //end of level 3

function bonus(){
  text("You Win!!! Bonus Round!", width/2, height-20);
  var distToBall = dist(ballx+69, bally+85, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-150);
    bally = random(height-150);
    score = score +1;}

    image(img1, ballx, bally);
} //end
