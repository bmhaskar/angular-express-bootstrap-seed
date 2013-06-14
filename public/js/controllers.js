'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function MyCtrl1() {

}
function MyCtrl2() {

}


function loginController($scope, $http,$location,$timeout) {

  $scope.loginCallback =function () {
    console.login("Sdfsdf");
  }
  $scope.user = {id:0,name:"Bharat"};

  $timeout(function () {
    if($scope.user.id)
    $location.path('/about-me');
  },2500)
}

