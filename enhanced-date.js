// export this as a Node module using the code from Module_2
'use strict';

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];

var internalDate = null;

var dateInstantiate = function() {
  if ( internalDate === null ) {
    internalDate = new Date();

    return internalDate;
  }
};

var setDate = function( dateInput ) {
  dateInstantiate();

  if ( dateInput instanceof Date ) {
    internalDate = new Date( dateInput );

    return internalDate;
  }
  else if ( dateInput === undefined ) {
    internalDate = new Date();

    return internalDate;
  }
  else{
    internalDate = new Date( dateInput );

    return internalDate;
  }
};

var getDate = function( formatRequest ) {
  dateInstantiate();

  if ( formatRequest === undefined) {
    return ( internalDate.getTime() );
  }
  else if ( formatRequest.format === 'formatted' ) {
    return month [ internalDate.getMonth() ] + ' ' + internalDate.getDate() +
     ', ' + internalDate.getFullYear();
  }
  else if ( formatRequest.format === 'milliseconds') {
    return internalDate.getTime();
  }
};

var getDayName = function() {
  dateInstantiate();

  return weekday[ internalDate.getDay() ];
};

var getMonthName = function() {
  dateInstantiate();

  return month[ internalDate.getMonth() ];
};

var isFuture = function() {
  dateInstantiate();

  if ( internalDate > Date.now() ) {
    return true;
  } else {
    return false;
  }
};

var isToday = function() {
  dateInstantiate();
  var rightNow = new Date();
  var rightNowAsString = rightNow.toDateString();
  var internalDateAsString = internalDate.toDateString();

  if ( rightNowAsString === internalDateAsString ) {
    return true;
  } else {
    return false;
  }
};

exports.setDate = setDate;
exports.getDate = getDate;
exports.getDayName = getDayName;
exports.getMonthName = getMonthName;
exports.isFuture = isFuture;
exports.isToday = isToday;

