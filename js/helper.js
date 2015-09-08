var helper = angular.module("helperApp", []);

helper.directive("ngRedirectTo", ['$window', function($window) {
	return {
		restrict: 'A',
		link: function(scope, element, attributes) {
			element.bind('click', function(event) {
				$window.location.href = attributes.ngRedirectTo + ".html";
			});
		}
	};
}]);

helper.filter('excludeUsed', function() {
	var filter = function(questionList) {
		var checkItem = function(item) {
			var use = true;
			questionList.map(function(ques) {
				if(ques.selected===true)
					use = false;
			});
			return use;
		};
		return questionList.filter(checkItem);
	};
	return filter;
});