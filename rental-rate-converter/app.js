const constants = {
  DAYS_IN_A_WEEK: 7,
  DAYS_IN_A_YEAR: 365.25,
  MONTHS_IN_A_YEAR: 12,
}

/**
 * Defines query selector variables
 */
const [perWeekInput, perMonthInput] = ['week', 'month'].map((selector) => document.querySelector(`.per-${selector}`))

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
  const rentalRatePerMonth = ((perMonthInputValue / constants.DAYS_IN_A_WEEK) * constants.DAYS_IN_A_YEAR) / 12
  return formatAmountToTwoDecimalPlaces(rentalRatePerMonth)
}

/**
 * Calculates rental rate per week
 * @param {number} value
 * @returns {number} Formatted weekly rental rate
 */
function calculateRentalRatePerWeek(perWeekInputValue) {
  const amountPerWeek = ((perWeekInputValue * constants.MONTHS_IN_A_YEAR) / constants.DAYS_IN_A_YEAR) * 7
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
