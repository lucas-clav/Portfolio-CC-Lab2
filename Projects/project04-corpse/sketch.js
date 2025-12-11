let glassY = 100;
let glassOffset = 0;
let glassDirection = 1;

function setup() {
  // CRITICAL FIX: Define 'canvas' variable to connect to the HTML container
  let canvas = createCanvas(400, 600);
  canvas.parent('sketch-container');
  angleMode(DEGREES);
}

function draw() {
  background(200);

  // Easing (Lerp) logic
  let targetOffset = 4 * glassDirection;
  //lerp function lets you create motion along a straight line by calculating a number btw 2 numbers
  glassOffset = lerp(glassOffset, targetOffset, 0.04);
  if (abs(glassOffset - targetOffset) < 0.1) {
    glassDirection *= -1;
  }

  //sections (commented out per original)
  //stroke("blue");
  //strokeWeight(1);
  //line(0, 200, 400, 200);
  //line(0, 400, 400, 400);

  //head: gato

  //head
  stroke("black");
  noFill();
  strokeWeight(3);
  ellipseMode(CENTER);
  arc(200, 90, 120, 80, 210, 330, OPEN);

  //glasses
  push();
  fill(0);
  noStroke();
  circle(175, glassY + glassOffset, 30);
  circle(225, glassY + glassOffset, 30);
  noFill();
  stroke("black");
  arc(200, glassY + 15 + glassOffset, 40, 40, 210, 330, OPEN);
  stroke("white");
  line(172, glassY - 3 + glassOffset, 178, glassY - 7 + glassOffset);
  line(222, glassY - 3 + glassOffset, 228, glassY - 7 + glassOffset);
  pop();

  //nose
  fill(0);
  noStroke();
  ellipse(200, 130, 20, 10);
  noFill();
  stroke("black");
  arc(185, 135, 30, 40, 0, 90, OPEN);
  arc(215, 135, 30, 40, 90, 180, OPEN);

  //ears
  stroke("black");
  strokeWeight(3);
  line(130, 70, 137, 46);
  line(137, 46, 154, 64);
  line(270, 70, 263, 46);
  line(263, 46, 246, 64);

  //chin
  noFill();
  arc(200, 140, 120, 80, 30, 150, OPEN);

  //whiskers
  noFill();
  stroke("black");
  strokeWeight(3);
  //left whiskers
  arc(165, 130, 100, 25, 180, 220, OPEN);
  arc(165, 145, 110, 25, 180, 200, OPEN);
  arc(165, 160, 100, 25, 180, 220, OPEN);
  //right whiskers
  arc(245, 130, 100, 25, -40, 0, OPEN);
  arc(245, 145, 110, 25, -20, 0, OPEN);
  arc(245, 160, 100, 25, -40, 0, OPEN);

  //neck
  arc(170, 180, 30, 40, 0, 90, OPEN);
  arc(230, 180, 30, 40, 90, 180, OPEN);

  //body: cinnamaroll

  //tail
  strokeWeight(5);
  stroke(152, 221, 255);
  fill(255);
  circle(60, 300, 70);
  //swirl
  stroke(152, 221, 255);
  strokeWeight(5);
  noFill();
  arc(61, 300, 30, 30, 0, 270, OPEN);

  //shoulders
  fill(255);
  ellipse(200, 204, 200, 30);

  //legs: doraemon
  noStroke();
  fill(41, 134, 204);
  arc(200, 390, 120, 80, 30, 150, OPEN);
  rect(200, 400, 120, 40);
  rect(125, 380, 70, 100);
  rect(275, 380, 70, 100);
  arc(125, 465, 105, 150, 200, 340, OPEN);
  arc(275, 465, 105, 150, 200, 340, OPEN);

  //body
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(200, 280, 200, 158);
  fill(255);
  triangle(74, 340, 100, 220, 100, 340);
  triangle(326, 340, 300, 220, 300, 340);
  stroke(152, 221, 255);
  strokeWeight(5);
  fill(255);
  arc(200, 339, 250, 120, 0, 180, OPEN);
  arc(105, 338, 60, 276, 180, 270, OPEN);
  arc(295, 338, 60, 276, 270, 360, OPEN);

  //arms
  stroke(152, 221, 255);
  strokeWeight(5);
  fill(255);
  arc(140, 270, 50, 120, 160, 310, OPEN);
  arc(260, 270, 50, 120, 50, 200, OPEN);

  //legs: doraemon

  //feet
  stroke("black");
  fill(255);
  strokeWeight(2);
  ellipse(125, 450, 100, 30);
  ellipse(275, 450, 100, 30);
}
