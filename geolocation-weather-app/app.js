$(document).ready(() => {
  $('body').fadeIn(8000);
  function getLocation() {
    if (navigator.geolocation) {
      // timeout at 60000 milliseconds (60 seconds)
      const options = {
        timeout: 60000,
      };
      navigator.geolocation.getCurrentPosition(setLocation, errorHandler, options);
    } else {
      errorMessage('Sorry your browser does not support geolocation!');
    }

    function setLocation(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const baseURL = 'https://api.darksky.net/forecast/';
      const APPID = '3338c55b94a58007e0bf4195c5ab1548/';
      const units = '?units=';
      const location = `${lat},${lng}`;
      const webURL = baseURL + APPID + location + units + unit;
      const sunsetSunriseURL = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`;
      const locationURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location}`;

      function setPlace() {
        $.getJSON(locationURL, (json) => {
          $('#location').html(`${json.results[0].address_components[3].long_name}`);
        });
      }

      function setBackground() {
        $.getJSON(sunsetSunriseURL, (json) => {
          const today = new Date();
          const hour = today.getHours();
          const sunrise = new Date(json.results.sunrise);
          const sunset = new Date(json.results.sunset);
          const twilightBegin = new Date(json.results.civil_twilight_begin);
          const twilightEnd = new Date(json.results.civil_twilight_end);

          let times = [sunrise, sunset, twilightBegin, twilightEnd];
          times = times.map(time => time = time.getUTCHours());

          if (hour >= times[2] && hour <= times[0]) {
            document.body.classList.add('dawn');
            document.getElementById('attributation').src = 'https://darksky.net/dev/img/attribution/poweredby-oneline-darkbackground.png';
          }

          if (hour > times[0] && hour < times[1]) {
            document.body.classList.add('day');
          }

          if (hour >= times[1] && hour <= times[3]) {
            document.body.classList.add('dusk');
          }

          if (hour < times[0] || hour > times[3]) {
            document.body.classList.add('night');
            document.getElementById('attributation').src = 'https://darksky.net/dev/img/attribution/poweredby-oneline-darkbackground.png';
          }
        });
      }

      function getForecast() {
        $.ajax({
          url: webURL,
          dataType: 'jsonp',
          success(data) {
            $('.icon_unit, .weather');
            $('#temp').html(`${Math.round(data.currently.temperature)}&#176`);
            $('#weather_icon').html(`<i class="wi wi-forecast-io-${data.minutely.icon}"<\/i>`);
            $('#summary').html(String(data.minutely.summary).slice(0, -1));
            if (data.flags.units === 'us') {
              $('.unit').html('F');
              $('.unit').css({
                color: '#ff6e40',
              });
            } else if (data.flags.units === 'si') {
              $('.unit').html('C');
              $('.unit').css({
                color: '#4fc3f7',
              });
            }
          },
          error(xhr, ajaxOptions, thrownError) {
            $('.icon').css({
              display: 'none',
            });
            $('.weather').css({
              display: 'none',
            });
            errorMessage('Oh No! Something went wrong with our weather app.</br>Please try again later');
            console.log(`Error code ${xhr.status}`);
          },
        });
      }

      setPlace();
      setBackground();
      getForecast();
      getTime();
    }

    function errorMessage(message) {
      $('#error-message').addClass('animated fadeIn');
      $('#error-message').css('display', 'block');
      $('#error-message').html(message);
    }

    function errorHandler(err) {
      if (err.code === 1) {
        alert('Error: Position is unavailable!');
        $('#error-message').addClass('animated fadeIn');
        errorMessage('Enable geolocation to load weather');
      } else if (err.code === 2) {
        alert('Error: Make sure to use HTTPS when loading this page. Essential resources depend on this.');
        $('#error-message').addClass('animated fadeIn');
        errorMessage('Unable to load weather over HTTP.');
      }
    }
  }


  // Switch units
  let unit = 'si';

  $('.unit').on('click', () => {
    if (unit === 'us') {
      unit = 'si';
      getLocation();
    } else if (unit === 'si') {
      unit = 'us';
      getLocation();
    }
  });

  function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    document.getElementById('time').innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  }

  function updatePage() {
    getLocation();
  }

  updatePage();
  // update page every minute
  setInterval(() => updatePage(), 60000);
});
