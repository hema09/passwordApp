var app = angular.module("passApp",['ngRoute']);

/*app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/main2', {
			templateUrl : '../main.html'
		})
		.when('/newuser', {
			templateUrl : '../html/questionTemplate.html',
			controller : 'questionController'
		})
		.when('/forgotpassword', {
			templateUrl : '../html/questionTemplate.html',
			controller : 'questionController'
		})
		.otherwise({
			redirectTo: '../main.html'
		})
}]);*/


/*app.directive("questionsForm", function() {
	return {
		restrict : 'E',
		templateUrl : '../html/questionTemplate.html',
		controller : "questionController"
	};
});*/

app.directive("ngRedirectTo", ['$window', function($window) {
	return {
		restrict: 'A',
		link: function(scope, element, attributes) {
			element.bind('click', function(event) {
				$window.location.href = attributes.ngRedirectTo + ".html";
			});
		}
	};
}]);
