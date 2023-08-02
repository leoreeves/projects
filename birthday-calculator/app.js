/**
 * Defines HTML element object references for user input and display
 */
const [dateOfBirthElement, birthdayYearInputElement, birthdayDayOfWeekElement, ageElement] = [
  'date-of-birth',
  'birthday-year',
  'birthday-day-of-week',
  'age',
].map((selector) => document.querySelector(`.${selector}`))

/**
 * Initializes the birth year input field's value to the current year
 */
function initializeBirthdayYearInput() {
  const currentYear = new Date().getFullYear()
  birthdayYearInputElement.value = currentYear
}

/**
 * Sets the minimum allowable year (birth year) for the year input field
 * @param {number} birthYear - Year of birth
 */
function setBirthYearAsMinimum(birthYear) {
  birthdayYearInputElement.min = birthYear
}

/**
 * Returns the weekday of the provided date
 * @param {Date} date - Date to determine the weekday for
 * @returns {string} Weekday as a string (e.g., "Monday")
 */
function getWeekday(date) {
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
  return weekday
}

/**
 * Updates the 'Day of Week' span element with the weekday of the given date
 * @param {Date} date - Date to determine the weekday for
 */
function displayWeekday(date) {
  const weekday = getWeekday(date)
  birthdayDayOfWeekElement.innerHTML = weekday
}

/**
 * Returns the difference in years between a chosen year and the year of birth
 * @param {number} year - Chosen year
 * @param {number} birthYear - Year of birth
 * @returns {number} Age
 */
function calculateAge(year, birthYear) {
  const age = year - birthYear
  return age
}

/**
 * Updates the 'Age' span element with the calculated age
 * @param {number} year - Chosen year
 * @param {number} birthYear - Year of birth
 */
function displayAge(year, birthYear) {
  const age = calculateAge(year, birthYear)
  ageElement.innerHTML = age
}

/**
 * Checks if the chosen year is later than or equal to the year of birth
 * @param {number} year - Chosen year
 * @param {number} birthYear - Year of birth
 * @returns {Boolean} - True if chosen year is greater than or equal to the year of birth
 */
function isYearPresentOrFuture(year, birthYear) {
  return year >= birthYear
}

/**
 * Calls functions to set the minimum input year, display weekday,
 * and display age based on provided parameters
 * @param {number} birthYear
 * @param {Date} dateOfBirth
 * @param {number} year
 */
function executeChanges(birthYear, dateOfBirth, year) {
  setBirthYearAsMinimum(birthYear)
  displayWeekday(dateOfBirth)
  displayAge(year, birthYear)
}

/**
 * Handles and validates user input to calculate and display the desired information
 */
function processBirthdayInput() {
  const dateOfBirth = new Date(dateOfBirthElement.value)
  const birthYear = dateOfBirth.getFullYear()
  const year = Number(birthdayYearInputElement.value)
  dateOfBirth.setFullYear(year)

  if (isYearPresentOrFuture(year, birthYear)) {
    executeChanges(birthYear, dateOfBirth, year)
  }
}

// Attach event handlers
document.addEventListener('DOMContentLoaded', initializeBirthdayYearInput)
document.addEventListener('input', processBirthdayInput)

module.exports = {
  getWeekday,
  calculateAge,
  isYearPresentOrFuture,
}
