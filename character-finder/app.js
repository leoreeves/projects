const characterFinder = new Vue({
  el: '#character-finder',
  data: {
    textInput: '',
    characterNumber: 1,
    isActive: false,
    copySuccess: '',
  },
  methods: {
    minusCharacter() {
      if (this.characterNumber > 1) {
        this.characterNumber -= 1;
      }
    },
    plusCharacter() {
      if (this.characterNumber < this.textInput.length) {
        this.characterNumber += 1;
      }
    },
    copyMessage() {
      this.copySuccess = 'Successfully copied';
      this.isActive = true;
      setTimeout(() => {
        this.copySuccess = '';
        this.active = false;
      }, 2000);
    },
  },
});

// clipboard.js
const clipboard = new Clipboard('.copy-button');
