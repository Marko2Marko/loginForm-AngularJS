//var app = angular.module('myApp')
app.controller('registerController', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
        console.log('register kontroler je aktivan');

        $rootScope.message = "";

        var users = $rootScope.getUsers();

        $scope.isValid = function (user) {
            if ($scope.user.name != '' && $scope.user.email != '' &&
                    $scope.user.password != '') {

            }
            console.log($scope.user);

        };

        $scope.register = function () {
            if ($scope.isValid($scope.user) !== null) {

                console.log($scope.user);
                //$scope.user = $rootScope.user;
                console.log($rootScope.user);

                // ovde treba dodati user-a u localStorage

                var users = $rootScope.getUsers();

                var lastUser = users[users.length - 1] || {id: 0};
                $scope.user.id = lastUser.id + 1;
                $scope.user.date = new Date();
                $scope.user.modifiedUser = new Date();

                users.push($scope.user);

                $rootScope.setUsers(users);
                console.log(users);

                // rutiranje

                $rootScope.message = "uspesno ste se registrovali";
                $state.go('login');

            }
        };

    }]);
