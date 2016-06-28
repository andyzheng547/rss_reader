angular
  .module('RssReaderApp', ['ui.router', 'ngSanitize', 'ng-rails-csrf', 'ngMessages', 'ngCookies', 'templates'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as home',
        resolve: {}
      })
      .state('user', {
        url: '/user',
        templateUrl: 'user.html',
        controller: 'UserController as user',
        resolve: {}
      })
      .state('user.login', {
        url: '/login',
        templateUrl: 'user/login.html',
        controller: 'UserController as user',
        resolve: {}
      })
      .state('user.register', {
        url: '/register',
        templateUrl: 'user/register.html',
        controller: 'UserController as user',
        resolve: {}
      })
      .state('user.logoff', {
        url: '/logoff',
        templateUrl: 'user/logoff.html',
        controller: 'UserController as user',
        resolve: {
          onEnter: function($state, SharedDataService){
            if (SharedDataService.getCurrentUser() === undefined) {
              $state.go('user.login');
            }
          }
        }
      })
      .state('user.profile', {
        url: '/profile',
        templateUrl: 'user/profile.html',
        controller: 'UserController as user',
        resolve: {},
        onEnter: function($state, SharedDataService){
          if (SharedDataService.getCurrentUser() === undefined) {
            $state.go('user.login');
          }
        }
      })
      .state('feed', {
        url: '/feed',
        templateUrl: 'feed.html',
        controller: 'FeedController as feed',
        resolve: {
          onEnter: function($state, SharedDataService){
            if (SharedDataService.getCurrentUser() === undefined) {
              $state.go('user.login');
            }
          }
        }
      })
      .state('feed.all', {
        url: '/all',
        templateUrl: 'feed/all.html',
        controller: 'FeedController as feed',
        resolve: {
          onEnter: function($state, SharedDataService){
            if (SharedDataService.getCurrentUser() === undefined) {
              $state.go('user.login');
            }
          }
        }
      })
      .state('feed.read', {
        url: '/read',
        templateUrl: 'feed/read.html',
        controller: 'FeedController as feed',
        resolve: {
          onEnter: function($state, SharedDataService){
            if (SharedDataService.getCurrentUser() === undefined) {
              $state.go('user.login');
            }
          }
        }
      })
      .state('feed.manage', {
        url: '/manage',
        templateUrl: 'feed/manage.html',
        controller: 'FeedController as feed',
        resolve: {
          onEnter: function($state, SharedDataService){
            if (SharedDataService.getCurrentUser() === undefined) {
              $state.go('user.login');
            }
          }
        }
      })
      .state('feed.create', {
        url: '/create',
        templateUrl: 'feed/create.html',
        controller: 'FeedController as feed',
        resolve: {
          onEnter: function($state, SharedDataService){
            if (SharedDataService.getCurrentUser() === undefined) {
              $state.go('user.login');
            }
          }
        }
      })
  });
