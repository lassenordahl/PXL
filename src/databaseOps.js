var fire = require('./fire');

const database = fire.database();

var starCountRef = database.ref('/').once('value').then(function(snapshot) {
    console.log(snapshot.val())
  });
