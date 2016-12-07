function weather() {
	var location = document.getElementById('location');
	var apiKey = '6e8ef3c8d011eaec80514e6098c16c01';
	var url = 'https://api.forecast.io/forecast/';
	
	navigator.geolocation.getCurrentPosition(success, error);
	
	function success(position) {
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;
		
		// Place and country
		$.getJSON({ url:'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true',
         success: function(data){
             location.innerHTML = (data.results[0].address_components[2].long_name + ", " + data.results[0].address_components[6].short_name);
         }
		});
		
		// Weather measurements
		$.getJSON(url + apiKey + '/' + latitude + ',' + longitude  + '?callback=?' + '&units=si', function(data) {
			$('#temp').html(Math.round(data.currently.temperature) + '<span id="measure">°C </span>');
			$('#switch').html('<label id="conv"><input type="checkbox" id="fahr" onclick="convert()"/>Change units</label>')
			$('#minutely').html(String(data.minutely.summary).slice(0, -1));
			$("#weather-icon").html("<i class=\"wi wi-forecast-io-"+data.currently.icon+"\"<\/i>");
		});
	}
	
	function error() {
		location.innerHTML = "Unable to retrieve your location";
	}
}

weather();

function convert() {
	var c = parseInt($('#temp').text());
	if (document.getElementById('fahr').checked) {
		document.getElementById('temp').innerHTML = (Math.round((c * 9/5) + 32) + '<span id="measure">°F </span>');
	} else {
		document.getElementById('temp').innerHTML = (Math.round((c - 32) * 5/9) + '<span id="measure">°C </span>');
	}
}
