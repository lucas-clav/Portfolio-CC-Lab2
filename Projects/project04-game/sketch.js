//—————SWITCH STATEMENT VARIABLE—————
let scene = "alarm";

//—————01: ALARM—————
let alarmSound;
let alarmFont;
let alarmTextFontBox1;
let alarmStartTime;
let alarmState = "initial";
let alarmIntroText = "I need to start on the new menu.";
let alarmTypedText = "";
let alarmTypingIndex = 0;
let alarmShowTypedText = false;
let alarmDots = "";
let alarmDotCount = 0;
let alarmMaxDots = 3;
let alarmDotsDone = false;
let alarmLastDotTime = 0;
let alarmLastTypingTime = 0;
let alarmTypingSpeed = 40;
let alarmDotSpeed = 400;

//—————02: ROOM—————
let roomImgs = [];
let roomFloor;
let roomPainting;
let roomX, roomY;
let roomFrameCounter = 0;
let roomCurrentFrame = 0;
let roomFrameSpeed = 8;
let roomCharWidth = 50;
let roomCharHeight = 50;
let roomDimensionsSet = false;
let roomFadeAlpha = 255;
let roomFadeState = "fadeIn";
let roomFadeStartTime;
let roomSceneStartTime;

//—————03: SARDINES—————
let particles = [];
let sardineAmount = 50;
let waveOffset = 0;
let netImg;
let boatImg;
let scene1showNet = false;
let scene1sardinesCaught = 0;
let scene1netVisible = true;
let scene1FadeAlpha = 0;
let scene1Fading = false;
let scene1Text1 = "This looks like a good spot.";
let scene1Text2 = "Time to cook!";
let scene1typedText1 = "";
let scene1typedText2 = "";
let scene1typingIndex1 = 0;
let scene1typingIndex2 = 0;
let scene1typingSpeed = 40;
let scene1showText1 = true;
let scene1showText2 = false;
let scene1lastTypingTime = 0;
let scene1Font;
let waveY = 150;
let waveLength = 75;
let waveAmplitude = 25;

//—————04: COOKING 1—————
let cooking1SteImg;
let cooking1Sound;
let cooking1SarImg;
let cooking1Font;
let cooking1SoundPlaying = false;
let cooking1SoundStartTime = 0;
let cooking1ShowText = true;
let cooking1Text1 = "...";
let cooking1Text2 = "Voila! Grilled sardines.";
let cooking1Text3 = "Time to start on the next dish.";
let cooking1CurrentText = "";
let cooking1TypedText = "";
let cooking1TypingIndex = 0;
let cooking1TypingSpeed = 40;
let cooking1ShowTextBox = false;
let cooking1LastTypingTime = 0;
let cooking1TextStage = 0;
let cooking1TextDone = false;
let cooking1FadeAlpha = 0;
let cooking1FadeState = "idle";
let cooking1ShowSardines = false;
let cooking1ShowSteam = true;

//—————05: KITCHEN 1—————
let kitchen1floor;
let kitchen1img;
let kitchen1imgs = [];
let kitchen1dimensionsSet = false;
let kitchen1frameCounter = 0;
let kitchen1currentFrame = 0;
let xkitchen1, ykitchen1;
let kitchen1charWidth = 50;
let kitchen1charHeight = 50;
let kitchen1frameSpeed = 8;
let kitchen1textFont;
let kitchen1Text = "I should go into the city for fresh produce.";
let kitchen1typedText = "";
let kitchen1typingIndex = 0;
let kitchen1typingSpeed = 40;
let kitchen1showText = true;
let kitchen1lastTypingTime = 0;
let kitchen1signText = "EVERY SECOND COUNTS";
let kitchen1signFont;
let kitchen1clockFont;
let kitchen1clockText = "9:00AM";
let fadeK1alpha = 255;
let fadeK1state = "fadeIn";
let fadeK1startTime;
let sceneK1startTime;

//—————06: UNION SQUARE—————
let unImg;
let coImg;
let toImg;
let ceImg;
let poImg;
let poCollected = false;
let toCollected = false;
let ceCollected = false;
let coCollected = false;
let scene2Text1 = "Let's see what the market has today.";
let scene2typedText1 = "";
let scene2typingIndex1 = 0;
let scene2Text2 = "Great! I'm ready to make the second course.";
let scene2typedText2 = "";
let scene2typingIndex2 = 0;
let scene2typingSpeed = 40;
let scene2showText = true;
let scene2showText2 = false;
let scene2lastTypingTime = 0;
let scene2Font;
let moneyImg;
let produceOffset;
let scene2FadeAlpha = 0;
let scene2FadeStarted = false;
let scene2FadeInState = "fadeIn";
let scene2FadeInAlpha = 255;
let scene2FadeInStartTime = 0;

//—————07: COOKING 2—————
let cooking2SteImg;
let cooking2Sound;
let cooking2FigImg;
let cooking2ContinueFont;
let cooking2SoundPlaying = false;
let cooking2SoundStartTime = 0;
let cooking2ShowText = true;
let cooking2Text1 = "...";
let cooking2Text2 = "Golden! I'll serve these with a side of aji.";
let cooking2Text3 = "Now I just need the dessert and I'm done.";
let cooking2CurrentText = "";
let cooking2TypedText = "";
let cooking2TypingIndex = 0;
let cooking2TypingSpeed = 40;
let cooking2ShowTextBox = false;
let cooking2LastTypingTime = 0;
let cooking2TextStage = 0;
let cooking2TextDone = false;
let cooking2FadeAlpha = 0;
let cooking2FadeState = "idle";
let cooking2ShowDish = false;
let cooking2ShowSteam = true;

//—————08: KITCHEN 2—————
let kitchen2floor;
let kitchen2img;
let kitchen2imgs = [];
let kitchen2dimensionsSet = false;
let kitchen2frameCounter = 0;
let kitchen2currentFrame = 0;
let xkitchen2, ykitchen2;
let kitchen2charWidth = 50;
let kitchen2charHeight = 50;
let kitchen2frameSpeed = 8;
let kitchen2textFont;
let kitchen2Text = "I'll go check what's in the garden.";
let kitchen2typedText = "";
let kitchen2typingIndex = 0;
let kitchen2typingSpeed = 40;
let kitchen2showText = true;
let kitchen2lastTypingTime = 0;
let kitchen2signText = "EVERY SECOND COUNTS";
let kitchen2signFont;
let kitchen2clockFont;
let kitchen2clockText = "12:00PM";
let fadeK2alpha = 255;
let fadeK2state = "fadeIn";
let fadeK2startTime;
let sceneK2startTime;

//—————09: FIGS—————
let treeImg;
let figImg;
let figs = [];
let figAmount = 50;
let scene3Text1 = "Let's see what the fig tree has today.";
let scene3Text2 = "Great! That's more than enough for a tart.";
let scene3typedText1 = "";
let scene3typedText2 = "";
let scene3typingIndex1 = 0;
let scene3typingIndex2 = 0;
let scene3typingSpeed = 40;
let scene3showText1 = true;
let scene3showText2 = false;
let scene3lastTypingTime = 0;
let scene3Font;
let baskImg;
let scene3showBasket = false;
let scene3FadeAlpha = 0;
let scene3FadeStarted = false;

//—————10: COOKING 3—————
let cooking3SteImg;
let cooking3Sound;
let cooking3figImg;
let cooking3Font;
let cooking3SoundPlaying = false;
let cooking3SoundStartTime = 0;
let cooking3ShowText = true;
let cooking3Text1 = "...";
let cooking3Text2 = "A buttery fig tart!";
let cooking3Text3 = "With that, the menu is complete.";
let cooking3CurrentText = "";
let cooking3TypedText = "";
let cooking3TypingIndex = 0;
let cooking3TypingSpeed = 40;
let cooking3ShowTextBox = false;
let cooking3LastTypingTime = 0;
let cooking3TextStage = 0;
let cooking3TextDone = false;
let cooking3FadeAlpha = 0;
let cooking3FadeState = "idle";
let cooking3ShowFig = false;
let cooking3ShowSteam = true;

//—————11: KITCHEN 3—————
let kitchen3floor;
let kitchen3img;
let kitchen3imgs = [];
let kitchen3dimensionsSet = false;
let kitchen3frameCounter = 0;
let kitchen3currentFrame = 0;
let xkitchen3, ykitchen3;
let kitchen3charWidth = 50;
let kitchen3charHeight = 50;
let kitchen3frameSpeed = 8;
let kitchen3textFont;
let kitchen3Text1 = "Three courses, each with distinct flavors.";
let kitchen3Text2 = "The empanadas will take the longest time...";
let kitchen3Text3 = "I should prep the tart now so it's ready for service.";
let kitchen3Text4 = "All that's left is to try everything.";
let kitchen3CurrentText = "";
let kitchen3TypedText = "";
let kitchen3TypingIndex = 0;
let kitchen3TypingSpeed = 40;
let kitchen3ShowText = true;
let kitchen3LastTypingTime = 0;
let kitchen3TextStage = 1;
let kitchen3TextDone = false;
let kitchen3signText = "EVERY SECOND COUNTS";
let kitchen3signFont;
let kitchen3clockFont;
let kitchen3clockText = "12:30PM";
let fadeK3alpha = 255;
let fadeK3state = "fadeIn";
let fadeK3startTime;
let sceneK3startTime;
let fadeTriggerTime = null;

