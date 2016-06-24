angular.module('RssReaderApp')
  .service('UserService', function($http, SharedDataService) {
    // GET user from backend
    this.findUser = function(userParams){
      return $http.get('/users/find', {params: {user: userParams}}).then(function(resp){
        return resp.data;
      });
    };

    // POST user in backend
    this.createUser = function(userParams){
      return $http.post('/users', {params: {user: userParams}}).then(function(resp){
        return resp.data;
      });
    };

    // PUT user in backend
    this.updateUser = function(userParams){
      return $http.put('/users' + SharedDataService.getUserId(), {params: {user: userParams}}).then(function(resp){
        return resp.data;
      });
    };

    // DELETE user in backend
    this.deleteUser = function(){
      return $http.delete('/users/' + SharedDataService.getUserId(), {params: {user: userParams}}).then(function(resp){
        return resp.data;
      });
    };

    // Logs in user by setting the user id in the SharedDataService
    this.loginUser = function(user_id){
      SharedDataService.setUserId(user_id);
    };

    // Signs out the user by clearing out the user id
    this.signoutUser = function(){
      SharedDataService.clearUserId();
    };

});
