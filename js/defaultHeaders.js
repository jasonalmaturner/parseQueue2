var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'yyfv5MEWZV4hXEOkZl6ZXcF9aXdb4JaM1wK878XK', 'X-Parse-REST-API-Key': '4UbukRL3GjPZD1jF9Wpv9OR8YTK38rtTVKGlGKNP'}
      return config;
    }
  };
});