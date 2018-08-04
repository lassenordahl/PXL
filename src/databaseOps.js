var fire = require('./fire');

const database = fire.database();

var starCountRef = database.ref('/').once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot){
        console.log(childSnapshot.key);
    })
  });
