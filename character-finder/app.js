const characterFinder = new Vue({
  el: '.character-finder',
  data: {
    textInput: '',
    characterNumber: 1,
    isActive: false,
    show: false,
  },
  methods: {
    minusCharacterIndex() {
      const originalCharacterIndex = this.characterNumber;
      if (this.characterNumber > 1) {
        this.characterNumber = Number(originalCharacterIndex) - 1;
      }
    },
    plusCharacterIndex() {
      const originalCharacterIndex = this.characterNumber;
      if (this.characterNumber < this.textInput.length) {
        this.characterNumber = Number(originalCharacterIndex) + 1;
      }
    },
    showCopyMessage() {
      if (this.textInput !== '') {
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 1000);
      }
    },
  },
});

// clipboard.js
const clipboard = new Clipboard('.copy-button');
