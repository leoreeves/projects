// Generate quote when spacebar is pressed
$(window).keypress((e) => {
  if (e.which === 32) {
    $('.quote-body').fadeOut();
    $('.quote-author').fadeOut();
    setTimeout(() => {
      $.ajax({
        crossOrigin: true,
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback',
        dataType: 'jsonp',
      });
    }, 200);
  }
});

// Generate quote on click
$(document).on('click', () => {
  $('.quote-body').fadeOut();
  $('.quote-author').fadeOut();
  setTimeout(() => {
    $.ajax({
      crossOrigin: true,
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback',
      dataType: 'jsonp',
    });
  }, 200);
});

// Add json to elements
function mycallback(json) {
  const quote = json[0];
  $('.quote-body').html(`${quote.content}`).fadeIn();
  $('.quote-author').html(`― ${quote.title}`).fadeIn();
}

// Change click to tap on mobiles/tablets
// Thanks to Santhosh @ http://stackoverflow.com/a/29509267/2588066
$(document).ready(() => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    $('.quote-body').html('Press the spacebar or tap to inspire');
  }
});
