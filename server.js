'use strict';
var http = require( 'http' );
var trucks = require('./trucks');
var dateObj = require('./enhanced-date');
var truckList = trucks.filterTrucksByDay(dateObj.getDayName());
var date = new Date(dateObj.getDate( { format : 'milliseconds' } )).getDate();

function handleRequest(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Today is ' + dateObj.getDayName() + ', ' +
		dateObj.getMonthName() + ' ' + date+'. The food trucks available are:' +
		'\n' + truckList);
  response.end();
}
http.createServer(handleRequest).listen(3000, function () {
  //console.log('listening on port 3000');
});