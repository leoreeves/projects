function weather() {
	var location = document.getElementById('location');
	var apiKey = '6e8ef3c8d011eaec80514e6098c16c01';
	var url = 'https://api.forecast.io/forecast/';
	
	navigator.geolocation.getCurrentPosition(success, error);
	
	function success(position) {
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;
		
		// Latitude and longitude - location.innerHTML = 'Latitiude is ' + String(latitude).slice(0,5) + '° Longitude is ' + String(longitude).slice(0,5) + '°';
		
		// Place and country
		$.getJSON({ url:'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true',
         success: function(data){
             location.innerHTML = (data.results[0].address_components[2].long_name + ", " + data.results[0].address_components[6].short_name);
         }
		});
		
		// Weather measurements
		$.getJSON(url + apiKey + '/' + latitude + ',' + longitude  + '?callback=?' + '&units=auto', function(data) {
			$('#temp').html(Math.round(data.currently.temperature) + '° C');
			$('#minutely').html(String(data.minutely.summary).slice(0, -1));
			$("#weather-icon").html("<i class=\"wi wi-forecast-io-"+data.currently.icon+"\"<\/i>");
		});
	}
	
	function error() {
		location.innerHTML = "Unable to retrieve your location";
	}
	//location.innerHTML = "Location..."
}

weather();