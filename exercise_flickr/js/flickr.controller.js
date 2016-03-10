// Start point for the Flickr Directive exercise
// http://www.forwardadvance.com/angular/directives
(function() {

  angular.module('flickr')
    .controller('FlickrController', FlickrController)

  function FlickrController($scope, flickrService) {
    $scope.getFeed = function(tag) {
      $scope.status = "loading...";
      flickrService.getTag(tag)
        .then(function(response) {
          $scope.feed = response.data
          delete($scope.status);
        })
        .catch(function() {
          $scope.status = "failed";
        });
    }
  }

})();
