function passwordInput(){
  return {
    require: '^form',
    restrict: 'E',
    templateUrl: 'partials/passwordInput.html'
  }
}

angular.module('RssReaderApp').directive('passwordInput', passwordInput);
