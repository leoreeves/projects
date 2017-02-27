const screen = document.querySelector('.screen');
const allClear = document.querySelector('.all-clear');
const deleteEntry = document.querySelector('.delete-entry');
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
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const period = document.querySelector('.period');
const equals = document.querySelector('.equals');

// Arrays for adding event listeners
const numberButtons = [one, two, three, four, five, six, seven, eight, nine, zero];
const operatorButtons = [minus, plus, divide, multiply, period];

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
    // Prevent double clicking - unfocus button after click
    item.blur();
  });
});

operatorButtons.forEach((item) => {
  item.addEventListener('click', () => {
    // Stop if error message displayed
    if (screen.innerHTML === 'Error') {
      return 'Error';
    }
    // Allows minus numbers to be entered
    if (screen.innerHTML === '0' && item.innerHTML === '-') {
      screen.innerHTML = '-';
    // Disallow chaining and duplicate operators
    } else if ((screen.innerHTML.slice(-1)).match(/[÷x+-]/g)) {
      screen.innerHTML = screen.innerHTML.slice(0, -1);
      screen.innerHTML += item.innerHTML;
    } else if (!(screen.innerHTML.slice(-1)).match(/[\.÷x+-]/g)) {
      screen.innerHTML += item.innerHTML;
    }
    item.blur();
  });
});

equals.addEventListener('click', () => {
  let calc = screen.innerHTML;
  calc = calc.replace(/[x]/g, '*').replace(/[÷]/g, '/');
  try {
    const calculation = eval(calc);
    // Makes the result fit the screen
    if (String(calculation).length > 7) {
      if (String(calculation.toFixed(2)).length > 7) {
        screen.innerHTML = calculation.toExponential(1);
      } else {
        screen.innerHTML = calculation.toFixed(2);
      }
    } else {
      screen.innerHTML = calculation;
    }
  }
  catch(err) {
    const errorEntry = screen.innerHTML;
    screen.innerHTML = 'Error';
    setTimeout(() => {
      screen.innerHTML = errorEntry;
    }, 1000);
  }  
});
