function getColor() {
  return `#${Math.random().toString(16).slice(2, 8)}`;
}

// set background color style based on this script http://stackoverflow.com/a/11868398/2588066
function setBackground() {
  const backgroundColour = getColor();

  // removes the '#' from hex code
  const hexCode = backgroundColour.slice(1, 7);
  $('body').css('background-color', backgroundColour);
  $('.container--hex-colour-code').text(backgroundColour);

  // change text colour based on background brightness
  const r = parseInt(hexCode.substr(0, 2), 16);
  const g = parseInt(hexCode.substr(2, 2), 16);
  const b = parseInt(hexCode.substr(4, 2), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  if (yiq >= 128) {
    $('.container--colour-generator').css('color', '#000');
  } else {
    $('.container--colour-generator').css('color', '#fff');
  }
}

// change colour on spacebar press
document.body.onkeyup = (e) => {
  if (e.keyCode === 32) {
    setBackground();
  }
};

// change colour on mouse click
$(() => {
  $(document).on('click', (e) => {
    if (e.target.className === 'button--copy-to-clipboard') {
      $('.container--success-message').css('display', 'block');
      $('.container--success-message').fadeOut(2000);
      $('button').blur();
      document.getSelection().removeAllRanges();
    } else {
      setBackground();
    }
  });
});

// clipboard button
const clipboard = new Clipboard('.button--copy-to-clipboard');
