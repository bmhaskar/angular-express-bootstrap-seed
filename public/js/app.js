'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/about-me', {templateUrl: 'partial/1', controller: MyCtrl1});
    $routeProvider.when('/tech-blogs', {templateUrl: 'partial/2', controller: MyCtrl2});
    $routeProvider.when('/login', {templateUrl: 'partial/login', controller: loginController});

    $routeProvider.otherwise({redirectTo: '/tech-blogs'});
    $locationProvider.html5Mode(true);
  }]);