//—————PRELOAD—————
function preload() {
  alarmFont = loadFont("DS-DIGI.TTF");
  alarmTextFontBox1 = loadFont("text_font.ttf");
  alarmSound = loadSound("alarm_sound.mp3");
  for (let i = 1; i <= 16; i++) {
    roomImgs.push(loadImage(nf(i, 2) + ".png"));
  }
  for (let i = 1; i <= 16; i++) {
    let filename = nf(i, 2) + ".png";
    kitchen1imgs.push(loadImage(filename));
  }
  for (let i = 1; i <= 16; i++) {
    let filename = nf(i, 2) + ".png";
    kitchen2imgs.push(loadImage(filename));
  }
  for (let i = 1; i <= 16; i++) {
    let filename = nf(i, 2) + ".png";
    kitchen3imgs.push(loadImage(filename));
  }
  roomFloor = loadImage("floor_room.jpg");
  roomPainting = loadImage("painting.jpg");
  netImg = loadImage("net.png");
  boatImg = loadImage("boat.png");
  scene1Font = loadFont("text_font.ttf");
  cooking1Sound = loadSound("cooking_sound.mp3");
  cooking1SarImg = loadImage("sardines.png");
  cooking1SteImg = loadImage("steam.png");
  cooking1Font = loadFont("text_font.ttf");
  kitchen1floor = loadImage("floor_kitchen.jpg");
  kitchen1img = loadImage("kitchen_asset.png");
  kitchen1signFont = loadFont("sign_font.ttf");
  kitchen1clockFont = loadFont("DS-DIGI.TTF");
  kitchen1textFont = loadFont("text_font.ttf");
  unImg = loadImage("union square.png");
  coImg = loadImage("corn.png");
  toImg = loadImage("tomato_icon.png");
  ceImg = loadImage("cebolla_larga.png");
  poImg = loadImage("potato.png");
  scene2Font = loadFont("text_font.ttf");
  moneyImg = loadImage("money_icon.png");
  cooking2Sound = loadSound("cooking_sound.mp3");
  cooking2ContinueFont = loadFont("text_font.ttf");
  cooking2FigImg = loadImage("empanadas.png");
  cooking2SteImg = loadImage("steam.png");
  kitchen2floor = loadImage("floor_kitchen.jpg");
  kitchen2img = loadImage("kitchen_asset.png");
  kitchen2signFont = loadFont("sign_font.ttf");
  kitchen2clockFont = loadFont("DS-DIGI.TTF");
  kitchen2textFont = loadFont("text_font.ttf");
  treeImg = loadImage("fig tree.png");
  baskImg = loadImage("basket.png");
  scene3Font = loadFont("text_font.ttf");
  figImg = loadImage("fig.png");
  cooking3Sound = loadSound("cooking_sound.mp3");
  cooking3Font = loadFont("text_font.ttf");
  cooking3figImg = loadImage("fig tart.png");
  cooking3SteImg = loadImage("steam.png");
  kitchen3floor = loadImage("floor_kitchen.jpg");
  kitchen3img = loadImage("kitchen_asset.png");
  kitchen3signFont = loadFont("sign_font.ttf");
  kitchen3clockFont = loadFont("DS-DIGI.TTF");
  kitchen3textFont = loadFont("text_font.ttf");
}

//—————SETUP—————
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  noCursor();
  alarmStartTime = millis();
  roomX = width / 2;
  roomY = height / 2;
  roomFadeStartTime = millis();
  xkitchen1 = width / 2;
  ykitchen1 = height / 2;
  fadeK1startTime = millis();
  xkitchen2 = width / 2;
  ykitchen2 = height / 2;
  fadeK2startTime = millis();
  xkitchen3 = width / 2;
  ykitchen3 = height / 2;
  fadeK3startTime = millis();
  kitchen3StartTyping(kitchen3Text1);

  //create sardines
  for (let i = 0; i < sardineAmount; i++) {
    particles.push(new Particle(random(width), random(175, height)));
  }

  //create figs
  for (let i = 0; i < figAmount; i++) {
    figs.push({
      x: random(0, 475 - 30),
      y: random(60, 270 - 30),
      collected: false,
    });
  }
}

//—————DRAW—————
function draw() {
  background(0, 5, 17);

  switch (scene) {
    case "alarm":
      drawAlarmScene();
      break;

    case "room":
      drawRoomScene();
      break;

    case "sardines":
      drawScene3();
      break;

    case "cooking1":
      drawScene4();
      break;

    case "kitchen1":
      drawScene5();
      break;

    case "unionSquare":
      drawScene6();
      break;

    case "cooking2":
      drawScene7();
      break;

    case "kitchen2":
      drawScene8();
      break;

    case "figs":
      drawScene9();
      break;

    case "cooking3":
      drawScene10();
      break;

    case "kitchen3":
      drawScene11();
      break;
  }
}

//————————————————————————————
// 🕑 ALARM SCENE
//————————————————————————————
function drawAlarmScene() {
  let elapsed = (millis() - alarmStartTime) / 1000;

  if (alarmState === "initial") {
    textFont(alarmFont);
    textSize(72);
    fill(246, 248, 255);
    text("5:59am", width / 2, height / 2);

    if (elapsed >= 3) {
      alarmState = "flashing";
      alarmStartTime = millis();
      alarmSound.play();
    }
  } else if (alarmState === "flashing") {
    let flashElapsed = (millis() - alarmStartTime) / 500;
    textFont(alarmFont);
    textSize(72);
    fill(246, 248, 255);
    if (floor(flashElapsed) % 2 === 0) text("6:00am", width / 2, height / 2);

    if (flashElapsed >= 6) {
      alarmSound.stop();
      alarmState = "postFlash";
      alarmStartTime = millis();
    }
  } else if (alarmState === "postFlash") {
    textFont(alarmFont);
    textSize(72);
    fill(246, 248, 255);
    text("6:00am", width / 2, height / 2);

    if (elapsed >= 2) {
      alarmState = "showTextBox";
      alarmStartTime = millis();
    }
  } else if (alarmState === "showTextBox") {
    drawAlarmTextBox();
  } else if (alarmState === "fadeOut") {
    let t = (millis() - alarmStartTime) / 2000; // 2s fade
    fill(0, 5, 17, map(t, 0, 1, 0, 255));
    rect(0, 0, width, height);
    if (t >= 1) {
      scene = "room";
      roomFadeState = "fadeIn";
      roomFadeStartTime = millis();
    }
  }
}

function drawAlarmTextBox() {
  textFont(alarmTextFontBox1);

  //“press any key to continue”
  textSize(12);
  fill(150);
  noStroke();
  textAlign(CENTER, CENTER);
  text("press any key to continue", width / 2, height / 2);

  //text box
  strokeWeight(2);
  stroke(150);
  fill(246, 248, 255);
  rectMode(CENTER);
  rect(300, 350, 575, 75, 10);

  //arrow motion
  let triangleOffset = sin(frameCount * 0.05) * 3;
  stroke(51, 52, 56);
  fill(48, 49, 52);
  triangle(
    540,
    365 + triangleOffset,
    550,
    375 + triangleOffset,
    560,
    365 + triangleOffset
  );

  //text box text
  noStroke();
  fill(48, 49, 52);
  textAlign(LEFT, CENTER);
  textSize(14);

  //typing effect for “...”
  if (!alarmDotsDone && millis() - alarmLastDotTime > alarmDotSpeed) {
    if (alarmDotCount < alarmMaxDots) {
      alarmDots += ".";
      alarmDotCount++;
      alarmLastDotTime = millis();
    } else {
      alarmDotsDone = true;
    }
  }

  //display dots or full text
  if (!alarmShowTypedText) {
    text(alarmDots, 50, 330);
  } else {
    if (
      millis() - alarmLastTypingTime > alarmTypingSpeed &&
      alarmTypingIndex < alarmIntroText.length
    ) {
      alarmTypedText += alarmIntroText.charAt(alarmTypingIndex);
      alarmTypingIndex++;
      alarmLastTypingTime = millis();
    }
    text(alarmTypedText, 50, 330);
  }

  //advance states
  if (alarmDotsDone && !alarmShowTypedText && keyIsPressed) {
    alarmShowTypedText = true;
    alarmTypedText = "";
    alarmTypingIndex = 0;
    alarmLastTypingTime = millis();
  } else if (
    alarmShowTypedText &&
    alarmTypingIndex === alarmIntroText.length &&
    keyIsPressed
  ) {
    alarmState = "fadeOut";
    alarmStartTime = millis();
  }
}

