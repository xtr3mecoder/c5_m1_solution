(function () {
	angular.module('LunchCheck',[])

	.controller('lccontr',cnt);

	function cnt($scope){
		$scope.name = "";
		$scope.message = "";
		$scope.value = 0;
		$scope.chec = function () {
		  if ($scope.name == ""){
		  	$scope.name = null;
		  	$scope.message = "Please enter data first!";
		  };
		  if ($scope.name != null){
		  var arrayOfStrings = $scope.name.split(',');
		  console.log('The original string is: "' + $scope.name + '"');
		  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
		  $scope.value = arrayOfStrings.length;
			  if ($scope.value < 4){
			  	$scope.message = "Enjoy!";
			  };
			  if($scope.value > 3){
			  	$scope.message = "Too much!";
			  }
		  }
		 

		};
	};
})();