function titleInput(){
  return {
    require: '^form',
    restrict: 'E',
    templateUrl: 'partials/titleInput.html'
  }
}

angular.module('RssReaderApp').directive('titleInput', titleInput);
