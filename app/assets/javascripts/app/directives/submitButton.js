function submitButton(){
  return {
    require: '^form',
    restrict: 'E',
    templateUrl: 'partials/submitButton.html'
  }
}

angular.module('RssReaderApp').directive('submitButton', submitButton);
