var img;
var initials ='mt'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://maxtakahashi0.github.io/kermie.png');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
      
    fill(0, 10, 100);
    stroke(0, 250, 250);
    strokeWeight(10)
    rect(0, 0, mouseX, mouseY);
    
  } else if (toolChoice == '2') { // second tool

    strokeWeight(10)
    stroke(mouseX/2, 0, mouseY/1);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '3') { // third tool

    strokeWeight(25)
    stroke(mouseX, 0, pmouseX,);
    textSize(32);
    fill(250, 250, 250);
    text('WOOOOO!', mouseX, pmouseY);
    
  } else if (toolChoice == '4') {
    strokeWeight(25)
    stroke(random(101), 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { // this tool calls a function
    strokeWeight(5)
    stroke(0, 0, 10);
    fill(90, 10, 200);
    ellipse(mouseX, mouseY, 70, 90)
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {
    strokeWeight(10)
    stroke(188, 126, 77);
    fill(230, 211, 116);
    arc(mouseX, mouseY, 160, 150, 2.64, 3.51);
  } else if (toolChoice == '7') {

    fill(0, 200, 100);
    stroke(250, 250, 250);
    strokeWeight(10)
    rect(mouseX, mouseY, mouseX, mouseY);
  } else if (toolChoice == '8') {

    stroke(250, 250, 250);
    strokeWeight(2);
    fill(0);
    textSize(60);
    text('Happy Birthday!', mouseX, mouseY);
    fill(0, 20);
  } else if (toolChoice == '9') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '0') {
    stroke(0, 0)
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX-50, mouseY-25);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
