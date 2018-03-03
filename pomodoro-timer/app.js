const timer = document.querySelector('.timer');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');
const changeTimerButton = document.querySelector('.change-timer-button');
const customMinuteInput = document.querySelector('.custom-minute-input');
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
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
});

function notifyUser() {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  } else {
    const notification = new Notification('Timer finished', {
      icon: './img/tomato.png',
      body: "Timer finished!",
    });

    setTimeout(() => notification.close(), 5000);
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
  }
});


resetButton.addEventListener('click', () => {
  if (customMinuteInput.value > 0) {
    totalSeconds = customMinuteInput.value * 60;
  } else {
    totalSeconds = 1500;
  }

  counting = false;
  hour = Math.floor(totalSeconds / 3600);
  minute = Math.floor((totalSeconds - hour * 3600) / 60);

  if (totalSeconds < 3600) {
    timer.innerHTML = `${minute < 10 ? '0' : ''}${minute}:00`;
  } else {
    timer.innerHTML = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:00`;
  }
});

changeTimerButton.addEventListener('click', () => {
  counting = false;
  startButton.innerHTML = 'Start';
  totalSeconds = customMinuteInput.value * 60;
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
      notifyUser();
    }
  }
}
