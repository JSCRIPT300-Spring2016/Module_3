
// make this a simple http server that writes to the response stream object

// the page should display the following message:

// Today is <day name>, <month name> <date>. Here are the available food trucks:

// list the food trucks returned by filterByDay, passing in the current day name.
// e.g. filterByDay(day); where "day" is determined using the enhanced-date module
// The list of trucks returned will be an array of food truck objects. Iterate 
// through the list, building up a string of food truck names. Once you're done 
// iterating through that list, display the string you built up.

// Remember that the response is a stream object that must be closed.


var express = require('express');
var DateObj = require('./enhanced-date');

var app = express();


app.get('/', function (request, response)
{
	var trucks = 'Today is ' + DateObj.getDayName();
    response.send(trucks);
});

app.listen(3000, function () {
    console.log('server started on port 3000');
});