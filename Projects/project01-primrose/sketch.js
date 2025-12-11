function setup() {
  let canvas = createCanvas(400, 400); 
  canvas.parent('sketch-container');
  angleMode(DEGREES); 
}

function draw() {
  background(197, 238, 255);

  //sky
  rectMode(CENTER);
  fill(140, 209, 238);
  rect(50, 50, 800, 220);
  fill(35, 160, 213);
  rect(0, 0, 800, 100);
  
  //sun
  push();
  translate(200, 200); 
  let angle = frameCount * 0.5; 
  rotate(angle);
  fill(255, 235, 83);
  noStroke();
  circle(0, -200, 40); 
  pop(); 
  
  fill(103, 124, 133);
  rect(50, 250, 50, 200);

  fill(175, 192, 199);
  rect(40, 250, 30, 125);

  fill(137, 162, 172);
  ellipse(100, 250, 50, 150);

  fill(157, 189, 203);
  ellipse(100, 260, 40, 150);

  fill(125, 164, 181);
  ellipse(100, 270, 30, 150);

  fill(103, 124, 133);
  beginShape();
  vertex(140, 180);
  vertex(170, 180);
  vertex(190, 320);
  vertex(120, 320);
  endShape(CLOSE);

  fill(157, 189, 203);
  beginShape();
  vertex(140, 210);
  vertex(170, 210);
  vertex(190, 350);
  vertex(120, 350);
  endShape(CLOSE);

  fill(125, 164, 181);
  triangle(200, 250, 200, 100, 230, 250);

  fill(103, 124, 133);
  triangle(175, 250, 200, 100, 200, 250);

  fill(137, 162, 172);
  rect(275, 250, 100, 100);

  fill(175, 192, 199);
  rect(300, 250, 50, 125);

  fill(103, 124, 133);
  rect(325, 250, 50, 50);

  fill(125, 164, 181);
  rect(350, 250, 30, 100);

  // =============================
  // 3. GROUND AND TREES (Drawn last, appearing in front of everything)
  // =============================
  
  //ground
  rectMode(CENTER);
  fill(1, 50, 32);
  rect(200, 400, 400, 300, 15);

  ellipseMode(CENTER);
  noStroke();
  fill(63, 117, 46);
  ellipse(200, 400, 500, 300);

  fill(109, 165, 90);
  ellipse(200, 425, 500, 300);

  //first tree
  fill(76, 43, 32);
  rect(300, 330, 8, 50);
  fill(0, 128, 0);
  circle(300, 305, 30);
  fill(24, 176, 24);
  circle(310, 300, 10);
  fill(83, 149, 83);
  circle(290, 310, 10);

  //right trees
  fill(76, 43, 32);
  rect(250, 250, 8, 50);
  fill(0, 128, 0);
  circle(250, 220, 30);
  fill(24, 176, 24);
  circle(255, 225, 10);
  fill(83, 149, 83);
  circle(240, 220, 10);

  fill(76, 43, 32);
  rect(300, 250, 8, 50);
  fill(0, 128, 0);
  circle(300, 220, 30);
  fill(24, 176, 24);
  circle(305, 225, 10);
  fill(83, 149, 83);
  circle(290, 220, 10);

  fill(76, 43, 32);
  rect(350, 250, 8, 50);
  fill(0, 128, 0);
  circle(350, 220, 30);
  fill(24, 176, 24);
  circle(355, 225, 10);
  fill(83, 149, 83);
  circle(340, 220, 10);

  //left trees
  fill(76, 43, 32);
  rect(200, 240, 8, 30);
  fill(0, 128, 0);
  circle(200, 215, 30);
  fill(24, 176, 24);
  circle(200, 215, 10);
  fill(83, 149, 83);
  circle(210, 215, 10);

  fill(76, 43, 32);
  rect(100, 240, 8, 30);
  fill(0, 128, 0);
  circle(100, 215, 30);
  fill(24, 176, 24);
  circle(100, 215, 10);
  fill(83, 149, 83);
  circle(110, 215, 10);

  fill(76, 43, 32);
  rect(50, 240, 8, 30);
  fill(0, 128, 0);
  circle(50, 215, 30);
  fill(24, 176, 24);
  circle(50, 215, 10);
  fill(83, 149, 83);
  circle(60, 215, 10);

  fill(76, 43, 32);
  rect(150, 240, 8, 30);
  fill(0, 128, 0);
  circle(150, 215, 30);
  fill(24, 176, 24);
  circle(150, 215, 10);
  fill(83, 149, 83);
  circle(160, 215, 10);

  //path
  push();
  fill(188, 158, 130);
  translate(125, 400); 
  rect(0, 0, 150, 20, 30);

  fill(188, 158, 130);
  rotate(30); 
  rect(20, 65, 100, 20, 30);

  pop();
}
