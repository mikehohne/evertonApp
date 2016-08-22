angular.module("dortmundApp").controller("mainCtrl", function($scope, mainServ){

  $scope.name;
  $scope.value;
  $scope.logo;
  $scope.fixtures;
  $scope.players;

  $scope.getDortmund = function(){
    mainServ.getDortmundServ()
    .then(function(response){
      console.log(response);
      $scope.name = response.name;
      $scope.value = response.squadMarketValue;
      $scope.logo = response.crestUrl;
    })
  }

  $scope.getDortmundFix = function(){
    mainServ.getDortmundFixServ()
    .then(function(response){
      console.log(response);
      $scope.fixtures = response.fixtures;
    })
  }





});
