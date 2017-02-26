const screen = document.querySelector('.screen');

// Clear buttons
const allClear = document.querySelector('.all-clear');
const deleteEntry = document.querySelector('.delete-entry');

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

// Array for event listeners
const numberButtons = [one, two, three, four, five, six, seven, eight, nine, zero];

// Operator buttons
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const equals = document.querySelector('.equals');
const period = document.querySelector('.period');

// Event listeners
allClear.addEventListener('click', () => {
  screen.innerHTML = 0;
});

deleteEntry.addEventListener('click', () => {
  if (screen.innerHTML.length === 1) {
    screen.innerHTML = 0;
  } else {
    screen.innerHTML = screen.innerHTML.slice(0, -1);
  }
});

numberButtons.forEach((item) => {
  item.addEventListener('click', () => {
    if (screen.innerHTML === '0') {
      screen.innerHTML = item.innerHTML;
    } else {
      screen.innerHTML += item.innerHTML;
    }
    // Unfocus button after click
    item.blur();
  });
});

minus.addEventListener('click', () => {
  if (screen.innerHTML.slice(-1) !== '-') {
    screen.innerHTML += '-';
  }
  minus.blur();
});

plus.addEventListener('click', () => {
  if (screen.innerHTML.slice(-1) !== '+') {
    screen.innerHTML += '+';
  }
  plus.blur();
});

divide.addEventListener('click', () => {
  if (screen.innerHTML.slice(-1) !== '÷') {
    screen.innerHTML += '÷';
  }
  divide.blur();
});

multiply.addEventListener('click', () => {
  if (screen.innerHTML.slice(-1) !== 'x') {
    screen.innerHTML += 'x';
  }
  multiply.blur();
});

period.addEventListener('click', () => {
  if (screen.innerHTML.slice(-1) !== '.') {
    screen.innerHTML += '.';
  }
  period.blur();
});

equals.addEventListener('click', () => {
  let calc = screen.innerHTML;
  calc = calc.replace(/[x]/g, '*').replace(/[÷]/g, '/');
  const calculation = eval(calc);
  if (String(calculation).length > 7) {
    screen.innerHTML = calculation.toExponential(1);
  } else {
    screen.innerHTML = calculation;
  }
});
