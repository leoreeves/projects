/**
 * Generates a random hex color
 * @returns {string} Hex color e.g. #4287f5
 */
function generateRandomHexColor() {
  return `#${Math.random().toString(16).slice(2, 8)}`
}

/**
 * Sets page body background color
 * @param {string} hexColor e.g. #a53695
 */
function setBodyBackgroundColor(hexColor) {
  document.body.style.backgroundColor = hexColor
}

/**
 * Sets hex color header text content
 * @param {string} hexColor e.g. #3cc78a
 */
function setHexColorHeaderTextContent(hexColor) {
  const hexColorHeader = document.querySelector('.container__hex-colour-header')
  hexColorHeader.textContent = hexColor
}

/**
 * Sets data clipboard text attribute
 * @param {string} hexColor e.g. #8cba49
 */
function setDataClipboardTextAttribute(hexColor) {
  const copyToClipboardButton = document.querySelector('.container__copy-to-clipboard-button')
  copyToClipboardButton.setAttribute('data-clipboard-text', hexColor)
}

/**
 * Converts hex color to hexadecimal
 * @param {string} hexColor e.g. #8cba49
 * @param {number} firstCharacterIndex e.g. 1
 * @param {number} secondCharacterIndex e.g. 2
 * @returns {string} Hexadecimal e.g. 0x3b
 */
function convertHexColorToHexadecimal(hexColor, firstCharacterIndex, secondCharacterIndex) {
  return `0x${hexColor[firstCharacterIndex]}${hexColor[secondCharacterIndex]}`
}

/**
 * Gets RGB values from hex color
 * @param {string} hexColor e.g. #7dfeba
 * @returns {object} e.g. { r: '0x3b', g: '0x91', b: '0x98' }
 */
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

/**
 * Gets color brightness
 * Based on: https://en.wikipedia.org/wiki/YIQ#From_RGB_to_YIQ
 * @param {string} hexColor e.g. #66ff00
 * @returns {number} e.g. 99.105
 */
function getColorBrightness(hexColor) {
  const { r, g, b } = getRGBValuesFromHexColor(hexColor)
  const [redLuma, greenLuma, blueLuma] = [299, 587, 114]
  return (r * redLuma + g * greenLuma + b * blueLuma) / 1000
}

/**
 * Sets text color based on brightness
 * @param {string} hexColor e.g. #d9d839
 */
function setTextColorBasedOnBrightness(hexColor) {
  const colorBrightness = getColorBrightness(hexColor)
  if (colorBrightness >= 128) {
    document.body.style.color = 'black'
  } else {
    document.body.style.color = 'white'
  }
}

function generateRandomHexColorAndUpdatePage() {
  const hexColor = generateRandomHexColor()
  ;[
    setBodyBackgroundColor,
    setHexColorHeaderTextContent,
    setDataClipboardTextAttribute,
    setTextColorBasedOnBrightness,
  ].forEach((func) => func(hexColor))
}

function showAndFadeOutSuccessMessage() {
  const successMessageContainer = document.querySelector('.container__success-message')
  const successMessageFadeOutClass = 'container__success-message--fade-out'
  successMessageContainer.style.display = 'block'
  successMessageContainer.classList.add(successMessageFadeOutClass)
  const copyToClipboardButton = document.querySelector('.container__copy-to-clipboard-button')
  copyToClipboardButton.blur()
  document.getSelection().removeAllRanges()
  setTimeout(() => {
    successMessageContainer.classList.remove(successMessageFadeOutClass)
  }, 1800)
}

function handleSpacebarPress() {
  document.body.onkeyup = (event) => {
    if (event.code === 'Space') {
      generateRandomHexColorAndUpdatePage()
    }
  }
}

function handleDocumentClick() {
  document.addEventListener('click', (event) => {
    if (event.target.className === 'container__copy-to-clipboard-button') {
      showAndFadeOutSuccessMessage()
    } else {
      generateRandomHexColorAndUpdatePage()
    }
  })
}

/**
 * Initialises copy to clipboard button
 */
function initialiseCopyToClipboardButton() {
  const copyToClipboardButton = document.querySelector('.container__copy-to-clipboard-button')
  return new ClipboardJS(copyToClipboardButton)
}

/**
 * Changes instruction text from "Press the spacebar" to "Tap to" on mobile
 */
function setInstructionTextOnMobile() {
  const instructionHeader = document.querySelector('.container__instruction-header')
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(navigator.userAgent)
  if (isMobile) {
    instructionHeader.textContent = 'Tap to generate a new colour'
  }
}

handleSpacebarPress()
handleDocumentClick()
setInstructionTextOnMobile()
initialiseCopyToClipboardButton()
