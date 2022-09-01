const hexColorHeader = document.querySelector('.container__hex-colour-header')
const copyToClipboardButton = document.querySelector('.container__copy-to-clipboard-button')
const clipboard = new ClipboardJS(copyToClipboardButton)

function generateHexColor() {
  return `#${Math.random().toString(16).slice(2, 8)}`
}

function setBackgroundColor(color) {
  document.body.style.backgroundColor = color
}

function setHexColorHeaderText(color) {
  hexColorHeader.textContent = color
}

function setDataClipboardTextAttribute(color) {
  copyToClipboardButton.setAttribute('data-clipboard-text', color)
}

function convertHexColorToHexadecimal(hexColor, firstCharacter, secondCharacter) {
  return `0x${hexColor[firstCharacter]}${hexColor[secondCharacter]}`
}

function getRGBValuesFromHexColor(hexColor) {
  let r
  let g
  let b
  const threeDigits = hexColor.length === 4
  const sixDigits = hexColor.length === 7
  if (threeDigits) {
    ;[r, g, b] = [
      convertHexColorToHexadecimal(hexColor, 1, 1),
      convertHexColorToHexadecimal(hexColor, 2, 2),
      convertHexColorToHexadecimal(hexColor, 3, 3),
    ]
  } else if (sixDigits) {
    ;[r, g, b] = [
      convertHexColorToHexadecimal(hexColor, 1, 2),
      convertHexColorToHexadecimal(hexColor, 3, 4),
      convertHexColorToHexadecimal(hexColor, 5, 6),
    ]
  }
  return { r, g, b }
}

function getColorBrightness(color) {
  // https://en.wikipedia.org/wiki/YIQ#From_RGB_to_YIQ
  const { r, g, b } = getRGBValuesFromHexColor(color)
  const [redLuma, greenLuma, blueLuma] = [299, 587, 114]
  return (r * redLuma + g * greenLuma + b * blueLuma) / 1000
}

function setTextColorBasedOnBrightness(color) {
  const colorBrightness = getColorBrightness(color)
  if (colorBrightness >= 128) {
    document.body.style.color = 'black'
  } else {
    document.body.style.color = 'white'
  }
}

function generateHexColorAndUpdatePage() {
  const color = generateHexColor()
  ;[setBackgroundColor, setHexColorHeaderText, setDataClipboardTextAttribute, setTextColorBasedOnBrightness].forEach(
    (func) => func(color)
  )
}

function showAndFadeOutSuccessMessage() {
  const successMessageContainer = document.querySelector('.container__success-message')
  const successMessageFadeOutClass = 'container__success-message--fade-out'
  successMessageContainer.style.display = 'block'
  successMessageContainer.classList.add(successMessageFadeOutClass)
  copyToClipboardButton.blur()
  document.getSelection().removeAllRanges()
  setTimeout(() => {
    successMessageContainer.classList.remove(successMessageFadeOutClass)
  }, 1800)
}

document.body.onkeyup = (event) => {
  if (event.code === 'Space') {
    generateHexColorAndUpdatePage()
  }
}

// change colour on mouse click
document.addEventListener('click', (event) => {
  if (event.target.className === 'container__copy-to-clipboard-button') {
    showAndFadeOutSuccessMessage()
  } else {
    generateHexColorAndUpdatePage()
  }
})

// replace text on mobile
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(navigator.userAgent)) {
  document.querySelector('.container__instruction-header').textContent = 'Tap to generate a new colour'
}
