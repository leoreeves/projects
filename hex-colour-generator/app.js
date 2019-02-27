const hexColorHeader = document.querySelector('.container__hex-colour-header');
const copyToClipboardButton = document.querySelector('.container__copy-to-clipboard-button');
const clipboard = new ClipboardJS(copyToClipboardButton);

function generateColor() {
  return `#${Math.random().toString(16).slice(2, 8)}`;
}

function getContrastYIQ(colorCode) {
  const [r, g, b] = [0, 2, 4].map(p => parseInt(colorCode.substr(p, 2), 16));
  return ((r * 299) + (g * 587) + (b * 114)) / 1000;
}

function setBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

function setHexColorHeaderText(colorCode) {
  hexColorHeader.textContent = colorCode;
}

function setDataClipboardTextAttribute(colorCode) {
  copyToClipboardButton.setAttribute('data-clipboard-text', colorCode);
}

function setTextColorBasedOnContrastYIQ(color) {
  const colorCodeWithoutHash = color.slice(1, 7);
  const contrastYIQ = getContrastYIQ(colorCodeWithoutHash);

  if (contrastYIQ >= 128) {
    document.body.style.color = '#000';
  } else {
    document.body.style.color = '#fff';
  }
}

function generateColorAndUpdatePage() {
  const color = generateColor();
  setBackgroundColor(color);
  setDataClipboardTextAttribute(color);
  setHexColorHeaderText(color);
  setTextColorBasedOnContrastYIQ(color);
}

function showAndFadeOutSuccessMessage() {
  const successMessageContainer = document.querySelector('.container__success-message');
  const successMessageFadeOutClass = 'container__success-message--fade-out';
  successMessageContainer.style.display = 'block';
  successMessageContainer.classList.add(successMessageFadeOutClass);
  copyToClipboardButton.blur();
  document.getSelection().removeAllRanges();
  setTimeout(() => {
    successMessageContainer.classList.remove(successMessageFadeOutClass);
  }, 1800);
}

// change colour on spacebar press
document.body.onkeyup = (e) => {
  if (e.keyCode === 32) {
    generateColorAndUpdatePage();
  }
};

// change colour on mouse click
document.addEventListener('click', (e) => {
  if (e.target.className === 'container__copy-to-clipboard-button') {
    showAndFadeOutSuccessMessage();
  } else {
    generateColorAndUpdatePage();
  }
});

// replace text on mobile
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(navigator.userAgent)) {
  document.querySelector('.container__instruction-header').textContent = 'Tap to generate a new colour';
}
