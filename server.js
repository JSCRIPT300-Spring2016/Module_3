
// make this a simple http server that writes to the response stream object
var http = require('http');
var myDateObj = require('./enhanced-date');
var trucks = require('./trucks.js');
// the page should display the following message:

// Today is <day name>, <month name> <date>. Here are the available food trucks:

http.createServer(function(request, response){
  var today = new Date();
  var date = today.getDate();
  var dayName = myDateObj.getDayName();   
  var monthName = myDateObj.getMonthName();
  var truckList = trucks.filterTrucksByDay(dayName);
  var truckString = '\n\n';

  truckList.forEach(function(truck){
    truckString += truck.name + '\n';
  })

  response.writeHead(200, { 'Content-Type': 'text/plain' });
  //write something into the response


  
  response.write(`Today is ${dayName}, ${monthName} ${date} Here we are the 
        available food trucks` + `${truckString}`);

  //end the response
  response.end();
  //first parameter of listen is the port that the server is listening on
  //as soon as it starts listening it will call this function (second parameter)
}).listen(3000, function() {
  console.log('listening on port 3000');  
}); 