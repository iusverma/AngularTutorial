angular.module('arrays',[]).controller('ArrayController', 
    function($scope){
        /**
         * Here we are defining an array which is listed on view page
         * as a unordered list
         */
        $scope.TopicNames=[
            {name:"Introduction", duration:"10 mins"},
            {name:"Basic", duration:"30 mins"},
            {name:"Advance", duration:"1 hour"},
            {name:"Exam", duration:"20 mins"}
        ];  
    }
);