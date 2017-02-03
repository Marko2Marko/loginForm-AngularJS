app.controller('viewProfileController', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
        console.log('viewProfile kontroler je aktivan');

        var userss;
        $scope.userss = $rootScope.getUsers();
        console.log($scope.userss);

        $rootScope.users;
        console.log($rootScope.users);

        $rootScope.usr;
        $scope.user;
        $scope.user = $rootScope.usr;

    }]);