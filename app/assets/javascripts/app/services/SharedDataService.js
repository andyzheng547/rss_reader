angular.module('RssReaderApp')
  .service('SharedDataService', function($cookies) {

    $cookies.put('loggedIn', "false");

    this.getCurrentUser = function(){
      return $cookies.getObject('currentUser');
    };

    this.getCurrentUserFeeds = function(){
      return $cookies.getObject('currentUser').rss;
    };

    this.getUserLoginStatus = function(){
      return $cookies.get('loggedIn');
    };

    this.loginUser = function(user){
      $cookies.putObject('currentUser', user);
      $cookies.put('loggedIn', "true");
    };

    this.logoffUser = function(){
      $cookies.remove('currentUser');
      $cookies.put('loggedIn', "true");
    };

  });
