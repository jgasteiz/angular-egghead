var app = angular.module('app', []);

app.controller('MyController', ['$scope', '$http', function(a, b) {
	console.log(a);
}]);

app.directive("myDirective", ['$http', function(a) {

	return {
		link: function(scope, element, attrs) {
			console.log(a);
		}
	}


}]);