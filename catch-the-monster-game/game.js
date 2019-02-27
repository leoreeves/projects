// Draw canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Get images
let backgroundImageReady = false;
const backgroundImage = new Image();
backgroundImage.src = 'img/background.png';
backgroundImage.onload = () => { backgroundImageReady = true; };

let heroImageReady = false;
const heroImage = new Image();
heroImage.src = 'img/hero.png';
heroImage.onload = () => { heroImageReady = true; };

let monsterImageReady = false;
const monsterImage = new Image();
monsterImage.src = 'img/monster.png';
monsterImage.onload = () => { monsterImageReady = true; };

// Game objects
const hero = {
  pixelSpeed: 256,
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

function setHeroStartingPosition() {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;
}

function setMonsterStartingPosition() {
  monster.x = 32 + (Math.random() * (canvas.width - 100));
  monster.y = 32 + (Math.random() * (canvas.height - 100));
}

function resetGame() {
  setHeroStartingPosition();
  setMonsterStartingPosition();
}

function checkIfHeroIsTouchingMonster() {
  if (
    hero.x <= (monster.x + 32)
    && monster.x <= (hero.x + 32)
    && hero.y <= (monster.y + 32)
    && monster.y <= (hero.y + 32)
  ) {
    monstersCaught += 1;
    resetGame();
  }
}


function updateGameObjects(modifier) {
  const position = hero.pixelSpeed * modifier;

  // Player holding up
  if (38 in keysDown) {
    hero.y -= position;
  }
  // Player holding down
  if (40 in keysDown) {
    hero.y += position;
  }
  // Player holding left
  if (37 in keysDown) {
    hero.x -= position;
  }
  // Player holding right
  if (39 in keysDown) {
    hero.x += position;
  }

  checkIfHeroIsTouchingMonster();
}

function renderScore() {
  ctx.fillStyle = 'rgb(250, 250, 250)';
  ctx.font = '24px Helvetica';
  ctx.texAling = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(`Monsters caught: ${monstersCaught}`, 32, 32);
}

function detectHeroCollision() {
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
}

function checkIfImagesAreReady() {
  if (backgroundImageReady) {
    ctx.drawImage(backgroundImage, 0, 0);
  }
  if (heroImageReady) {
    ctx.drawImage(heroImage, hero.x, hero.y);
  }
  if (monsterImageReady) {
    ctx.drawImage(monsterImage, monster.x, monster.y);
  }
}

function renderGame() {
  checkIfImagesAreReady();
  detectHeroCollision();
  renderScore();
}

let then = Date.now();

function startGame() {
  const now = Date.now();
  const delta = now - then;

  updateGameObjects(delta / 1000);
  renderGame();
  then = now;
  window.requestAnimationFrame(startGame);
}

// Cross-browser support for requestAnimationFrame.
const w = window;
window.requestAnimationFrame = w.requestAnimationFrame
  || w.webkitRequestAnimationFrame
  || w.msRequestAnimationFrame
  || w.mozRequestAnimationFrame;

// Start the game
resetGame();
startGame();
