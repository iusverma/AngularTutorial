// angular module is defined and assigned to var app
var app=angular.module('MultiApp',[]);
// defining first controller
app.controller('firstController',
    function($scope){
        $scope.controllerName = "First Controller - 1";
    });
// defining second controller
app.controller('secondController',
    function($scope){
        /**
         * even though we are using same variable
         * as firstController, but variable is picked
         * scope wise i.e. if in view controller name
         * is called insided secondController, it will
         * print this name.
         */
        $scope.controllerName = "Second Controller - 2";
    });