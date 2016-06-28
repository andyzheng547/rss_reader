angular.module('RssReaderApp')
  .service('SharedDataService', function($cookies) {

    $cookies.put('loggedIn', "false");

    this.getCurrentUser = function(){
      return $cookies.getObject('currentUser');
    };

    this.getCurrentUserFeeds = function(){
      return $cookies.getObject('currentUser').rss_feeds;
    };

    this.getCurrentFeed = function(){
      return $cookies.getObject('currentFeed');
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
      $cookies.remove('currentFeed');
      $cookies.put('loggedIn', "true");
    };

    this.setCurrentFeed = function(feed){
      $cookies.putObject('currentFeed', feed);
    };

    this.clearCurrentFeed = function(){
      $cookies.remove('currentFeed');
    };

  });
