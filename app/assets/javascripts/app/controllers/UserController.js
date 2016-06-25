function UserController($http, $state, UserService) {
  this.userData;
  this.errors;

  this.loginUser = function(userParams){
    UserService.findUser(userParams).then(function(data){
      alert(JSON.stringify(data));
    });
  };
}

angular.module('RssReaderApp').controller('UserController', UserController);
