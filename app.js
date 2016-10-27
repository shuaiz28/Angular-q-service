var app = angular.module('myApp', []);
app.controller('qCtrl', function($scope, $q) {
	$scope.addOne = function(num) {
		var deferred = $q.defer();
		if (angular.isNumber(num)) {
			deferred.resolve(num + 1);
		} else {
			deferred.reject('Not a number.');
		}
		return deferred.promise;
	}

	//$scope.myNum = 0;
	$scope.myNum = '0';
	$scope.myResult = $scope.addOne($scope.myNum);
	$scope.myResult.then(function(result) {
		$scope.myNum = result;
	}, function(err) {
		$scope.myNum = err;
	})
})