//————————————————————————————
// 🛏️ ROOM SCENE
//————————————————————————————
function drawRoomScene() {
  //floor
  imageMode(CORNER);
  image(roomFloor, 0, 0, width, height);

  //walls
  fill(253, 250, 246);
  stroke(167, 164, 162);
  strokeWeight(1);
  rectMode(CENTER);
  rect(width / 2, 75, width, 150);
  triangle(0, 0, 50, 150, 0, 400);
  triangle(600, 0, 550, 150, 600, 400);

  //painting
  noStroke();
  fill(90, 39, 0);
  rectMode(CENTER);
  rect(300, 70, 55, 75);
  imageMode(CENTER);
  image(roomPainting, 300, 70, 50, 70);

  //windows
  strokeWeight(4);
  stroke(90, 39, 0);
  fill(2, 20, 54);
  rect(150, 75, 50, 100);
  rect(450, 75, 50, 100);
  strokeWeight(2);
  stroke(90, 39, 0);
  line(150, 25, 150, 125);
  line(125, 75, 175, 75);
  line(450, 25, 450, 125);
  line(425, 75, 475, 75);

  //rug
  strokeWeight(2);
  stroke(43, 81, 36);
  fill(0, 46, 2);
  quad(220, 200, 380, 200, 430, 285, 170, 285);

  //bed
  rectMode(CENTER);
  fill(41, 13, 0);
  stroke(90, 39, 0);
  strokeWeight(2);
  rect(300, 132.5, 105, 35, 8, 8, 0, 0);

  //mattress
  fill(166, 212, 255);
  noStroke();
  quad(247, 150, 353, 150, 383, 195, 217, 195);

  //duvet stripes
  stroke(253, 250, 246);
  strokeWeight(1);
  let roomNumStripes = 20;
  for (let i = 0; i <= roomNumStripes; i++) {
    let x1 = lerp(247, 353, i / roomNumStripes);
    let y1 = 150;
    let x2 = lerp(217, 383, i / roomNumStripes);
    let y2 = 195;
    line(x1, y1, x2, y2);
  }

  //bed frame + legs
  fill(41, 13, 0);
  noStroke();
  rect(225, 215, 10, 28, 0, 0, 4, 4);
  rect(375, 215, 10, 28, 0, 0, 4, 4);
  stroke(90, 39, 0);
  strokeWeight(2);
  rect(300, 200, 170, 15, 4);

  //pillows
  fill(239, 244, 250);
  stroke(205, 212, 220);
  strokeWeight(1);
  rect(270, 143, 55, 15, 10);
  rect(330, 143, 55, 15, 10);

  //character setup
  if (!roomDimensionsSet && roomImgs[0].width > 0) {
    roomCharWidth = roomImgs[0].width * 0.15;
    roomCharHeight = roomImgs[0].height * 0.15;
    roomDimensionsSet = true;
  }

  //movement
  let roomWalking = false;
  let roomStartIndex = 0;
  let roomEndIndex = 3;

  if (keyIsDown(DOWN_ARROW)) {
    roomY += 5;
    roomWalking = true;
    roomStartIndex = 0;
    roomEndIndex = 3;
  } else if (keyIsDown(UP_ARROW)) {
    roomY -= 5;
    roomWalking = true;
    roomStartIndex = 12;
    roomEndIndex = 15;
  } else if (keyIsDown(LEFT_ARROW)) {
    roomX -= 5;
    roomWalking = true;
    roomStartIndex = 4;
    roomEndIndex = 7;
  } else if (keyIsDown(RIGHT_ARROW)) {
    roomX += 5;
    roomWalking = true;
    roomStartIndex = 8;
    roomEndIndex = 11;
  }

  if (roomWalking) {
    roomFrameCounter++;
    if (roomFrameCounter % roomFrameSpeed === 0) {
      roomCurrentFrame++;
      if (roomCurrentFrame > roomEndIndex) roomCurrentFrame = roomStartIndex;
    }
  } else {
    if (roomCurrentFrame >= 0 && roomCurrentFrame <= 3) roomCurrentFrame = 0;
    else if (roomCurrentFrame >= 4 && roomCurrentFrame <= 7)
      roomCurrentFrame = 4;
    else if (roomCurrentFrame >= 8 && roomCurrentFrame <= 11)
      roomCurrentFrame = 8;
    else if (roomCurrentFrame >= 12 && roomCurrentFrame <= 15)
      roomCurrentFrame = 12;
  }

  imageMode(CENTER);
  image(
    roomImgs[roomCurrentFrame],
    roomX,
    roomY,
    roomCharWidth,
    roomCharHeight
  );

  //fade logic
  if (roomFadeState === "fadeIn") {
    let t = (millis() - roomFadeStartTime) / 2000;
    roomFadeAlpha = lerp(255, 0, t);
    if (t >= 1) {
      roomFadeAlpha = 0;
      roomFadeState = "play";
      roomSceneStartTime = millis();
    }
  } else if (roomFadeState === "play") {
    let elapsed = (millis() - roomSceneStartTime) / 1000;
    if (elapsed >= 10) {
      roomFadeState = "fadeOut";
      roomFadeStartTime = millis();
    }
  } else if (roomFadeState === "fadeOut") {
    let t = (millis() - roomFadeStartTime) / 2000;
    roomFadeAlpha = lerp(0, 255, t);
    if (t >= 1) {
      roomFadeAlpha = 255;
      // transition to scene 3
      scene = "sardines";
      scene1FadeAlpha = 0;
      scene1Fading = false;
    }
  }

  //fade overlay
  if (roomFadeAlpha > 0) {
    noStroke();
    fill(0, 5, 17, roomFadeAlpha);
    rectMode(CORNER);
    rect(0, 0, width, height);
  }
}

