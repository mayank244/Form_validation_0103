var myApp   = angular.module('myApp', [])

var obj = []

myApp.controller('myController', function($scope) {
    $scope.counter=0;
    $scope.countername=0;
    $scope.names = []
    var users = [
      { 
        name: '',
        email: ''
      },
      {
        name: '',
        email: ''
      }
    ];
    
    $scope.formData = {};
    $scope.formData.users = users;
    $scope.choices = [];
    
    $scope.addNewName = function(val){
        $scope.countername = $scope.countername + 1 ;
        $scope.choices.push({'username':val});
        $scope.names.push(val);
    }
    
    $(".myoptions").change(function(){
        $scope.choices.push({'options':$(".myoptions").val()});
    });
    
    $scope.addNewChoice = function() {
        var newItemNo = $scope.choices.length+1;
        $scope.choices.push({'options':choice.options})
        $scope.choices.push({'id':'choice'+newItemNo});
        $scope.counter = $scope.counter + 1;
    };
    
    $scope.addtoarray = function(value) {
        $scope.choices.push({'user-email':value})
    }
    
  $scope.removeChoice = function() {
      var lastItem = $scope.choices.length-1;
      $scope.choices.splice(lastItem);
      $scope.counter = $scope.counter - 1;
  };
  
});