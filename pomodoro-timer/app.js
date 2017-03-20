const timer = document.querySelector('.timer');
const startButton = document.querySelector('.start-button');
const resetButton = document.querySelector('.reset-button');
const customMinutes = document.querySelector('.custom-minutes');
const changePomodoro = document.querySelector('.change-pomodoro');
const timerVar = setInterval(countTimer, 1);
let totalSeconds = 1500;
let counting = false;

startButton.addEventListener('click', () => {
  if (counting === false && totalSeconds > 0) {
    counting = true;
    startButton.innerHTML = 'Pause';
  } else {
    counting = false;
    startButton.innerHTML = 'Start';
  }
});

resetButton.addEventListener('click', () => {
  counting = false;
  if (customMinutes.value > 0) {
    totalSeconds = customMinutes.value * 60
  } else {
    totalSeconds = 1500;
  }
  hour = Math.floor(totalSeconds / 3600);
  minute = Math.floor((totalSeconds - hour * 3600) / 60);
  if (totalSeconds < 3600) {
    timer.innerHTML = `${minute < 10 ? '0' : ''}${minute}:00`;
  } else {
    timer.innerHTML = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:00`;
  }
});

changePomodoro.addEventListener('click', () => {
  counting = false;
  startButton.innerHTML = 'Start';
  totalSeconds = customMinutes.value * 60;
  hour = Math.floor(totalSeconds / 3600);
  minute = Math.floor((totalSeconds - hour * 3600) / 60);
  if (totalSeconds < 3600) {
    timer.innerHTML = `${minute < 10 ? '0' : ''}${minute}:00`;
  } else {
    timer.innerHTML = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:00`;
  }
});

function countTimer() {
  if (counting === true && totalSeconds > 0) {
    totalSeconds -= 1;
    hour = Math.floor(totalSeconds / 3600);
    minute = Math.floor((totalSeconds - hour * 3600) / 60);
    seconds = totalSeconds - (hour * 3600 + minute * 60);
    
    if (totalSeconds < 3600) {
      timer.innerHTML = `${minute < 10 ? '0' : ''}${minute}:${seconds < 10 ? '0' : ''}${seconds}`;
    } else {
      timer.innerHTML = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    if (totalSeconds === 0) {
      // alert('Timer complete');
      counting = false;
      startButton.innerHTML = 'Start';
    }
  }
}