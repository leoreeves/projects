const perWeekInput = document.querySelector('.per-week')
const perMonthInput = document.querySelector('.per-month')
const DAYS_IN_A_WEEK = 7
const DAYS_IN_A_YEAR = 365.25
const MONTHS_IN_A_YEAR = 12

/**
 * Formats amount to two decimal places
 * @param {number} amount
 * @returns {number} Formatted amount
 */
function formatAmountToTwoDecimalPlaces(amount) {
  return amount.toFixed(2)
}

/**
 * Calculates rental rate per month
 * @param {number} value
 * @returns {number} Formatted monthly rental rate
 */
function calculateRentalRatePerMonth(perMonthInputValue) {
  const rentalRatePerMonth = ((perMonthInputValue / DAYS_IN_A_WEEK) * DAYS_IN_A_YEAR) / 12
  return formatAmountToTwoDecimalPlaces(rentalRatePerMonth)
}

/**
 * Calculates rental rate per week
 * @param {number} value
 * @returns {number} Formatted weekly rental rate
 */
function calculateRentalRatePerWeek(perWeekInputValue) {
  const amountPerWeek = ((perWeekInputValue * MONTHS_IN_A_YEAR) / DAYS_IN_A_YEAR) * 7
  return formatAmountToTwoDecimalPlaces(amountPerWeek)
}

/**
 * Handles perWeekInput events
 * @param {event} event
 */
function handlePerWeekInputEvents(event) {
  return perWeekInput.addEventListener(event, () => {
    if (perWeekInput.value === '') {
      perWeekInput.focus()
    } else {
      perMonthInput.value = calculateRentalRatePerMonth(perWeekInput.value)
    }
  })
}

/**
 * Handles perMonthInput events
 * @param {event} event
 */
function handlePerMonthInputEvents(event) {
  return perMonthInput.addEventListener(event, () => {
    if (perMonthInput.value === '') {
      perMonthInput.focus()
    } else {
      perWeekInput.value = calculateRentalRatePerWeek(perMonthInput.value)
    }
  })
}

/**
 * Handles change and keyup events
 */
function handleEvents() {
  const eventType = ['change', 'keyup']
  eventType.forEach((event) => {
    handlePerWeekInputEvents(event)
    handlePerMonthInputEvents(event)
  })
}

handleEvents()
