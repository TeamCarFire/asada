(function() {
  'use strict';

  angular
    .module('asada')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
