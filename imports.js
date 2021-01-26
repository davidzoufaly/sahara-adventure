function preload() {
  obstacle0 = {
    img: loadImage("./assets/obstacles/cave.png"),
    w: 83 * 3,
    h: 23 * 3,
  };
  obstacle1 = {
    img: loadImage("./assets/obstacles/hill1.png"),
    w: 32 * 2,
    h: 15 * 2,
  };
  obstacle2 = {
    img: loadImage("./assets/obstacles/hill2.png"),
    w: 34 * 2,
    h: 13 * 2,
  };
  obstacle3 = {
    img: loadImage("./assets/obstacles/hill3.png"),
    w: 26 * 2,
    h: 27 * 2,
  };
  obstacle4 = {
    img: loadImage("./assets/obstacles/hill4.png"),
    w: 36 * 2,
    h: 33 * 2,
  };
  obstacle5 = {
    img: loadImage("./assets/obstacles/tophill.png"),
    w: 62 * 4,
    h: 83 * 4,
    y: 65,
  };
  obstacle6 = {
    img: loadImage("./assets/obstacles/sign.png"),
    w: 53,
    h: 55,
  };

  bhObj1 = {
    img: loadImage("./assets/behindObjects/bh-1.png"),
    w: 27,
    h: 24.5,
    sky: true,
  };
  bhObj2 = {
    img: loadImage("./assets/behindObjects/bh-2.png"),
    w: 109,
    h: 83,
    sky: true,
  };
  bhObj3 = {
    img: loadImage("./assets/behindObjects/bh-3.png"),
    w: 50.5,
    h: 69,
  };
  bhObj4 = {
    img: loadImage("./assets/behindObjects/bh-4.png"),
    w: 95,
    h: 38.5,
  };
  bhObj5 = {
    img: loadImage("./assets/behindObjects/bh-5.png"),
    w: 90.5,
    h: 68,
  };
  bhObj6 = {
    img: loadImage("./assets/behindObjects/bh-6.png"),
    w: 61.5,
    h: 33.5,
  };

  spriteRundata = loadJSON("./sprites/run.json");
  spriteRunsheet = loadImage("./assets/elephant/run.png");
  spriteJumpdata = loadJSON("./sprites/jump.json");
  spriteJumpsheet = loadImage("./assets/elephant/jump.png");
  spriteCrouchdata = loadJSON("./sprites/crouch.json");
  spriteCrouchsheet = loadImage("./assets/elephant/crouch.png");

  control = loadImage("./assets/controls/ctrl.png");
  spacebar = loadImage("./assets/controls/spacebar.png");

  bone = { img: loadImage("./assets/groundObjects/bone.png"), w: 30, h: 16 };
  bone2 = { img: loadImage("./assets/groundObjects/bone2.png"), w: 14, h: 16 };
  fish = { img: loadImage("./assets/groundObjects/fish.png"), w: 36, h: 35 };
  fish2 = { img: loadImage("./assets/groundObjects/fish2.png"), w: 32, h: 18 };

  bush = {
    img: loadImage("./assets/foregroundObjects/bush.png"),
    w: 53,
    h: 41,
  };
  grass = {
    img: loadImage("./assets/foregroundObjects/grass.png"),
    w: 66,
    h: 21,
  };
  mice = {
    img: loadImage("./assets/foregroundObjects/mice.png"),
    w: 34,
    h: 14,
  };

  sun = loadImage("./assets/sky/sun.png");
  cloud1 = { img: loadImage("./assets/sky/cloud1.png"), w: 93, h: 51 };
  cloud2 = { img: loadImage("./assets/sky/cloud2.png"), w: 99.5, h: 52 };

  pacifico = loadFont("./Fonts/Pacifico-Regular.ttf");
  avenir = loadFont("./Fonts/Avenir.otf");
}
