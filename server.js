
// make this a simple http server that writes to the response stream object

// the page should display the following message:

// Today is <day name>, <month name> <date>. Here are the available food trucks:

//list the food trucks returned by filterByDay, passing in the current day name.
// e.g. filterByDay(day); where "day" is determined using the enhanced-date
// module. The list of trucks returned will be an array of food truck objects.
// Iterate through the list, building up a string of food truck names. Once
// you're done iterating through that list, display the string you built up.

// Remember that the response is a stream object that must be closed.

var trucks = require('./trucks.js');
var enhancedDate = require('./enhanced-date.js');
var http = require('http');
enhancedDate.setDate();
var dayName = enhancedDate.getDayName();
var monthName = enhancedDate.getMonthName();
var dayDate = new Date(enhancedDate.getDate()).getDate();

var heading_1 = ' Today is ' + dayName + ', ' + monthName + ' ' + dayDate +
' -- Here are the available food trucks.\n\n';

var stuff_1 = trucks.filterByDay(dayName);
var stringStuff = '';
function makeString(element){
  stringStuff = stringStuff + ' ' + element + '\n';
}
stuff_1.forEach(makeString);

http.createServer(function (request, response) {

  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(heading_1);
  response.write(stringStuff);
  response.end();
}).listen(3000, function () {
  /*eslint-disable*/
  console.log('listening on port 3000');
  /*esling-enable*/
});
