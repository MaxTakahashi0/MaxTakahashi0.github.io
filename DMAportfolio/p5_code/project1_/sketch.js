
let currentkey = '1';
let bgc ;
let gkcount;

function setup() {
    createCanvas(900, 700);
    background(0,40,40);
    smooth();
    bgc = color(255);
    gkcount = 20;
    b = loadImage("assets/uzumaki.png");
}


function draw() {
    // triggering the clear_print function
    
    if( keyIsPressed) {
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
}

   rect(0,0,20,20); // 4 arg


  //  function rect(lx,ly,w,h) {

   


  //   // magial rectangle

  //  }




      // wrapper function ( no parameters or arguments )
function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function
  // key global variable contains whatever key was last pressed
  let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1"); 
  let k = color(200);
  fill(25)
  mtWave(color(250, random(100), 20), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2"); 
  fill(150, 270, 250)
  mtWave2(color(250), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // green line
  mtCool(color(0,70,20), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");  // fat teal line
  mtJam(color(0,70,20), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("5");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;
case '6':
    console.log("6");  // erase with bg color
    mtJam(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 50 ) {

        gkcount = 1;
    } else {
        gkcount+= .5;
    }
   break;
case '7':
    console.log("7");  // erase with bg color
    mtJam2(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 50 ) {

        gkcount = 1;
    } else {
        gkcount+= .5;
    }
   break;   
 case '8':
    console.log("8");  // erase with bg color
    mtSkibbidy(gkcount, mouseX-200, mouseY-200, pmouseX, pmouseY);
    break;

 case '9':
  console.log("9");  // erase with bg color
  eraser(color(0),mouseX, mouseY,15);
  break;
  }

}

function mtWave( k,  lx, ly,  px, py) {
  
  strokeWeight(5);
  stroke(k);
  line(lx, ly, px, py);
  triangle(lx, ly, px, py, 50, 200);
  console.log(mouseX);
  console.log(pmouseX);
}

function mtWave2( k,  lx, ly,  px, py) {
  
  strokeWeight(5);
  stroke(k);
  line(lx, ly, px, py);
  triangle(lx, ly, px, py, 900-50, 200);
  console.log(mouseX);
  console.log(pmouseX);
}

function mtCool( k,  lx, ly,  px, py) {
  strokeWeight(random(10,15));
  fill(299);
  stroke(random(0,15));
  circle(lx, ly, py/2, px/2);
}


function mtJam(kcount, lx, ly,  px, py) {

  strokeWeight(kcount);
  stroke(0,kcount*3,kcount*200);
  circle(lx/2, ly/2, px*2, py/2);
}

function mtJam2(kcount, lx, ly,  px, py) {

  strokeWeight(kcount);
  stroke(kcount*200,kcount*30,kcount*10);
  for (let i = 0; i < mouseX; i += random) {
    for (let i = 0; i < mouseX; i += 30) {

    tint(255, random);
    
    rect (i-200,mouseY-300,mouseX,random(20));
  
}}
}

function mtSkibbidy( k, lx, ly, sz) {

  image(b, lx, ly, sz,sz);
}

function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(0,40,40);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

} 