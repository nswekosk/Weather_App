
app.directive('weatherResult', function(){
	return {
		restrict: "E",
		templateUrl: "directives/weatherResult.html",
		replace: true,
		scope: {
			dateFormat: "@",
			date : "&",
			temp : "&",
			cond: "&",
			compass: "&",
			weatherDay : "="
		}
	}
});