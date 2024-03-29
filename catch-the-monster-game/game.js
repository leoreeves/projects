// Draw canvas
const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
canvas.width = 512
canvas.height = 480
document.body.appendChild(canvas)

// Handle images
let backgroundImageReady = false
const backgroundImage = new Image()
backgroundImage.src = 'img/background.svg'
backgroundImage.onload = () => {
  backgroundImageReady = true
}

let heroImageReady = false
const heroImage = new Image()
heroImage.src = 'img/hero.svg'
heroImage.onload = () => {
  heroImageReady = true
}
heroImage.height = 32
heroImage.width = 32

let monsterImageReady = false
const monsterImage = new Image()
monsterImage.src = 'img/monster.svg'
monsterImage.onload = () => {
  monsterImageReady = true
}

// Handle sounds
const speakerImage = document.querySelector('.speaker')
const runningSound = new Audio('sounds/running.wav')
runningSound.loop = true
let soundEnabled = true

function toggleSound() {
  soundEnabled = !soundEnabled
  speakerImage.src = `img/${soundEnabled ? 'speaker' : 'mute'}.svg`
}

function generateRandomNumberBetweenRange(start, end) {
  return Math.floor(Math.random() * end) + start
}

let monsterDeathSoundNumber = 1

function generateMonsterDeathSound() {
  let randomNumber = generateRandomNumberBetweenRange(1, 4)
  while (randomNumber === monsterDeathSoundNumber) {
    randomNumber = generateRandomNumberBetweenRange(1, 4)
  }
  monsterDeathSoundNumber = randomNumber
  const monsterDeathSound = new Audio(`sounds/monster/death${randomNumber}.wav`)
  monsterDeathSound.volume = 0.15
  monsterDeathSound.play()
}

// Game objects
const hero = {
  pixelSpeed: 256,
  x: 0,
  y: 0,
}

const monster = {
  x: 0,
  y: 0,
}

let monstersCaught = 0

// Handle keyboard controls
const keysDown = {}

document.addEventListener(
  'keydown',
  (e) => {
    const { code } = e
    keysDown[code] = true

    if (soundEnabled && code.includes('Arrow')) {
      runningSound.play()
    }
  },
  false
)

document.addEventListener(
  'keyup',
  (e) => {
    const { code } = e
    delete keysDown[code]

    if (soundEnabled) {
      runningSound.pause()
    }
  },
  false
)

function setHeroStartingPosition() {
  hero.x = canvas.width / 2
  hero.y = canvas.height / 2
}

function setMonsterStartingPosition() {
  const startingPosition = (dimension) => 32 + Math.random() * (canvas[dimension] - 100)
  monster.x = startingPosition('width')
  monster.y = startingPosition('height')
}

function resetGame() {
  setHeroStartingPosition()
  setMonsterStartingPosition()
}

function checkIfHeroIsTouchingMonster() {
  if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
    if (soundEnabled) {
      generateMonsterDeathSound()
    }
    monstersCaught += 1
    resetGame()
  }
}

function updateGameObjects(modifier) {
  const position = hero.pixelSpeed * modifier

  if ('ArrowUp' in keysDown) {
    hero.y -= position
  }
  if ('ArrowDown' in keysDown) {
    hero.y += position
  }
  if ('ArrowLeft' in keysDown) {
    hero.x -= position
  }
  if ('ArrowRight' in keysDown) {
    hero.x += position
  }

  checkIfHeroIsTouchingMonster()
}

function renderScore() {
  context.fillStyle = 'rgb(250, 250, 250)'
  context.font = '24px Helvetica'
  context.texAling = 'left'
  context.textBaseline = 'top'
  context.fillText(`Monsters caught: ${monstersCaught}`, 32, 32)
}

function detectHeroCollision() {
  if (hero.x >= canvas.width - heroImage.width * 2) {
    hero.x = canvas.width - heroImage.width * 2
  }
  if (hero.x <= heroImage.width) {
    hero.x = heroImage.width + 10
  }
  if (hero.y >= canvas.height - heroImage.height * 2) {
    hero.y = canvas.height - heroImage.height * 2
  }
  if (hero.y <= heroImage.height) {
    hero.y = heroImage.height + 10
  }
  if (hero.x < 0) {
    hero.x = 0
  }
  if (hero.y < 0) {
    hero.y = 0
  }
}

function checkIfImagesAreReady() {
  if (backgroundImageReady) {
    context.drawImage(backgroundImage, 0, 0)
  }
  if (heroImageReady) {
    context.drawImage(heroImage, hero.x, hero.y, 32, 32)
  }
  if (monsterImageReady) {
    context.drawImage(monsterImage, monster.x, monster.y, 32, 32)
  }
}

function renderGame() {
  checkIfImagesAreReady()
  detectHeroCollision()
  renderScore()
}

let then = Date.now()

function startGame() {
  const now = Date.now()
  const delta = now - then

  updateGameObjects(delta / 1000)
  renderGame()
  then = now
  window.requestAnimationFrame(startGame)
}

// Cross-browser support for requestAnimationFrame.
const w = window
window.requestAnimationFrame =
  w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame

// Handle the game
resetGame()
startGame()
