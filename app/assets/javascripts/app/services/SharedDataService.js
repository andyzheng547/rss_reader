angular.module('RssReaderApp').factory('SharedDataService', function($http) {
  var userId;
  var loggedIn = false;

  function findUser(params){
    return $http.post('/users/find', params)
  }

  function getUserId(){
    return userId;
  }

  function getUserLoginStatus(){
    return loggedIn;
  }

  function loginUser(id){
    userId = id;
    loggedIn = true;
  }

  function logoffUser(){
    userId = undefined;
    loggedIn = false;
  }

  return {
    findUser: findUser,
    getUserId: getUserId,
    getUserLoginStatus: getUserLoginStatus,
    loginUser: loginUser,
    logoffUser: logoffUser
  }
});
