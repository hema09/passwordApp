var app = angular.module("app",['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/index', {
			templateUrl : 'index.html',
			controller: 'indexCtrl'
		})
		.when('/about', {
			templateUrl : '/about.html',
			controller : 'aboutCtrl'
		})
		.when('/contact', {
			templateUrl : '/contact.html',
			controller : 'contactCtrl'
		})
		.otherwise({
			redirectTo: '/index.html'
		})
}]);

app.controller("indexCtrl", function($scope) {
	$scope.message = "This is Index controller";
});

app.controller("aboutCtrl", function($scope) {
	$scope.message = "This is About controller";
});

app.controller("contactCtrl", function($scope) {
	$scope.message = "This is Contact controller";
});



