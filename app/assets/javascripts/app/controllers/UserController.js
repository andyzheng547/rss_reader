function UserController($http, $state, UserService, SharedDataService) {
  var self = this;
  self.errors;

  this.updateErrors = function(error){
    this.errors = error;
  };

  this.loginUser = function(userParams){
    UserService.findUser(userParams).then(function(resp){
      self.updateErrors();

      if (resp.status === 200) {
        alert("Status 200\nServer response: p" + JSON.stringify(resp.data));

        // SharedDataService.setCurrentUser(resp.data.user);
        // $state.go('user.profile');
      } else {

        self.errors = resp.data.errors;
        console.log(this.errors);
      }

    });
  };

  this.registerUser = function(userParams){
    self.updateErrors();

    UserService.createUser(userParams).then(function(resp){
      if (resp.status === 200) {
        alert("Status 200\nServer response: p" + JSON.stringify(resp.data));
      } else {
        self.errors = resp.data.errors;

        console.log(this.errors);
      }

    });
  };

  this.updateUser = function(userParams){
    self.updateErrors();

    UserService.updateUser(userParams).then(function(resp){
      alert(JSON.stringify(data));

      if (data.errors != undefined) {
        this.errors = data.errors;
      }

    });
  };

  this.deleteUser = function(userParams){
    self.updateErrors();

    UserService.deleteUser(userParams).then(function(resp){
      alert(JSON.stringify(data));

      if (data.errors != undefined) {
        this.errors = data.errors;
      }

    });
  };

  // this.$watch('this.')
}

angular.module('RssReaderApp').controller('UserController', UserController);
