function fadeOutQuote() {
  $('.quote-body').fadeOut();
  $('.quote-author').fadeOut();
}

function getQuote() {
  setTimeout(() => {
    $.ajax({
      crossOrigin: true,
      url: 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_jsonp=createQuote',
      dataType: 'jsonp',
    });
  }, 200);
}

// Callback method in JSON
function createQuote(json) {
  const quote = json[0];
  $('.quote-body').html(`${quote.content.rendered}`).fadeIn();
  $('.quote-author').html(`― ${quote.title.rendered}`).fadeIn();
}

// Generate quote when spacebar is pressed
$(window).keypress((e) => {
  if (e.which === 32) {
    fadeOutQuote();
    getQuote();
  }
});

// Generate quote on click
$(document).on('click', () => {
  fadeOutQuote();
  getQuote();
});

$(document).ready(() => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    $('.quote-body').html('Press the spacebar or tap to inspire');
  }
});
