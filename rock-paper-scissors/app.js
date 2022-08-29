const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const userScoreSpan = document.querySelector('.user-score')
const cpuScoreSpan = document.querySelector('.cpu-score')
const cpuChoiceSpan = document.querySelector('.cpu-choice')
const result = document.querySelector('.result')
const choiceButtons = [rockButton, paperButton, scissorsButton]
const cpuWin = 'CPU wins'
const userWin = 'You win'
let userScore = 0
let cpuScore = 0

function updateScoreAndWinner(winner) {
  if (winner === 'cpu') {
    cpuScore += 1
    result.innerHTML = cpuWin
  } else if (winner === 'user') {
    userScore += 1
    result.innerHTML = userWin
  }
}

function calculateWin(player1Choice, player2Choice) {
  return (
    (player1Choice === 'rock' && player2Choice === 'scissors') ||
    (player1Choice === 'paper' && player2Choice === 'rock') ||
    (player1Choice === 'scissors' && player2Choice === 'paper')
  )
}

function updateScoresInnerHTML() {
  userScoreSpan.innerHTML = userScore
  cpuScoreSpan.innerHTML = cpuScore
}

choiceButtons.forEach((event) =>
  event.addEventListener('click', () => {
    const tools = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const cpuChoice = tools[randomNum]
    const userChoice = event.value
    cpuChoiceSpan.innerHTML = `<i class="fa fa-hand-${cpuChoice}-o" aria-hidden="true"></i>`

    // Game logic
    const results = {
      draw: cpuChoice === userChoice,
      cpuWin: calculateWin(cpuChoice, userChoice),
      userWin: calculateWin(userChoice, cpuChoice),
    }
    if (results.draw) {
      result.innerHTML = 'Draw'
    } else if (results.cpuWin) {
      updateScoreAndWinner('cpu')
    } else if (results.userWin) {
      updateScoreAndWinner('user')
    }
    updateScoresInnerHTML()
  })
)
