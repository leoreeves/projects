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
  const { content, title } = json[0];
  $('.quote-body').html(`${content.rendered}`).fadeIn();
  $('.quote-author').html(`― ${title.rendered}`).fadeIn();
}

function setMobileText() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    $('.quote-body').html('Tap to inspire');
  }
}

setMobileText();

function handleQuote() {
  fadeOutQuote();
  getQuote();
}

document.body.onkeydown = (event) => {
  if (event.code === 'Space') {
    handleQuote();
  }
};

document.body.onclick = () => {
  handleQuote();
};
