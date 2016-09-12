angular.module('RssReaderApp').service('SharedDataService', ['$window', function($window) {

// Set default values
  var currentUser = $.parseJSON(sessionStorage.getItem('currentUser')) || {};
  var currentFeed = $.parseJSON(sessionStorage.getItem('currentFeed')) || {};

// Remove user info from session
  sessionStorage.removeItem('currentUser');
  sessionStorage.removeItem('currentFeed');

// If page is reloaded. Before page unloads resources, store currentUser and currentFeed.
  window.onbeforeunload = () => {
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    sessionStorage.setItem('currentFeed', JSON.stringify(currentFeed));
  };

// Handle User Sessions
  var loginUser = user => {
    currentUser = user;
    currentFeed = user.rss_feeds[0];
    console.log('User is logged in.');
  };

  var logoffUser = () => {
    currentUser = {};
    currentFeed = {};
    console.log('User if logged off.');
  };

  var updateUser = user => {
    currentUser = user;
    console.log('Updated user.');
  };

// User info getters
  var getCurrentUser = () => currentUser;
  var getCurrentUserFeeds = () => currentUser.rss_feeds;
  var getUserLoginStatus = () => !$.isEmptyObject(currentUser);

// Get and set user's current feed
  var getCurrentFeed = () => currentFeed;
  var setCurrentFeed = feed => {
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
