//song variables
let song;
let fft;

//image variables
let img;
let showImage = false;

//text variable
let showText = true;

//grid variables
let size = 20;
let cols;
let rows;
let inc = 0.1;
//zoff makes it dynamic / change colors over time
let zoff = 0;
let sizes = []; 

function preload() {
  song = loadSound("Projects/project06-pumpkin/1979.mp3");
  img = loadImage("Projects/project06-pumpkin/Snoopy.gif");
}

function setup() {

  let canvas = createCanvas(1000, 800);
  canvas.parent('sketch-container');

  rectMode(CENTER);
  noStroke();
  cols = floor(width / size);
  rows = floor(height / size);
  //fft/fast fourier transform lets you analyze the frequency spectrum of sound - gives frequencies at different resolutions
  fft = new p5.FFT();
}

function draw() {
  background(0, 50);

  // analyze sound
  let spectrum = fft.analyze();
  let bass = fft.getEnergy("bass");
  let mid = fft.getEnergy("mid");

  // color changes depending on the bass
  zoff += map(bass, 0, 255, 0.00005, 0.01);

  //grid
  let xoff = 0;
  for (let i = 0; i < cols; i++) {
    sizes[i] = []; 
    let yoff = 0;

    for (let j = 0; j < rows; j++) {
      let n = noise(xoff, yoff, zoff);

      //mid frequency
      let pulse = map(mid, 0, 255, 0.8, 1.9);
      let s = map(n, 0, 1, size * 0.3, size * pulse);

      //color
      let r = noise(zoff) * 255;
      let g = noise(zoff + 15) * 255;
      let b = noise(zoff + 30) * 255;

      fill(r, g, b, 200);
      rect(size / 2 + i * size, size / 2 + j * size, s, s);

      yoff += inc;
    }
    xoff += inc;
  }

  //image
  if (showImage) {
    imageMode(CENTER);
    image(img, width / 2, height / 2);
  }

  //text
  translate(width / 2, height / 2);
  if (showText) {
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("click anywhere", 0, 0);
  }
}

//song + text animation
function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
    showImage = false;
  } else {
    song.play(); 
    showImage = true;
  }

  showText = false;
}
