var agenda = angular.module('Agenda', []);

agenda.controller('MainCtrl',['$scope', function ($scope){
  $scope.title = " Agenda ";
  $scope.micro= function(){
    console.log(" acces au micro ");
  }
  $scope.calendar = function(){
    console.log(" acces au calendrier ");
  }
}]);
