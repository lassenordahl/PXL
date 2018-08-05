var fire = require('./fire');

const database = fire.database();

getEvents();

function getEvents() {
    var events  = [];
    var starCountRef = database.ref('/').once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot){
            events.push(childSnapshot.val());
        })
    });
    return events;
}

module.exports = {  
    getEvents: getEvents
}