//————————————————————————————
// 🐟 SARDINES SCENE
//————————————————————————————
function drawScene3() {
  background(179, 222, 255);

  //water
  noStroke();
  fill(0, 102, 198);
  rect(0, waveY, width, height - waveY);

  //waves
  stroke(79, 158, 231);
  strokeWeight(3);
  fill(179, 222, 255);

  push();
  translate(0, waveY);
  let waveOffset = sin(frameCount * 0.03) * 15;
  for (let x = -waveLength; x <= width + waveLength; x += waveLength) {
    arc(x + waveOffset, 0, waveLength, waveAmplitude, 0, PI);
  }
  pop();

  //boat
  if (boatImg) {
    let boatScale = 0.5;
    let boatX = width - 100;
    let boatFloat = sin(frameCount * 0.03 + boatX * 0.02) * 6;
    let boatYPos = waveY - 20 + boatFloat;

    push();
    imageMode(CENTER);
    image(
      boatImg,
      boatX,
      boatYPos,
      boatImg.width * boatScale,
      boatImg.height * boatScale
    );
    pop();
  }

  //sardines
  noStroke();
  particles.forEach((p) => {
    if (!p.caught) {
      p.move();
      p.display();
    }
  });

  //net interaction
  if (!scene1showText1 && scene1showNet && scene1netVisible) {
    let netScale = 0.05;
    push();
    translate(mouseX, mouseY);
    scale(netScale);
    imageMode(CENTER);
    image(netImg, 0, 0);
    pop();

    particles.forEach((p) => {
      if (!p.caught && dist(mouseX, mouseY, p.x, p.y) < 30) {
        p.caught = true;
        scene1sardinesCaught++;
      }
    });
  }

  //trigger second text
  if (
    !scene1showText1 &&
    !scene1showText2 &&
    scene1sardinesCaught === sardineAmount
  ) {
    scene1showText2 = true;
    scene1netVisible = false;
  }

  //text boxes
  if (scene1showText1) {
    drawScene1TextBox(scene1Text1, scene1typedText1, scene1typingIndex1, false);
  }
  if (scene1showText2) {
    drawScene1TextBox(scene1Text2, scene1typedText2, scene1typingIndex2, true);
  }

  //fade overlay
  if (scene1FadeAlpha > 0) {
    noStroke();
    fill(0, 5, 17, scene1FadeAlpha);
    rectMode(CORNER);
    rect(0, 0, width, height);
  }

  //fade logic
  if (scene1Fading) {
    let fadeDuration = 2000; // 2 seconds
    let elapsed = millis() - scene1FadeStartTime;
    scene1FadeAlpha = map(elapsed, 0, fadeDuration, 0, 255);
    if (scene1FadeAlpha >= 255) {
      scene = "cooking1";
      scene1FadeAlpha = 0;
      cooking1FadeAlpha = 255;
      cooking1FadeState = "fadeIn";
      scene1FadeStartTime = millis(); // <- start timing for fade-in
    }
  }
}
//————————————————————————————
//text box for scene 3
//————————————————————————————
function drawScene1TextBox(
  textContent,
  typedTextVar,
  typingIndexVar,
  isSecond = false
) {
  push();
  strokeWeight(2);
  stroke(150);
  fill(246, 248, 255);
  rectMode(CENTER);
  rect(300, 350, 575, 75, 10);

  let triangleOffset = sin(frameCount * 0.05) * 3;
  stroke(51, 52, 56);
  fill(48, 49, 52);
  triangle(
    540,
    365 + triangleOffset,
    550,
    375 + triangleOffset,
    560,
    365 + triangleOffset
  );
  pop();

  textFont(scene1Font);
  noStroke();
  fill(48, 49, 52);
  textAlign(LEFT, CENTER);

  //typing effect
  if (millis() - scene1lastTypingTime > scene1typingSpeed) {
    if (!isSecond && scene1typingIndex1 < scene1Text1.length) {
      scene1typedText1 += scene1Text1.charAt(scene1typingIndex1);
      scene1typingIndex1++;
      scene1lastTypingTime = millis();
    } else if (isSecond && scene1typingIndex2 < scene1Text2.length) {
      scene1typedText2 += scene1Text2.charAt(scene1typingIndex2);
      scene1typingIndex2++;
      scene1lastTypingTime = millis();
    }
  }

  if (!isSecond) text(scene1typedText1, 50, 330);
  else text(scene1typedText2, 50, 330);
}
//————————————————————————————
// key pressed
//————————————————————————————
function keyPressed() {
  switch (scene) {
    //———————————————
    // Scene 1 — Alarm
    //———————————————
    case "alarm":
      if (alarmState === "showTextBox") {
        if (!alarmShowTypedText && alarmDotsDone) {
          alarmShowTypedText = true;
          alarmTypedText = "";
          alarmTypingIndex = 0;
          alarmLastTypingTime = millis();
        } else if (
          alarmShowTypedText &&
          alarmTypingIndex === alarmIntroText.length
        ) {
          alarmState = "fadeOut";
          alarmStartTime = millis();
        }
      }
      break;

    //———————————————
    // Scene 3 — Sardines
    //———————————————
    case "sardines":
      // Text 1
      if (
        scene1showText1 &&
        scene1typedText1.length >= scene1Text1.length &&
        isArrowKey()
      ) {
        scene1showText1 = false;
        scene1showNet = true;
      }
      // Text 2
      if (
        scene1showText2 &&
        scene1typedText2.length >= scene1Text2.length &&
        isArrowKey()
      ) {
        scene1showText2 = false;
        scene1Fading = true;
        scene1FadeStartTime = millis();
      }
      break;

    //———————————————
    // Scene 4 — Cooking 1
    //———————————————
    case "cooking1":
      // Initial arrow key press
      if (cooking1FadeState === "idle" && cooking1ShowText && isArrowKey()) {
        cooking1ShowText = false;
        cooking1Sound.play();
        cooking1SoundStartTime = millis();
        cooking1ShowSteam = true;
        cooking1SoundPlaying = true;
      }

      // Continue text stages
      if (cooking1ShowTextBox && cooking1TextDone && isArrowKey()) {
        if (cooking1TextStage === 1) {
          cooking1StartTyping(cooking1Text2);
          cooking1TextStage = 2;
        } else if (cooking1TextStage === 2) {
          cooking1StartTyping(cooking1Text3);
          cooking1TextStage = 3;
        } else if (cooking1TextStage === 3) {
          cooking1FadeState = "fadeOut";
        }
      }
      break;

    //———————————————
    // Scene 5 — Kitchen 1
    //———————————————
    case "kitchen1":
      if (
        kitchen1showText &&
        kitchen1typedText.length >= kitchen1Text.length &&
        isArrowKey()
      ) {
        kitchen1showText = false;
        sceneK1startTime = millis(); // start 10 s timer for fade
      }
      break;

    //———————————————
    // Scene 6 — (Originally Scene 2)
    //———————————————
    case "unionSquare":
      if (
        scene2showText &&
        scene2typedText1.length >= scene2Text1.length &&
        isArrowKey()
      ) {
        scene2showText = false; // hide text 1
      }

      if (
        scene2showText2 && // text 2 visible
        scene2typedText2.length >= scene2Text2.length &&
        isArrowKey()
      ) {
        scene2showText2 = false;

        scene2FadeStarted = true;
        scene2FadeAlpha = 0;
      }

      break;

    //———————————————
    // Scene 7 — Cooking 2
    //———————————————
    case "cooking2":
      // Initial arrow key press to start sound/steam
      if (cooking2ShowText && isArrowKey()) {
        cooking2Sound.play();
        cooking2SoundPlaying = true;
        cooking2SoundStartTime = millis();
        cooking2ShowText = false;
      }

      // Continue text stages using switch logic
      if (cooking2ShowTextBox && cooking2TextDone && isArrowKey()) {
        switch (cooking2TextStage) {
          case 1:
            cooking2StartTyping(cooking2Text2);
            cooking2TextStage = 2;
            break;
          case 2:
            cooking2StartTyping(cooking2Text3);
            cooking2TextStage = 3;
            break;
          case 3:
            cooking2FadeState = "fadeOut";
            break;
        }
      }
      break;

    //———————————————
    // Scene 8 — Kitchen 2
    //———————————————
    case "kitchen2":
      if (
        kitchen2showText &&
        kitchen2typedText.length >= kitchen2Text.length &&
        isArrowKey()
      ) {
        kitchen2showText = false;
        fadeK2startTime = millis();
        kitchen2FadeState = "fadeOut"; // start fade
      }
      break;

    //———————————————
    // Scene 9 — Figs
    //———————————————
    case "figs":
      // First text box
      if (
        scene3showText1 &&
        scene3typedText1.length >= scene3Text1.length &&
        isArrowKey()
      ) {
        scene3showText1 = false;
        scene3showBasket = true;
      }
      // Second text box
      if (
        scene3showText2 &&
        scene3typedText2.length >= scene3Text2.length &&
        isArrowKey()
      ) {
        scene3showText2 = false;
        scene3FadeStarted = true;
      }
      break;

    //———————————————
    // Scene 10 — Cooking 3
    //———————————————
    case "cooking3":
      if (cooking3ShowText && isArrowKey()) {
        cooking3Sound.play();
        cooking3SoundPlaying = true;
        cooking3SoundStartTime = millis();
        cooking3ShowText = false;
        return;
      }

      if (cooking3ShowTextBox && cooking3TextDone && isArrowKey()) {
        switch (cooking3TextStage) {
          case 1:
            cooking3StartTyping(cooking3Text2);
            cooking3TextStage = 2;
            break;
          case 2:
            cooking3StartTyping(cooking3Text3);
            cooking3TextStage = 3;
            break;
          case 3:
            cooking3FadeState = "fadeOut";
            break;
        }
      }

      break;
      
          //————————————————————————————
    // Scene 11 — kitchen 3
    //————————————————————————————
    case "kitchen3":

      // Advance text only if text is showing + finished typing
      if (kitchen3ShowText && kitchen3TextDone) {

        // Only respond to arrow keys
        if (
          keyCode === LEFT_ARROW ||
          keyCode === RIGHT_ARROW ||
          keyCode === UP_ARROW ||
          keyCode === DOWN_ARROW
        ) {

          switch (kitchen3TextStage) {
            case 1:
              kitchen3StartTyping(kitchen3Text2);
              kitchen3TextStage = 2;
              break;

            case 2:
              kitchen3StartTyping(kitchen3Text3);
              kitchen3TextStage = 3;
              break;

            case 3:
              kitchen3StartTyping(kitchen3Text4);
              kitchen3TextStage = 4;
              break;

            case 4:
              // All text done → hide textbox + trigger fade timer
              kitchen3ShowText = false;
              fadeTriggerTime = millis();
              break;
          }
        }
      }

      break;
  }
}

//————————————————————————————
// helper — arrow key check
//————————————————————————————
function isArrowKey() {
  return (
    keyCode === LEFT_ARROW ||
    keyCode === RIGHT_ARROW ||
    keyCode === UP_ARROW ||
    keyCode === DOWN_ARROW
  );
}

// Helper function for arrow keys
function isArrowKey() {
  return [UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW].includes(keyCode);
}

//————————————————————————————
//particles: sardines
//————————————————————————————
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xoff = random(1000);
    this.yoff = random(2000);
    this.caught = false;
  }

  move() {
    this.x += map(noise(this.xoff), 0, 1, -2, 2);
    this.y += map(noise(this.yoff), 0, 1, -1, 1);
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 175) this.y = 175;
    if (this.y > height) this.y = height;
    this.xoff += 0.02;
    this.yoff += 0.02;
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(73, 110, 145);
    noStroke();
    triangle(12, 0, 20, -6, 20, 6);
    fill(166, 183, 199);
    ellipse(0, 0, 30, 10);
    fill(0);
    ellipse(-10, -1, 3, 3);
    pop();
  }
}

//————————————————————————————
// 🍳 SCENE 4
//————————————————————————————
function drawScene4() {
  background(49, 56, 71);

  // fade in
  if (cooking1FadeState === "fadeIn") {
    cooking1FadeAlpha -= 5;
    if (cooking1FadeAlpha <= 0) {
      cooking1FadeAlpha = 0;
      cooking1FadeState = "idle";
      cooking1ShowSteam = true; // show steam
      cooking1ShowText = true; // show "press any key..."
    }
  }

  // steam image
  if (cooking1ShowSteam) {
    imageMode(CORNER);
    image(cooking1SteImg, 0, 0, width, height);
  }

  // intro text "press any key..."
  if (cooking1ShowText) {
    textFont(cooking1Font);
    textSize(12);
    fill(246, 248, 255);
    noStroke();
    textAlign(CENTER, CENTER);
    text("press any key to continue", width / 2, height / 2);
  }

  // handle cooking sound / sardines after arrow key press
  if (cooking1SoundPlaying) {
    let elapsed = millis() - cooking1SoundStartTime;

    // stop cooking sound and hide steam after 5 seconds
    if (elapsed > 5000) {
      cooking1Sound.stop();
      cooking1ShowSteam = false;
      cooking1ShowSardines = true;
      cooking1ShowTextBox = true;
      cooking1StartTyping(cooking1Text1); // start first cooking text
      cooking1TextStage = 1;
      cooking1SoundPlaying = false;
    }
  }

  // draw sardines
  if (cooking1ShowSardines) {
    imageMode(CENTER);
    image(cooking1SarImg, 300, 175, 300, 250);
  }

  // text box
  if (cooking1ShowTextBox) {
    cooking1DrawTextBox();
    cooking1DrawText();
  }

  // fade out
  if (cooking1FadeState === "fadeOut") {
    cooking1FadeAlpha += 3;
    fill(0, 5, 17, cooking1FadeAlpha);
    noStroke();
    rect(0, 0, width, height);
    if (cooking1FadeAlpha >= 255) {
      scene = "kitchen1";
      fadeK1state = "fadeIn";
      fadeK1startTime = millis();
    }
  }
}

function cooking1StartTyping(newText) {
  cooking1CurrentText = newText;
  cooking1TypedText = "";
  cooking1TypingIndex = 0;
  cooking1LastTypingTime = millis();
  cooking1TextDone = false;
}

function cooking1DrawTextBox() {
  push();
  strokeWeight(2);
  stroke(150);
  fill(246, 248, 255);
  rectMode(CENTER);
  rect(width / 2, 350, 575, 75, 10);

  let cooking1TriangleOffset = sin(frameCount * 0.05) * 3;
  stroke(51, 52, 56);
  fill(48, 49, 52);
  triangle(
    540,
    365 + cooking1TriangleOffset,
    550,
    375 + cooking1TriangleOffset,
    560,
    365 + cooking1TriangleOffset
  );
  pop();
}

