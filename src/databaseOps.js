var fire = require('./fire');

const database = fire.database();


function getEvents() {
    return database.ref('/').once('value');
}

function getRegion(lat, lon, eventID, events) {
    
}

module.exports = {
    getEvents: getEvents
}