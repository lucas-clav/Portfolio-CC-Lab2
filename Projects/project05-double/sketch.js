let img1;

function preload() {
img1 = loadImage("Projects/project05-double/rcat.png");
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('sketch-container');
}

function draw() {
  background(200);

  let offset = sin(frameCount * 0.005) * 600;

  //yellow lines
  for (let j = 0; j < 1000; j += 8) {
    stroke("yellow");
    strokeWeight(3);
    line(j, 0 + offset, j, height + offset); 
  }

  //cat 1
  imageMode(CENTER);
  image(img1, 150, 300, 300, 300);


  //blue lines
  for (let i = 4; i < 1000; i += 8) {
    stroke("blue");
    strokeWeight(3);
    line(i, 0 + offset, i, height + offset);
  }

  //cat 2 
  imageMode(CENTER);
  image(img1, 450, 300, 300, 300);
}
