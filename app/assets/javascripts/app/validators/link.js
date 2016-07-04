function link(){
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$validators.link = function(value){
        // Checks if valid url
        // Angular's normal url validator was not sufficient
        return /^(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/g.test(value)
      }
    }
  }
}

angular.module('RssReaderApp')
  .directive('link', link);
