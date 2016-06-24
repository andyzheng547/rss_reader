angular.module('RssReaderApp')
  .service('SharedDataService', function($http) {

    var self = this;
    this.currentUser;
    this.userId;
    this.loggedIn = false;

    this.getUserId = function(){
      return userId;
    };

    this.getUserLoginStatus = function(){
      return loggedIn;
    };

    this.setUserId = function(id){
      this.userId = id;
      this.loggedIn = true;
    };

    this.setCurrentUser = function(user){
      this.currentUser = user;
      self.setUserId(user.id);
    };

    this.clearUserId = function(){
      this.userId = undefined;
      this.loggedIn = false;
    };

  });
