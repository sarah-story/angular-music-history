app.controller("SongCtrl", function($scope, $firebaseArray) {

  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs");

  $scope.songs = $firebaseArray(songRef);
  
  $scope.albumSelect = "";
  $scope.artistSelect = "";

  $scope.removeFilter = function() {
    $scope.albumSelect = "";
    $scope.artistSelect = "";
  };

});