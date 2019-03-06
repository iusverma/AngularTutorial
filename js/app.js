angular.module('app', []).controller('ExternalController',
function($scope)
{
    /**
     * These are diffent member variables
     * These are used in view
     * Following are their default values
     * and binding of model to view via scope
     *
     * scope binds view to model, member defined
     * with scope below can be access within {{}}
     * tags in view.
     */
    $scope.tutorialName = "Angular Tutorial";
    $scope.owner = "Ayush Verma";
    $scope.visitorFirstName = "firstName";
    $scope.visitorLastName = "firstName";

    /**
     * Following are functions defined in js.
     * These are binded to view using scope
     * and can be called from view by using {{}}.
     * These functions can acccess any
     * variable defined within $scope.
     */
    $scope.fullName = function(fName,lName){
        return fName + "-" +lName;
    };
    $scope.generateName = function(){
        return $scope.visitorFirstName + " " +$scope.visitorLastName;
    };
});