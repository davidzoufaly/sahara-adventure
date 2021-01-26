function randomSkyObject() {
  const rnd = random([1, 2]);

  if (rnd === 1) {
    return cloud1;
  } else if (rnd === 2) {
    return cloud2;
  }
}

class SkyObject {
  constructor(start) {
    this.scale = random(1, 1.7);
    this.skObj = randomSkyObject();
    this.rw = this.skObj.w * this.scale;
    this.rh = this.skObj.h * this.scale;
    this.x = start ? width - random(0, width) : width;
    this.speed = 0;
    this.y = this.rh + random(0, 40);
  }

  speedUp(score) {
    if (this.speed < (gameSpeed / 3) * 2) {
      this.speed = gameSpeed / 3 + score / 3000;
    }
  }

  move() {
    this.x -= this.speed;
  }

  show() {
      image(this.skObj.img, this.x, this.y, this.rw, this.rh);
  }
}
