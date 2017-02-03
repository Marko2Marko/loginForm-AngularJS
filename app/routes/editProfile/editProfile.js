app.controller('editProfileController',[ '$rootScope', '$scope', '$state', function($rootScope, $scope, $state){
	console.log('editProfile kontroler je aktivan');
	$rootScope.usr ;
	console.log($rootScope.usr);
    var users =  $rootScope.getUsers();
	
	 console.log($scope.user);
	 
	
	$scope.updateUser = function (user){
    

   for ( var i in $rootScope.users){
     if ($rootScope.users[i].id == $rootScope.usr.id){

        $scope.user.id = $rootScope.users[i].id; //ovo koristim sad da bih dodao postojeci id,jer se gubi id bez ovog koda
     	$rootScope.users[i] = $scope.user;
     	$scope.user.date = $rootScope.usr.date;//ovo koristim sad da bih dodao postojeci date registracije
     	$scope.user.modifiedUser = new Date();//ovo koristim sad da bih dodao novi date
   
  
        $rootScope.message = "uspesno azuriran korisnik. Ulogujte se ponovo";

       
     	break;

     }
       }
       for (var i in users) {
           if (users[i].id == $rootScope.usr.id ){
           //  $scope.user.id = $rootScope.users[i].id; 
            users[i] = $scope.user;
             $scope.user.date = $rootScope.usr.date;//ovo koristim sad da bih dodao postojeci date registracije
             $scope.user.modifiedUser = new Date();

            $rootScope.setUsers(users);
    }
        }
       $rootScope.usr = $scope.user;
        
        $state.go('login');
       
	};

   console.log($rootScope.users);
}]);

