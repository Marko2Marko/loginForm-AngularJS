app.controller('editUsersController', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
        console.log('editUsers kontroler je aktivan');

        $rootScope.message = "";

        $rootScope.usr;
        console.log($rootScope.usr);

        $scope.user = $rootScope.usr;
        var users = $rootScope.getUsers();

        $scope.updateUser = function (user) {

            for (var i in users) {
                if (users[i].id == $rootScope.usr.id) {
                    $scope.user.id = users[i].id;
                    users[i] = $scope.user;
                    $scope.user.date = $rootScope.usr.date;
                    $scope.user.modifiedUser = new Date();

                    $rootScope.setUsers(users);
                }
            }
            $rootScope.message = "uspesno azuriran korisnik.";
            $rootScope.usr = $scope.user;

            $state.go('viewProfile');

        };
    }]);