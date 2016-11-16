angular.module('dortmundApp',['ui.router']).config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state("fixtures", {
    url:"/fixtures",
    templateUrl: "./../templates/fixtures.html"
  })

  .state("table", {
    url:"/table",
    templateUrl: "./../templates/table.html"
  })

  .state("players", {
    url:"/players",
    templateUrl: "./../templates/players.html"
  })

  $urlRouterProvider.otherwise('/')

});
