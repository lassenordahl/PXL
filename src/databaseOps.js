
var fire = require('./fire');

const database = fire.database();
// use fire for all firebase operations
console.log(database);
// getEventData => {
//     var eventData = database.ref('/events');
//     console.log(eventData)
// }