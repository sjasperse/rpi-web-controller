var app = angular.module('RPiWeb', []);
app.controller('MainController', function ($scope, $http) {
	$scope.message = "Hello from angular";

	$scope.on = function () {
		$http.post('/action/on');
	};

	$scope.off = function () {
		$http.post('/action/off');
	};

	$scope.toggle = function () {
		$http.post('/action/toggle');
	}

	$scope.blink = function (delay) {
		$http.post('/action/blink', { delay: delay });
	};

	$scope.stop = function () {
		$http.post('/action/stop');
	}
});