angular.module('RssReaderApp').service('SharedDataService', ['$window', function($window) {

// Set default values
  var currentUser = $.parseJSON(sessionStorage.getItem('currentUser')) || {};
  var currentFeed = $.parseJSON(sessionStorage.getItem('currentFeed')) || {};

// Remove user info from session
  sessionStorage.removeItem('currentUser');
  sessionStorage.removeItem('currentFeed');

// If page is reloaded. Before page unloads resources, store currentUser and currentFeed.
  window.onbeforeunload = function(){
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    sessionStorage.setItem('currentFeed', JSON.stringify(currentFeed));
  };

// Handle User Sessions
  var loginUser = function(user){
    currentUser = user;
    currentFeed = user.rss_feeds[0];
    console.log('User is logged in.');
  };

  var logoffUser = function(){
    currentUser = {};
    currentFeed = {};
    console.log('User if logged off.');
  };

  var updateUser = function(user){
    currentUser = user;
    console.log('Updated user.');
  };

// User Info getters
  var getCurrentUser = function(){
    return currentUser;
  };
  var getCurrentUserFeeds = function(){
    return currentUser.rss_feeds;
  };
  var getUserLoginStatus = function(){
    return !$.isEmptyObject(currentUser);
  };

// Get and set user's current feed
  var getCurrentFeed = function(){
    return currentFeed;
  };
  var setCurrentFeed = function(feed){
    currentFeed = feed;
    console.log('Setting current feed to: ' + feed);
  };

// Return service methods
  return {
    loginUser:            loginUser,
    logoffUser:           logoffUser,
    updateUser:           updateUser,
    getCurrentUser:       getCurrentUser,
    getCurrentUserFeeds:  getCurrentUserFeeds,
    getUserLoginStatus:   getUserLoginStatus,
    getCurrentFeed:       getCurrentFeed,
    setCurrentFeed:       setCurrentFeed
  };

}]);
