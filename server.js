
// make this a simple http server that writes to the response stream object
var http = require('http');
var enhancedDate = require('enhanced-date.js');
var trucks = require('trucks.js');
// the page should display the following message:

// Today is <day name>, <month name> <date>. Here are the available food trucks:

// list the food trucks returned by filterByDay, passing in the current day name.
// e.g. filterByDay(day); where "day" is determined using the enhanced-date module
// The list of trucks returned will be an array of food truck objects. Iterate 
// through the list, building up a string of food truck names. Once you're done 
// iterating through that list, display the string you built up.

// Remember that the response is a stream object that must be closed.


//request refers to your http request. the response is what is sent back
http.createServer(function(request, response){

	//both request and response have headers, which is just a place that contains info about them.
	//200 refers to status code
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	//write something into the response
	response.write('Today is' + getDate() + '. Here are the available food trucks:');

	//end the response
	response.end('Goodbye, class!');
	//first parameter of listen is the port that the server is listening on
	//as soon as it starts listening it will call this function (second parameter)
}).listen(3000, function() {
	console.log('listening on port 3000');
});