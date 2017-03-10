const eventType = ['change', 'keyup'];
const perWeek = document.querySelector('.per-week');
const perMonth = document.querySelector('.per-month');
const inputPlaceholder = 'Please enter a number';
const redBorder = '3px solid rgba(198, 40, 40, 0.6)';
const defaultBorder = '3px solid #9E9E9E';

eventType.forEach(e => perWeek.addEventListener(e, () => {
  // Check if there is an amount in both inputs
  if (perWeek.value === '') {
    perMonth.value = '';
    perWeek.style.border = redBorder;
    perMonth.placeholder = inputPlaceholder;
    // Hold focus to value entered
    perWeekFocus = setInterval(function(){
      perWeek.focus();
      if (perWeek.value !== '') {
        clearInterval(perWeekFocus);
      }
    });
  } else {
    // Calculate amount per month
    perMonth.value = (perWeek.value / 7 * 365.25 / 12).toFixed(2);
    perWeek.style.border = defaultBorder;
  }
}));

eventType.forEach(e => perMonth.addEventListener(e, () => {
  if (perMonth.value === '') {
    perWeek.value = '';
    perMonth.style.border = redBorder;
    perWeek.placeholder = inputPlaceholder;
    const perMonthFocus = setInterval(function(){
      perMonth.focus();
      if (perMonth.value !== '') {
        clearInterval(perMonthFocus);
      }
    });
  } else {
    // Calculate amount per week
    perWeek.value = (perMonth.value * 12 / 365.25 * 7).toFixed(2);
    perMonth.style.border = defaultBorder;
  }
}));
