(function(){
  'use strict';
  angular.module("LunchCheck",[])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.list = "";
    $scope.result = "";
    $scope.warning= "";
    //check is the function to analyze the list of items
    $scope.check = function () {
        //Firstly, we split the items into list
         var list = $scope.list.split(",");
         var resLength = list.length;
         for (var i = 0; i < list.length; i++) {
           if (list[i].trim() == ""){
             resLength--;
           }
         }
         if (resLength == 0){
           $scope.warning = "Please enter data first";
         }
         else{
           $scope.warning= "";
           if (resLength < 4){
             $scope.result = "Enjoy!";
           }else{
             $scope.result = "Too much!";
           }
       }
    }

  };

})()
