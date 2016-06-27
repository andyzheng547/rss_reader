function usernameInput(){
  return {
    require: '^form',
    restrict: 'E',
    templateUrl: 'partials/usernameInput.html'
  }
}

angular.module('RssReaderApp').directive('usernameInput', usernameInput);
