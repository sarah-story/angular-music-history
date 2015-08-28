app.factory('getSongs', function($q) {
  return function(url) {
    return $q(function(resolve, reject) {
      $.ajax({
        url: url
      })
      .done(function(response) {
        resolve(response.songs);
      })
      .fail(function(xhr, status, error) {
        reject(error);
      });
    });
  }
});