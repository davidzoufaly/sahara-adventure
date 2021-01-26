let elephant;
let elephantImg;
let obstacleImg;
let backgroundImg;
let obstacles = [];
let behindObjects = [];
let groundObjects = [];
let skyObjects = [];
let foregroundObjects = [];
let isGameOver = true;
let spawnTime = 2;
let startTime;
let spritesheet;
let spritedata;
let time;
let score;
const bottom = 88;
const gameSpeed = 7;
let isFirstStart = true;
let currentBest = 0;

function firstStart() {
  isFirstStart = false;
  isGameOver = false;
  startTime = Date.now();
  time = null;
  loop();
}

function reset() {
  isGameOver = false;
  obstacles = [];
  behindObjects = [];
  groundObjects = [];
  skyObjects = [];
  foregroundObjects = [];
  startTime = Date.now();
  time = null;
  elephant = new Elephant();
  behindObjects.push(new BehindObject(true));
  foregroundObjects.push(new ForegroundObject(true));
  groundObjects.push(new GroundObject(true));
  skyObjects.push(new SkyObject(true));
  skyObjects.push(new SkyObject(true));
  loop();
}

function setup() {
  frameRate(60);
  let myCanvas = createCanvas(714, 360);
  myCanvas.parent("#canvas");
  elephant = new Elephant();
  behindObjects.push(new BehindObject(true));
  foregroundObjects.push(new ForegroundObject(true));
  groundObjects.push(new GroundObject(true));
  skyObjects.push(new SkyObject(true));
  skyObjects.push(new SkyObject(true));
  noLoop();
}

function keyPressed() {
  if (key == " " || keyCode == UP_ARROW) {
    if (isGameOver) {
      if (isFirstStart) {
        firstStart();
      } else {
        reset();
      }
    } else {
      elephant.jump();
    }
  }

  if (keyCode == DOWN_ARROW || keyCode == CONTROL) {
    elephant.reset();
  }
}

function addResult(score, resArr) {
  if (score > currentBest) {
    currentBest = score;
    document.querySelector('.current-best').textContent = score;
  }
  if (score > resArr[resArr.length - 1].score) {
    let name = prompt("You made it to scoreboard. Enter your name:") || 'Fantomas';
    resArr.pop();
    resArr.push({ name, score });
    createScoreboard(resArr);
    saveResult(resArr);
  }
}

// Harder over time
function spawn(score) {
  const def = 2000;
  const variationNum = 500;
  const minNumber = 800;
  let nextNumber = def - score / 3;

  if (nextNumber > minNumber) {
    return random(nextNumber, nextNumber + variationNum);
  } else {
    return random(minNumber, minNumber + variationNum);
  }
}

function draw() {
  const dateNow = Date.now();
  score = isGameOver ? 0 : Math.floor((dateNow - startTime) / 8);

  // Optimalization
  if (obstacles.length > 10) {
    obstacles.shift();
  }

  // Optimalization
  if (behindObjects.length > 15) {
    behindObjects.shift();
  }

  // Optimalization
  if (groundObjects.length > 15) {
    groundObjects.shift();
  }

  // Optimalization
  if (foregroundObjects.length > 15) {
    foregroundObjects.shift();
  }

  // Optimalization
  if (skyObjects.length > 15) {
    skyObjects.shift();
  }

  window.onblur = function() {
    isGameOver = true;
    noLoop();
  };  

  background("#D9DEDE");
  image(sun, width - 100, 35, 80, 80);

  if (!time) {
    time = dateNow;
  }

  if (dateNow - time > spawn(score)) {
    obstacles.push(new Obstacle());
    time = null;
  }

  if (random(1) < 0.01) {
    behindObjects.push(new BehindObject());
  }

  if (random(1) < 0.01) {
    foregroundObjects.push(new ForegroundObject());
  }

  if (random(1) < 0.01) {
    groundObjects.push(new GroundObject());
  }

  if (random(1) < 0.01) {
    skyObjects.push(new SkyObject());
  }

  for (let s of skyObjects) {
    s.move();
    s.show();
    s.speedUp(score);
  }

  for (let b of behindObjects) {
    b.move();
    b.show();
    b.speedUp(score);
  }

  for (let o of obstacles) {
    o.move();
    o.show();
    o.speedUp(score);
    if (elephant.hits(o)) {
      isGameOver = true;
      noLoop();
      addResult(score, resArr);
    }
  }

  for (let f of foregroundObjects) {
    f.move();
    f.show();
    f.speedUp(score);
  }

  if (keyIsDown(DOWN_ARROW) || keyIsDown(CONTROL)) {
    elephant.crouch();
  } else {
    elephant.stand();
  }

  elephant.show();
  elephant.move();

  strokeWeight(bottom);
  stroke("#FFC77C");
  line(0, height - bottom / 2, width, height - bottom / 2);

  strokeWeight(4);
  stroke("#FFB550");
  line(0, height - bottom + 2, width, height - bottom + 2);

  for (let g of groundObjects) {
    g.move();
    g.show();
    g.speedUp(score);
  }

  strokeWeight(0);
  textSize(16);
  textFont(avenir);
  fill("#6B6B71");
  text(`Score: ${score}`, width - 120, 25);

  if (isGameOver) {
    strokeWeight(0);
    textFont(pacifico, 65);
    fill("#fff");

    background("rgba(0,0,0,0.25)");
    text(
      `Spacebar to ${isFirstStart ? "start" : "restart"}`,
      isFirstStart ? 115 : 85,
      height / 2 + 20
    );
  }
}
