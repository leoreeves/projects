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
      handleOperator(operator) {
        const originalCharacterIndex = this.characterNumber
        const isDecerement = operator === '-' && this.characterNumber > 1
        const isIncrement = operator === '+' && this.characterNumber < this.textInput.length

        if (isDecerement) {
          this.characterNumber = Number(originalCharacterIndex) - 1
        } else if (isIncrement) {
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
