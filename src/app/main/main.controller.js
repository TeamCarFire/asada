(function () {
  'use strict';

  angular
      .module('asada')
      .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.sizes = ["small (4-inch)", "medium (8-inch)", "large (12-inch)", "insane (16-inch)"];
    vm.tortillaTypes = ['Flour', 'Corn', 'Lettuce', 'Cabbage'];
    vm.selectedWrapper = '';

    vm.meats = [
      {category: 'beef', name: 'Asada'},
      {category: 'pork', name: 'Carnitas'},
      {category: 'pork', name: 'Al Pastor'},
      {category: 'fish', name: 'Grilled Fish'},
      {category: 'fish', name: 'Fried Fish'},
      {category: 'chicken', name: 'Grilled Chicken'},
      {category: 'chicken', name: 'Fried Chicken'}
    ];

    vm.toppings = [
      {name: 'Onions', type: 'vegetable', value: 1, restriction: 'none'},
      {name: 'Grilled Onions', type: 'vegetable', value: 1, restriction: 'none'},
      {name: 'Grilled Peppers', type: 'vegetable', value: 1, restriction: 'none'},
      {name: 'Tomatoes', type: 'vegetable', value: 2, restriction: 'none'},
      {name: 'Corn', type: 'vegetable', value: 2, restriction: 'none'},
      {name: 'Pineapple', type: 'vegetable', value: 3, restriction: 'none'},
      {name: 'Jalapenos', type: 'vegetable', value: 3, restriction: 'none'},
      {name: 'Pickled Jalapenos', type: 'vegetable', value: 3, restriction: 'Al Pastor'},
      {name: 'Crema Fresca', type: 'sauce', value: 4, restriction: 'none'},
      {name: 'Guacamole', type: 'sauce', value: 4, restriction: 'none'},
      {name: 'Chili Lime Guacamole', type: 'sauce', value: 4, restriction: 'none'},
      {name: 'Cilantro', type: 'vegetable', value: 5, restriction: 'none'},
      {name: 'Cabbage', type: 'vegetable', value: 5, restriction: 'none'},
      {name: 'Pickled Radishes', type: 'vegetable', value: 5, restriction: 'none'}
    ];
    // vm.printSelectedToppings = printSelectedToppings;
    // function printSelectedToppings() {
    //   var numberOfToppings = this.selectedToppings.length;
    //   // If there is more than one topping, we add an 'and'
    //   // to be gramatically correct. If there are 3+ toppings
    //   // we also add an oxford comma.
    //   if (numberOfToppings > 1) {
    //     var needsOxfordComma = numberOfToppings > 2;
    //     var lastToppingConjunction = (needsOxfordComma ? ',' : '') + ' and ';
    //     var lastTopping = lastToppingConjunction +
    //         this.selectedToppings[this.selectedToppings.length - 1];
    //     return this.selectedToppings.slice(0, -1).join(', ') + lastTopping;
    //   }
    //   return this.selectedToppings.join('');
    // };

    //
    // vm.user = {
    //   title: 'Developer',
    //   email: 'ipsum@lorem.com',
    //   firstName: '',
    //   lastName: '',
    //   company: 'Google',
    //   address: '1600 Amphitheatre Pkwy',
    //   city: 'Mountain View',
    //   state: 'CA',
    //   biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
    //   postalCode: '94043'
    // };
    // vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    // 'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    // 'WY').split(' ').map(function (state) {
    //   return {abbrev: state};
    // });

    // $scope.sizes = [
    //   "small (12-inch)",
    //   "medium (14-inch)",
    //   "large (16-inch)",
    //   "insane (42-inch)"
    // ];
    // $scope.toppings = [
    //   { category: 'meat', name: 'Pepperoni' },
    //   { category: 'meat', name: 'Sausage' },
    //   { category: 'meat', name: 'Ground Beef' },
    //   { category: 'meat', name: 'Bacon' },
    //   { category: 'veg', name: 'Mushrooms' },
    //   { category: 'veg', name: 'Onion' },
    //   { category: 'veg', name: 'Green Pepper' },
    //   { category: 'veg', name: 'Green Olives' }
    // ];
    // $scope.selectedToppings = [];
    // $scope.printSelectedToppings = function printSelectedToppings() {
    //   var numberOfToppings = this.selectedToppings.length;
    //   // If there is more than one topping, we add an 'and'
    //   // to be gramatically correct. If there are 3+ toppings
    //   // we also add an oxford comma.
    //   if (numberOfToppings > 1) {
    //     var needsOxfordComma = numberOfToppings > 2;
    //     var lastToppingConjunction = (needsOxfordComma ? ',' : '') + ' and ';
    //     var lastTopping = lastToppingConjunction +
    //         this.selectedToppings[this.selectedToppings.length - 1];
    //     return this.selectedToppings.slice(0, -1).join(', ') + lastTopping;
    //   }
    //   return this.selectedToppings.join('');
    // };

  }
})();

// angular
//     .module('inputBasicDemo', ['ngMaterial', 'ngMessages'])
//     .controller('DemoCtrl', function($scope) {
//       $scope.user = {
//         title: 'Developer',
//         email: 'ipsum@lorem.com',
//         firstName: '',
//         lastName: '',
//         company: 'Google',
//         address: '1600 Amphitheatre Pkwy',
//         city: 'Mountain View',
//         state: 'CA',
//         biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
//         postalCode: '94043'
//       };
//       $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
//       'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
//       'WY').split(' ').map(function(state) {
//         return {abbrev: state};
//       });
//     })
//     .config(function($mdThemingProvider) {
//       // Configure a dark theme with primary foreground yellow
//       $mdThemingProvider.theme('docs-dark', 'default')
//           .primaryPalette('yellow')
//           .dark();
//     });


// vm.awesomeThings = [];
// vm.classAnimation = '';
// vm.creationDate = 1464624181708;
// vm.showToastr = showToastr;
//
// activate();
//
// function activate() {
//   getWebDevTec();
//   $timeout(function() {
//     vm.classAnimation = 'rubberBand';
//   }, 4000);
// }
//
// function showToastr() {
//   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
//   vm.classAnimation = '';
// }
//
// function getWebDevTec() {
//   vm.awesomeThings = webDevTec.getTec();
//
//   angular.forEach(vm.awesomeThings, function(awesomeThing) {
//     awesomeThing.rank = Math.random();
//   });
// }