function cooking1DrawText() {
  textFont(cooking1Font);
  textSize(14);
  fill(48, 49, 52);
  noStroke();
  textAlign(LEFT, CENTER);

  if (
    millis() - cooking1LastTypingTime > cooking1TypingSpeed &&
    cooking1TypingIndex < cooking1CurrentText.length
  ) {
    cooking1TypedText += cooking1CurrentText.charAt(cooking1TypingIndex);
    cooking1TypingIndex++;
    cooking1LastTypingTime = millis();
  }

  if (cooking1TypingIndex >= cooking1CurrentText.length) {
    cooking1TextDone = true;
  }

  text(cooking1TypedText, 50, 330);
}

//————————————————————————————
// 🧑‍🍳 SCENE 5
//————————————————————————————
function drawScene5() {
  //fade in
  if (fadeK1state === "fadeIn") {
    let t = (millis() - fadeK1startTime) / 2000; // 2-second fade
    fadeK1alpha = lerp(255, 0, t);
    if (t >= 1) {
      fadeK1alpha = 0;
      fadeK1state = "play";
    }
  }

  //fade overlay
  if (fadeK1alpha > 0) {
    noStroke();
    fill(0, 5, 17, fadeK1alpha);
    rect(0, 0, width, height);
  }

  //floor
  imageMode(CORNER);
  image(kitchen1floor, 0, 0, width, height);

  //kitchen walls
  fill(244, 244, 255);
  stroke(181, 181, 181);
  strokeWeight(1);
  rectMode(CENTER);
  rect(width / 2, 75, width, 150);
  triangle(0, 0, 50, 150, 0, 400);
  triangle(600, 0, 550, 150, 600, 400);

  //kitchen
  imageMode(CENTER);
  image(kitchen1img, 300, 75, 275, 250);

  //sign
  stroke(181, 181, 181);
  fill(3, 32, 76);
  rect(100, 80, 90, 20);
  textFont(kitchen1signFont);
  textSize(6);
  noStroke();
  fill(244, 244, 255);
  textAlign(CENTER, CENTER);
  text(kitchen1signText, 100, 80);

  //clock
  stroke(181, 181, 181);
  fill(0, 5, 17);
  rect(100, 55, 90, 20);
  textFont(kitchen1clockFont);
  textSize(10);
  noStroke();
  fill(244, 244, 255);
  textAlign(CENTER, CENTER);
  text(kitchen1clockText, 100, 55);

  //shelves
  stroke(98, 104, 122);
  strokeWeight(6);
  line(455, 75, 520, 75);
  line(455, 95, 520, 95);
  line(455, 115, 520, 115);
  line(455, 135, 520, 135);
  fill(200);
  stroke(181, 181, 181);
  strokeWeight(1);
  fill(158, 164, 181);
  rect(455, 105, 10, 90, 10, 10, 0, 0);
  rect(520, 105, 10, 90, 10, 10, 0, 0);

  //character setup
  if (!kitchen1dimensionsSet && kitchen1imgs[0].width > 0) {
    kitchen1charWidth = kitchen1imgs[0].width * 0.15;
    kitchen1charHeight = kitchen1imgs[0].height * 0.15;
    kitchen1dimensionsSet = true;
  }

  //character movement & animation only allowed after text is done typing
  let kitchen1walking = false;
  let kitchen1startIndex = 0;
  let kitchen1endIndex = 0;

  if (!kitchen1showText) {
    // only allow movement after text typed
    if (keyIsDown(DOWN_ARROW)) {
      ykitchen1 += 5;
      kitchen1walking = true;
      kitchen1startIndex = 0;
      kitchen1endIndex = 3;
    } else if (keyIsDown(UP_ARROW)) {
      ykitchen1 -= 5;
      kitchen1walking = true;
      kitchen1startIndex = 12;
      kitchen1endIndex = 15;
    } else if (keyIsDown(LEFT_ARROW)) {
      xkitchen1 -= 5;
      kitchen1walking = true;
      kitchen1startIndex = 4;
      kitchen1endIndex = 7;
    } else if (keyIsDown(RIGHT_ARROW)) {
      xkitchen1 += 5;
      kitchen1walking = true;
      kitchen1startIndex = 8;
      kitchen1endIndex = 11;
    }
  }

  //animation control
  if (kitchen1walking) {
    kitchen1frameCounter++;
    if (kitchen1frameCounter % kitchen1frameSpeed === 0) {
      kitchen1currentFrame++;
      if (kitchen1currentFrame > kitchen1endIndex)
        kitchen1currentFrame = kitchen1startIndex;
    }
  } else {
    if (kitchen1currentFrame >= 0 && kitchen1currentFrame <= 3)
      kitchen1currentFrame = 0;
    else if (kitchen1currentFrame >= 4 && kitchen1currentFrame <= 7)
      kitchen1currentFrame = 4;
    else if (kitchen1currentFrame >= 8 && kitchen1currentFrame <= 11)
      kitchen1currentFrame = 8;
    else if (kitchen1currentFrame >= 12 && kitchen1currentFrame <= 15)
      kitchen1currentFrame = 12;
  }

  imageMode(CENTER);
  image(
    kitchen1imgs[kitchen1currentFrame],
    xkitchen1,
    ykitchen1,
    kitchen1charWidth,
    kitchen1charHeight
  );

  //text box with typing effect
  if (kitchen1showText) {
    push();
    strokeWeight(2);
    stroke(150);
    fill(246, 248, 255);
    rectMode(CENTER);
    rect(300, 350, 575, 75, 10);

    let triangleOffset = sin(frameCount * 0.05) * 3;
    stroke(51, 52, 56);
    fill(48, 49, 52);
    triangle(
      540,
      365 + triangleOffset,
      550,
      375 + triangleOffset,
      560,
      365 + triangleOffset
    );
    pop();

    textSize(14);
    textFont(kitchen1textFont);
    noStroke();
    fill(48, 49, 52);
    textAlign(LEFT, CENTER);

    if (
      millis() - kitchen1lastTypingTime > kitchen1typingSpeed &&
      kitchen1typingIndex < kitchen1Text.length
    ) {
      kitchen1typedText += kitchen1Text.charAt(kitchen1typingIndex);
      kitchen1typingIndex++;
      kitchen1lastTypingTime = millis();
    }

    text(kitchen1typedText, 50, 330);
  }

  //fade logic
  if (fadeK1state === "fadeIn") {
    let t = (millis() - fadeK1startTime) / 2000; // 2-second fade
    fadeK1alpha = lerp(255, 0, t);
    if (t >= 1) {
      fadeK1alpha = 0;
      fadeK1state = "play";
      sceneK1startTime = millis();
    }
  } else if (fadeK1state === "play") {
    let elapsed = (millis() - sceneK1startTime) / 1000;
    if (elapsed >= 10) {
      // after 10s
      fadeK1state = "fadeOut";
      fadeK1startTime = millis();
    }
  } else if (fadeK1state === "fadeOut") {
    let t = (millis() - fadeK1startTime) / 2000;
    fadeK1alpha = lerp(0, 255, t);
    if (t >= 1) {
      scene = "unionSquare"; // move to next scene
      fadeK1alpha = 255;
    }
  }

  //fade overlay
  if (fadeK1state === "fadeOut") {
    let t = (millis() - sceneK1startTime - 10000) / 2000;
    fadeK1alpha = lerp(0, 255, t);
    if (t >= 1) {
      fadeK1alpha = 255;
      scene = "unionSquare";

      // initialize Scene 6 fade-in
      scene2FadeInState = "fadeIn";
      scene2FadeInAlpha = 255;
      scene2FadeInStartTime = millis();
    }
  }
}
//————————————————————————————
// 🏙️ SCENE 6
//————————————————————————————
function drawScene6() {
  //add fade in logic
  if (scene2FadeInState === "fadeIn") {
    let t = (millis() - scene2FadeInStartTime) / 2000; // 2s fade
    scene2FadeInAlpha = lerp(255, 0, t);

    if (t >= 1) {
      scene2FadeInAlpha = 0;
      scene2FadeInState = "play"; // fade-in finished
    }
  }

  //textSize
  if (scene === "unionSquare") textSize(14);

  //background
  imageMode(CORNER);
  image(unImg, 0, 0, width, height);

  produceOffset = sin(frameCount * 0.05) * 2;

  //stalls
  rectMode(CORNER);
  strokeWeight(2);
  stroke(90, 39, 0);
  fill(41, 13, 0);

  // right corner stall
  rect(width - 20, height - 50, 20, 50);
  quad(580, 350, 500, 340, 500, 390, 580, 400);
  quad(580, 350, 500, 340, 520, 330, 600, 340);
  triangle(600, 350, 600, 340, 580, 350);
  strokeWeight(4);
  line(520, 335, 520, 270);
  line(580, 342, 580, 270);
  strokeWeight(2);
  quad(580, 280, 500, 270, 520, 260, 600, 270);
  triangle(600, 280, 600, 270, 580, 280);

  // left corner stall
  rect(0, height - 50, 20, 50);
  quad(20, 350, 100, 340, 100, 390, 20, 400);
  quad(20, 350, 100, 340, 80, 330, 0, 340);
  triangle(0, 350, 0, 340, 20, 350);
  strokeWeight(4);
  line(80, 335, 80, 270);
  line(20, 342, 20, 270);
  strokeWeight(2);
  quad(20, 280, 100, 270, 80, 260, 0, 270);
  triangle(0, 280, 0, 270, 20, 280);

  // second left stall
  rect(120, height - 80, 20, 50);
  quad(140, 320, 220, 310, 220, 360, 140, 370);
  quad(140, 320, 220, 310, 200, 300, 120, 310);
  triangle(120, 320, 120, 310, 140, 320);
  strokeWeight(4);
  line(200, 305, 200, 250);
  line(140, 312, 140, 250);
  strokeWeight(2);
  quad(140, 260, 220, 250, 200, 240, 120, 250);
  triangle(120, 260, 120, 250, 140, 260);

  //second right stall
  rect(460, height - 80, 20, 50);
  quad(460, 320, 380, 310, 380, 360, 460, 370);
  quad(460, 320, 380, 310, 400, 300, 480, 310);
  triangle(480, 320, 480, 310, 460, 320);
  strokeWeight(4);
  line(400, 305, 400, 250);
  line(460, 312, 460, 250);
  strokeWeight(2);
  quad(460, 260, 380, 250, 400, 240, 480, 250);
  triangle(480, 260, 480, 250, 460, 260);

  //produce spheres
  if (!scene2showText) {
    // only allow collecting after first text box disappears
    if (!poCollected) {
      ellipseMode(CENTER);
      noStroke();
      fill(255, 125);
      ellipse(550, 304 + produceOffset, 35, 35);
      image(poImg, 532.5, 286.5 + produceOffset, 35, 35);

      if (dist(mouseX, mouseY, 550, 304 + produceOffset) < 35 / 2)
        poCollected = true;
    }
    if (!toCollected) {
      ellipse(430, 280 + produceOffset, 35, 35);
      image(toImg, 412.5, 262.5 + produceOffset, 35, 35);

      if (dist(mouseX, mouseY, 430, 280 + produceOffset) < 35 / 2)
        toCollected = true;
    }
    if (!ceCollected) {
      ellipse(50, 304 + produceOffset, 35, 35);
      image(ceImg, 32.5, 286.5 + produceOffset, 35, 35);

      if (dist(mouseX, mouseY, 50, 304 + produceOffset) < 35 / 2)
        ceCollected = true;
    }
    if (!coCollected) {
      ellipse(170, 280 + produceOffset, 35, 35);
      image(coImg, 152.5, 262.5 + produceOffset, 35, 35);

      if (dist(mouseX, mouseY, 170, 280 + produceOffset) < 35 / 2)
        coCollected = true;
    }
    if (
      !scene2showText &&
      poCollected &&
      toCollected &&
      ceCollected &&
      coCollected
    ) {
      scene2showText2 = true;
    }
  }

  //money cursor
  if (!scene2showText && !scene2showText2) {
    let moneyWidth = 350;
    let moneyHeight = 350;
    image(
      moneyImg,
      mouseX - moneyWidth / 2,
      mouseY - moneyHeight / 2,
      moneyWidth,
      moneyHeight
    );
  }

  //first text box
  if (scene2showText) {
    drawTextBox(scene2Text1, scene2typedText1, scene2typingIndex1);
  }

  //second text box with typing effect
  if (scene2showText2) {
    drawTextBox(scene2Text2, scene2typedText2, scene2typingIndex2, true);
  }
}

