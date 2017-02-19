const characterFinder = new Vue({
  el: '#character-finder',
  data: {
    input: '',
    characterNumber: 1,
  },
  methods: {
    copyMessage() {
      const copySuccess = document.querySelector('.successful-copy');
      copySuccess.innerHTML = '<small>Sucessfully copied</small>';
      copySuccess.classList.add('fade-out');
      setTimeout(() => {
        copySuccess.innerHTML = '';
        copySuccess.classList.remove('fade-out');
      }, 2000);
    },
  },
});

// clipboard.js
const clipboard = new Clipboard('.copy-button');