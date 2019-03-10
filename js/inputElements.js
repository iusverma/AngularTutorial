var app = angular.module('InputElements',[]);
app.controller('InputController', function($scope){
   $scope.pname = "Ayush Verma";
   $scope.Topics = {
       Enabled:true,
       Disabled:true
   };
});