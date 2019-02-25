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
    resultCardDisplay: 'none',
    showCopyMessage: false,
  },
  methods: {
    calculateVat() {
      this.resultCardDisplay = 'block';
      this.netAmount = `£${(this.inputAmount).toFixed(2)}`;
      this.vatAmount = `£${((this.inputAmount * this.vatRate) - this.inputAmount).toFixed(2)}`;

      if (this.addOrMinusVat === 'add') {
        this.grossAmount = `£${(this.inputAmount * this.vatRate).toFixed(2)}`;
      } else if (this.addOrMinusVat === 'minus') {
        this.grossAmount = `£${(this.inputAmount / this.vatRate).toFixed(2)}`;
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
