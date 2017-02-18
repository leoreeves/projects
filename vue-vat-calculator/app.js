// Result pane variables
const result = document.querySelector('.result');
const netAmount = document.querySelector('.net-amount');
const vatAmount = document.querySelector('.vat-amount');
const grossAmount = document.querySelector('.gross-amount');

// Variables for copy results function
const range = document.createRange();
const selection = window.getSelection();
const calculatorResults = [netAmount, vatAmount, grossAmount];
const copyMessage = document.querySelector('.copy-text');

// Vue object
const form = new Vue({
  el: '#calculate-vat',
  data: {
    // Inputs
    inputAmount: '',
    addOrMinusVat: '',
    vatRate: 1.2,
  },
  methods: {
    calculateVat: () => {
      const inputAmount = form.inputAmount;
      const vatRate = form.vatRate;
      const netAmountCalculation = `£${(inputAmount).toFixed(2)}`;
      const vatAmountCalculation = `£${((inputAmount * vatRate) - inputAmount).toFixed(2)}`;
      result.style.display = 'block';
      if (form.addOrMinusVat === 'add') {
        netAmount.innerHTML = netAmountCalculation;
        vatAmount.innerHTML = vatAmountCalculation;
        grossAmount.innerHTML = `£${(inputAmount * vatRate).toFixed(2)}`;
      } else if (form.addOrMinusVat === 'minus') {
        netAmount.innerHTML = netAmountCalculation;
        vatAmount.innerHTML = vatAmountCalculation;
        grossAmount.innerHTML = `£${(inputAmount / vatRate).toFixed(2)}`;
      }
    },
    // copy function based on: http://stackoverflow.com/a/25456308/2588066
    // & https://jsfiddle.net/ourcodeworld/wrL0j3xu/1/?utm_source=website&utm_medium=embed&utm_campaign=wrL0j3xu
    copyResults: calculatorResults.forEach((item) => {
      item.addEventListener('click', () => {
        range.selectNodeContents(item);
        selection.removeAllRanges();
        selection.addRange(range);
        try {
          document.execCommand('copy');
          copyMessage.innerHTML = 'Sucessfully copied';
          setTimeout(() => {
            copyMessage.innerHTML = 'Click an amount to copy';
          }, 1000);
        } catch (err) {
          copyMessage.innerHTML = 'Failed to copy, try refreshing the page';
        }
      });
    }),
  },
});
