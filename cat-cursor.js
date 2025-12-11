let cat = "😼";
let trail = [];
let prevX, prevY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  noCursor();
  prevX = mouseX;
  prevY = mouseY;
}

function draw() {
  background(220, 220, 220, 0); 
  
  if (mouseX !== prevX || mouseY !== prevY) {
    trail.push({
      x: mouseX,
      y: mouseY,
      alpha: 255
    });
  }

  prevX = mouseX;
  prevY = mouseY;

  //draw and fade the trail
  for (let i = trail.length - 1; i >= 0; i--) {
    let t = trail[i];
    fill(0, 0, 0, t.alpha);
    text(cat, t.x, t.y);
    
    // This reduces the alpha (makes it more transparent) over time
    t.alpha -= 4; 

    if (t.alpha <= 0) {
      trail.splice(i, 1);
    }
  }

  // Draw the current cat cursor (the one that doesn't fade)
  fill(0);
  text(cat, mouseX, mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}