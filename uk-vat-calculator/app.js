const initialiseVatCalculator = () =>
  new Vue({
    el: '#vat-calculator',

    data: {
      inputAmount: '',
      vatOperation: 'plus',
      vatRate: 1.2,
      netAmount: 0,
      vatAmount: 0,
      grossAmount: 0,
      resultCardDisplay: 'none',
      showCopiedToastMessage: false,
    },

    methods: {
      calculateAmountsAndDisplayResult() {
        this.resultCardDisplay = 'block'
        this.calculateNetAmount()
        this.calculateVatAmount()
        this.calculateGrossAmount()

        setTimeout(() => {
          this.scrollToBottom()
        }, 1)
      },

      formatAmount(amount) {
        return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(amount)
      },

      calculateNetAmount() {
        this.netAmount = this.formatAmount(this.inputAmount)
      },

      calculateVatAmount() {
        this.vatAmount = this.formatAmount(this.inputAmount * this.vatRate - this.inputAmount)
      },

      calculateGrossAmount() {
        if (this.vatOperation === 'plus') {
          this.grossAmount = this.formatAmount(this.inputAmount * this.vatRate)
        } else if (this.vatOperation === 'minus') {
          this.grossAmount = this.formatAmount(this.inputAmount / this.vatRate)
        }
      },

      scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight)
      },

      handleCopiedToastMessage() {
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
