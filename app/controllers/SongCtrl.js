app.controller("SongCtrl", function($scope, $firebaseArray) {
  //Get array of songs from firebase and bind them to $scope.songs to be displayed
  //in song-list.html

  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs");

  $scope.songs = $firebaseArray(songRef);

  //Enable filter functionality, these models are tied to select 
  //boxes in song-list.html
  
  $scope.albumSelect = "";
  $scope.artistSelect = "";

  //Reset filter when button is clicked

  $scope.removeFilter = function() {
    $scope.albumSelect = "";
    $scope.artistSelect = "";
  };

});