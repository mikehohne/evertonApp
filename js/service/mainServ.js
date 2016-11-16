angular.module("dortmundApp").service("mainServ", function($http){


  this.getDortmundServNum = function(num){
    return $http({
      method: 'GET',
      url: 'http://api.football-data.org/v1/teams/' + num,
      headers: {
        "x-auth-token": "e7a1e1707d9b46008cadb813fc746221"
      }
    }).then(function(response){
      return response.data;
    })
  }

  this.getDortmundFixServNum = function(num){
    return $http({
      method: 'GET',
      url: 'http://api.football-data.org/v1/teams/' + num + '/fixtures',
      headers: {
        "x-auth-token": "e7a1e1707d9b46008cadb813fc746221"
      }
    }).then(function(response){
      return response.data;
    })
  }

  this.getStandingsServLeague = function(league){
    return $http({
      method: 'GET',
      url: 'http://soccer.sportsopendata.net/v1/leagues/'+ league +'/seasons/16-17/standings'
    }).then(function(response){
      return response.data;
    })
  }

  this.getPlayersServ = function(num){
    return $http({
      method: 'GET',
      url: 'http://api.football-data.org/v1/teams/'+ num +'/players',
      headers: {
        "x-auth-token": "e7a1e1707d9b46008cadb813fc746221"
      }
    }).then(function(response){
      console.log(response);
      return response.data
    })
  }

  this.getTablesServ = function(){
    return $http({
      method: 'GET',
      url: 'http://api.football-data.org/v1/competitions/430/leagueTable',
      headers: {
        "x-auth-token": "e7a1e1707d9b46008cadb813fc746221"
      }
    }).then(function(response){
      return response.data;
    })
  }

  this.getTablesEnglandServ = function(){
    return $http({
      method: 'GET',
      url: 'http://api.football-data.org/v1/competitions/426/leagueTable',
      headers: {
        "x-auth-token": "e7a1e1707d9b46008cadb813fc746221"
      }
    }).then(function(response){
      console.log(response);
      return response.data;
    })
  }

  this.getTablesFranceServ = function(){
    return $http({
      method: 'GET',
      url: 'http://api.football-data.org/v1/competitions/434/leagueTable',
      headers: {
        "x-auth-token": "e7a1e1707d9b46008cadb813fc746221"
      }
    }).then(function(response){
      console.log(response);
      return response.data;
    })
  }

  this.getTablesSpainServ = function(){
    return $http({
      method: 'GET',
      url: ' http://api.football-data.org/v1/competitions/436/leagueTable',
      headers: {
        "x-auth-token": "e7a1e1707d9b46008cadb813fc746221"
      }
    }).then(function(response){
      console.log(response);
      return response.data;
    })
  }

  this.getTablesItalyServ = function(){
    return $http({
      method: 'GET',
      url: ' http://api.football-data.org/v1/competitions/438/leagueTable',
      headers: {
        "x-auth-token": "e7a1e1707d9b46008cadb813fc746221"
      }
    }).then(function(response){
      console.log(response);
      return response.data;
    })
  }


});
