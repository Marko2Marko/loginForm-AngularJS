app.controller('editUsersController',[ '$scope', '$rootScope','$state', function($scope, $rootScope, $state){
	console.log('editUsers kontroler je aktivan');

    $rootScope.message = "";

	$rootScope.usr;
	console.log($rootScope.usr);
	//$scope.user = $rootScope.usr;
	var users = $rootScope.getUsers();

	$scope.updateUser = function (user){
    

   for ( var i in $rootScope.users){
     if ($rootScope.users[i].id == $rootScope.usr.id){

        $scope.user.id = $rootScope.users[i].id; //ovo koristim sad da bih dodao postojeci id,jer se gubi id bez ovog koda
     	$rootScope.users[i] = $scope.user;
     	$scope.user.date = $rootScope.usr.date;//ovo koristim sad da bih dodao postojeci date registracije
     	$scope.user.modifiedUser = new Date();//vo koristim sad da bih dodao novi dat
        
  
        $rootScope.message = "uspesno azuriran korisnik.";

       
     	break;

     }
       }
       for (var i in users) {
           if (users[i].id == $rootScope.usr.id ){
         //    $scope.user.id = $rootScope.users[i].id; 
            users[i] = $scope.user;
             $scope.user.date = $rootScope.usr.date;
             $scope.user.modifiedUser = new Date();

            $rootScope.setUsers(users);
    }
        }
       $rootScope.usr = $scope.user;
        
        $state.go('viewProfile');
       
	};
}]);