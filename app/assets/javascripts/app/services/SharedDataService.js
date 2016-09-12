angular.module('RssReaderApp').service('SharedDataService', [function() {

// Set default values
  var currentUser = {};
  var loggedIn = false;
  var currentFeed = {};

// Handle User Sessions
  var loginUser = user => {
    currentUser = user;
    loggedIn = true;

    console.log('User is logged in.');
  };

  var logoffUser = () => {
    currentUser = {};
    currentFeed = {};
    loggedIn = false;

    console.log('User if logged off.');
  };

  var updateUser = user => {
    currentUser = user;

    console.log('Updated user.');
  };

// User info getters
  var getCurrentUser = () => currentUser;
  var getCurrentUserFeeds = () => currentUser.rss_feeds;
  var getUserLoginStatus = () => loggedIn;

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
