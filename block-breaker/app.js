const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')
const ball = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  directionX: 2,
  directionY: -2,
  radius: 10,
}
const paddle = {
  height: 10,
  width: 75,
}
paddle.x = (canvas.width - paddle.width) / 2
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
let rightPressed = false
let leftPressed = false
let score = 0
let lives = 3

/**
 * Calls all functions in array
 * @param {array} functions
 */
function callFunctionsInArray(functions) {
  functions.forEach((fn) => fn())
}

/**
 * Generates bricks arranged into columns and rows
 * @returns {Array} Returns an array of arrays of bricks
 */
function generateBricks() {
  for (let column = 0; column < brick.columnCount; column += 1) {
    bricks[column] = []
    for (let row = 0; row < brick.rowCount; row += 1) {
      bricks[column][row] = { x: 0, y: 0, status: 'unbroken' }
    }
  }
}

/**
 * Renders brick on canvas
 * @param {Number} brickX
 * @param {Number} brickY
 */
function renderBrick(brickX, brickY) {
  context.beginPath()
  context.rect(brickX, brickY, brick.width, brick.height)
  context.fillStyle = colours.orange
  context.fill()
  context.closePath()
}

/**
 * Renders unbroken bricks on canvas
 * @param {Number} brickX
 * @param {Number} brickY
 */
function renderUnbrokenBricks() {
  for (let column = 0; column < brick.columnCount; column += 1) {
    for (let row = 0; row < brick.rowCount; row += 1) {
      const selectedBrick = bricks[column][row]
      if (selectedBrick.status === 'unbroken') {
        const brickX = column * (brick.width + brick.padding) + brick.offsetLeft
        const brickY = row * (brick.height + brick.padding) + brick.offsetTop
        selectedBrick.x = brickX
        selectedBrick.y = brickY
        renderBrick(brickX, brickY)
      }
    }
  }
}

/**
 * Renders ball on canvas
 */
function renderBall() {
  const startAngle = 0
  const endAngle = Math.PI * 2
  context.beginPath()
  context.arc(ball.x, ball.y, ball.radius, startAngle, endAngle)
  context.fillStyle = colours.green
  context.fill()
  context.closePath()
}

/**
 * Renders score on canvas
 */
function renderScore() {
  const scoreX = 8
  const scoreY = 20
  context.font = font
  context.fillStyle = colours.blue
  context.fillText(`Score: ${score}`, scoreX, scoreY)
}

/**
 * Renders lives on canvas
 */
function renderLives() {
  const livesX = canvas.width - 65
  const livesY = 20
  context.font = font
  context.fillStyle = colours.blue
  context.fillText(`Lives: ${lives}`, livesX, livesY)
}

/**
 * Renders pandle on canvas
 */
function renderPaddle() {
  context.fillStyle = colours.blue
  context.beginPath()
  context.rect(paddle.x, canvas.height - paddle.height, paddle.width, paddle.height)
  context.fill()
  context.closePath()
}

/**
 * Handles when the player wins the game
 */
function handleWin() {
  alert('You Win, Congratulations!')
  document.location.reload()
}

/**
 * Handles when the ball collides with bricks
 */
function handleBrickCollisions() {
  for (let column = 0; column < brick.columnCount; column += 1) {
    for (let row = 0; row < brick.rowCount; row += 1) {
      const selectedBrick = bricks[column][row]
      if (selectedBrick.status === 'unbroken') {
        if (
          ball.x > selectedBrick.x &&
          ball.x < selectedBrick.x + brick.width &&
          ball.y > selectedBrick.y &&
          ball.y < selectedBrick.y + brick.height
        ) {
          ball.directionY = -ball.directionY
          selectedBrick.status = 'broken'
          score += 1
          const winningScore = brick.rowCount * brick.columnCount
          if (score === winningScore) {
            handleWin()
          }
        }
      }
    }
  }
}

/**
 * Clears canvas content to prevent the ball leaving a trail
 */
function removeBallTrail() {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

/**
 * Handles all of the rendering
 */
function handleRenderFunctions() {
  const renderFunctions = [renderUnbrokenBricks, renderBall, renderPaddle, renderScore, renderLives]
  callFunctionsInArray(renderFunctions)
}

/**
 * Handles when the ball collides with the left and right wall
 */
function handleBallXCollision() {
  if (ball.x + ball.directionX > canvas.width - ball.radius || ball.x + ball.directionX < ball.radius) {
    ball.directionX = -ball.directionX
  }
}

/**
 * Handles when the game ends
 */
function handleGameOver() {
  alert('Game Over')
  document.location.reload()
}

/**
 * Resets ball and paddle to their original state
 */
function resetBallAndPaddlePosition() {
  ball.x = canvas.width / 2
  ball.y = canvas.height - 30
  ball.directionX = 2
  ball.directionY = -2
  paddle.x = (canvas.width - paddle.width) / 2
}

/**
 * Handles when the ball collides with the ceiling and floor
 */
function handleBallYCollision() {
  if (ball.y + ball.directionY < ball.radius) {
    ball.directionY = -ball.directionY
  } else if (ball.y + ball.directionY > canvas.height - ball.radius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.directionY = -ball.directionY
    } else {
      lives -= 1
      if (!lives) {
        handleGameOver()
      } else {
        resetBallAndPaddlePosition()
      }
    }
  }
}

/**
 * Handles all of the collisions
 */
function handleCollisionFunctions() {
  const collisionFunctions = [handleBrickCollisions, handleBallXCollision, handleBallYCollision]
  callFunctionsInArray(collisionFunctions)
}

/**
 * Handles position of paddle
 */
function handlePaddlePosition() {
  if (rightPressed && paddle.x < canvas.width - paddle.width) {
    paddle.x += 7
  } else if (leftPressed && paddle.x > 0) {
    paddle.x -= 7
  }
}

/**
 * Handles position of ball
 */
function handleBallPosition() {
  ball.x += ball.directionX
  ball.y += ball.directionY
}

/**
 * Handles all of the positions
 */
function handlePositionFunctions() {
  const collisionFunctions = [handlePaddlePosition, handleBallPosition]
  callFunctionsInArray(collisionFunctions)
}

function render() {
  if (!paused) {
    removeBallTrail()
    handleRenderFunctions()
    handleCollisionFunctions()
    handlePositionFunctions()
    requestAnimationFrame(render)
  }
}

/**
 * Handles pausing the game
 */
function handlePause() {
  if (paused) {
    paused = false
    render()
  } else {
    paused = true
  }
}

/**
 * Handles left and right keydown events
 * @param {event} event
 */
function handleLeftAndRightKeydown(event) {
  const { keyCode, type } = event
  if (keyCodes.left.includes(keyCode)) {
    leftPressed = type === 'keydown'
  } else if (keyCodes.right.includes(keyCode)) {
    rightPressed = type === 'keydown'
  }
}

// document functions
;['keydown', 'keyup'].forEach((listener) => {
  document.addEventListener(listener, handleLeftAndRightKeydown, false)
})
document.body.onkeydown = (event) => {
  if (event.keyCode === keyCodes.space) {
    handlePause()
  }
}

generateBricks()
render()
