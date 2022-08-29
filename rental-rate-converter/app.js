const eventType = ['change', 'keyup']
const perWeek = document.querySelector('.per-week')
const perMonth = document.querySelector('.per-month')
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
  return perWeek.addEventListener(event, () => {
    if (perWeek.value === '') {
      perWeek.focus()
    } else {
      perMonth.value = calculateAmountPerMonth(perWeek.value)
    }
  })
}

function handlePerMonthInput(event) {
  return perMonth.addEventListener(event, () => {
    if (perMonth.value === '') {
      perMonth.focus()
    } else {
      perWeek.value = calculateAmountPerWeek(perMonth.value)
    }
  })
}

eventType.forEach((event) => handlePerWeekInput(event))
eventType.forEach((event) => handlePerMonthInput(event))
