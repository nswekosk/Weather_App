var API_KEY = '...';

var weather_api = 'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=' + API_KEY;

app.service('forecastService', function(){

	this.city = '';

});

app.service('weatherService',["$resource", function($resource){

	this.getWeather = function(city, days){

		var weatherAPI = $resource(weather_api, {callback: 'JSON_CALLBACK'}, {get: {method: "JSONP"}});

		return weatherAPI.get({q: city, cnt: days});

	};

}]);

app.service('utilityService', function(){


	/***********************************
	 ** Converts temperature from kelvin
	 ** to fahrenheit.
	 **
	 ***********************************/
	this.convertToFahrenheit = function(temp){

		return Math.round((temp - 273.15) * 1.8 + 32.00);
	
	};



	/***********************************
	 ** Converts the date to today.
	 **
	 ***********************************/
	this.convertDate = function(date){

		return new Date(date * 1000);

	};



	/***********************************
	 ** Formats the first letter of each
	 ** word to uppercase.
	 **
	 ***********************************/
	this.condFormat = function(condition){

		return condition.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

	};



	/***********************************
	 ** Converts degrees to a compass
	 ** direction
	 **
	 ***********************************/
	this.degToCompass = function(degree){

		var value = Math.round((degree/22.5) + .5);

		var directions = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];

		return val = directions[(value % 16)];
	};
});
