var app = angular.module("pwdapp",['ngRoute', 'ngMessages']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/getuser', {
		templateUrl : '../html/getuser.html',
		controller: 'userController'
	})
	.when('/showquestion', {
		templateUrl : '../html/showquestion.html',
		controller : "answerController"
	})
	.when('/thankyou', {
		templateUrl : '../html/thankyou.html'
	})
	.when('/passwordreset', {
		templateUrl : '../html/passwordreset.html',
		controller: 'passwordResetController'
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
	$scope.checkAnswer = function() {
		answer = $scope.answer;
		question = $scope.question;
		// success , goto next question
		if($scope.questionNumber < 3) {
			$scope.questionNumber++;
			$scope.question = "this is question " + $scope.questionNumber + " here";
			$scope.answer = "";
		} else {
			$location.path("/passwordreset")
		}
	};
}]);

app.controller("passwordResetController", ['$scope', '$location', function($scope, $location) {
	
	$scope.passwordReset = function() {
		var pwd = $scope.password;
		console.log(pwd);
		// http call to send password
		// if success
		// show thank you page
		// else TODO
		$location.path('/thankyou');

	};
}]);

/**
* value in ngModel is compared with value in compareTo
*/
app.directive('compareTo', function() {
	return {
		require : "ngModel",
		scope: {
			otherValue : "=compareTo"
		},
		link : function(scope, element, attrbs, ngModel) {
			ngModel.$validators.compareTo = function(modelValue) {
				return modelValue == scope.otherValue;
			};
			scope.$watch("otherValue", function() {
				ngModel.$validate();
			});
		}
	};
});




















