// Generate quote when spacebar is pressed
$(window).keypress((e) => {
  if (e.which === 32) {
    setTimeout(() => {
      $.ajax({
        crossOrigin: true,
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback',
        dataType: 'jsonp',
      });
    }, 1000);
  }
});

// Generate quote on click
$(document).on('click', () => {
  setTimeout(() => {
    $.ajax({
      crossOrigin: true,
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback',
      dataType: 'jsonp',
    });
  }, 1000);
});

function mycallback(json) {
  const quote = json[0];
  $('.quote-body').html(`${quote.content}`).fadeIn();
  $('.quote-author').html(`- ${quote.title}`);
}

