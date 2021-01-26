function randomGroundObject() {
  const rnd = random([1, 2, 3, 4]);

  if (rnd === 1) {
    return bone;
  } else if (rnd === 2) {
    return fish;
  } else if (rnd === 3) {
    return bone2;
  } else if (rnd === 4) {
    return fish2;
  }
}

class GroundObject {
  constructor(start) {
    this.scale = random(1, 1.4);
    this.grObj = randomGroundObject();
    this.rw = this.grObj.w * this.scale;
    this.rh = this.grObj.h * this.scale;
    this.x = start ? width - random(0, width) : width;
    this.speed = 0;
    this.y = height - this.rh - random(10, 30);
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
    image(this.grObj.img, this.x, this.y, this.rw, this.rh);
  }
}
