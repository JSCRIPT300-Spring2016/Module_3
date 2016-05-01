
// make this a simple http server that writes to the response stream object

// the page should display the following message:

// Today is <day name>, <month name> <date>. Here are the available food trucks:

// list the food trucks returned by filterByDay, passing in the current day name.
// e.g. filterByDay(day); where "day" is determined using the enhanced-date module
// The list of trucks returned will be an array of food truck objects. Iterate
// through the list, building up a string of food truck names. Once you're done
// iterating through that list, display the string you built up.

// Remember that the response is a stream object that must be closed.
var http = require('http');
var dateObj = require('./enhanced-date');
var trucks = require('./trucks');
var day = dateObj.getDayName();
var truckArray = trucks.filterByDay(day);
var truckString = 'Today is ' + day + ', ' +dateObj.getMonthName()+' '+
dateObj.getDate({ format: "milliseconds" }) +'. The food trucks available are:\n ';
for (var i=0; i<truckArray.length; i++) {
  truckString += truckArray[i] + '\n';
}
http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/plain'});
    response.write(truckString);
    response.end();
}).listen(3000, function() {
    console.log('listening on port 3000');
    console.log(truckArray[0]);
});
