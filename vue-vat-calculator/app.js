// Result pane
const result = document.querySelector('.result');
const netAmount = document.querySelector('.net-amount');
const vatAmount = document.querySelector('.vat-amount');
const grossAmount = document.querySelector('.gross-amount');

// Copy results
const range = document.createRange();
const selection = window.getSelection();
const calculatorResults = [netAmount, vatAmount, grossAmount];
const copyMessage = document.querySelector('.copy-text');

// Calculator
const form = new Vue({
  el: '#calculate-vat',
  data: {
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
    // copy function original scripts http://stackoverflow.com/a/25456308/2588066
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
