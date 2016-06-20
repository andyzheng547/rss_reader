angular
  .module('RssReaderApp', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'LoginController as login',
        resolve: {
          
        }
      });
  });
