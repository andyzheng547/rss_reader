function serverUserErrors(){
  return {
    require: '^form',
    restrict: 'E',
    templateUrl: 'partials/serverUserErrors.html'
  }
}

angular.module('RssReaderApp').directive('serverUserErrors', serverUserErrors);
