var dateTools = require( './enhanced-date.js' );
var truckInfo = require( './trucks.js' );
var http = require( 'http' );

http.createServer( function( request , response ) {

  var day = dateTools.getDayName();
  var month = dateTools.getMonthName();
  var date = new Date().getDate().toString();
  var truckList = truckInfo.filterTrucksByDay( day );
  var truckString = 'Today is ' + day + ', ' + month + ' ' + date +
    '. The food trucks available are :\n';
  var i = 0;

  for ( i ; i < truckList.length ; i++ ) {
    truckString += truckList[i].name + '\n';
  }

  response.writeHead( 200 , { 'Content-Type' : 'text/plain' } );
  response.write( truckString );
  response.end( '*** Keep on Truckin! ***' );
}).listen( 3000 , function() {

  console.log( 'listening on port 3000' );
});