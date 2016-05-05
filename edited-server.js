var http = require('http');
var dateObj = require('./edited-enhanced-date');
var trucks = require('./edited-trucks');

http.createServer(function (request, response) {
  var today = new Date();
  var date = today.getDate();
  var dayName = dateObj.getDayName();
  var monthName = dateObj.getMonthName();
  var truckList = trucks.filterTrucksByDay(dayName);
  var truckString = '\n\n';
  var displaySTring = 'Today is ' + dayName + ', ' + monthName + ' ' + date +
  '. Here are the available food trucks'
  truckList.forEach(function (truck) {
    truckString += truck.name + '\n';
  })
  response.write(displaySTring+'\n'+truckString);
  response.end()
}).listen(3000, function () {
  console.log('listening on port 3000');
})
