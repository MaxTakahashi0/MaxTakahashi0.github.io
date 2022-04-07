function setup() {
createCanvas(600, 600);
}
function draw() {
background(51, 0, 13);

beginShape(); //hair back
strokeWeight(300);
stroke(253, 241, 235);
fill(162, 107, 62);
vertex(200, 0);
vertex(100, 100);
vertex(90, 240);
vertex(230, 540);
vertex(235, 500);
vertex(150, 300);
vertex(240, 500);
vertex(260, 480);
vertex(240, 420);
vertex(270, 480);
vertex(500, 450);
vertex(600, 0);
endShape(CLOSE);

beginShape(); //hair back
strokeWeight(270);
stroke(51, 0, 13);
fill(162, 107, 62);
vertex(200, 0);
vertex(100, 100);
vertex(90, 240);
vertex(230, 540);
vertex(235, 500);
vertex(150, 300);
vertex(240, 500);
vertex(260, 480);
vertex(240, 420);
vertex(270, 480);
vertex(500, 450);
vertex(600, 0);
endShape(CLOSE);
  
beginShape(); //hair back
strokeWeight(170);
stroke(253, 241, 235);
fill(162, 107, 62);
vertex(200, 0);
vertex(100, 100);
vertex(90, 240);
vertex(230, 540);
vertex(235, 500);
vertex(150, 300);
vertex(240, 500);
vertex(260, 480);
vertex(240, 420);
vertex(270, 480);
vertex(500, 450);
vertex(600, 0);
endShape(CLOSE);

beginShape(); //hair back
strokeWeight(150);
stroke(51, 0, 13);
fill(162, 107, 62);
vertex(200, 0);
vertex(100, 100);
vertex(90, 240);
vertex(230, 540);
vertex(235, 500);
vertex(150, 300);
vertex(240, 500);
vertex(260, 480);
vertex(240, 420);
vertex(270, 480);
vertex(500, 450);
vertex(600, 0);
endShape(CLOSE);

beginShape(); //hair back
strokeWeight(80);
stroke(51, 0, 13);
fill(162, 107, 62);
vertex(200, 0);
vertex(100, 100);
vertex(90, 240);
vertex(230, 540);
vertex(235, 500);
vertex(150, 300);
vertex(240, 500);
vertex(260, 480);
vertex(240, 420);
vertex(270, 480);
vertex(500, 450);
vertex(600, 0);
endShape(CLOSE);

beginShape(); //hair back
strokeWeight(50);
stroke(253, 241, 235);
fill(162, 107, 62);
vertex(200, 0);
vertex(100, 100);
vertex(90, 240);
vertex(230, 540);
vertex(235, 500);
vertex(150, 300);
vertex(240, 500);
vertex(260, 480);
vertex(240, 420);
vertex(270, 480);
vertex(500, 450);
vertex(600, 0);
endShape(CLOSE);

beginShape(); //hair back
strokeWeight(40);
stroke(51, 0, 13);
fill(162, 107, 62);
vertex(200, 0);
vertex(100, 100);
vertex(90, 240);
vertex(230, 540);
vertex(235, 500);
vertex(150, 300);
vertex(240, 500);
vertex(260, 480);
vertex(240, 420);
vertex(270, 480);
vertex(500, 450);
vertex(600, 0);
endShape(CLOSE);

beginShape(); //hair back
strokeWeight(4);
stroke(122, 82, 50);
fill(162, 107, 62);
vertex(200, 0);
vertex(100, 100);
vertex(90, 240);
vertex(230, 540);
vertex(235, 500);
vertex(150, 300);
vertex(240, 500);
vertex(260, 480);
vertex(240, 420);
vertex(270, 480);
vertex(500, 450);
vertex(600, 0);
endShape(CLOSE);

//beginShape(); //hair back shading
//fill(95, 64, 45);
//vertex(200, 0);
//vertex(100, 100);
//vertex(600, 0);
//endShape(CLOSE);

fill(243, 211, 170);
strokeWeight(4);
stroke(122, 82, 50);
beginShape(); //neck
vertex(410, 520);
vertex(440, 560);
vertex(460, 600);
vertex(600, 600);
vertex(600, 0);

endShape(CLOSE);

fill(241, 221, 196);
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

beginShape(); //sclera
noStroke(); 
fill(250, 250, 250);
arc(380, 260, 160, 150, 2.64, 3.51);
endShape(CLOSE);

beginShape(); //iris
fill(0, 160, 170);
ellipse(310, 265, 20, 60);
endShape(CLOSE);

beginShape(); //pupil
fill(0, 0, 0);
ellipse(312, 265, 10, 30);
endShape(CLOSE);

beginShape(); //shine
fill(250, 250, 250);
ellipse(327, 255, 30, 10);
endShape(CLOSE);

beginShape(); //shine
fill(250, 250, 250);
ellipse(317, 265, 3, 3);
endShape(CLOSE);

beginShape(); //lash
strokeWeight(4);
fill(0, 0, 0);
vertex(300, 240);
vertex(290, 224);
vertex(379, 260);
endShape();

beginShape(); //brow
fill(88, 68, 52);
vertex(290, 220);
vertex(280, 204);
vertex(349, 170);
vertex(349, 170);
vertex(369, 180);
endShape(CLOSE);

beginShape(); //
fill(0, 0, 0);
vertex(300, 443);
vertex(365, 426);
vertex(360, 429);
endShape(CLOSE);

beginShape(); //hair front
strokeWeight(4);
stroke(122, 82, 50);
fill(182, 124, 79);
vertex(250, -30);
vertex(200, 30);
vertex(440, 320);
vertex(465, 290);
vertex(480, 240);
vertex(540, 220);
vertex(580, 280);
vertex(520, 370);
vertex(490, 360);
vertex(470, 540);
vertex(495, 450);
vertex(486, 530);
vertex(520, 500);
vertex(500, 530);
vertex(600, 460);
vertex(600, 0);
endShape(CLOSE);

}
