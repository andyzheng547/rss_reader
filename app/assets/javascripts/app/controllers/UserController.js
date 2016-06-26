function UserController($http, $state, UserService, SharedDataService) {
  this.errors = [];

  this.loginUser = function(userParams){
    UserService.findUser(userParams).then(function(data){
      alert(JSON.stringify(data));

      if (data.errors != undefined) {
        this.errors.push(data.errors);
      }

    });
  };

  this.registerUser = function(userParams){
    UserService.createUser(userParams).then(function(data){
      alert(JSON.stringify(data));

      if (data.errors) {
        // alert(JSON.stringify(data.errors))
      }

    });
  };

  this.updateUser = function(userParams){
    UserService.updateUser(userParams).then(function(data){
      alert(JSON.stringify(data));

      if (data.errors != undefined) {
        this.errors = data.errors;
      }

    });
  };

  this.deleteUser = function(userParams){
    UserService.deleteUser(userParams).then(function(data){
      alert(JSON.stringify(data));

      if (data.errors != undefined) {
        this.errors = data.errors;
      }

    });
  };

}

angular.module('RssReaderApp').controller('UserController', UserController);
