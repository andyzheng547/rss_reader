function UserController($http, $state, UserService) {
  this.userData;
  this.errors;

  this.loginUser = function(userParams){
    UserService.findUser(userParams).then(function(data){

    }).catch(function(){
      
    });
  };
}

angular.module('RssReaderApp').controller('UserController', UserController);
