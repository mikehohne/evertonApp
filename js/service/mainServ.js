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

});
