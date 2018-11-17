const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const userScoreSpan = document.querySelector('.user-score');
const cpuScoreSpan = document.querySelector('.cpu-score');
const cpuChoiceSpan = document.querySelector('.cpu-choice');
const result = document.querySelector('.result');
const choiceButtons = [rockButton, paperButton, scissorsButton];
const cpuWin = 'CPU wins';
const userWin = 'You win';
let userScore = 0;
let cpuScore = 0;

choiceButtons.forEach(e => e.addEventListener('click', () => {
  const tools = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * 3);
  const cpuChoice = tools[randomNum];
  const userChoice = e.value;
  cpuChoiceSpan.innerHTML = `<i class="fa fa-hand-${cpuChoice}-o" aria-hidden="true"></i>`;
  // Game logic
  if (cpuChoice === userChoice) {
    result.innerHTML = 'Draw';
  } else if (cpuChoice === 'rock') {
    if (userChoice === 'scissors') {
      cpuScore += 1;
      result.innerHTML = cpuWin;
    } else if (userChoice === 'paper') {
      userScore += 1;
      result.innerHTML = userWin;
    }
  } else if (cpuChoice === 'paper') {
    if (userChoice === 'rock') {
      cpuScore += 1;
      result.innerHTML = cpuWin;
    } else if (userChoice === 'scissors') {
      userScore += 1;
      result.innerHTML = userWin;
    }
  } else if (cpuChoice === 'scissors') {
    if (userChoice === 'paper') {
      cpuScore += 1;
      result.innerHTML = cpuWin;
    } else if (userChoice === 'rock') {
      userScore += 1;
      result.innerHTML = userWin;
    }
  }
  // Update scores
  userScoreSpan.innerHTML = userScore;
  cpuScoreSpan.innerHTML = cpuScore;
}));
