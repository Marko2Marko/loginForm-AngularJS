app.controller('loginController', ['$scope', '$rootScope', '$state', function($scope,$rootScope,$state){
    console.log('login kontroler je aktivan');
   
      console.log($rootScope.users);
      //users u localStorage-u
     var users = $rootScope.getUsers();
     console.log(users);
    
    // $rootScope.user={};
  $rootScope.usr = {id:"",name:"",email:"",password:""};
 
    $scope.validUser = function(user){ //koristim $rootScope.users...a kasnije cu podatke iz localStorage-a za validaciju i login

        console.log($rootScope.users);
        console.log($scope.user);
     

       // for (var i = 0; i < $rootScope.users.length; i++  ){ //ista petlja  kao ispod
       for(var i in $rootScope.users){                        
        console.log($rootScope.users[i]);
        
        
           //var user = $rootScope.users[i];  //opcija za lakse kodiranje
       if	(($rootScope.users[i].email == $scope.user.email) && ( $rootScope.users[i].password == $scope.user.password)){
           
         
            console.log($rootScope.users[i]);
           
          $rootScope.usr = $rootScope.users[i];
            console.log($rootScope.usr);
            console.log($rootScope.users[i]);
                return  true;
       }else{
        	console.log("nije dobar email ili password");
        	 $scope.message = "nije dobar email ili password";
        	//return  false;
       }
      }//kraj for petlje
    }; //kraj validUser

    $scope.login = function(){
        console.log($scope.user);
        if(  $scope.validUser($scope.user) ){
        	console.log($scope.user);
        	console.log($rootScope.usr);
            //   login 
          if($rootScope.usr.user_role == 'user') { $state.go('myProfile');}else{ $state.go('admin'); 
           }
        }  
        
    };
    
    $scope.message = $rootScope.message;
   

}]); 
