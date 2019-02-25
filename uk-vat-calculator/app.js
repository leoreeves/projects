// Vue object
const calculateVat = new Vue({
  el: '#calculate-vat',
  data: {
    inputAmount: '',
    addOrMinusVat: 'add',
    vatRate: 1.2,
    netAmount: 0,
    vatAmount: 0,
    grossAmount: 0,
    resultVisibility: 'none',
    showCopyMessage: false,
  },
  methods: {
    calculateVat() {
      // result card
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
      // Added delay to allow time to render
      setTimeout(() => {
        this.scrollToBottom();
      }, 1);
    },
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    },
    copyText() {
      this.showCopyMessage = true;
      setTimeout(() => {
        this.showCopyMessage = false;
      }, 2000);
    },
  },
});

// Copy to clipboard
const netAmountCopy = new ClipboardJS('.net-amount');
const vatAmountCopy = new ClipboardJS('.vat-amount');
const grossAmountCopy = new ClipboardJS('.gross-amount');
