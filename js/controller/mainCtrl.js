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
  $scope.complete = 'done';
  $scope.finished = 'FINISHED';
  $scope.fullTime = 'FT';
  $scope.leagueTitle;

  $scope.tableImage = [];


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
      $scope.players = response.players;
    })
  }

  $scope.getTables = function(){
    mainServ.getTablesServ()
    .then(function(response){
      $scope.standings = response.standing;
      $scope.leagueTitle = response.leagueCaption;
      console.log(response);
      console.log(response.standing);
    })
  }

  $scope.getTablesEngland = function(){
    mainServ.getTablesEnglandServ()
    .then(function(response){
      $scope.standings = response.standing;
      $scope.leagueTitle = response.leagueCaption;
      console.log(response);
      console.log(response.standing);
    })
  }
  $scope.getTablesFrance = function(){
    mainServ.getTablesFranceServ()
    .then(function(response){
      $scope.standings = response.standing;
      $scope.leagueTitle = response.leagueCaption;
      console.log(response);
      console.log(response.standing);
    })
  }

  $scope.getTablesSpain = function(){
    mainServ.getTablesSpainServ()
    .then(function(response){
      $scope.standings = response.standing;
      $scope.leagueTitle = response.leagueCaption;
      console.log(response);
      console.log(response.standing);
    })
  }

  $scope.getTablesItaly = function(){
    mainServ.getTablesItalyServ()
    .then(function(response){
      $scope.standings = response.standing;
      $scope.leagueTitle = response.leagueCaption;
      console.log(response);
      console.log(response.standing);
    })
  }


});
