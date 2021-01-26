function randomForegroundObject() {
  const rnd = random([1, 2, 3]);

  if (rnd === 1) {
    return bush;
  } else if (rnd === 2) {
    return grass;
  } else if (rnd === 3) {
    return mice;
  }
}

class ForegroundObject {
  constructor(start) {
    this.scale = random(0.7, 1);
    this.frObj = randomForegroundObject();
    this.rw = this.frObj.w * this.scale;
    this.rh = this.frObj.h * this.scale;
    this.x = start ? width - random(0, width) : width;
    this.speed = 0;
    this.y = height - this.rh - bottom + 1;
  }

  speedUp(score) {
    if (this.speed < gameSpeed * 2) {
      this.speed = gameSpeed + score / 1000;
    }
  }

  move() {
    this.x -= this.speed;
  }

  show() {
    image(this.frObj.img, this.x, this.y, this.rw, this.rh);
  }
}
