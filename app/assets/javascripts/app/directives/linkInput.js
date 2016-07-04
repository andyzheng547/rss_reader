function linkInput(){
  return {
    require: '^form',
    restrict: 'E',
    templateUrl: 'partials/linkInput.html'
  }
}

angular.module('RssReaderApp').directive('linkInput', linkInput);
