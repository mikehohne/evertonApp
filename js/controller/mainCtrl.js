angular.module("dortmundApp").controller("mainCtrl", function($scope, mainServ){

  $scope.name;
  $scope.value;
  $scope.logo;
  $scope.fixtures;
  $scope.players;
  $scope.standings;
  $scope.england = "premier-league";
  $scope.italy = "serie-a";
  $scope.teams = [];
  $scope.showClubInfo = true;
  $scope.title = true;
  $scope.league;


  $scope.getDortmundNum = function(num){
    if( num <= 56){
      $scope.league = "Germany"
    } else if(num >= 57 && num <= 76) {
      $scope.league = "England"
    } else if(num >= 77 && num <= 96) {
      $scope.league = "Spain"
    } else {
      $scope.league = "Italy"
    }
    mainServ.getDortmundServNum(num)
    .then(function(response){
      console.log(response);
      $scope.name = response.name;
      $scope.value = response.squadMarketValue;
      $scope.logo = response.crestUrl;
      $scope.showClubInfo = false;
      $scope.title = false;
    })
    $scope.getPlayers(num);
  }



  $scope.getDortmundFixNum = function(num){
    mainServ.getDortmundFixServNum(num)
    .then(function(response){
      console.log(response);
      $scope.fixtures = response.fixtures;
      $scope.showClubInfo = false;
    })
  }

  $scope.getStandingsLeague = function(league){
    mainServ.getStandingsServLeague(league)
    .then(function(response){
      console.log(response);
      $scope.standings = response.data.standings;
      $scope.showClubInfo = true;
    })
  }


  $scope.getPlayers = function(num){
    mainServ.getPlayersServ(num)
    .then(function(response){
      console.log(response);
      $scope.players = response.players;
      console.log(response.players);
    })
  }
});
