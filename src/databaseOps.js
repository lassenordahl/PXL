var fire = require('./fire');

const database = fire.database();


function getEvents() {
    return database.ref('/').once('value');
    
    // var starCountRef = database.ref('/').once('value').then(function (snapshot) {
    //     snapshot.forEach(function (childSnapshot) {
    //         events.push(childSnapshot);
    //     })
    // });
}

function getRegion(lat, lon, eventID, events) {
    
}

module.exports = {
    getEvents: getEvents
}