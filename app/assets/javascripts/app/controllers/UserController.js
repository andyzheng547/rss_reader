var UserController = function($state, UserService, SharedDataService) {
  var self = this;
  self.errors;
  self.currentUser = SharedDataService.getCurrentUser();

  self.loggedIn = function(){
    var loggedIn = SharedDataService.getUserLoginStatus();
    return loggedIn;
  };

  this.updateErrors = function(error){
    self.errors = error;
  };

  this.loginUser = function(userParams){
    UserService.findUser(userParams).then(function(resp){
      self.updateErrors();

      if (resp.status === 200) {
        console.log('Found user account. Logging in now.');
        SharedDataService.loginUser(resp.data.user);
        debugger;
        $state.go('user.profile');
      } else {
        self.updateErrors(resp.data.errors);
        console.log(this.errors);
      }
    });
  };

  this.registerUser = function(userParams){
    self.updateErrors();

    UserService.createUser(userParams).then(function(resp){
      if (resp.status === 201) {
        console.log("Status 201. Created user account. Logging in now.");
        SharedDataService.loginUser(resp.data.user);
        $state.go('user.profile');
      } else {
        self.updateErrors(resp.data.errors);
        console.log(this.errors);
      }
    });
  };

  this.updateUser = function(userParams){
    self.updateErrors();
    var user_id = SharedDataService.getCurrentUser().id;

    UserService.updateUser(user_id, userParams).then(function(resp){
      if (resp.status === 200) {
        console.log("Status 200. Updated user in database.");

        // Update currentUser in SharedDataService and then reset self.currentUser to reflect user changes
        SharedDataService.updateUser(resp.data.user);
        self.currentUser = SharedDataService.getCurrentUser();

        $state.go('user.profile');
      } else {
        self.updateErrors(resp.data.errors);
        console.log(this.errors);
      }
    });
  };

  this.deleteUser = function(){
    self.updateErrors();
    var user_id = SharedDataService.getCurrentUser().id;

    UserService.deleteUser(user_id).then(function(resp){
      console.log('Successfully deleted user. Removing user from memory.')

      SharedDataService.logoffUser();
      self.currentUser = SharedDataService.getCurrentUser();

      $state.go('user.login');
    });
  };

  this.logoffUser = function(){
    SharedDataService.logoffUser();

    console.log('User logged out');
    $state.go('user.login');
  };
};

UserController['$inject'] = ['$state', 'UserService', 'SharedDataService'];

angular.module('RssReaderApp').controller('UserController', UserController);
