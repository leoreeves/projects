const initialiseVatCalculator = () =>
  new Vue({
    el: '#vat-calculator',

    data: {
      inputAmount: '',
      vatOperation: 'plus',
      vatRate: 1.2,
      resultCardDisplay: 'none',
      showCopiedToastMessage: false,
    },

    computed: {
      netAmount() {
        return this.formatAmount(this.inputAmount)
      },

      vatAmount() {
        const vat = this.inputAmount * this.vatRate - this.inputAmount
        return this.formatAmount(vat)
      },

      grossAmount() {
        let gross
        if (this.vatOperation === 'plus') {
          gross = this.inputAmount * this.vatRate
        } else if (this.vatOperation === 'minus') {
          gross = this.inputAmount / this.vatRate
        }
        return this.formatAmount(gross)
      },
    },

    methods: {
      formatAmount(amount) {
        return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(amount)
      },

      scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight)
      },

      handleResult() {
        this.resultCardDisplay = 'block'
        setTimeout(() => {
          this.scrollToBottom()
        }, 1)
      },

      handleCopiedToastMessageVisibility() {
        this.showCopiedToastMessage = true
        setTimeout(() => {
          this.showCopiedToastMessage = false
        }, 2000) // 2 seconds
      },
    },
  })

const initialiseCopyButtons = () => {
  const buttonTypes = ['net', 'vat', 'gross']
  buttonTypes.forEach((buttonType) => new ClipboardJS(`.${buttonType}-amount`))
}

initialiseVatCalculator()
initialiseCopyButtons()
