// query elements
const dateOfBirthInput = document.querySelector('.date-of-birth');
const birthdayYearInput = document.querySelector('.birthday-year');
const birthdayWeekdaySpan = document.querySelector('.birthday-weekday');
const ageSpan = document.querySelector('.age');

// calculate values
function setBirthdayYearInputValueAsCurrentYear() {
  const currentYear = new Date().getFullYear();
  birthdayYearInput.value = currentYear;
}

function setBirthdayYearInputMinAsBirthYear(birthYear) {
  birthdayYearInput.min = birthYear;
}

function updateBirthdayWeekdayInnerHTML(dateOfBirth) {
  const calculatedWeekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(dateOfBirth);
  birthdayWeekdaySpan.innerHTML = calculatedWeekday;
}

function updateAgeSpanInnerHTML(enteredYear, birthYear) {
  const calculatedAge = enteredYear - birthYear;
  ageSpan.innerHTML = calculatedAge;
}

function calculateBirthdayWeekDayAndAge() {
  const dateOfBirth = new Date(dateOfBirthInput.value);
  const birthYear = dateOfBirth.getFullYear();
  const enteredYear = birthdayYearInput.value;
  dateOfBirth.setFullYear(enteredYear);

  if (dateOfBirth && enteredYear >= birthYear) {
    setBirthdayYearInputMinAsBirthYear(birthYear);
    updateBirthdayWeekdayInnerHTML(dateOfBirth);
    updateAgeSpanInnerHTML(enteredYear, birthYear);
  }
}

// add event listeners
document.addEventListener('DOMContentLoaded', setBirthdayYearInputValueAsCurrentYear);
document.addEventListener('input', calculateBirthdayWeekDayAndAge);
