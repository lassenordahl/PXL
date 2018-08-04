var fire = require('./fire');

const database = fire.database();

getEvents();

function getEvents() {
    events  = []
    var starCountRef = database.ref('/').once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot){
            console.log(childSnapshot.key);
            console.log(childSnapshot.val()["latne"]);
            console.log(childSnapshot.val()["lonne"]);
            console.log(childSnapshot.val()["latsw"]);
            console.log(childSnapshot.val()["lonsw"]);
        })
    });
}
