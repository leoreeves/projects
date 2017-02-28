const dateOfBirth = document.querySelector('.date-of-birth');
const birthdayYear = document.querySelector('.birthday-year');
const birthdayWeekday = document.querySelector('.birthday-weekday');
const age = document.querySelector('.age');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'];

const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');

minus.addEventListener('click', () => {
  birthdayYear.value -= 1;
});

plus.addEventListener('click', () => {
  birthdayYear.value = Number(birthdayYear.value) + 1;
});

function getBirthdayDay() {
  const birthDate = new Date(dateOfBirth.value);
  const myDate = new Date(`${months[birthDate.getMonth()]} ${birthDate.getDate()}, ${birthdayYear.value}`);
  if (dateOfBirth.value !== '' && birthDate.getFullYear() >= 1900) {
    birthdayWeekday.innerHTML = weekdays[myDate.getDay()];
    age.innerHTML = birthdayYear.value - birthDate.getFullYear();
  }
}
