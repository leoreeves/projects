// Vue object
const calculateVat = new Vue({
  el: '#calculate-vat',
  data: {
    inputAmount: '',
    addOrMinusVat: '',
    vatRate: 1.2,
    netAmount: 0,
    vatAmount: 0,
    grossAmount: 0,
    bodyStyle: 'block',
    resultVisibility: 'none',
    copyMessage: 'Click an amount to copy',
  },
  methods: {
    calculateVat() {
      if (window.matchMedia('(max-width: 414px').matches) {
        this.bodyStyle = 'inline';
      }
      // Show result card
      this.resultVisibility = 'block';
      const inputAmount = this.inputAmount;
      const vatRate = this.vatRate;
      this.netAmount = `£${(inputAmount).toFixed(2)}`;
      this.vatAmount = `£${((inputAmount * vatRate) - inputAmount).toFixed(2)}`;
      if (this.addOrMinusVat === 'add') {
        this.grossAmount = `£${(inputAmount * vatRate).toFixed(2)}`;
      } else if (this.addOrMinusVat === 'minus') {
        this.grossAmount = `£${(inputAmount / vatRate).toFixed(2)}`;
      }
      // Jump to bottom on smaller widths to show result
      window.scrollTo(0, document.body.scrollHeight);
    },
    copyText() {
      this.copyMessage = 'Sucessfully copied';
      setTimeout(() => {
        this.copyMessage = 'Click an amount to copy';
      }, 1000);
    },
  },
});

// Copy to clipboard
const netAmountCopy = new Clipboard('.net-amount');
const vatAmountCopy = new Clipboard('.vat-amount');
const grossAmountCopy = new Clipboard('.gross-amount');
