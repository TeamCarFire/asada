(function () {
  'use strict';

  angular
    .module('asada')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(lodash) {
    var vm = this;

    vm.sizes = ["small (4-inch)", "medium (8-inch)", "large (12-inch)", "insane (16-inch)"];
    vm.tortillaTypes = ['Flour', 'Corn', 'Lettuce', 'Cabbage'];
    vm.selectedWrapper = '';


    // 4. Grilled Chicken: Onions, Grilled Onions, Grilled Peppers, Jalapenos, pickled jalapenos, guac, chili lime guac,
    //   cilantro, tomatoes, crema Fresca, corn, and cabbage

    vm.meats = [
      {
        category: 'beef',
        name: 'Asada',
        toppings: [
          {name: 'Onions', type: 'vegetable', value: 1},
          {name: 'Grilled Onions', type: 'vegetable', value: 1},
          {name: 'Grilled Peppers', type: 'vegetable', value: 1},
          {name: 'Jalapenos', type: 'vegetable', value: 1},
          {name: 'Pickled Jalapenos', type: 'vegetable', value: 1},
          {name: 'Guacamole', type: 'sauce', value: 3},
          {name: 'Chili Lime Guacamole', type: 'sauce', value: 3},
          {name: 'Cilantro', type: 'vegetable', value: 1}
        ]
      },
      {
        category: 'pork',
        name: 'Carnitas',
        toppings: [
          {name: 'Onions', type: 'vegetable', value: 1},
          {name: 'Grilled Onions', type: 'vegetable', value: 1},
          {name: 'Grilled Peppers', type: 'vegetable', value: 1},
          {name: 'Pickled Jalapenos', type: 'vegetable', value: 1},
          {name: 'Crema Fresca', type: 'sauce', value: 4},
          {name: 'Cabbage', type: 'vegetable', value: 5},
          {name: 'Cilantro', type: 'vegetable', value: 1}
        ]
      },
      {
        category: 'pork', name: 'Al Pastor',
        toppings: [
          {name: 'Onions', type: 'vegetable', value: 1},
          {name: 'Grilled Onions', type: 'vegetable', value: 1},
          {name: 'Jalapenos', type: 'vegetable', value: 1},
          {name: 'Pineapple', type: 'vegetable', value: 3},
          {name: 'Crema Fresca', type: 'sauce', value: 4},
          {name: 'Guacamole', type: 'sauce', value: 3},
          {name: 'Pickled Radishes', type: 'vegetable', value: 5},
          {name: 'Cilantro', type: 'vegetable', value: 1}
        ]
      },
      {
        category: 'seafood',
        name: 'Grilled Fish',
        toppings: []
      },
      {
        category: 'seafood',
        name: 'Fried Fish',
        toppings: []
      },
      {
        category: 'seafood',
        name: 'Fried Shrimp',
        toppings: []
      },
      {
        category: 'seafood',
        name: 'Grilled Shrimp',
        toppings: []
      },
      {
        category: 'chicken',
        name: 'Grilled Chicken',
        toppings: [
          {name: 'Onions', type: 'vegetable', value: 1},
          {name: 'Grilled Onions', type: 'vegetable', value: 1},
          {name: 'Grilled Peppers', type: 'vegetable', value: 1},
          {name: 'Jalapenos', type: 'vegetable', value: 1},
          {name: 'Pickled Jalapenos', type: 'vegetable', value: 1},
          {name: 'Guacamole', type: 'sauce', value: 4},
          {name: 'Chili Lime Guacamole', type: 'sauce', value: 4},
          {name: 'Cilantro', type: 'vegetable', value: 5},
          {name: 'Tomatoes', type: 'vegetable', value: 2},
          {name: 'Crema Fresca', type: 'sauce', value: 4},
          {name: 'Corn', type: 'vegetable', value: 2},
          {name: 'Cabbage', type: 'vegetable', value: 5}
        ]
      },
      {
        category: 'chicken',
        name: 'Fried Chicken',
        toppings: []
      }
    ];

    vm.toppings = [
      {name: 'Onions', type: 'vegetable', value: 1, restriction: 'none'},
      {name: 'Grilled Onions', type: 'vegetable', value: 1, restriction: 'none'},
      {name: 'Grilled Peppers', type: 'vegetable', value: 1, restriction: 'none'},
      {name: 'Tomatoes', type: 'vegetable', value: 2, restriction: 'none'},
      {name: 'Corn', type: 'vegetable', value: 2, restriction: 'none'},
      {name: 'Pineapple', type: 'vegetable', value: 3, restriction: 'Al Pastor'},
      {name: 'Jalapenos', type: 'vegetable', value: 3, restriction: 'none'},
      {name: 'Pickled Jalapenos', type: 'vegetable', value: 3, restriction: 'Al Pastor'},
      {name: 'Crema Fresca', type: 'sauce', value: 4, restriction: 'none'},
      {name: 'Guacamole', type: 'sauce', value: 4, restriction: 'none'},
      {name: 'Chili Lime Guacamole', type: 'sauce', value: 4, restriction: 'none'},
      {name: 'Cilantro', type: 'vegetable', value: 5, restriction: 'none'},
      {name: 'Cabbage', type: 'vegetable', value: 5, restriction: 'none'},
      {name: 'Pickled Radishes', type: 'vegetable', value: 5, restriction: 'none'}
    ];

    vm.getRecommendedToppings = getRecommendedToppings;

    function getRecommendedToppings(meatType) {
      var toppings = '', result;
      if (meatType != undefined) {
        result = lodash.find(vm.meats, {name: meatType});
        toppings = result.toppings;
      }
      return toppings;
    }
  }
})();
