function HomeController(SharedDataService){
  var self = this;

  self.loggedIn = function(){
    var loggedIn = SharedDataService.getUserLoginStatus();
    return loggedIn === 'true' ? true : false;
  };
}

angular.module('RssReaderApp').controller('HomeController', HomeController);
