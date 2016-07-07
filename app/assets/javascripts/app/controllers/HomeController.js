var HomeController = function(SharedDataService){
  var self = this;

  self.loggedIn = function(){
    var loggedIn = SharedDataService.getUserLoginStatus();
    return loggedIn === 'true' ? true : false;
  };
};

HomeController['$inject'] = ['SharedDataService'];
angular.module('RssReaderApp').controller('HomeController', HomeController);
