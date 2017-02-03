app.controller('adminController', [ '$rootScope', '$scope' ,function($rootScope,$scope){
	console.log('admin kontroler je aktivan');
	 var users = $rootScope.getUsers();
	 console.log(users);
	  $rootScope.message = "";
}]);
