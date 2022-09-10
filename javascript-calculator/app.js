/**
 * Defines query selector variables
 */
const [
  screen,
  allClear,
  deleteEntry,
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  minus,
  plus,
  divide,
  multiply,
  period,
  equals,
] = [
  'screen',
  'all-clear',
  'delete-entry',
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'minus',
  'plus',
  'divide',
  'multiply',
  'period',
  'equals',
].map((selector) => document.querySelector(`.${selector}`))

// Arrays for adding event listeners
const numberButtons = [one, two, three, four, five, six, seven, eight, nine, zero]
const operatorButtons = [minus, plus, divide, multiply, period]

function clearAllValues() {
  screen.innerHTML = 0
}

function deleteValue() {
  if (screen.innerHTML.length === 1) {
    clearAllValues()
  } else {
    screen.innerHTML = screen.innerHTML.slice(0, -1)
  }
}

function addValue(item) {
  if (screen.innerHTML === '0') {
    screen.innerHTML = item.innerHTML
  } else {
    screen.innerHTML += item.innerHTML
  }
  // need to prevent double clicking
  item.blur()
}

allClear.addEventListener('click', () => {
  clearAllValues()
})

deleteEntry.addEventListener('click', () => {
  deleteValue()
})

numberButtons.forEach((item) => {
  item.addEventListener('click', () => {
    addValue(item)
  })
})

operatorButtons.forEach((item) => {
  item.addEventListener('click', () => {
    // Stop if error message displayed
    if (screen.innerHTML === 'Error') {
      return 'Error'
    }
    // Allows minus numbers to be entered
    if (screen.innerHTML === '0' && item.innerHTML === '-') {
      screen.innerHTML = '-'
      // Disallow chaining and duplicate operators
    } else if (screen.innerHTML.slice(-1).match(/[÷×+-]/g)) {
      screen.innerHTML = screen.innerHTML.slice(0, -1)
      screen.innerHTML += item.innerHTML
    } else if (!screen.innerHTML.slice(-1).match(/[.÷×+-]/g)) {
      screen.innerHTML += item.innerHTML
    }
    return item.blur()
  })
})

function formatCalculation(calculation) {
  return calculation.replace(/[×]/g, '*').replace(/[÷]/g, '/')
}

function handleCalculation() {
  let calc = screen.innerHTML
  calc = formatCalculation(calc)
  const calculation = eval(calc)
  // Makes the result fit the screen
  if (String(calculation).length > 7) {
    if (String(calculation.toFixed(2)).length > 7) {
      screen.innerHTML = calculation.toExponential(1)
    } else {
      screen.innerHTML = calculation.toFixed(2)
    }
  } else {
    screen.innerHTML = calculation
  }
}

function handleError(error) {
  const errorEntry = screen.innerHTML
  screen.innerHTML = `Error: ${error}`
  setTimeout(() => {
    screen.innerHTML = errorEntry
  }, 1000)
}

equals.addEventListener('click', () => {
  try {
    handleCalculation()
  } catch (error) {
    handleError(error)
  }
  // need to prevent double clicking
  equals.blur()
})
