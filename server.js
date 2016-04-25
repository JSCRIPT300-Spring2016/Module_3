
// make this a simple http server that writes to the response stream object

// the page should display the following message:

// Today is <day name>, <month name> <date>. Here are the available food trucks:

// list the food trucks returned by filterByDay, passing in the current day name.
// e.g. filterByDay(day); where "day" is determined using the enhanced-date module
// The list of trucks returned will be an array of food truck objects. Iterate
// through the list, building up a string of food truck names. Once you're done
// iterating through that list, display the string you built up.

// Remember that the response is a stream object that must be closed.

var date = require('./enhanced-date.js');
var http = require('http');
var trucks = require('./trucks.js');


http.createServer(function (request, response) {  //stream objects
  var truckString = 'Today is ';
  truckString += date.getDate({ format : 'formatted' });
  truckString += '. The food trucks available are:\n';
  var day = date.getDayName();
  var openTrucks = trucks.filterTrucksByDay(day);
  for (x = 0; x < openTrucks.length; x++) {
    truckString += openTrucks[x].name + '\n';
  }
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(truckString);
  response.end('Eat well!');
}).listen(3000, function() {
  console.log('listening on port 3000');
});
