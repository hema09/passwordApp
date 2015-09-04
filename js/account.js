var app = angular.module("acapp",['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/questions', {
			templateUrl: '../questions.html',
			controller: 'questionController'
		})
		.when('/credentials', {
			templateUrl : '../credentials.html'
		})
		.when('/thankyou', {
			templateUrl : '../thankyou.html'
		})
		.otherwise( {
			redirectTo : '/credentials'
		})
		
}]);

app.controller("loginController", ['$scope', '$location', function($scope, $location) {
	$scope.username = "";
	$scope.password = "";
	$scope.login = function() {
		// make http call to service with username and password,
		// success : reset uname/password and redirect to questionTemplate page
		$location.path('/questions');
	}
}]);

app.controller("questionController", ['$scope', '$location', function($scope, $location) {
	// GET these questions
			$scope.questions = [
				{"name":"What is blue?", "id" : "q1", "selected" : false},
				{"name":"What is your phone's color?", "id" : "q2","selected" : false},
				{"name":"Chicken is called?", "id" : "q3","selected" : false},
				{"name":"What is an orange?", "id" : "q4","selected" : false},
				{"name":"What is a duck?", "id" : "q5","selected" : false}
			];	
			$scope.userQuestions = [];
			$scope.qnums = ["ques1", "ques2", "ques3"];
			$scope.setQuestion = {};
			
			// function to add user with questions
			$scope.addUserQuestions = function() {
				console.log($scope.setQuestion);
				$scope.userQuestions.push({
					question : $scope.setQuestion.ques2.question.id,
					answer : $scope.setQuestion.ques2.answer
				 });
				$scope.userQuestions.push({
					question : $scope.setQuestion.ques2.question.id,
					answer : $scope.setQuestion.ques2.answer
				 });
				$scope.userQuestions.push({
					question : $scope.setQuestion.ques3.question.id,
					answer : $scope.setQuestion.ques3.answer
				 });
				console.log($scope.userQuestions);
				// POST selected questions and answers
				$location.path('/thankyou');
			};
}]);
