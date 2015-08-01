angular.module('lucuslovell', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'core']);

angular.module('lucuslovell').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('lucuslovell').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
