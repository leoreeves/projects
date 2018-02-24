function getColor() {
  return `#${Math.random().toString(16).slice(2, 8)}`;
}

function setBackground() {
  const backgroundColour = getColor();

  // need to remove the '#' from hex code
  const hexCode = backgroundColour.slice(1, 7);
  document.body.style.backgroundColor = backgroundColour;
  document.querySelector('.container--hex-colour-code').textContent = backgroundColour;

  /**
   * change text colour based on background brightness -
   * based on this: http://stackoverflow.com/a/11868398/2588066
   **/
  const getContrastYIQ = hexCode => {
    const [r, g, b] = [0, 2, 4].map(p => parseInt(hexCode.substr(p, 2), 16));
    return ((r * 299) + (g * 587) + (b * 114)) / 1000 >= 128;
  }
  const colorContainer = document.querySelector('.container--colour-generator');

  if (getContrastYIQ >= 128) {
    colorContainer.style.color = '#000';
  } else {
    colorContainer.style.color = '#fff';
  }
}

// change colour on spacebar press
document.body.onkeyup = (e) => {
  if (e.keyCode === 32) {
    setBackground();
  }
};

// change colour on mouse click
document.addEventListener('click', (e) => {
  const successMessageContainer = document.querySelector('.container--success-message');

  if (e.target.className === 'button--copy-to-clipboard') {
    successMessageContainer.style.display = 'block';
    successMessageContainer.classList.add('fade-out');
    document.querySelector('button').blur();
    document.getSelection().removeAllRanges();
    setTimeout(function () {
      successMessageContainer.classList.remove('fade-out');
    }, 1800);
  } else {
    setBackground();
  }

});
// initialise copy to clipboard
const clipboard = new Clipboard('.button--copy-to-clipboard');

// replace text on mobile
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(navigator.userAgent)) {
  document.querySelector('.header--instruction').textContent = 'Tap to generate a new colour';
}