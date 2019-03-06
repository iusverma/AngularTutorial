angular.module('app', []).controller('ExternalController',
function($scope)
{
    $scope.tutorialName = "Angular Tutorial";
    $scope.owner = "Ayush Verma";
    $scope.visitorFirstName = "firstName";
    $scope.visitorLastName = "firstName";
    $scope.fullName = function(fName,lName){
        return fName + "-" +lName;
    };
    $scope.generateName = function(){
        return $scope.visitorFirstName + " " +$scope.visitorLastName;
    };
});