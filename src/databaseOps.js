var fire = require('./fire');

const database = fire.database();


function getEvents() {
    return database.ref('/').once('value');
}


function getRegions(eventID) {
    return database.ref('/' + eventID + "/regions").once('value');  
}


function getColor(lat, lon, eventID) {
    return getRegions(eventID).then(snapshot => {
        let color = "#000000"
        snapshot.forEach(region => {
            if (region.val()["latne"] > lat &&
                region.val()["lonne"] > lon &&
                region.val()["latsw"] < lat &&
                region.val()["lonsw"] < lon)
            {
                color = region.val()["color"]
            } else {
            }
        })
        return color
    })   
}


module.exports = {
    getColor: getColor,
    getEvents: getEvents
}