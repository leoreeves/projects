// query elements
const dateOfBirthInput = document.querySelector('.date-of-birth')
const birthdayYearInput = document.querySelector('.birthday-year')
const birthdayDayOfWeekSpan = document.querySelector('.birthday-day-of-week')
const ageSpan = document.querySelector('.age')

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

function calculateBirthdayDayOfWeekAndAge() {
  const dateOfBirth = new Date(dateOfBirthInput.value)
  const birthYear = dateOfBirth.getFullYear()
  const enteredYear = birthdayYearInput.value
  dateOfBirth.setFullYear(enteredYear)

  // TODO: Use past tense for birthdays in the past
  if (dateOfBirth >= birthYear) {
    setBirthdayYearInputMinAsBirthYear(birthYear)
    setBirthdayDayOfWeekInnerHTML(dateOfBirth)
    setAgeSpanInnerHTML(enteredYear, birthYear)
  }
}

// add event listeners
document.addEventListener('DOMContentLoaded', setBirthdayYearInputValueAsCurrentYear)
document.addEventListener('input', calculateBirthdayDayOfWeekAndAge)
