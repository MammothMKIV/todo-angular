'use strict'

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .when('/calendar', {
      templateUrl: 'views/calendar.html',
      controller: 'CalendarController'
    })
    .when('/todos/:status', {
      templateUrl:'views/main.html',
      controller:'MainController'
    })
    .when('/tags/:tags', {
      templateUrl:'views/main.html',
      controller:'MainController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
