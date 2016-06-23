function UserController($http, SharedDataService) {

  this.loginUser = function(userParams){
    $http.get('/users/find', {params: {user: userParams}} ).then(
      function successCallback(resp) {
        SharedDataService.loginUser(resp.data.user.id)
        console.log('Logged in user: ' + resp.data.user.id);
      }, function errorCallback(resp) {
        console.log('Status' + resp.status + '\nServer responded with: ' + JSON.stringify(resp.data.errors));
      }
    );
  }

  this.registerUser = function(userParams){
    $http.post('/users', {params: {user: userParams}}).then(function successCallback(resp){
      SharedDataService.loginUser(resp.data.user.id);
      console.log('Created user: ' + resp.data.user.id);
    }, function errorCallback(resp){
      console.log('Status' + resp.status + '\nServer responded with: ' + JSON.stringify(resp.data.errors));
    });
  };
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
