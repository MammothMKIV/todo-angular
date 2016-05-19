app.controller('PaginationCtrl', function($scope, $log, taskProvider) {
	$scope.todos = taskProvider.getTodos();
	$scope.itemsPerPage = 7;
	$scope.currentPage = 1;
	$scope.maxSize = 5;

	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};

	$scope.pageChanged = function() {

	};

	$scope.setItemsPerPage = function(num) {
		$scope.itemsPerPage = num;
		$scope.currentPage = 1;
	}
});

app.filter('pages', function() {
	return function(arr, currentPage, itemsPerPage) {
    if(angular.isArray(arr)) {
      var start = (currentPage-1)*itemsPerPage;
      var end = currentPage*itemsPerPage;
      return arr.slice(start, end);
    }
  };
});
