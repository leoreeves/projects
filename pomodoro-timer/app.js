/**
 * Defines query selector variables
 */
const [timer, startButton, stopButton, resetButton, changeTimerButton, customMinuteInput] = [
  'timer',
  'start-button',
  'stop-button',
  'reset-button',
  'change-timer-button',
  'custom-minute-input',
].map((selector) => document.querySelector(`.${selector}`))

let totalSeconds = 1500
let counting = false

document.addEventListener('DOMContentLoaded', () => {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.')
    return
  }
  if (Notification.permission !== 'granted') {
    Notification.requestPermission()
  }
})

function handleTimerFinishedNotification() {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission()
  } else {
    const notification = new Notification('Timer finished', {
      icon: './img/tomato.png',
      body: 'Timer finished!',
    })

    setTimeout(() => notification.close(), 4000)
  }
}

function startTimer() {
  if (counting === false && totalSeconds > 0) {
    counting = true
  }
}

function stopTimer() {
  if (counting === true) {
    counting = false
  }
}

function resetTimer() {
  if (customMinuteInput.value > 0) {
    totalSeconds = customMinuteInput.value * 60
  } else {
    totalSeconds = 1500
  }

  counting = false
  const hour = Math.floor(totalSeconds / 3600)
  const minute = Math.floor((totalSeconds - hour * 3600) / 60)

  if (totalSeconds < 3600) {
    timer.innerHTML = `${minute < 10 ? '0' : ''}${minute}:00`
  } else {
    timer.innerHTML = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:00`
  }
}

function changeTimer() {
  counting = false
  startButton.innerHTML = 'Start'
  totalSeconds = customMinuteInput.value * 60
  const hour = Math.floor(totalSeconds / 3600)
  const minute = Math.floor((totalSeconds - hour * 3600) / 60)

  if (totalSeconds < 3600) {
    timer.innerHTML = `${minute < 10 ? '0' : ''}${minute}:00`
  } else {
    timer.innerHTML = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:00`
  }
}

function countTimer() {
  if (counting === true && totalSeconds > 0) {
    totalSeconds -= 1
    const hour = Math.floor(totalSeconds / 3600)
    const minute = Math.floor((totalSeconds - hour * 3600) / 60)
    const seconds = totalSeconds - (hour * 3600 + minute * 60)

    if (totalSeconds < 3600) {
      timer.innerHTML = `${minute < 10 ? '0' : ''}${minute}:${seconds < 10 ? '0' : ''}${seconds}`
    } else {
      timer.innerHTML = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${
        seconds < 10 ? '0' : ''
      }${seconds}`
    }

    if (totalSeconds === 0) {
      counting = false
      startButton.innerHTML = 'Start'
      handleTimerFinishedNotification()
    }
  }
}

setInterval(countTimer, 1000)

startButton.addEventListener('click', () => {
  startTimer()
})

stopButton.addEventListener('click', () => {
  stopTimer()
})

resetButton.addEventListener('click', () => {
  resetTimer()
})

changeTimerButton.addEventListener('click', () => {
  changeTimer()
})
