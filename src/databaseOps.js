var fire = require('./fire');

const database = fire.database();


function getEvents() {
    var events = [];
    return database.ref('/').once('value');
    
    // var starCountRef = database.ref('/').once('value').then(function (snapshot) {
    //     snapshot.forEach(function (childSnapshot) {
    //         events.push(childSnapshot);
    //     })
    // });
}

function changeColor(lat, lon, eventID, color) {
    var eventsRef = getEvents();
    eventsRef.then(function(snapshot){
        console.log("Man titties");
        for (var i = 0; i < snapshot.val()[eventID]["regions"].length(); i++){
            console.log(snapshot.val()[eventID]["regions"][i])            
        }
        console.log(snapshot.val()[eventID]["regions"]);
    })    
}

changeColor(1, 1, "outsideLands", "bLACK");

module.exports = {
    getEvents: getEvents
}