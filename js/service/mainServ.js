angular.module("dortmundApp").service("mainServ", function($http){

  this.getDortmundServ = function(){
    return $http({
      method: 'GET',
      url: 'http://api.football-data.org/v1/teams/62',
      headers: {
        "x-auth-token": "e7a1e1707d9b46008cadb813fc746221"
      }
    }).then(function(response){
      return response.data;
    })
  }

  this.getDortmundFixServ = function(){
    return $http({
      method: 'GET',
      url: 'http://api.football-data.org/v1/teams/62/fixtures',
      headers: {
        "x-auth-token": "e7a1e1707d9b46008cadb813fc746221"
      }
    }).then(function(response){
      return response.data;
    })
  }

  this.getStandingsServ = function(){
    return $http({
      method: 'GET',
      url: 'http://soccer.sportsopendata.net/v1/leagues/premier-league/seasons/16-17/standings'
    }).then(function(response){
      console.log(response);
      return response.data;
    })
  }

});
