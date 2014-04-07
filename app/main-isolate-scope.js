var app = angular.module('choreApp', []);

app.controller("ChoreCtrl", function($scope) {
	$scope.logChore = function (chore) {
		alert(chore + " is done!");
	};
})

app.directive('kid', function() {
	return {
		restrict: 'E',
		scope: {
			done: "&"
		},
		template: '<input type="text" ng-model="chore">' +
			'<h1>{{chore}}</h1>' +
			'<div class="button" ng-click="done({chore:chore})">Done</div>'
	}
})