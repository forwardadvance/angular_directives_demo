// * Directives extend the capabilities of HTML
// * Angular touches the DOM at two points, directives and template compilation
// * examples of directives are ng-model, ng-if, ng-show, ng-repeat
// * Directives are camelCased, attributes are snake-cased
// * The template can be specified in the template attribute
// * Or the templateUrl attribute
// * restrict (AEC)
// * scope: true creates a scope
// * Controller

(function() {
  angular.module('app', ['cats'])
    .directive('catList', function() {
      var directive = {
        templateUrl: "cat_list.html",
        restrict: 'AEC',
        scope:true,
        controller: Controller
      };
      return directive;
    });

  function Controller($scope, cats) {
    $scope.catName = "Felix";
    $scope.cats = cats.get();
  }

})();









angular.module('cats', [])
  .service('cats', function() {
    this.get = function() {
      return ['manny', 'herbie'];
    }
  });










  // .run(function($templateCache) {
  //   $templateCache.put('catlist', [
  //     "<p>",
  //       "<input ng-model='catName' />{{catName}}",
  //       "<br />",
  //       "Here are all the cats:",
  //       "<p ng-repeat='cat in catList'>{{cat}}</p>",
  //     "</p>"
  //   ]).join('')
  // })















// Example Dropdown Directive

// myApp.directive('dropdown', function () {
//   return {
//     scope: true,
//     link: function (scope, element) {
//       var menu = element.find('ul');
//       var body = angular.element('body');
//       var unfold = angular.element("<a href='#'><i/></a>");
//       var toggleVisible = function () {
//         scope.menu.visible = !scope.menu.visible;
//         scope.$apply();
//       };
//       var unsetVisible = function () {
//         scope.menu.visible = false;
//         scope.$apply();
//       };
//       var showMenu = function () {
//         if (scope.menu.visible) {
//           menu.show();
//         } else {
//           menu.hide();
//         }
//       };
//       var toggleChevron = function () {
//         var c;
//         if (scope.menu.visible) {
//           c = 'fa-caret-up';
//         } else {
//           c = 'fa-caret-down';
//         }
//         unfold.find('i').attr('class', c);
//       };
//       var escapeKey = function (e) {
//         if (e.which === 27) {
//           unsetVisible();
//         }
//       };
//       var chevronClick = function (e) {
//         toggleVisible();
//         e.stopPropagation();
//       };

//       element.prepend(unfold);
//       scope.menu = {visible: false};
//       unfold.on('click', chevronClick);
//       body.on('click', unsetVisible);
//       body.on('keyup', escapeKey);
//       scope.$watch('menu.visible', showMenu);
//       scope.$watch('menu.visible', toggleChevron);
//     }
//   };
// });

// // // Initial State
// // // angular.module('app', [])
