class Elephant {
  constructor() {
    this.r = 70;
    this.x = 50;
    this.y = height - this.r - bottom;
    this.vy = 0;
    this.gravity = 1.6;
    this.runSprite = new Sprite(spriteRundata, spriteRunsheet, 0.1);
    this.jumpSprite = new Sprite(spriteJumpdata, spriteJumpsheet, 0.125);
    this.crouchSprite = new Sprite(spriteCrouchdata, spriteCrouchsheet, 0.1);
    this.showedAnimation = this.runSprite;
    this.crouchDiff = 0;
    this.index = 0;
  }

  jump() {
    if (this.y == height - this.r - bottom) {
      this.vy = -25;
      this.showedAnimation = this.jumpSprite;
      this.reset();
    }
  }

  crouch() {
    if (this.y == height - this.r - bottom) {
      this.crouchDiff = 20;
      this.showedAnimation = this.crouchSprite;
    }
  }

  reset() {
    this.showedAnimation.resetIndex();
  }

  stand() {
    this.crouchDiff = 0;
  }

  hits(obstacle) {
    return collideRectRect(
      this.x,
      this.y + this.crouchDiff,
      this.r,
      this.r,
      obstacle.x,
      obstacle.y,
      obstacle.rw,
      obstacle.rh
    );
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 10, height - this.r - bottom);

    if (this.y === height - this.r - bottom) {
      this.showedAnimation = this.runSprite;
    }
  }

  show() {
    this.showedAnimation.show(this.x, this.y, this.r);
  }
}
