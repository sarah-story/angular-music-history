require.config({
  paths: {
    angular: '../lib/bower_components/angular/angular',
    ngRoute: '../lib/bower_components/angular-route/angular-route.min',
    angularFilter: '../lib/bower_components/angular-filter/dist/angular-filter.min',
    angucompleteAlt: '../lib/bower_components/angucomplete-alt/angucomplete-alt',
    angularfire: '../lib/bower_components/angularfire/dist/angularfire.min',
    firebase: '../lib/bower_components/firebase/firebase',
    bootstrap: '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    jquery: '../lib/bower_components/jquery/dist/jquery.min',
    es6: '../lib/bower_components/requirejs-babel/es6',
    babel: '../lib/bower_components/requirejs-babel/babel-5.8.22.min'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'ngRoute': ['angular'],
    'angularFilter': ['angular'],
    'angucompleteAlt': ['angular', 'jquery'],
    'angularfire': ['angular', 'firebase'],
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  },
  priority: [
    "angular"
  ]
});

require([
  'angular',
  'es6!app'
  ], function(angular, app) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
      // bootstrap the app manually
      angular.bootstrap(document, ['MusicApp']);
    });
  }
);