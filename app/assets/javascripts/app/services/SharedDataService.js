angular.module('RssReaderApp')
  .service('SharedDataService', function() {

    this.currentUser;
    this.loggedIn = false;

    this.getCurrentUser = function(){
      return this.currentUser;
    };

    this.getCurrentUserFeeds = function(){
      return this.currentUser.rss;
    };

    this.getUserLoginStatus = function(){
      return this.loggedIn;
    };

    this.setCurrentUser = function(user){
      this.currentUser = user;
      this.loggedIn = true;
    };

    this.removeCurrentUser = function(){
      this.currentUser = undefined;
      this.loggedIn = false;
    };

  });
