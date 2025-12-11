let rectWidth;
let circWidth;
let r, g, b;
let value;
let rectLength = 50;
let rectHeight = 50;
let circLength = 10;
let circHeight = 10;
let arcLength = 10;
let arcHeight = 10;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch-container'); 
  
  angleMode(DEGREES);

  rectWidth = int(random(200));
  circWidth = int(random(200));
  value = 0;
  
  r = 100; 
  g = 100;
  b = 100;
}

function draw() {
  background(150);


  if (keyIsPressed === true) {
    r = random(255);
    g = random(255);
    b = random(255);
  }

  push();
  //head
  rectMode(CENTER);
  strokeWeight(3);
  stroke(235);
  fill(r, g, b);

  let headWidth = constrain(mouseX + rectLength, 10, width * 2);
  let headHeight = constrain(mouseY + rectHeight, 10, height * 2);
  rect(200, 200, headWidth, headHeight, rectWidth);

  //right eye
  fill(0);
  noStroke();
  let eyeSizeX = constrain(mouseX / 5 + circLength, 5, 50);
  let eyeSizeY = constrain(mouseY / 5 + circHeight, 5, 50);
  ellipse(125, 175, eyeSizeX, eyeSizeY, circWidth);

  //right eye detail
  fill(235);
  let detailSizeX = constrain(mouseX / 20 + circLength, 2, 20);
  let detailSizeY = constrain(mouseY / 20 + circHeight, 2, 20);
  ellipse(140, 190, detailSizeX, detailSizeY, circWidth);

  //left eye
  fill(0);
  ellipse(275, 175, eyeSizeX, eyeSizeY, circWidth);

  //left eye detail
  fill(235);
  ellipse(290, 190, detailSizeX, detailSizeY, circWidth);
  
  //smile
  noFill();
  stroke(255);
  strokeWeight(5);
  let arcSizeX = constrain(mouseX / 3 + arcLength, 10, 150);
  let arcSizeY = constrain(mouseY / 3 + arcHeight, 10, 150);
  arc(200, 250, arcSizeX, arcSizeY, 40, 90, OPEN);
  pop();
}

function keyReleased() {
  r = random(255);
  g = random(255);
  b = random(255);
}

