let cat = "😸";
let trail = [];
let prevX, prevY;

function setup() {
  // Use a variable to hold the canvas element
  let canvas = createCanvas(windowWidth, windowHeight);
  
  // Assign an ID for CSS targeting to make it a full-screen overlay
  canvas.id('cursor-overlay'); 
  
  // Set the canvas background to be transparent initially
  clear(); 

  textSize(32);
  noCursor(); // Hides the default browser cursor
  prevX = mouseX;
  prevY = mouseY;
}

function draw() {
  // Clear the canvas on every frame. This MUST be clear() 
  // to remove the old trail and allow the HTML content below to show through.
  clear(); 
  
  // Only add a new position to the trail if the mouse has moved
  if (mouseX !== prevX || mouseY !== prevY) {
    trail.push({
      x: mouseX,
      y: mouseY,
      alpha: 255
    });
  }

  prevX = mouseX;
  prevY = mouseY;

  // Draw and fade the trail
  for (let i = trail.length - 1; i >= 0; i--) {
    let t = trail[i];
    
    // Use fill with transparency (alpha) to create the fade effect
    fill(0, 0, 0, t.alpha); 
    text(cat, t.x, t.y);
    
    // Reduce the alpha (fading out)
    t.alpha -= 4; 

    // Remove the trail point if it's completely transparent
    if (t.alpha <= 0) {
      trail.splice(i, 1);
    }
  }

  // Draw the current cat cursor (the one that always stays solid)
  fill(0);
  text(cat, mouseX, mouseY);
}

function windowResized() {
  // Ensures the canvas always covers the full window size
  resizeCanvas(windowWidth, windowHeight);
}