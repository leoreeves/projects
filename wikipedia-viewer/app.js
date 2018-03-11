$(document).ready(() => {
  const articles = $('.articles');
  const input = $('input');
  const button = $('button');
  const searchUrl = 'https://en.wikipedia.org/w/api.php';
  const borderColours = ['#F44336', '#E91E63', '#9C27B0', '#673AB7',
    '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4',
    '#009688', '#4CAF50', '#8BC34A', '#CDDC39',
    '#FFEB3B', '#FFC107', '#FF9800', '#FF5722',
    '#795548', '#9E9E9E', '#607D8B'];
  let index = 0;
  let toSearch = '';

  input.focus();

  function getArticleData() {
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
        pithumbsize: 1000,
      },
      success(json) {
        const { ...pages } = json.query.pages;

        $.map(pages, (page) => {
          const pageTitle = page.title;
          const underscoredTitle = pageTitle.split(' ').join('_');
          const underScoredLink = `http://en.wikipedia.org/wiki/${underscoredTitle}`;
          let cardImage = '<div class="card-image"></div>';

          if (page.thumbnail) {
            cardImage = `
              <div class="card-image">
                <img src="${page.thumbnail.source}" alt="${pageTitle}">
              </div>
            `;
          } else {
            cardImage = '';
          }

          const pageElement = $(`
            <div class="card hoverable" onclick="window.location.href='${underScoredLink}'">
            ${cardImage}
            <div class="card-content left-align">
            <span class="card-title">${page.title}</span>
            <p>${page.extract}</p>
          `);

          // Lazy load images
          const images = document.querySelectorAll('img[data-src]');

          images.forEach((img) => {
            img.setAttribute('src', img.getAttribute('data-src'));
            img.onload = () => {
              img.removeAttribute('data-src');
            };
          });

          articles.append(pageElement);
        });

        $('.card').each(function assignBorderColour() {
          index = Math.floor(Math.random() * borderColours.length) + 1;
          if (index < borderColours.length) {
            index += 1;
          }

          if (index >= borderColours.length) {
            index = 0;
          }

          $(this).css('border-left', `5px solid ${borderColours[index]}`);
        });
      },
      error(xhr) {
        Materialize.toast(`Request Status: ${xhr.status} Status Text: ${xhr.statusText} ${xhr.responseText}`, 2000);
      },
    });
  }

  $('.searchbar-close-icon').click(() => {
    input.val('');
    input.focus();
  });

  // Search on enter
  input.keyup((e) => {
    toSearch = input.val();

    if (e.keyCode === 13) {
      if (toSearch !== '') {
        articles.empty();
        getArticleData();
        $('body').css('display', 'block');
      }
    }
  });

  // Search button
  button.click(() => {
    toSearch = input.val();

    if (toSearch !== '') {
      articles.empty();
      getArticleData();
      $('body').css('display', 'block');
    }
  });
});

