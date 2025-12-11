let r = 200; // Ball size
let angle = 0;
// Original fixed coordinates for translation
let x = 300; 
let y = 600; 
let ball;
let song;
let hasPlayed = false;

// Center of the stadium (Using 450 to match original stadium position)
let stadiumCenterX = 450;
let stadiumCenterY = 450; 

function preload() {
  // CRITICAL FIX: Use correct relative paths and file names
  ball = loadImage("Projects/project03-goal/soccer_ball.png"); 
  song = loadSound("Projects/project03-goal/Champions_League_Anthem.mp3");
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('sketch-container'); // CRITICAL FIX: Attaches canvas
  angleMode(DEGREES);
  frameRate(60);
}

function draw() {
  background(146, 199, 246);

  //ground
  push();
  noStroke();
  rectMode(CORNER); 
  fill(21, 54, 27);
  rect(0, 500, width, height - 500); 
  pop();

  // ==================================
  // STADIUM (Using 450 for center, per original code)
  // ==================================
  
  // stadium base structure
  rectMode(CENTER);
  strokeWeight(2);
  fill(122, 138, 157);
  rect(stadiumCenterX, 485, 250, 72);
  fill(178, 195, 216);
  ellipse(stadiumCenterX, 450, 250, 100); 
  fill(122, 138, 157);
  arc(stadiumCenterX, 520, 250, 100, 0, 180, OPEN);
  rect(stadiumCenterX, 545, 30, 50);

  //stadium windows 
  strokeWeight(5);
  stroke("black");
  
  // Window light logic
  if (angle >= 239 && angle <= 330) {
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
  arc(stadiumCenterX, 534, 300, 200, 210, 330, OPEN);
  arc(stadiumCenterX, 530, 200, 100, 210, 330, OPEN);
  
  // stadium lights (Poles and Logic)
  // FIX: Connection to the stadium roof at y=400 (per the ellipse)
  line(350, 400, 350, 420); // Left Pole
  fill(0); 
  line(550, 400, 550, 420); // Right Pole

  if (angle >= 239 && angle <= 330) {
    fill(255, 255, 0); 
    if (!hasPlayed) {
      if(!song.isPlaying()) { 
        song.play();
      }
      hasPlayed = true;
    }
  } else {
    if(song.isPlaying()) { 
      song.stop();
    }
    hasPlayed = false;
  }

  circle(350, 390, 20); 
  circle(550, 390, 20); 

  // ==================================
  // BALL (Original, flawed rotation logic is preserved here)
  // ==================================
  
  // Original logic: Translate to fixed (300, 600) -> Off-canvas
  push();
  translate(x, y); 
  rotate(angle);
  imageMode(CENTER);
  // Original logic: Draw image at fixed (300, 200, r, r) relative to the translated origin
  image(ball, 300, 200, r, r); 
  pop();

  // Angle increment and reset
  angle = angle + 0.4;
  if (angle > 360) {
    angle = angle - 360; 
  }
}
