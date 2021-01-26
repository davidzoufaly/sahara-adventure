function randomObstacle() {
  const rnd = random([1, 2, 3, 4, 5]);

  if (rnd === 1) {
    return obstacle1;
  } else if (rnd === 2) {
    return obstacle2;
  } else if (rnd === 3) {
    return obstacle3;
  } else if (rnd === 4) {
    return obstacle4;
  } else if (rnd === 5) {
    return obstacle5;
  }
}

class Obstacle {
  constructor() {
    this.obstacle = randomObstacle();
    this.x = width + 100;
    this.speed = 0;
    this.rw = this.obstacle.w;
    this.rh = this.obstacle.h;
    this.y = height - this.rh - bottom - this.obstacle.y || height - this.rh - bottom + 2;
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
    if (this.obstacle === obstacle5) {
      image(
        obstacle6.img,
        this.x - 100,
        height - obstacle6.h - bottom,
        obstacle6.w,
        obstacle6.h
      );

      image(
        obstacle0.img,
        this.x,
        height - obstacle0.h - bottom,
        obstacle0.w,
        obstacle0.h
      );
    }

    image(this.obstacle.img, this.x, this.y, this.rw, this.rh);
  }
}
