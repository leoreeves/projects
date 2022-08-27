const canvas = document.querySelector('#game')
const ctx = canvas.getContext('2d')
const ballRadius = 10
const paddle = {
  height: 10,
  width: 75,
}
const bricks = []
const brick = {
  rowCount: 3,
  columnCount: 5,
  width: 75,
  height: 20,
  padding: 10,
  offsetTop: 40,
  offsetLeft: 30,
}
const winningScore = brick.rowCount * brick.columnCount
const keyCodes = {
  left: [37, 65],
  right: [39, 68],
  space: 32,
}
const colours = {
  blue: '#2196F3',
  orange: '#FF9800',
  green: '#4CAF50',
}
const font = '16px Open Sans'
let paused = false
let x = canvas.width / 2
let y = canvas.height - 30
let dx = 2
let dy = -2
let paddleX = (canvas.width - paddle.width) / 2
let rightPressed = false
let leftPressed = false
let score = 0
let lives = 3

function buildBricks() {
  for (let column = 0; column < brick.columnCount; column += 1) {
    bricks[column] = []
    for (let row = 0; row < brick.rowCount; row += 1) {
      bricks[column][row] = { x: 0, y: 0, status: 'unbroken' }
    }
  }
}

function drawBrick(brickX, brickY) {
  ctx.beginPath()
  ctx.rect(brickX, brickY, brick.width, brick.height)
  ctx.fillStyle = colours.orange
  ctx.fill()
  ctx.closePath()
}

function drawBricks() {
  for (let column = 0; column < brick.columnCount; column += 1) {
    for (let row = 0; row < brick.rowCount; row += 1) {
      const selectedBrick = bricks[column][row]
      if (selectedBrick.status === 'unbroken') {
        const brickX = column * (brick.width + brick.padding) + brick.offsetLeft
        const brickY = row * (brick.height + brick.padding) + brick.offsetTop
        selectedBrick.x = brickX
        selectedBrick.y = brickY
        drawBrick(brickX, brickY)
      }
    }
  }
}

function drawBall() {
  ctx.beginPath()
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
  ctx.fillStyle = colours.green
  ctx.fill()
  ctx.closePath()
}

function drawScore() {
  ctx.font = font
  ctx.fillStyle = colours.blue
  ctx.fillText(`Score: ${score}`, 8, 20)
}

function drawLives() {
  ctx.font = font
  ctx.fillStyle = colours.blue
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20)
}

function drawPaddle() {
  ctx.fillStyle = colours.blue
  ctx.beginPath()
  ctx.rect(paddleX, canvas.height - paddle.height, paddle.width, paddle.height)
  ctx.fill()
  ctx.closePath()
}

function initialiseCollisionDetection() {
  for (let column = 0; column < brick.columnCount; column += 1) {
    for (let row = 0; row < brick.rowCount; row += 1) {
      const selectedBrick = bricks[column][row]
      if (selectedBrick.status === 'unbroken') {
        if (
          x > selectedBrick.x &&
          x < selectedBrick.x + brick.width &&
          y > selectedBrick.y &&
          y < selectedBrick.y + brick.height
        ) {
          dy = -dy
          selectedBrick.status = 'broken'
          score += 1
          if (score === winningScore) {
            alert('You Win, Congratulations!')
            document.location.reload()
          }
        }
      }
    }
  }
}

function draw() {
  const drawFunctions = [drawBricks, drawBall, drawPaddle, drawScore, drawLives]
  if (!paused) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawFunctions.forEach((func) => func())
    initialiseCollisionDetection()
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx
    }
    if (y + dy < ballRadius) {
      dy = -dy
    } else if (y + dy > canvas.height - ballRadius) {
      if (x > paddleX && x < paddleX + paddle.width) {
        dy = -dy
      } else {
        lives -= 1
        if (!lives) {
          alert('Game Over')
          document.location.reload()
        } else {
          x = canvas.width / 2
          y = canvas.height - 30
          dx = 2
          dy = -2
          paddleX = (canvas.width - paddle.width) / 2
        }
      }
    }
    if (rightPressed && paddleX < canvas.width - paddle.width) {
      paddleX += 7
    } else if (leftPressed && paddleX > 0) {
      paddleX -= 7
    }
    x += dx
    y += dy
    requestAnimationFrame(draw)
  }
}

function handlePause() {
  if (paused) {
    paused = false
    draw()
  } else {
    paused = true
  }
}

function keyHandler(event) {
  const { keyCode, type } = event
  if (keyCodes.left.includes(keyCode)) {
    leftPressed = type === 'keydown'
  } else if (keyCodes.right.includes(keyCode)) {
    rightPressed = type === 'keydown'
  }
}

;['keydown', 'keyup'].forEach((listener) => {
  document.addEventListener(listener, keyHandler, false)
})
document.body.onkeydown = (event) => {
  if (event.keyCode === keyCodes.space) {
    handlePause()
  }
}

buildBricks()
draw()
