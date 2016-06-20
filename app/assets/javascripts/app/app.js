angular
  .module('RssReaderApp', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('user', {
        url: '/user',
        templateUrl: 'templates/user.html',
        controller: 'UserController as user',
        resolve: {}
      })
      .state('user.login', {
        url: '/login',
        templateUrl: 'templates/user/login.html',
        controller: 'UserController as user',
        resolve: {}
      })
      .state('user.register', {
        url: '/register',
        templateUrl: 'templates/user/register.html',
        controller: 'UserController as user',
        resolve: {}
      });

      $urlRouterProvider.otherwise('/user');
  });
