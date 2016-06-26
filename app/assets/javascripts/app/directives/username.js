function username(){
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$validators.username = function(value){
        return /^\w+$/g.test(value)
      }
    }
  }
}

angular.module('RssReaderApp')
  .directive('username', username);
