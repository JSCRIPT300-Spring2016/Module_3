//Emma Luk
// make this a simple http server that writes to the response stream object

// the page should display the following message:

// Today is <day name>, <month name> <date>. Here are the available food trucks:

// list the food trucks returned by filterByDay, passing in the current day name.
// e.g. filterByDay(day); where "day" is determined using the enhanced-date module
// The list of trucks returned will be an array of food truck objects. Iterate 
// through the list, building up a string of food truck names. Once you're done 
// iterating through that list, display the string you built up.

// Remember that the response is a stream object that must be closed.

//files: cd emma\cv\study\washington.edu\JavaScript3\Module 2\DateUtility\Module_3
// node server.js 
//http://127.0.0.1:3000/

//building a simple http server in Node (Node.pdf)
//- server.js

var http = require('http');

//trucks
var trucks = require('./trucks');

//from my date file
var date = require('./enhanced-date');
date.setDate();

//server request and response
http.createServer(function (request, response) {

    //the output
    var responseOutPut = 'Today is ' + date.getDayName() + ', '
          + date.getDate('formatted') + '.' + '\n' + 'The food trucks available are:\n\n';

    //trucks are open
    var truckArray = trucks.filterByDay(date.getDayName());

    //loop adding trucks
    for (var i = 0; i < truckArray.length; i++) {
        responseOutPut += '-' + truckArray[i].name + '\n';
    }

    //calls out to web services
    response.write(responseOutPut);

    //end
    response.end();

}).listen(3000, function () {

    //listening
    console.log('listenting on port 3000');

});
