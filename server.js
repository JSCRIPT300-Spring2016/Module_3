// make this a simple http server that writes to the response stream object

// the page should display the following message:

// Today is <day name>, <month name> <date>. Here are the available food
// trucks:

// list the food trucks returned by filterByDay, passing in the current day
// name.
// e.g. filterByDay(day); where "day" is determined using the enhanced-date
// module
// The list of trucks returned will be an array of food truck objects. Iterate
// through the list, building up a string of food truck names. Once you're
// done iterating through that list, display the string you built up.

// Remember that the response is a stream object that must be closed.

var http = require('http');
var customDate = require('./enhanced-date');
var customTrucks = require('./trucks');

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  
  var today = new Date();
  customDate.setDate(today);
  
  var message = 'Today is ' + customDate.getDayName() + ', ' +
    customDate.getMonthName() + ' ' + today.getDate() +
	'. Here are the available food trucks:\n';
	
  var foodTrucksToday = customTrucks.filterTrucksByDay(customDate.getDayName());
  for (var i = 0; i < foodTrucksToday.length; i++) {
    message += foodTrucksToday[i].name + '\n';
  }
  response.write(message);
  response.end('');
}).listen(3000, function () {
  //console.log('Listening on port 3000');
});