import * as angular from "angular";
import * as _firebase from "firebase";
import * as angularfire from "angularfire";


function SongCtrl($scope, $firebaseArray) {

  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs");

  $scope.songs = $firebaseArray(songRef);
  
  $scope.albumSelect = "";
  $scope.artistSelect = "";

  $scope.removeFilter = function() {
    $scope.albumSelect = "";
    $scope.artistSelect = "";
  };

};

SongCtrl.$inject=['$scope', '$firebaseArray'];

export default SongCtrl;
