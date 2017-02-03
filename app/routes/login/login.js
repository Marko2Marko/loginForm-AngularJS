app.controller('loginController', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
        console.log('login kontroler je aktivan');


        var users = $rootScope.getUsers();
        console.log(users);

        $rootScope.usr = {id: "", name: "", email: "", password: ""};

        $scope.validUser = function (user) {

            console.log(users);
            console.log($scope.user);


            // for (var i = 0; i < $rootScope.users.length; i++  ){ 
            for (var i in users) {
                console.log(users[i]);



                if ((users[i].email == $scope.user.email) && (users[i].password == $scope.user.password)) {


                    console.log(users[i]);

                    $rootScope.usr = users[i];
                    console.log($rootScope.usr);
                    console.log(users[i]);
                    return  true;
                } else {
                    console.log("nije dobar email ili password");
                    $scope.message = "nije dobar email ili password";
                    //return  false;
                }
            }//kraj for petlje
        }; //kraj validUser

        $scope.login = function () {
            console.log($scope.user);
            if ($scope.validUser($scope.user)) {
                console.log($scope.user);
                console.log($rootScope.usr);
                //   login 
                if ($rootScope.usr.user_role == 'user') {
                    $state.go('myProfile');
                } else {
                    $state.go('admin');
                }
            }

        };

        $scope.message = $rootScope.message;


    }]);
