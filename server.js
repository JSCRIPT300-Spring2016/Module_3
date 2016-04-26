/*eslint-env node*/

//http and server
var http = require('http');

//trucks
var foodTrucks = require('./trucks');

//date
var theDate = require('./enhanced-date');
theDate.setDate();

//server response and listen
http.createServer(function (request, response) {

    //the output
  var outputString = 'Today is ' + theDate.getDayName() + ', '
        + theDate.getDate('formatted') + '. The food trucks available are:\n';

    //trucks that are open
  var theTrucks = foodTrucks.filterByDay(theDate.getDayName());

    //loop adding trucks
  for (var i = 0; i < theTrucks.length; i++) {
    outputString += '-' + theTrucks[i].name + '\n';
  }

    //write the response
  response.write(outputString);

    //finished
  response.end();

}).listen(3000, function () {

    //log out that I'm listening
    console.log('I am now listenting on port 3000'); //eslint-disable-line

});

