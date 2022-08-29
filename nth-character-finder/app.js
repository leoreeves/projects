const initialiseCharacterFinderVueInstance = () =>
  new Vue({
    el: '.nth-character-finder-wrapper',

    data: {
      textInput: '',
      nthCharacter: null,
      show: false,
    },

    methods: {
      handleNthCharacter(operator) {
        const originalCharacterIndex = this.nthCharacter
        const isDecerement = operator === '-' && this.nthCharacter > 1
        const isIncrement = operator === '+' && this.nthCharacter < this.textInput.length

        if (isDecerement) {
          this.nthCharacter = Number(originalCharacterIndex) - 1
        } else if (isIncrement) {
          this.nthCharacter = Number(originalCharacterIndex) + 1
        }
      },

      showCopyMessage() {
        if (this.textInput !== '') {
          this.show = true
          setTimeout(() => {
            this.show = false
          }, 1000)
        }
      },
    },
  })

const initialiseClipboardJS = () => new ClipboardJS('.copy-button')

initialiseCharacterFinderVueInstance()
initialiseClipboardJS()
