let r = 200;
let angle = 0;
let x = 300;
let y = 600;
let ball;
let song;
let hasPlayed = false;

function preload() {
  ball = loadImage("soccer ball.png");
  song = loadSound("UEFA Champions League Anthem-trimmed.mp3");
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  frameRate(60);
}

function draw() {
  background(146, 199, 246);

  //ground
  push();
  noStroke();
  rectMode(CENTER);
  fill(21, 54, 27);
  rect(0, 600, 1200, 200);
  pop();

  //stadium
  rectMode(CENTER);
  strokeWeight(2);
  fill(122, 138, 157);
  rect(450, 485, 250, 72);
  fill(178, 195, 216);
  ellipse(450, 450, 250, 100);
  fill(122, 138, 157);
  arc(450, 520, 250, 100, 0, 180, OPEN);
  rect(450, 545, 30, 50);
  //stadium windows
  strokeWeight(5);
  stroke("black");
  if (angle >= 239 && angle <= 290) {
    stroke("yellow");
  }
  line(400, 510, 400, 550);
  line(500, 510, 500, 550);
  line(350, 490, 350, 530);
  line(550, 490, 550, 530);
  //stadium flags
  stroke("black");
  strokeWeight(2);
  fill(255, 0, 0);
  line(400, 380, 400, 403);
  triangle(400, 360, 400, 380, 430, 370);
  fill(0, 0, 255);
  line(500, 380, 500, 403);
  triangle(500, 360, 500, 380, 530, 370);
  //stadium details
  stroke("black");
  line(400, 403, 430, 499);
  line(500, 403, 470, 499);
  line(350, 420, 370, 488);
  line(550, 420, 530, 488);
  noFill();
  arc(450, 534, 300, 200, 210, 330, OPEN);
  arc(450, 530, 200, 100, 210, 330, OPEN);
  // stadium lights
  line(350, 400, 350, 420);
  fill(0);

  if (angle >= 239 && angle <= 290) {
    fill(255, 255, 0);

    if (!hasPlayed) {
      song.play();
      hasPlayed = true;
    }
  } else {
    song.stop();
    hasPlayed = false;
  }

  circle(350, 390, 20);
  line(550, 400, 550, 420);
  circle(550, 390, 20);

  //ball
  push();
  translate(x, y);
  rotate(angle);
  imageMode(CENTER);
  image(ball, 300, 200, r, r);
  pop();

  angle = angle + 0.4;

  console.log("angle is " + angle);
}
