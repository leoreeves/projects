const dateOfBirthInput = document.querySelector('.date-of-birth');
const birthdayYearInput = document.querySelector('.birthday-year');
const birthdayWeekdayElement = document.querySelector('.birthday-weekday');
const ageElement = document.querySelector('.age');

function setBirthdayYearInputValueAsCurrentYear() {
  const currentYear = new Date().getFullYear();
  birthdayYearInput.value = currentYear;
}

function setBirthdayYearInputMinAsBirthYear(birthYear) {
  birthdayYearInput.min = birthYear;
}

function updateInnerHTMLValues(calculatedWeekday, calculatedAge) {
  birthdayWeekdayElement.innerHTML = calculatedWeekday;
  ageElement.innerHTML = calculatedAge;
}

function calculateBirthdayWeekDayAndAge() {
  const dateOfBirth = new Date(dateOfBirthInput.value);
  const birthYear = dateOfBirth.getFullYear();
  const enteredYear = birthdayYearInput.value;
  dateOfBirth.setFullYear(enteredYear);
  const calculatedWeekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(dateOfBirth);
  const calculatedAge = enteredYear - birthYear;

  if (dateOfBirth && enteredYear >= birthYear) {
    setBirthdayYearInputMinAsBirthYear(birthYear);
    updateInnerHTMLValues(calculatedWeekday, calculatedAge);
  }
}

document.addEventListener('DOMContentLoaded', setBirthdayYearInputValueAsCurrentYear);
document.addEventListener('input', calculateBirthdayWeekDayAndAge);
