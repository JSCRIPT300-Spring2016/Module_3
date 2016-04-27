var http = require('http');
var trucks = require('./trucks');
var dateObj = require('./enhanced-date');
var day = dateObj.getDayName();
var truckString = "Today is " + dateObj.getDate({ format: "formatted" }) +
   ". \nThe food trucks available are:\n";

trucks.filterByDay(day).forEach(function(truck){
  truckString += truck + '\n';
});

http.createServer(function(request, response){
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(truckString);
  response.end();
}).listen(3000);