const initialiseCharacterFinderVueInstance = () =>
  new Vue({
    el: '.character-finder',

    data: {
      textInput: '',
      characterNumber: 1,
      isActive: false,
      show: false,
    },

    methods: {
      incrementCharacterIndex(operator) {
        const originalCharacterIndex = this.characterNumber

        if (operator === '-' && this.characterNumber > 1) {
          this.characterNumber = Number(originalCharacterIndex) - 1
        } else if (operator === '+' && this.characterNumber < this.textInput.length) {
          this.characterNumber = Number(originalCharacterIndex) + 1
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
