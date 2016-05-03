var http = require('http');
var dateObj = require('./enhanced-date');
var trucks = require('./trucks');

http.createServer(function (request, response){
  today = new Date();
  var date = today.getDate();
  dateObj.setDate(today);
  var dayName = dateObj.getDayName();
  var monthName = dateObj.getMonthName();
  var truckList = trucks.filterTrucksByDay('Monday');
  var truckString = '\n\n';
  
  truckList.forEach(function(truck){
    truckString += truck.name + '\n';
  });
  
  var stringText = 
  response.write(`Today is Monday. Here are the available food trucks: ` + `${truckString}`);
  response.end();
  
}).listen(3000);