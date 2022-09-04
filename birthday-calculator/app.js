/**
 * Defines query selector variables
 */
const [dateOfBirthInput, birthdayYearInput, birthdayDayOfWeekSpan, ageSpan] = [
  'date-of-birth',
  'birthday-year',
  'birthday-day-of-week',
  'age',
].map((selector) => document.querySelector(`.${selector}`))

/**
 * Sets birthday year input value as current year
 */
function setBirthdayYearInputValueAsCurrentYear() {
  const currentYear = new Date().getFullYear()
  birthdayYearInput.value = currentYear
}

/**
 * Sets birthday year input minimum as birth year
 * @param {number} birthYear
 */
function setBirthdayYearInputMinAsBirthYear(birthYear) {
  birthdayYearInput.min = birthYear
}

/**
 * Gets birthday day of the week
 * @param {object} dateOfBirth
 * @returns {string} e.g. Tuesday
 */
function getBirthdayDayOfWeek(dateOfBirth) {
  const birthdayDayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(dateOfBirth)
  return birthdayDayOfWeek
}

/**
 * Updates birthday day of week span innerHTML
 * @param {object} dateOfBirth
 */
function setBirthdayDayOfWeekInnerHTML(dateOfBirth) {
  const birthdayDayOfWeek = getBirthdayDayOfWeek(dateOfBirth)
  birthdayDayOfWeekSpan.innerHTML = birthdayDayOfWeek
}

/**
 * Calculates age
 * @param {number} enteredYear
 * @param {number} birthYear
 */
function calculateAge(enteredYear, birthYear) {
  const calculatedAge = enteredYear - birthYear
  return calculatedAge
}

/**
 * Sets age span innerHTML
 * @param {number} enteredYear
 * @param {number} birthYear
 */
function setAgeSpanInnerHTML(enteredYear, birthYear) {
  const calculatedAge = calculateAge(enteredYear, birthYear)
  ageSpan.innerHTML = calculatedAge
}

/**
 * Checks if entered year is in the present or in the future
 * @param {number} enteredYear
 * @param {number} birthYear
 * @returns {Boolean}
 */
function checkIfEnteredYearIsPresentOrFuture(enteredYear, birthYear) {
  return enteredYear >= birthYear
}

/**
 * Handles set functions
 * @param {number} birthYear
 * @param {object} dateOfBirth
 * @param {number} enteredYear
 */
function handleSetFunctions(birthYear, dateOfBirth, enteredYear) {
  setBirthdayYearInputMinAsBirthYear(birthYear)
  setBirthdayDayOfWeekInnerHTML(dateOfBirth)
  setAgeSpanInnerHTML(enteredYear, birthYear)
}

/**
 * Handles birthday calculation
 */
function handleBirthdayCalculation() {
  const dateOfBirth = new Date(dateOfBirthInput.value)
  const birthYear = dateOfBirth.getFullYear()
  const enteredYear = Number(birthdayYearInput.value)
  dateOfBirth.setFullYear(enteredYear)
  const enteredYearIsPresentOrFuture = checkIfEnteredYearIsPresentOrFuture(enteredYear, birthYear)
  if (enteredYearIsPresentOrFuture) {
    handleSetFunctions(birthYear, dateOfBirth, enteredYear)
  }
}

// add event listeners
document.addEventListener('DOMContentLoaded', setBirthdayYearInputValueAsCurrentYear)
document.addEventListener('input', handleBirthdayCalculation)
