
app.config(function($routeProvider){

	$routeProvider.when('/', {

		templateUrl: "pages/home.html",
		controller: "home-controller"

	}).when('/forecast', {

		templateUrl: "pages/forecast.html",
		controller: "forecast-controller"

	}).when('/forecast/:numDays', {
		templateUrl: "pages/forecast.html",
		controller: "forecast-controller"
	});

});
