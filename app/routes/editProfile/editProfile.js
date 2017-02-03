app.controller('editProfileController', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
        console.log('editProfile kontroler je aktivan');
        $rootScope.usr;
        console.log($rootScope.usr);
        var users = $rootScope.getUsers();

        //$scope.user = $rootScope.usr;
        console.log($scope.user);


        $scope.updateUser = function (user) {

            for (var i in users) {
                if (users[i].id == $rootScope.usr.id) {
                    $scope.user.id = $rootScope.usr.id;
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

