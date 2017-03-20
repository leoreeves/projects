const timer = document.querySelector('.timer');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');
const customMinutes = document.querySelector('.custom-minutes');
const changePomodoro = document.querySelector('.change-pomodoro');
const timerVar = setInterval(countTimer, 1000);
let totalSeconds = 1500;
let counting = false;

// Desktop Notifications
// http://stackoverflow.com/questions/2271156/chrome-desktop-notification-example
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function notifyMe() {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    const notification = new Notification('Notification title', {
      icon: 'http://www.iconsdb.com/icons/preview/soylent-red/tomato-xxl.png',
      body: "Timer finished!",
    });
  }
}

startButton.addEventListener('click', () => {
  if (counting === false && totalSeconds > 0) {
    counting = true;
  }
});

stopButton.addEventListener('click', () => {
  if (counting === true) {
    counting = false;
  } else {
    counting = true;
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
      counting = false;
      startButton.innerHTML = 'Start';
      notifyMe();
    }
  }
}
