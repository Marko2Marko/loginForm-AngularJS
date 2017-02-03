app.controller('myProfileController',['$scope', '$rootScope', '$state', function($scope, $rootScope, $state){
	console.log('myProfile kontroler je aktivan');
	 
//	 $rootScope.users;
//	   console.log($rootScope.users);
	   $scope.user = $rootScope.usr;
	    console.log($scope.user);
	      console.log($rootScope.usr);
	
$scope.logout = function(){ 

	 $state.go('login');
	 $rootScope.usr={id:"",name:"",email:"",password:""};
	  $rootScope.message = "";
};



	

     $rootScope.message = "" ;
}]);
