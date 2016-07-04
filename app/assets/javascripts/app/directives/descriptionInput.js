function descriptionInput(){
  return {
    require: '^form',
    restrict: 'E',
    templateUrl: 'partials/descriptionInput.html'
  }
}

angular.module('RssReaderApp').directive('descriptionInput', descriptionInput);
