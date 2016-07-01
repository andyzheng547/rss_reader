angular
  .module('RssReaderApp', ['ui.router', 'ngSanitize', 'ng-rails-csrf', 'ngMessages', 'ngCookies', 'templates'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    function authenticate($q, $state, $timeout, SharedDataService){
      // Logged in
      if (SharedDataService.getUserLoginStatus() === 'true') {
        return $q.when();

      // Not logged in
      } else {
        // Redirect to user.login
        // Without $timeout, angular will stop state transition from loading but also stops state redirect
        // Need to run state redirect after authenticate is rejected
        $timeout(function(){
          $state.go('user.login');
        });

        // Reject authenication and stop the state from loading
        return $q.reject();
      }
    }

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
        resolve: {}
      })
      .state('user.profile', {
        url: '/profile',
        templateUrl: 'user/profile.html',
        controller: 'UserController as user',
        resolve: {authenticate: authenticate}
      })
      .state('feed', {
        url: '/feed',
        templateUrl: 'feed.html',
        controller: 'FeedController as feed',
        resolve: {authenticate: authenticate}
      })
      .state('feed.all', {
        url: '/all',
        templateUrl: 'feed/all.html',
        controller: 'FeedController as feed',
        resolve: {authenticate: authenticate}
      })
      .state('feed.read', {
        url: '/read',
        templateUrl: 'feed/read.html',
        controller: 'FeedController as feed',
        resolve: {authenticate: authenticate}
      })
      .state('feed.manage', {
        url: '/manage',
        templateUrl: 'feed/manage.html',
        controller: 'FeedController as feed',
        resolve: {authenticate: authenticate}
      })
      .state('feed.create', {
        url: '/create',
        templateUrl: 'feed/create.html',
        controller: 'FeedController as feed',
        resolve: {authenticate: authenticate}
      })
  });
