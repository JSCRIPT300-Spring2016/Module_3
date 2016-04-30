//in progress

var http = require( 'http' );
function handleRequest(request, response) {
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	
	var rightNow = new Date();
	var rightNowAsString = rightNow.toDateString();
	var lastIndex = rightNowAsString.lastIndexOf(' ');
	var shortenedDate = rightNowAsString.substring(0, lastIndex);
	
	response.write('Today is ' + shortenedDate + ' Here are the available food trucks:');
	//code for food trucks go here


	response.end('Thanks! Response end');
}.listen(3000, function () {
	console.log('listening on port 3000');
});



