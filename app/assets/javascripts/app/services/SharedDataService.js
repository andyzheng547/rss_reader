angular.module('RssReaderApp')
  .service('SharedDataService', ['$cookies', function($cookies) {

  // Handle User Sessions
    this.loginUser = function(user){
      $cookies.putObject('currentUser', user);
      $cookies.put('loggedIn', true);

      console.log('User is logged in.');
    };

    this.logoffUser = function(){
      $cookies.remove('currentUser');
      $cookies.remove('currentFeed');
      $cookies.put('loggedIn', false);

      console.log('User is logged off.');
    };

    this.updateUser = function(user){
      $cookies.putObject('currentUser', user);

      console.log('Updated user.');
    };

  // Get User Info from Cookies
    this.getCurrentUser = function(){
      return $cookies.getObject('currentUser');
    };

    this.getCurrentUserFeeds = function(){
      return $cookies.getObject('currentUser').rss_feeds;
    };

    this.getUserLoginStatus = function(){
      if (!$cookies.get('loggedIn')) {
        $cookies.put('loggedIn', false);
      }

      return $cookies.get('loggedIn');
    };

  // Handles setting and clearing current feed
  // Saves a rss url in cookies, which the controller can access to make ajax call to Google Feed API
    this.getCurrentFeedUrl = function(){
      return $cookies.getObject('currentFeed');
    };

    this.setCurrentFeedUrl = function(feed){
      console.log('Setting current feed to: ' + feed);
      $cookies.putObject('currentFeed', feed);
    };

    this.clearCurrentFeedUrl = function(){
      console.log('Removing current feed (' + self.getCurrentFeed() + ') from cookies');
      $cookies.remove('currentFeed');

      console.log('Done. Current feed removed from cookies');
    };

  }]);