//draw text box
function drawTextBox(
  textContent,
  typedTextVar,
  typingIndexVar,
  isSecond = false
) {
  push();
  strokeWeight(2);
  stroke(150);
  fill(246, 248, 255);
  rectMode(CENTER);
  rect(300, 350, 575, 75, 10);

  let triangleOffset = sin(frameCount * 0.05) * 3;
  stroke(51, 52, 56);
  fill(48, 49, 52);
  triangle(
    540,
    365 + triangleOffset,
    550,
    375 + triangleOffset,
    560,
    365 + triangleOffset
  );
  pop();

  textFont(scene2Font);
  noStroke();
  fill(48, 49, 52);
  textAlign(LEFT, CENTER);

  //typing effect
  if (millis() - scene2lastTypingTime > scene2typingSpeed) {
    if (!isSecond && scene2typingIndex1 < scene2Text1.length) {
      scene2typedText1 += scene2Text1.charAt(scene2typingIndex1);
      scene2typingIndex1++;
      scene2lastTypingTime = millis();
    } else if (isSecond && scene2typingIndex2 < scene2Text2.length) {
      scene2typedText2 += scene2Text2.charAt(scene2typingIndex2);
      scene2typingIndex2++;
      scene2lastTypingTime = millis();
    }
  }

  //display text
  if (!isSecond) text(scene2typedText1, 50, 330);
  else text(scene2typedText2, 50, 330);

  //fade overlay
  if (scene2FadeInAlpha > 0) {
    noStroke();
    fill(0, 5, 17, scene2FadeInAlpha);
    rect(0, 0, width, height);
  }

  // Fade-out overlay
  if (scene2FadeStarted) {
    scene2FadeAlpha += 5; // fade speed
    scene2FadeAlpha = constrain(scene2FadeAlpha, 0, 255);

    noStroke();
    fill(0, 5, 17, scene2FadeAlpha);
    rect(0, 0, width, height);

    if (scene2FadeAlpha >= 255) {
      scene2FadeStarted = false;
      scene = "cooking2";
    }
  }
}
//————————————————————————————
// 🥐 SCENE 7
//————————————————————————————
function drawScene7() {
  background(49, 56, 71);

  //show steam before it disappears
  if (cooking2ShowSteam) {
    imageMode(CORNER);
    image(cooking2SteImg, 0, 0, width, height);
  }

  //intro text
  if (cooking2ShowText) {
    textFont(cooking2ContinueFont);
    textSize(12);
    fill(246, 248, 255);
    noStroke();
    textAlign(CENTER, CENTER);
    text("press any key to continue", width / 2, height / 2);
  }

  //if sound is playing, track elapsed time
  if (cooking2SoundPlaying) {
    let elapsed = millis() - cooking2SoundStartTime;

    //stop cooking sound after 5 seconds
    if (elapsed > 5000 && cooking2Sound.isPlaying()) {
      cooking2Sound.stop();
    }

    //hide steam after 5 seconds
    if (elapsed > 5000 && cooking2ShowSteam) {
      cooking2ShowSteam = false;
    }

    //show empanadas and text box 6 seconds after keypress
    if (elapsed > 6000 && !cooking2ShowTextBox) {
      cooking2ShowTextBox = true;
      cooking2ShowDish = true;
      cooking2StartTyping(cooking2Text1);
      cooking2TextStage = 1;
    }
  }

  //draw empanadas
  if (cooking2ShowDish) {
    imageMode(CENTER);
    image(cooking2FigImg, width / 2, 175, 375, 260);
  }

  //text box
  if (cooking2ShowTextBox) {
    cooking2DrawTextBox();
    cooking2DrawText();
  }

  //fade out
  if (cooking2FadeState === "fadeOut") {
    cooking2FadeAlpha += 5;
    cooking2FadeAlpha = constrain(cooking2FadeAlpha, 0, 255);

    noStroke();
    fill(0, 5, 17, cooking2FadeAlpha);
    rect(0, 0, width, height);

    if (cooking2FadeAlpha >= 255) {
      scene = "kitchen2";
      cooking2FadeState = "done";
    }
  }
}
function cooking2StartTyping(newText) {
  cooking2CurrentText = newText;
  cooking2TypedText = "";
  cooking2TypingIndex = 0;
  cooking2LastTypingTime = millis();
  cooking2TextDone = false;
}

function cooking2DrawTextBox() {
  push();
  strokeWeight(2);
  stroke(150);
  fill(246, 248, 255);
  rectMode(CENTER);
  rect(width / 2, 350, 575, 75, 10);

  let cooking2TriangleOffset = sin(frameCount * 0.05) * 3;
  stroke(51, 52, 56);
  fill(48, 49, 52);
  triangle(
    540,
    365 + cooking2TriangleOffset,
    550,
    375 + cooking2TriangleOffset,
    560,
    365 + cooking2TriangleOffset
  );
  pop();
}

function cooking2DrawText() {
  textFont(cooking2ContinueFont);
  textSize(14);
  fill(48, 49, 52);
  noStroke();
  textAlign(LEFT, CENTER);

  if (
    millis() - cooking2LastTypingTime > cooking2TypingSpeed &&
    cooking2TypingIndex < cooking2CurrentText.length
  ) {
    cooking2TypedText += cooking2CurrentText.charAt(cooking2TypingIndex);
    cooking2TypingIndex++;
    cooking2LastTypingTime = millis();
  }

  if (cooking2TypingIndex >= cooking2CurrentText.length) {
    cooking2TextDone = true;
  }

  text(cooking2TypedText, 50, 330);
}

