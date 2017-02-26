const screen = document.querySelector('.screen');
// Clear buttons
const allClear = document.querySelector('.all-clear');

// Number buttons
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const period = document.querySelector('.period');

// Operator buttons
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const equals = document.querySelector('.equals');

const numberButtons = [one, two, three, four, five, six, seven, eight, nine, zero, minus, plus,
  divide, multiply];

// Event listeners
allClear.addEventListener('click', () => {
  screen.innerHTML = 0;
});

numberButtons.forEach((item) => {
  item.addEventListener('click', () => {
    if (screen.innerHTML === '0') {
      screen.innerHTML = item.innerHTML;
    } else {
      screen.innerHTML += item.innerHTML;
    }
    item.blur();
  });
});

period.addEventListener('click', () => {
  if (screen.innerHTML.slice(-1) !== '.') {
    screen.innerHTML += '.';
  }
});

equals.addEventListener('click', () => {
  let calc = screen.innerHTML;
  calc = calc.replace(/[x]/g, '*').replace(/[÷]/g, '/');
  const calculation = eval(calc);
  console.log(calculation);
  if (String(calculation).length > 7) {
    screen.innerHTML = calculation.toExponential(1);
  } else {
    screen.innerHTML = calculation;
  }
});
