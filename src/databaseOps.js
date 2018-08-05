var fire = require('./fire');

const database = fire.database();


function getEvents() {
    return database.ref('/').once('value');
}

function getEvent(lat, lon, eventID) {
    return database.ref('/'+eventID).once('value');

    // eventsRef.then(function(snapshot){
    //     console.log("Man titties");
    //     for (var i = 0; i < snapshot.val()[eventID]["regions"].length; i++){
    //         if (snapshot.val()[eventID]["regions"][i]){
    //             if (lat < snapshot.val()[eventID]["regions"][i]["latne"] &&
    //                 lat > snapshot.val()[eventID]["regions"][i]["latsw"] &&
    //                 lon < snapshot.val()[eventID]["regions"][i]["lonne"] &&
    //                 lon > snapshot.val()[eventID]["regions"][i]["lonsw"]){
    //                     color = snapshot.val()[eventID]["regions"][i]["color"];
    //                     break;
    //                 }
    //         }            
    //     }
    // })    
}
var color = "blaxk"
changeColor(1, 1, "outsideLands", color);

console.log(color)

module.exports = {
    getEvents: getEvents
}