var fire = require('./fire');

const database = fire.database();


function getEvents() {
    return database.ref('/').once('value');
}

function getRegion(lat, lon, eventID) {
    return database.ref('/'+eventID+"/regions").orderByChild("lonne").startAt(lon).limitToFirst(1).once('value');

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

getRegion(4,4,"outsideLands").then(snapshot => {
        console.log(snapshot.val());
    }
)

module.exports = {
    getEvents: getEvents
}