//————————————————————————————
// 👨‍🍳 SCENE 8
//————————————————————————————
function drawScene8() {
  background(0, 5, 17);

  //floor
  imageMode(CORNER);
  image(kitchen2floor, 0, 0, width, height);

  //kitchen walls
  fill(244, 244, 255);
  stroke(181, 181, 181);
  strokeWeight(1);
  rectMode(CENTER);
  rect(width / 2, 75, width, 150);
  triangle(0, 0, 50, 150, 0, 400);
  triangle(600, 0, 550, 150, 600, 400);

  //kitchen
  imageMode(CENTER);
  image(kitchen2img, 300, 75, 275, 250);

  //sign
  stroke(181, 181, 181);
  fill(3, 32, 76);
  rect(100, 80, 90, 20);
  textFont(kitchen2signFont);
  textSize(6);
  noStroke();
  fill(244, 244, 255);
  textAlign(CENTER, CENTER);
  text(kitchen2signText, 100, 80);

  //clock
  stroke(181, 181, 181);
  fill(0, 5, 17);
  rect(100, 55, 90, 20);
  textFont(kitchen2clockFont);
  textSize(10);
  noStroke();
  fill(244, 244, 255);
  textAlign(CENTER, CENTER);
  text(kitchen2clockText, 100, 55);

  //shelves
  stroke(98, 104, 122);
  strokeWeight(6);
  line(455, 75, 520, 75);
  line(455, 95, 520, 95);
  line(455, 115, 520, 115);
  line(455, 135, 520, 135);
  fill(200);
  stroke(181, 181, 181);
  strokeWeight(1);
  fill(158, 164, 181);
  rect(455, 105, 10, 90, 10, 10, 0, 0);
  rect(520, 105, 10, 90, 10, 10, 0, 0);

  //character setup
  if (!kitchen2dimensionsSet && kitchen2imgs[0].width > 0) {
    kitchen2charWidth = kitchen2imgs[0].width * 0.15;
    kitchen2charHeight = kitchen2imgs[0].height * 0.15;
    kitchen2dimensionsSet = true;
  }

  //character movement
  let kitchen2walking = false;
  let kitchen2startIndex = 0;
  let kitchen2endIndex = 0;

  if (!kitchen2showText) {
    if (keyIsDown(DOWN_ARROW)) {
      ykitchen2 += 5;
      kitchen2walking = true;
      kitchen2startIndex = 0;
      kitchen2endIndex = 3;
    } else if (keyIsDown(UP_ARROW)) {
      ykitchen2 -= 5;
      kitchen2walking = true;
      kitchen2startIndex = 12;
      kitchen2endIndex = 15;
    } else if (keyIsDown(LEFT_ARROW)) {
      xkitchen2 -= 5;
      kitchen2walking = true;
      kitchen2startIndex = 4;
      kitchen2endIndex = 7;
    } else if (keyIsDown(RIGHT_ARROW)) {
      xkitchen2 += 5;
      kitchen2walking = true;
      kitchen2startIndex = 8;
      kitchen2endIndex = 11;
    }
  }

  //animation control
  if (kitchen2walking) {
    kitchen2frameCounter++;
    if (kitchen2frameCounter % kitchen2frameSpeed === 0) {
      kitchen2currentFrame++;
      if (kitchen2currentFrame > kitchen2endIndex)
        kitchen2currentFrame = kitchen2startIndex;
    }
  } else {
    if (kitchen2currentFrame >= 0 && kitchen2currentFrame <= 3)
      kitchen2currentFrame = 0;
    else if (kitchen2currentFrame >= 4 && kitchen2currentFrame <= 7)
      kitchen2currentFrame = 4;
    else if (kitchen2currentFrame >= 8 && kitchen2currentFrame <= 11)
      kitchen2currentFrame = 8;
    else if (kitchen2currentFrame >= 12 && kitchen2currentFrame <= 15)
      kitchen2currentFrame = 12;
  }

  imageMode(CENTER);
  image(
    kitchen2imgs[kitchen2currentFrame],
    xkitchen2,
    ykitchen2,
    kitchen2charWidth,
    kitchen2charHeight
  );

  //text box with typing effect
  if (kitchen2showText) {
    push();
    strokeWeight(2);
    stroke(150);
    fill(246, 248, 255);
    rectMode(CENTER);
    rect(300, 350, 575, 75, 10);

    let triangleOffset = sin(frameCount * 0.05) * 3;
    stroke(51, 52, 56);
    fill(48, 49, 52);
    triangle(
      540,
      365 + triangleOffset,
      550,
      375 + triangleOffset,
      560,
      365 + triangleOffset
    );
    pop();

    textSize(14);
    textFont(kitchen2textFont);
    noStroke();
    fill(48, 49, 52);
    textAlign(LEFT, CENTER);

    if (
      millis() - kitchen2lastTypingTime > kitchen2typingSpeed &&
      kitchen2typingIndex < kitchen2Text.length
    ) {
      kitchen2typedText += kitchen2Text.charAt(kitchen2typingIndex);
      kitchen2typingIndex++;
      kitchen2lastTypingTime = millis();
    }

    text(kitchen2typedText, 50, 330);
  }

  //fade logic
  if (fadeK2state === "fadeIn") {
    let t = (millis() - fadeK2startTime) / 2000;
    fadeK2alpha = lerp(255, 0, t);
    if (t >= 1) {
      fadeK2alpha = 0;
      fadeK2state = "play";
      sceneK2startTime = millis();
    }
  } else if (fadeK2state === "play") {
    let elapsed = (millis() - sceneK2startTime) / 1000;
    if (elapsed >= 10) {
      fadeK2state = "fadeOut";
      fadeK2startTime = millis();
    }
  } else if (fadeK2state === "fadeOut") {
    let t = (millis() - fadeK2startTime) / 2000;
    fadeK2alpha = lerp(0, 255, t);


    if (t >= 1) {
      scene = "figs"; 
      scene3FadeAlpha = 0;
      scene3FadeStarted = false;


      scene3showText1 = true;
      scene3typedText1 = "";
      scene3typingIndex1 = 0;

      scene3showText2 = false;
      scene3typedText2 = "";
      scene3typingIndex2 = 0;

      scene3showBasket = false;
    }
  }

  if (fadeK2state === "fadeOut") {
    let t = (millis() - fadeK2startTime) / 2000;
    fadeK2alpha = lerp(0, 255, t);
    if (t >= 1) {
      scene = "figs";
      scene3FadeAlpha = 0;
      scene3FadeStarted = false;
    }
  }

  //fade overlay
  if (fadeK2alpha > 0) {
    push();
    rectMode(CORNER);
    noStroke();
    fill(0, 5, 17, fadeK2alpha);
    rect(0, 0, width, height);
    pop();
  }
}

//————————————————————————————
// 🌳 SCENE 9
//————————————————————————————
function drawScene9() {
  //background
  push(); // protect global state

  rectMode(CORNER);
  imageMode(CORNER);
  image(treeImg, 0, 0, width, height);

  //textSize
  if (scene === "figs") textSize(14);

  //draw figs
  for (let i = 0; i < figs.length; i++) {
    if (!figs[i].collected) {
      image(figImg, figs[i].x, figs[i].y, 20, 20);
    }
  }

  //first text box
  if (scene3showText1) {
    drawScene3TextBox(scene3Text1, scene3typedText1, 1);
  }

  //basket cursor appears after first text box is gone
  if (scene3showBasket) {
    let baskWidth = 300;
    let baskHeight = 300;
    let baskX = mouseX - baskWidth / 2;
    let baskY = mouseY - baskHeight / 2;
    image(baskImg, baskX, baskY, baskWidth, baskHeight);

    //check for fig collection
    for (let i = 0; i < figs.length; i++) {
      let fig = figs[i];
      if (!fig.collected) {
        let d = dist(mouseX, mouseY, fig.x + 15, fig.y + 15);
        if (d < 50) {
          fig.collected = true;
        }
      }
    }

    //trigger second text box when all figs are collected
    if (figs.every((f) => f.collected)) {
      scene3showBasket = false;
      scene3showText2 = true;
    }
  }

  //second text box
  if (scene3showText2) {
    drawScene3TextBox(scene3Text2, scene3typedText2, 2);
  }

  //fade overlay
  if (scene3FadeStarted) {
    scene3FadeAlpha = min(scene3FadeAlpha + 5, 255);

    push();
    rectMode(CORNER);
    noStroke();
    fill(0, 5, 17, scene3FadeAlpha);
    rect(0, 0, width, height);
    pop();

    if (scene3FadeAlpha >= 255) {
      scene = "cooking3";
    }
  }

  pop();
}

