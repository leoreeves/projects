const eventType = ['change', 'keyup']
const perWeekInput = document.querySelector('.per-week')
const perMonthInput = document.querySelector('.per-month')
const DAYS_IN_A_WEEK = 7
const DAYS_IN_A_YEAR = 365.25
const MONTHS_IN_A_YEAR = 12

function formatAmount(amount) {
  return amount.toFixed(2)
}

function calculateAmountPerMonth(value) {
  const amountPerMonth = ((value / DAYS_IN_A_WEEK) * DAYS_IN_A_YEAR) / 12
  return formatAmount(amountPerMonth)
}

function calculateAmountPerWeek(value) {
  const amountPerWeek = ((value * MONTHS_IN_A_YEAR) / DAYS_IN_A_YEAR) * 7
  return formatAmount(amountPerWeek)
}

function handlePerWeekInput(event) {
  return perWeekInput.addEventListener(event, () => {
    if (perWeekInput.value === '') {
      perWeekInput.focus()
    } else {
      perMonthInput.value = calculateAmountPerMonth(perWeekInput.value)
    }
  })
}

function handlePerMonthInput(event) {
  return perMonthInput.addEventListener(event, () => {
    if (perMonthInput.value === '') {
      perMonthInput.focus()
    } else {
      perWeekInput.value = calculateAmountPerWeek(perMonthInput.value)
    }
  })
}

eventType.forEach((event) => handlePerWeekInput(event))
eventType.forEach((event) => handlePerMonthInput(event))
