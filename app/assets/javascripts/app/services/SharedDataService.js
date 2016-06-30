angular.module('RssReaderApp')
  .service('SharedDataService', function($cookies, $q, GoogleFeedsService) {
    var self = this;

    $cookies.put('loggedIn', "false");

  // Handle User Sessions
    this.loginUser = function(user){
      $cookies.putObject('currentUser', user);
      $cookies.put('loggedIn', "true");

      console.log('User is logged in.');
    };

    this.logoffUser = function(){
      $cookies.remove('currentUser');
      $cookies.remove('currentFeed');
      $cookies.put('loggedIn', "true");

      console.log('User is logged off.');
    };

  // Get User Info from Cookies
    this.getCurrentUser = function(){
      return $cookies.getObject('currentUser');
    };

    this.getCurrentUserFeeds = function(){
      return $cookies.getObject('currentUser').rss_feeds;
    };

    this.getUserLoginStatus = function(){
      return $cookies.get('loggedIn');
    };

  // Handles setting and clearing current feed
  // Saves a rss url in cookies, which the controller can access to make ajax call to Google Feed API
    this.getCurrentFeed = function(){
      return $cookies.getObject('currentFeed');
    };

    this.setCurrentFeed = function(feed){
      console.log('Setting current feed to: ' + feed);
      $cookies.putObject('currentFeed', feed);
    };

    this.clearCurrentFeed = function(){
      console.log('Removing current feed (' + self.getCurrentFeed() + ') from cookies');
      $cookies.remove('currentFeed');

      console.log('Done. Current feed removed from cookies');
    };

    this.getFeedPosts = function(){};

  });
