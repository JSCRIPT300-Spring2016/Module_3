'use strict';

var http = require('http');
var myDateModule = require('./enhanced-date');
var myTruckModule = require('./trucks');

var monthName = myDateModule.getMonthName();
var dayName = myDateModule.getDayName();
var dayNum = myDateModule.getDate({ format: 'formatted' });

var todaysTrucks = myTruckModule.filterByDay(dayName);

http.createServer( function(request,response) {
  response.writeHead(200, { 'Content-Type':'text/plain' });
  response.write('Today is '+dayName+', '+monthName+' '+dayNum+
    '. Here are the available food trucks: \n'+ todaysTrucks +'\n');
  response.end();
}).listen(3000);
