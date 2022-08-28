const simpleClock = new Vue({
  el: '#simple-clock',

  data: {
    analogueClockDisplay: 'block',
    digitalClockDisplay: 'none',
    digitalClockTime: null,
    hours: null,
    minutes: null,
    seconds: null,
  },

  mounted() {
    this.setAnalogueClockHandPosition()
    this.setAnalogueClockTimeInterval()
    this.setDigitalClockTime()
    this.setDigitalClockTimeInterval()
  },

  methods: {
    setHandRotation(unit) {
      return `-webkit-transform:rotate(${unit}deg);`
    },

    setAnalogueClockHandPosition() {
      const now = new Date()
      const [seconds, minutes, hours] = [now.getSeconds(), now.getMinutes(), now.getHours()]
      const thirtyDegreesEveryHour = 30 * ((hours % 12) + minutes / 60)
      const sixDegreesEveryMinute = 6 * minutes
      const sixDegreesEverySecond = 6 * seconds
      this.hours = this.setHandRotation(thirtyDegreesEveryHour)
      this.minutes = this.setHandRotation(sixDegreesEveryMinute)
      this.seconds = this.setHandRotation(sixDegreesEverySecond)
    },

    setAnalogueClockTimeInterval() {
      window.setInterval(this.setAnalogueClockHandPosition, 10)
    },

    setDigitalClockTime() {
      this.digitalClockTime = new Date().toLocaleTimeString()
    },

    setDigitalClockTimeInterval() {
      window.setInterval(this.setDigitalClockTime, 10)
    },

    toggleDisplayedClock() {
      if (this.analogueClockDisplay === 'block') {
        this.analogueClockDisplay = 'none'
        this.digitalClockDisplay = 'block'
      } else {
        this.analogueClockDisplay = 'block'
        this.digitalClockDisplay = 'none'
      }
    },
  },
})
