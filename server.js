/*
	Scott Henderson
	JSCRIPT 300 A Spring 2016
*/

// make this a simple http server that writes to the response stream object

// the page should display the following message:

// Today is <day name>, <month name> <date>. Here are the available food trucks:

// list the food trucks returned by filterByDay, passing in the current day name.
// e.g. filterByDay(day); where "day" is determined using the enhanced-date module
// The list of trucks returned will be an array of food truck objects. Iterate
// through the list, building up a string of food truck names. Once you're done
// iterating through that list, display the string you built up.

// Remember that the response is a stream object that must be closed.

var http = require("http");
var eDate = require("./enhanced-date");
var trucks = require("./trucks");

var today = new Date();
var server = http.createServer();

eDate.setDate(today);

function handleRequest(request, response) {

	response.writeHead(200, { "Content-Type": "text/plain" });

	var openFoodTrucks = trucks.filterByDay(eDate.getDayName());
	var openFoodTrucksString = "";

	for (var i = 0; i < openFoodTrucks.length; ++i) {
		openFoodTrucksString += "\t" + openFoodTrucks[i].name + "\n";
	}

	response.write(
		"Today is " + eDate.getDayName() + ", " + eDate.getMonthName() + " " + today.getDate() +
		". The food trucks available are:\n\n");
	response.write(openFoodTrucksString);
	response.end();
}

server.on("request", handleRequest);

server.listen(3000, function () {
	console.log("listenting on port 3000");
});
