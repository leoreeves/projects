const canvas = document.querySelector('#my-canvas');
const ctx = canvas.getContext('2d');
const ballRadius = 10;
const paddleHeight = 10;
const paddleWidth = 75;
const bricks = [];
const brick = {
  rowCount: 3,
  columnCount: 5,
  width: 75,
  height: 20,
  padding: 10,
  offsetTop: 40,
  offsetLeft: 30,
};
const keyCodes = {
  left: [37, 65],
  right: [39, 68],
  space: 32,
};
const colours = {
  blue: '#2196F3',
  orange: '#FF9800',
  green: '#4CAF50',
};
const font = '16px Open Sans';
let paused = false;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;
let score = 0;
let lives = 3;

for (let c = 0; c < brick.columnCount; c += 1) {
  bricks[c] = [];
  for (let r = 0; r < brick.rowCount; r += 1) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

function drawBricks() {
  for (let c = 0; c < brick.columnCount; c += 1) {
    for (let r = 0; r < brick.rowCount; r += 1) {
      if (bricks[c][r].status === 1) {
        const brickX = (c * (brick.width + brick.padding)) + brick.offsetLeft;
        const brickY = (r * (brick.height + brick.padding)) + brick.offsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brick.width, brick.height);
        ctx.fillStyle = colours.orange;
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = colours.green;
  ctx.fill();
  ctx.closePath();
}

function collisionDetection() {
  for (let c = 0; c < brick.columnCount; c += 1) {
    for (let r = 0; r < brick.rowCount; r += 1) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (x > b.x && x < b.x + brick.width && y > b.y && y < b.y + brick.height) {
          dy = -dy;
          b.status = 0;
          score += 1;
          if (score === brick.rowCount * brick.columnCount) {
            alert('You Win, Congratulations!');
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawScore() {
  ctx.font = font;
  ctx.fillStyle = colours.blue;
  ctx.fillText(`Score: ${score}`, 8, 20);
}

function drawLives() {
  ctx.font = font;
  ctx.fillStyle = colours.blue;
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}

function drawPaddle() {
  ctx.fillStyle = colours.blue;
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fill();
  ctx.closePath();
}

function draw() {
  if (!paused) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawLives();
    drawScore();
    collisionDetection();
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
    if (y + dy < ballRadius) {
      dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
      if (x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
      } else {
        lives -= 1;
        if (!lives) {
          alert('Game Over');
          document.location.reload();
        } else {
          x = canvas.width / 2;
          y = canvas.height - 30;
          dx = 2;
          dy = -2;
          paddleX = (canvas.width - paddleWidth) / 2;
        }
      }
    }
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
      paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
      paddleX -= 7;
    }
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
  }
}

function handlePause() {
  if (paused) {
    paused = false;
    draw();
  } else {
    paused = true;
  }
}

function keyHandler(event) {
  const { keyCode, type } = event;
  if (keyCodes.left.includes(keyCode)) {
    leftPressed = type === 'keydown';
  } else if (keyCodes.right.includes(keyCode)) {
    rightPressed = type === 'keydown';
  }
}

['keydown', 'keyup'].forEach((listener) => {
  document.addEventListener(listener, keyHandler, false);
});
document.body.onkeydown = (event) => {
  if (event.keyCode === keyCodes.space) {
    handlePause();
  }
};

draw();
