// Vue object
const calculateVat = new Vue({
  el: '#calculate-vat',
  data: {
    inputAmount: '',
    vatOperation: 'plus',
    vatRate: 1.2,
    netAmount: 0,
    vatAmount: 0,
    grossAmount: 0,
    resultCardDisplay: 'none',
    showCopyMessage: false,
  },
  methods: {
    calculateVatAndDisplayResult() {
      this.resultCardDisplay = 'block';
      this.netAmount = this.formatAmount(this.inputAmount);
      this.vatAmount = this.formatAmount((this.inputPlusVat()) - this.inputAmount);

      if (this.vatOperation === 'plus') {
        this.grossAmount = this.formatAmount(this.inputPlusVat());
      } else if (this.vatOperation === 'minus') {
        this.grossAmount = this.formatAmount(this.inputMinusVat());
      }

      // Jump to bottom on smaller widths to show result
      // Added delay to allow time to render
      setTimeout(() => {
        this.scrollToBottom();
      }, 1);
    },
    formatAmount(amount) {
      return `£${amount.toFixed(2)}`;
    },
    inputPlusVat() {
      return this.inputAmount * this.vatRate;
    },
    inputMinusVat() {
      return this.inputAmount / this.vatRate;
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
