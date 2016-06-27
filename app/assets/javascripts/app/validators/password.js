function password(){
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$validators.password = function(value){
        // Password can only have letters and numbers
        return /^[a-zA-Z\d]+$/g.test(value)
      }
    }
  }
}

angular.module('RssReaderApp')
  .directive('password', password);
