var app = angular.module("pwdapp",['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/getuser', {
		templateUrl : '../getuser.html',
		controller: 'userController'
	})
	.when('/showquestion', {
		templateUrl : '../showquestion.html',
		controller : "answerController"
	})
	.otherwise({
		redirectTo : '/getuser',
		controller : 'userController'
	});
}]);

app.controller('userController', ['$scope', '$location', function($scope, $location) {
	$scope.username = "";
	$scope.checkUser = function() {
		// check if username exists
		//if success, 
		// make http call to fetch 1 question for user
		$location.path("/showquestion")
		// if fail, //TODO
	}	
}]);

app.controller('answerController', ['$scope', '$location', function($scope, $location) {
	$scope.questionNumber = 1;
	$scope.totalQuestions = 3;
	$scope.question = "this is question 1 here"; // http get this, TODO
	$scope.answer = "";
	
}]);




