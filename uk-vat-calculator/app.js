// Vue object
vatCalculator = new Vue({
  el: '#vat-calculator',
  data: {
    inputAmount: '',
    vatOperation: 'plus',
    vatRate: 1.2,
    netAmount: 0,
    vatAmount: 0,
    grossAmount: 0,
    resultCardDisplay: 'none',
    showToastMessage: false,
  },
  methods: {
    calculateAmountsAndDisplayResult() {
      this.resultCardDisplay = 'block';
      this.calculateNetAmount();
      this.calculateVatAmount();
      this.calculateGrossAmount();

      // Jump to bottom on smaller widths to show result
      // Added delay to allow time to render
      setTimeout(() => {
        this.scrollToBottom();
      }, 1);
    },
    formatAmount(amount) {
      return `£${amount.toFixed(2)}`;
    },
    calculateNetAmount() {
      this.netAmount = this.formatAmount(this.inputAmount);
    },
    calculateVatAmount() {
      this.vatAmount = this.formatAmount((this.inputAmount * this.vatRate) - this.inputAmount);
    },
    calculateGrossAmount() {
      if (this.vatOperation === 'plus') {
        this.grossAmount = this.formatAmount(this.inputAmount * this.vatRate);
      } else if (this.vatOperation === 'minus') {
        this.grossAmount = this.formatAmount(this.inputAmount / this.vatRate);
      }
    },
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    },
    copyText() {
      this.showToastMessage = true;
      setTimeout(() => { this.showToastMessage = false; }, 2000);
    },
  },
});

// Copy to clipboard
const netAmountCopy = new ClipboardJS('.net-amount');
const vatAmountCopy = new ClipboardJS('.vat-amount');
const grossAmountCopy = new ClipboardJS('.gross-amount');
