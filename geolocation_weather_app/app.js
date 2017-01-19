$(document).ready(function() {
	// $('body').hide().fadeIn(3000);
	const unit = "si";
	getLocation();
	//Switch from F to C
	$(".unit").on("click", function() {
		if (unit == "us") {
			unit = "si";
			getLocation();
		} else if (unit == "si") {
			unit = "us";
			getLocation();
		}
	});
	//Begin Function getLocation
	function getLocation() {
		if (navigator.geolocation) {
			// timeout at 60000 milliseconds (60 seconds)
			const options = {
				timeout: 60000
			};
			navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
		} else {
			$("#location").html("Sorry your browser does nut support geolocation!");
			alert("Sorry, your browser does not support geolocation!");
		}
		
		function showLocation(position) {
			const lat = position.coords.latitude;
			const lon = position.coords.longitude;
			const baseURL = "https://api.darksky.net/forecast/";
			const APPID = "3338c55b94a58007e0bf4195c5ab1548/";
			const units = "?units=";
			const location = lat + "," + lon;
			const webURL = baseURL + APPID + location + units + unit;
			const location_URL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + location;
			$(document).ajaxStop(function () {
				$.getJSON(location_URL, function(json) {
				$("#location").html(json.results[0].address_components[2].long_name + ", " + json.results[0].address_components[6].short_name);
			});
			});
			$.ajax({
				url: webURL,
				dataType: "jsonp",
				success: function(data) {
					$(".icon_unit, .weather");
					$("#temp").html(Math.round(data.currently.temperature) + " &#176");
					$("#weather_icon").html("<i class=\"wi wi-forecast-io-" + data.currently.icon + "\"<\/i>");
					$("#summary").html(String(data.minutely.summary).slice(0, -1));
					if (data.flags.units == "us") {
						$(".unit").html("F");
						$(".unit").css({
							"color": "#ef5350"
						});
					} else if (data.flags.units == "si") {
						$(".unit").html("C");
						$(".unit").css({
							"color": "#90CAF9"
						});
					}
				},
				error: function(xhr, ajaxOptions, thrownError) {
					$(".icon").css({
						"display": "none"
					});
					$(".weather").css({
						"display": "none"
					});
					$("#error_message").addClass("animated fadeIn");
					$("#error_message").html("Oh No! Something went wrong with our weather app.</br>Please try again later");
					console.log("Error code " + xhr.status);
				}
			});
		}

		function errorHandler(err) {
			if (err.code == 1) {
				alert("Error: Make sure to use HTTPS when loading this page. Essential resources depend on this.");
			} else if (err.code == 2) {
				alert("Error: Position is unavailable!");
			}
		}	
	}

	// Fix time display function
	const now = new Date();
	const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	const day = days[now.getDay()];
	const time = `${now.getHours()}:${now.getMinutes()}`;
	const hours = now.getHours();
	const minutes = now.getMinutes();

	$(document).ajaxStop(function () {
		document.getElementById('day-and-time').innerHTML = day + ' ' + (hours < 10 ? '0'+hours : hours) + ':' + (minutes < 10 ? '0'+minutes : minutes);
	});
});


// Background change for time of day
const today = new Date();
const hour = today.getHours();
if (hour > 5 && hour < 19) {
	document.body.style.background = "url(images/bluesky.png)";
	document.body.style.backgroundSize = "cover";
} else {
	document.body.style.background = "url(images/nightsky.png)";
	document.body.style.backgroundSize = "cover";
	document.getElementById('attributation').src = "https://darksky.net/dev/img/attribution/poweredby-oneline-darkbackground.png";
}
