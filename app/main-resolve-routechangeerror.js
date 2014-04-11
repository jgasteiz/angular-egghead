var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/',
		{
			templateUrl: 'views/app.html',
			controller: 'ViewCtrl',
			resolve: {
				app: viewCtrl.loadData
			}
		})
});

app.controller("AppCtrl", function($rootScope) {
	$rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
		console.log(event);
		console.log(current);
		console.log(previous);
		console.log(rejection);
	});
});

var viewCtrl = app.controller('ViewCtrl', function($scope, $q) {
	$scope.model = {
		message: "This is my app!"
	};
});

viewCtrl.loadData = function($q, $timeout) {
	var defer = $q.defer();
	$timeout(function() {
		defer.reject("Your network is down");
	}, 2000);
	return defer.promise;
};