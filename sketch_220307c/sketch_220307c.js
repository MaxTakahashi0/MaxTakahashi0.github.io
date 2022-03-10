function setup() {
createCanvas(600, 600);
}
function draw() {
background(204);

fill(243, 211, 170);
noStroke(); 
beginShape(); //neck
vertex(410, 520);
vertex(440, 560);
vertex(460, 600);
vertex(600, 600);
vertex(600, 0);

endShape(CLOSE);

fill(241, 221, 196);
noStroke(); 
beginShape(); //face
vertex(350, -10);
vertex(300, 50);
vertex(280, 100);
vertex(260, 170);
vertex(270, 290);
vertex(220, 380); //nose
vertex(235, 393); //nose
vertex(270, 399);
vertex(280, 410);
vertex(270, 432);
vertex(290, 445);
vertex(280, 465);
vertex(300, 480);
vertex(320, 525);
vertex(350, 550);
vertex(400, 550);
vertex(520, 510);
vertex(600, 400);
vertex(600, 0);
endShape(CLOSE);

beginShape();
fill(250, 250, 250);
arc(380, 260, 160, 150, 2.64, 3.51);
endShape(CLOSE);

beginShape();
fill(0, 160, 170);
ellipse(310, 265, 20, 60);
endShape(CLOSE);

beginShape();
fill(0, 0, 0);
ellipse(310, 265, 10, 30);
endShape(CLOSE);
}
