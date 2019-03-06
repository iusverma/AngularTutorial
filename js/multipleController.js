// angular module is defined and assigned to var app
var app=angular.module('MultiApp',[]);
// defining first controller
app.controller('firstController',
    function($scope){
        $scope.firstControllerName = "First Controller";
    });
// defining second controller
app.controller('secondController',
    function($scope){
        $scope.secondControllerName = "Second Controller";
    });