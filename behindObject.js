function randomBehindObject() {
  const rnd = random([1, 2, 3, 4, 5, 6]);

  if (rnd === 1) {
    return bhObj1;
  } else if (rnd === 2) {
    return bhObj2;
  } else if (rnd === 3) {
    return bhObj3;
  } else if (rnd === 4) {
    return bhObj4;
  } else if (rnd === 5) {
    return bhObj5;
  } else if (rnd === 6) {
    return bhObj6;
  }
}

class BehindObject {
  constructor(start) {
    this.scale = random(1, 1.4)
    this.bhObj = randomBehindObject();
    this.rw = this.bhObj.w * this.scale;
    this.rh = this.bhObj.h * this.scale;
    this.x = start ? width - random(0, width) : width;
    this.speed = 0;
    this.y = this.bhObj.sky
      ? height - this.rh - bottom - random(70, 100)
      : height - this.rh - bottom;
  }

  speedUp(score) {
    if (this.speed < gameSpeed) {
      this.speed = gameSpeed / 2 + score / 2000;
    }
  }

  move() {
    this.x -= this.speed;
  }

  show() {
    image(this.bhObj.img, this.x, this.y, this.rw, this.rh);
  }
}
