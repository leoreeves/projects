$(document).ready(() => {
  const articles = $('.articles');
  const input = $('input');
  const button = $('button');
  const searchUrl = 'https://en.wikipedia.org/w/api.php';
  let toSearch = '';
  input.focus();
  $('.searchbar-close-icon').click(() => {
    input.val('');
    input.focus();
  });
  const ajaxArticleData = () => {
    $.ajax({
      url: searchUrl,
      dataType: 'jsonp',
      data: {
        // Main parameters
        action: 'query',
        format: 'json',
        generator: 'search',
        // Parameters for generator
        gsrsearch: toSearch,
        gsrnamespace: 0,
        gsrlimit: 20,
        prop: 'extracts|pageimages',
        // Parameters for extracts
        exchars: 200,
        exlimit: 'max',
        explaintext: true,
        exintro: true,
        // Parameters for pageimages
        piprop: 'thumbnail',
        pilimit: 'max',
        pithumbsize: 200,
      },
      success(json) {
        const pages = json.query.pages;
        $.map(pages, (page) => {
          const pageElement = $(`<div class="card hoverable" onclick="location.href=http://en.wikipedia.org/wiki/${page.title}";><div class="card-content left-align"><a href="http://en.wikipedia.org/wiki/${page.title}"><span class="card-title">${page.title}</span><p>${page.extract}</p>`);
          // Get the article image if it exists
          if (page.thumbnail) pageElement.append($('<img>').attr('src', page.thumbnail.source));
          articles.append(pageElement);
        });
      },
    });
  };
  // Search on enter
  input.keyup((e) => {
    toSearch = input.val();
    if (e.keyCode === 13) {
      if (toSearch !== '') {
        articles.empty();
        ajaxArticleData();
        $('body').css('display', 'block');
      }
    }
  });
  // Search button
  button.click(() => {
    toSearch = input.val();
    if (toSearch !== '') {
      articles.empty();
      ajaxArticleData();
      $('body').css('display', 'block');
    }
  });
});
