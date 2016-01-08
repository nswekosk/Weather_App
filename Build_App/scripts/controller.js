


app.controller('home-controller', ["$scope",'forecastService', function($scope, forecastService){

	$scope.city = forecastService.city;

	$scope.$watch('city', function(){

		forecastService.city = $scope.city;

	});


}]);

app.controller('forecast-controller', ["$scope",'forecastService', "$resource","$routeParams","utilityService", "weatherService", function($scope, forecastService, $resource, $routeParams, utilityService, weatherService){

	$scope.city = forecastService.city;

	$scope.numDays = $routeParams.numDays || '2';

	//////////////////////////////////////////////
	// Service handles getting weather from API //
	//////////////////////////////////////////////

	$scope.weatherResult = weatherService.getWeather($scope.city, $scope.numDays);

	////////////////////
	// Helper methods //
	////////////////////

	$scope.convertToFahrenheit = utilityService.convertToFahrenheit;

	$scope.convertDate = utilityService.convertDate;

	$scope.condFormat = utilityService.condFormat;

	$scope.degToCompass = utilityService.degToCompass;


}]);

