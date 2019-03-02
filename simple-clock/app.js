const simpleClock = new Vue({
  el: '#simple-clock',
  data: {
    analogueClockDisplay: 'block',
    digitalClockDisplay: 'none',
    digitalClockTime: '',
    hours: '',
    minutes: '',
    seconds: '',
  },
  mounted() {
    this.moveHands();
    this.getDigitalClockTime();
    this.setDigitalClockTimeInterval();
  },
  methods: {
    moveHands() {
      const today = new Date();

      // 30 degrees every hour
      const hours = 30 * ((today.getHours() % 12) + (today.getMinutes() / 60));
      // 6 degrees every minute
      const minutes = 6 * today.getMinutes();
      // 6 degrees every second
      const seconds = 6 * today.getSeconds();

      this.hours = this.setRotation(hours);
      this.minutes = this.setRotation(minutes);
      this.seconds = this.setRotation(seconds);

      setTimeout(this.moveHands, 10);
    },
    setRotation(unit) {
      return `-webkit-transform:rotate(${unit}deg);`;
    },
    getDigitalClockTime() {
      this.digitalClockTime = new Date().toLocaleTimeString();
    },
    setDigitalClockTimeInterval() {
      window.setInterval(this.getDigitalClockTime, 10);
    },
    toggleDisplayedClock() {
      if (this.analogueClockDisplay === 'block') {
        this.analogueClockDisplay = 'none';
        this.digitalClockDisplay = 'block';
      } else {
        this.analogueClockDisplay = 'block';
        this.digitalClockDisplay = 'none';
      }
    },
  },
});
