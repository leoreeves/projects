// Create canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
let bgReady = false;
const bgImage = new Image();
bgImage.onload = function bgLoad() {
  bgReady = true;
};
bgImage.src = 'img/background.png';

// Hero image
let heroReady = false;
const heroImage = new Image();
heroImage.onload = function heroLoad() {
  heroReady = true;
};
heroImage.src = 'img/hero.png';

// Monster image
let monsterReady = false;
const monsterImage = new Image();
monsterImage.onload = function monsterLoad() {
  monsterReady = true;
};
monsterImage.src = 'img/monster.png';

// Game objects
const hero = {
  // pixels per second
  speed: 256,
  x: 0,
  y: 0,
};

const monster = {
  x: 0,
  y: 0,
};

let monstersCaught = 0;

// Handle keyboard controls
const keysDown = {};

document.addEventListener('keydown', (e) => {
  keysDown[e.keyCode] = true;
}, false);

document.addEventListener('keyup', (e) => {
  delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster.
const reset = function reset() {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;

  // Put the monster somewhere on the screen randomly.
  monster.x = 32 + (Math.random() * (canvas.width - 100));
  monster.y = 32 + (Math.random() * (canvas.height - 100));
};

// Update game objects
const update = function update(modifier) {
  // Player holding up
  if (38 in keysDown) {
    hero.y -= hero.speed * modifier;
  }
  // Player holding down
  if (40 in keysDown) {
    hero.y += hero.speed * modifier;
  }
  // Player holiding left
  if (37 in keysDown) {
    hero.x -= hero.speed * modifier;
  }
  // Player holding right
  if (39 in keysDown) {
    hero.x += hero.speed * modifier;
  }
  // Are they touching?
  if (
    hero.x <= (monster.x + 32)
    && monster.x <= (hero.x + 32)
    && hero.y <= (monster.y + 32)
    && monster.y <= (hero.y + 32)
    ) {
    monstersCaught += 1;
    reset();
  }
};

// Draw everything
const render = function render() {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }
  if (heroReady) {
    ctx.drawImage(heroImage, hero.x, hero.y);
  }
  if (monsterReady) {
    ctx.drawImage(monsterImage, monster.x, monster.y);
  }

  /** Collision detection
  * http://stackoverflow.com/a/21482699/2588066
  */
  if (hero.x >= canvas.width - heroImage.width * 2) {
    hero.x = canvas.width - heroImage.width * 2;
  }
  if (hero.x <= heroImage.width) {
    hero.x = heroImage.width + 10;
  }
  if (hero.y >= canvas.height - heroImage.height * 2) {
    hero.y = canvas.height - heroImage.height * 2;
  }
  if (hero.y <= heroImage.height) {
    hero.y = heroImage.height + 10;
  }
  if (hero.x < 0) {
    hero.x = 0;
  }
  if (hero.y < 0) {
    hero.y = 0;
  }

  // Score
  ctx.fillStyle = 'rgb(250, 250, 250)';
  ctx.font = '24px Helvetica';
  ctx.texAling = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(`Monsters caught: ${monstersCaught}`, 32, 32);
};

// The main game loop
let then = Date.now();
const main = function mainLoop() {
  const now = Date.now();
  const delta = now - then;

  update(delta / 1000);
  render();
  then = now;
  // Request to do this again ASAP.
  window.requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame.
const w = window;
window.requestAnimationFrame =
  w.requestAnimationFrame || w.webkitRequestAnimationFrame ||
  w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Start the game
reset();
main();
