$(document).ready(() => {
  const articles = $('.articles');
  const input = $('input');
  const searchButton = $('#search-btn');
  const searchUrl = 'https://en.wikipedia.org/w/api.php';
  const borderColours = ['#F44336', '#E91E63', '#9C27B0', '#673AB7',
    '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4',
    '#009688', '#4CAF50', '#8BC34A', '#CDDC39',
    '#FFEB3B', '#FFC107', '#FF9800', '#FF5722',
    '#795548', '#9E9E9E', '#607D8B'];
  let searchInput = '';
  let cardImage = '<div class="card-image"></div>';
  let articleCard;

  input.focus();

  function addCardImageIfThumbnail(page) {
    if (page.thumbnail) {
      cardImage = `
        <div class="card-image">
          <img src="${page.thumbnail.source}" alt="${page.title}">
        </div>
      `;
    } else {
      cardImage = '';
    }
  }

  function createArticleCard(underScoredLink, page) {
    articleCard = $(`
      <div class="card hoverable" onclick="window.location.href='${underScoredLink}'">
      ${cardImage}
      <div class="card-content left-align">
      <span class="card-title">${page.title}</span>
      <p>${page.extract}</p>
    `);
  }

  function assignCardBorderColor() {
    $('.card').each((index, element) => {
      let colorIndex = Math.floor(Math.random() * borderColours.length) + 1;
      if (colorIndex < borderColours.length) {
        colorIndex += 1;
      }

      if (colorIndex >= borderColours.length) {
        colorIndex = 0;
      }

      $(element).css('border-left', `5px solid ${borderColours[colorIndex]}`);
    });
  }

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
        gsrsearch: searchInput,
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
        pithumbsize: 800,
      },
      success(json) {
        const { ...pages } = json.query.pages;

        $.map(pages, (page) => {
          const pageTitle = page.title;
          const underscoredTitle = pageTitle.split(' ').join('_');
          const underScoredLink = `http://en.wikipedia.org/wiki/${underscoredTitle}`;

          addCardImageIfThumbnail(page);
          createArticleCard(underScoredLink, page);
          articles.append(articleCard);
        });

        assignCardBorderColor();
      },
      error(xhr) {
        Materialize.toast(`Request Status: ${xhr.status} Status Text: ${xhr.statusText} ${xhr.responseText}`, 2000);
      },
    });
  }

  function clearArticles() {
    articles.empty();
    getArticleData();
    $('body').css('display', 'block');
  }

  $('.searchbar-close-icon').click(() => {
    input.val('');
    input.focus();
  });

  // Search on enter
  input.keyup((e) => {
    searchInput = input.val().trim();

    if (e.keyCode === 13) {
      if (searchInput !== '') {
        clearArticles();
      }
    }
  });

  searchButton.click(() => {
    searchInput = input.val().trim();

    if (searchInput !== '') {
      clearArticles();
    }
  });
});

