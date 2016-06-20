function UserController($http, SharedDataService) {
  this.loginUser = function(params){
    $http.get('/users/find', params: params).then(function successCallback(resp){

      SharedDataService.loginUser(USER_ID FROM RESPONSE DATA);
    }, function errorCallback(resp){

    });
  };

  this.registerUser = function(data){
    $http.post('/users', data: data).then(function successCallback(resp){

      SharedDataService.loginUser(USER_ID FROM RESPONSE DATA);
    }, function errorCallback(resp){

    });
  };

  this.updateUser = function(data){
    $http.put('/users/' + data.id, data: data).then(function successCallback(resp){

    }, function errorCallback(resp){

    });
  };

  this.deleteUser = function(data){
    $http.delete('/users/' + data.id, data: data).then(function successCallback(resp){

      SharedDataService.logoffUser();
    }, function errorCallback(resp){

    });
  };

  this.signoutUser = function(){
    SharedDataService.logoffUser();
  }

}

angular.module('RssReaderApp').controller('UserController', UserController);
