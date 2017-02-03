app.controller('listUsersController', [ '$rootScope', '$scope' ,'$state', function($rootScope, $scope, $state){
	console.log('listUsers kontroler je aktivan');

  $rootScope.message ="";

      $rootScope.users;
      console.log($rootScope.users);
      console.log($scope.user);
      $scope.user = $rootScope.usr ;
   

       var userss;
       var name;
	  $scope.userss = $rootScope.getUsers();


      $rootScope.viewProfile = function (user) {
    
    	for(var i in $rootScope.users){
    	
    	$rootScope.usr = $rootScope.user;
    	console.log($rootScope.user);
    	}
    	
         $rootScope.usr = user;
    	console.log($scope.user);
    	console.log($rootScope.usr);
      $state.go('viewProfile');
    }


	 
}]);