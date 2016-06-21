function UserController($http, SharedDataService) {

  this.findUser = function(userParams){
    $http.get('/users/find', {params: {user: userParams}} ).then(
      function successCallback(resp) {
        alert(resp.status);
        console.log('Server responded with: ' + resp.status + '\nThis is the response data: ' + JSON.stringify(resp.data));
      }, function errorCallback(error) {
        alert(error.status);
        console.log('Server responded with: ' + error.status + '\nThis is the response data: ' + error.data);
      }
    );
  }

  //
  //
  // this.loginUser = function(params){
  //   $http.get('/users/find', params: params).then(function successCallback(resp){
  //
  //     SharedDataService.loginUser(USER_ID FROM RESPONSE DATA);
  //   }, function errorCallback(resp){
  //
  //   });
  // };
  //
  // this.registerUser = function(data){
  //   $http.post('/users', data: data).then(function successCallback(resp){
  //
  //     SharedDataService.loginUser(USER_ID FROM RESPONSE DATA);
  //   }, function errorCallback(resp){
  //
  //   });
  // };
  //
  // this.updateUser = function(data){
  //   $http.put('/users/' + data.id, data: data).then(function successCallback(resp){
  //
  //   }, function errorCallback(resp){
  //
  //   });
  // };
  //
  // this.deleteUser = function(data){
  //   $http.delete('/users/' + data.id, data: data).then(function successCallback(resp){
  //
  //     SharedDataService.logoffUser();
  //   }, function errorCallback(resp){
  //
  //   });
  // };
  //
  // this.signoutUser = function(){
  //   SharedDataService.logoffUser();
  // }

}

angular.module('RssReaderApp').controller('UserController', UserController);
