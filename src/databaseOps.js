var fire = require('./fire');

const database = fire.database();


function getEvents() {
    var events  = [];
    var starCountRef = database.ref('/').once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot){
            events.push(childSnapshot.val());
        })
    });
    return events;
}

function getRegion(lat, lon, eventID, events) {
    events[eventID]["regions"]
}

module.exports = {  
    getEvents: getEvents
}