//draw text box with typing effect
function drawScene3TextBox(textContent, typedTextVar, boxNumber) {
  push();
  strokeWeight(2);
  stroke(150);
  fill(246, 248, 255);
  rectMode(CENTER);
  rect(300, 350, 575, 75, 10);

  let triangleOffset = sin(frameCount * 0.05) * 3;
  stroke(51, 52, 56);
  fill(48, 49, 52);
  triangle(
    540,
    365 + triangleOffset,
    550,
    375 + triangleOffset,
    560,
    365 + triangleOffset
  );
  pop();

  textFont(scene3Font);
  noStroke();
  fill(48, 49, 52);
  textAlign(LEFT, CENTER);

  //typing effect
  if (millis() - scene3lastTypingTime > scene3typingSpeed) {
    if (boxNumber === 1 && scene3typingIndex1 < scene3Text1.length) {
      scene3typedText1 += scene3Text1.charAt(scene3typingIndex1);
      scene3typingIndex1++;
      scene3lastTypingTime = millis();
    } else if (boxNumber === 2 && scene3typingIndex2 < scene3Text2.length) {
      scene3typedText2 += scene3Text2.charAt(scene3typingIndex2);
      scene3typingIndex2++;
      scene3lastTypingTime = millis();
    }
  }

  if (boxNumber === 1) text(scene3typedText1, 50, 330);
  else text(scene3typedText2, 50, 330);
}
//————————————————————————————
// 🍰 SCENE 10
//————————————————————————————
function drawScene10() {
  background(49, 56, 71);

  //show steam before it disappears
  if (cooking3ShowSteam) {
    imageMode(CORNER);
    image(cooking3SteImg, 0, 0, width, height);
  }

  //intro text
  if (cooking3ShowText) {
    textFont(cooking3Font);
    textSize(12);
    fill(246, 248, 255);
    noStroke();
    textAlign(CENTER, CENTER);
    text("press any key to continue", width / 2, height / 2);
  }

  //if sound is playing, track elapsed time
  if (cooking3SoundPlaying) {
    let elapsed = millis() - cooking3SoundStartTime;

    //stop cooking sound after 5 seconds
    if (elapsed > 5000 && cooking3Sound.isPlaying()) {
      cooking3Sound.stop();
    }

    //hide steam after 5 seconds
    if (elapsed > 5000 && cooking3ShowSteam) {
      cooking3ShowSteam = false;
    }

    //show dish and text box 6 seconds after keypress
    if (elapsed > 6000 && !cooking3ShowTextBox) {
      cooking3ShowTextBox = true;
      cooking3ShowFig = true;
      cooking3StartTyping(cooking3Text1);
      cooking3TextStage = 1;
    }
  }

  //draw fig tart after 6 seconds
  if (cooking3ShowFig) {
    imageMode(CENTER);
    image(cooking3figImg, 300, 175, 375, 250);
  }

  //text box
  if (cooking3ShowTextBox) {
    cooking3DrawTextBox();
    cooking3DrawText();
  }

  //fade out
  if (cooking3FadeState === "fadeOut") {
    cooking3FadeAlpha += 3;

    noStroke();
    fill(0, 5, 17, cooking3FadeAlpha);

    rectMode(CORNER);
    rect(0, 0, width, height);

    if (cooking3FadeAlpha >= 255) {
      scene = "kitchen3";
    }
  }
}
function cooking3StartTyping(newText) {
  cooking3CurrentText = newText;
  cooking3TypedText = "";
  cooking3TypingIndex = 0;
  cooking3LastTypingTime = millis();
  cooking3TextDone = false;
}

function cooking3DrawTextBox() {
  push();
  strokeWeight(2);
  stroke(150);
  fill(246, 248, 255);
  rectMode(CENTER);
  rect(width / 2, 350, 575, 75, 10);

  let cooking3TriangleOffset = sin(frameCount * 0.05) * 3;
  stroke(51, 52, 56);
  fill(48, 49, 52);
  triangle(
    540,
    365 + cooking3TriangleOffset,
    550,
    375 + cooking3TriangleOffset,
    560,
    365 + cooking3TriangleOffset
  );
  pop();
}

function cooking3DrawText() {
  textFont(cooking3Font);
  textSize(14);
  fill(48, 49, 52);
  noStroke();
  textAlign(LEFT, CENTER);

  if (
    millis() - cooking3LastTypingTime > cooking3TypingSpeed &&
    cooking3TypingIndex < cooking3CurrentText.length
  ) {
    cooking3TypedText += cooking3CurrentText.charAt(cooking3TypingIndex);
    cooking3TypingIndex++;
    cooking3LastTypingTime = millis();
  }

  if (cooking3TypingIndex >= cooking3CurrentText.length) {
    cooking3TextDone = true;
  }

  text(cooking3TypedText, 50, 330);
}
//————————————————————————————
// 🍴 SCENE 11
//————————————————————————————
function drawScene11() {
  
    background(0, 5, 17);

  //floor
  imageMode(CORNER);
  image(kitchen3floor, 0, 0, width, height);

  //kitchen walls
  fill(244, 244, 255);
  stroke(181, 181, 181);
  strokeWeight(1);
  rectMode(CENTER);
  rect(width / 2, 75, width, 150);
  triangle(0, 0, 50, 150, 0, 400);
  triangle(600, 0, 550, 150, 600, 400);

  //kitchen
  imageMode(CENTER);
  image(kitchen3img, 300, 75, 275, 250);

  //sign
  stroke(181, 181, 181);
  fill(3, 32, 76);
  rect(100, 80, 90, 20);
  textFont(kitchen3signFont);
  textSize(6);
  noStroke();
  fill(244, 244, 255);
  textAlign(CENTER, CENTER);
  text(kitchen3signText, 100, 80);

  //clock
  stroke(181, 181, 181);
  fill(0, 5, 17);
  rect(100, 55, 90, 20);
  textFont(kitchen3clockFont);
  textSize(10);
  noStroke();
  fill(244, 244, 255);
  textAlign(CENTER, CENTER);
  text(kitchen3clockText, 100, 55);

  //shelves
  stroke(98, 104, 122);
  strokeWeight(6);
  line(455, 75, 520, 75);
  line(455, 95, 520, 95);
  line(455, 115, 520, 115);
  line(455, 135, 520, 135);
  fill(200);
  stroke(181, 181, 181);
  strokeWeight(1);
  fill(158, 164, 181);
  rect(455, 105, 10, 90, 10, 10, 0, 0);
  rect(520, 105, 10, 90, 10, 10, 0, 0);

  //character setup
  if (!kitchen3dimensionsSet && kitchen3imgs[0].width > 0) {
    kitchen3charWidth = kitchen3imgs[0].width * 0.15;
    kitchen3charHeight = kitchen3imgs[0].height * 0.15;
    kitchen3dimensionsSet = true;
  }

  //character movement
  let kitchen3walking = false;
  let kitchen3startIndex = 0;
  let kitchen3endIndex = 0;

  if (!kitchen3ShowText) {
    if (keyIsDown(DOWN_ARROW)) {
      ykitchen3 += 5;
      kitchen3walking = true;
      kitchen3startIndex = 0;
      kitchen3endIndex = 3;
    } else if (keyIsDown(UP_ARROW)) {
      ykitchen3 -= 5;
      kitchen3walking = true;
      kitchen3startIndex = 12;
      kitchen3endIndex = 15;
    } else if (keyIsDown(LEFT_ARROW)) {
      xkitchen3 -= 5;
      kitchen3walking = true;
      kitchen3startIndex = 4;
      kitchen3endIndex = 7;
    } else if (keyIsDown(RIGHT_ARROW)) {
      xkitchen3 += 5;
      kitchen3walking = true;
      kitchen3startIndex = 8;
      kitchen3endIndex = 11;
    }
  }

  //animation control
  if (kitchen3walking) {
    kitchen3frameCounter++;
    if (kitchen3frameCounter % kitchen3frameSpeed === 0) {
      kitchen3currentFrame++;
      if (kitchen3currentFrame > kitchen3endIndex)
        kitchen3currentFrame = kitchen3startIndex;
    }
  } else {
    if (kitchen3currentFrame >= 0 && kitchen3currentFrame <= 3)
      kitchen3currentFrame = 0;
    else if (kitchen3currentFrame >= 4 && kitchen3currentFrame <= 7)
      kitchen3currentFrame = 4;
    else if (kitchen3currentFrame >= 8 && kitchen3currentFrame <= 11)
      kitchen3currentFrame = 8;
    else if (kitchen3currentFrame >= 12 && kitchen3currentFrame <= 15)
      kitchen3currentFrame = 12;
  }

  imageMode(CENTER);
  image(
    kitchen3imgs[kitchen3currentFrame],
    xkitchen3,
    ykitchen3,
    kitchen3charWidth,
    kitchen3charHeight
  );

  //text box with typing effect
  if (kitchen3ShowText) {
    push();
    strokeWeight(2);
    stroke(150);
    fill(246, 248, 255);
    rectMode(CENTER);
    rect(300, 350, 575, 75, 10);

    let triangleOffset = sin(frameCount * 0.05) * 3;
    stroke(51, 52, 56);
    fill(48, 49, 52);
    triangle(
      540,
      365 + triangleOffset,
      550,
      375 + triangleOffset,
      560,
      365 + triangleOffset
    );
    pop();

    textSize(14);
    textFont(kitchen3textFont);
    noStroke();
    fill(48, 49, 52);
    textAlign(LEFT, CENTER);

    if (
      millis() - kitchen3LastTypingTime > kitchen3TypingSpeed &&
      kitchen3TypingIndex < kitchen3CurrentText.length
    ) {
      kitchen3TypedText += kitchen3CurrentText.charAt(kitchen3TypingIndex);
      kitchen3TypingIndex++;
      kitchen3LastTypingTime = millis();
    }

    if (kitchen3TypingIndex >= kitchen3CurrentText.length) {
      kitchen3TextDone = true;
    }

    text(kitchen3TypedText, 50, 330);
  }

  //fade logic — only after all text is done and 10s passed
  if (fadeTriggerTime && millis() - fadeTriggerTime > 10000) {
    fadeK3state = "fadeOut";
  }

  if (fadeK3state === "fadeIn") {
    let t = (millis() - fadeK3startTime) / 2000;
    fadeK3alpha = lerp(255, 0, t);
    if (t >= 1) {
      fadeK3alpha = 0;
      fadeK3state = "play";
    }
  } else if (fadeK3state === "fadeOut") {
    fadeK3alpha += 3;
    if (fadeK3alpha >= 255) {
      fadeK3alpha = 255;
      noLoop();
    }
  }

  //fade overlay
  if (fadeK3alpha > 0) {
    noStroke();
    fill(0, 5, 17, fadeK3alpha);
    rectMode(CORNER);
    rect(0, 0, width, height);
  }
   
}

//typing function
function kitchen3StartTyping(newText) {
  kitchen3CurrentText = newText;
  kitchen3TypedText = "";
  kitchen3TypingIndex = 0;
  kitchen3LastTypingTime = millis();
  kitchen3TextDone = false;
}
//————————————————————————————
// FIN
//————————————————————————————





