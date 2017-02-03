'use strict'

var app = angular.module('myApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/login');

	$stateProvider/*.state('empty',{
        abstract: true,
        controller: 'emptyPageController',
        templateUrl: './routes/emptyPage/emptyPage.html',
    })*/
    .state('login', {
        url: '/login',
        //parent: 'empty',
        views:{
            //'empty@empty': {
            '': {
                controller: 'loginController',
                templateUrl: 'routes/login/login.html'
            }
        }
    })
    $stateProvider.state('register', {
        url: '/register',
        //parent: 'empty',
        views:{
            //'empty@empty': {
            '': {
                controller: 'registerController',
                templateUrl: 'routes/register/register.html'
            }
        }
    })
    .state('myProfile', {
        url: '/myProfile',
        views:{
            '': {
                controller: 'myProfileController',
                templateUrl: 'routes/myProfile/myProfile.html'
            }
        }
    })
    .state('editProfile', {
        //parent : 'myProfile',
        url: '/editProfile',
        views:{
            '': {
                controller: 'editProfileController',
                templateUrl: 'routes/editProfile/editProfile.html'
            }
        }
    })
    .state('admin', {
        url: '/admin',
        views:{
            '': {
                controller: 'adminController',
                templateUrl: 'routes/admin/admin.html'
            }
        }
    })
    .state('listUsers', {
        //parent : 'admin',
        url: '/listUsers',
        views:{
            '': {
                controller: 'listUsersController',
                templateUrl: 'routes/listUsers/listUsers.html'
            }
        }
    })
    .state('viewProfile', {
        //parent : 'admin',
        url: '/viewProfile',
        views:{
            '': {
                controller: 'viewProfileController',
                templateUrl: 'routes/viewProfile/viewProfile.html'
            }
        }
    })
    .state('editUsers', {
        //parent : 'admin',
        url: '/editUsers',
        views:{
            '': {
                controller: 'editUsersController',
                templateUrl: 'routes/editUsers/editUsers.html'
            }
        }
    });
}])
//ovo je root kontroler i $scope i $rootScope mu dodju isto, ali je bitno jedino zbog sintakse sta pise... fakticki su ista stvar, jer je to jedan isti prostor, prostor glavnog kontrolera.
.controller('rootController', ['$rootScope', '$scope', '$state' , function($rootScope, $scope, $state){
    console.log('root kontroler je aktivan');

    $rootScope.users = [{"password":'admin',"email":"admin@admin","name":"Admin","user_role":"admin","id":0}];
  

    $scope.states = ['login', 'admin' ,'register', 'myProfile', 'listUsers', 'editProfile', 'editUsers', 'viewProfile']; //ovde moras dodati sva stanja da bi se prikazala u nasem meniju...
   
   var administrator = [{"password":'admin',"email":"admin@admin","name":"Admin","user_role":"admin","id":0}];


      $rootScope.getUsers = function() {
            if(!localStorage.users){
                localStorage.users = JSON.stringify([]);
				localStorage.users = JSON.stringify(administrator);
            }

            return JSON.parse(localStorage.users);
        };


       $rootScope.setUsers = function(users) {
            localStorage.users = JSON.stringify(users);
        };
       

}]);
