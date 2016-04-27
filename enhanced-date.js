// export this as a Node module using the code from Module_2
'use strict';

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May',
 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var myDate = null;

function setDate (n) {
  if (n === undefined) {
    myDate = new Date();

    return myDate;
  } else if (n instanceof Date) {
    myDate = n;

    return myDate;
  } else {
    myDate = new Date(n);

    return myDate;
  }
}

function getDate (n) {
  if (myDate === null) {
    myDate = new Date();
  }
  if (n === undefined || n.format === 'milliseconds') {
    return myDate.getTime();
  } else if (n.format === 'formatted') {
    //var thisMonth = months[myDate.getMonth()];
    var date = myDate.getDate();
    //var year = myDate.getFullYear();
    //var printDay = thisMonth + ' ' + date + ', ' + year;

    return date;
  }
}

function getDayName () {
  if (myDate === null) {
    myDate = new Date();
  }
  var dayName = days[myDate.getDay()];

  return dayName;
}

function getMonthName () {
  if (myDate === null) {
    myDate = new Date();
  }
  var monthName = months[myDate.getMonth()];

  return monthName;
}

function isFuture () {
  if (myDate === null) {
    myDate = new Date();
  }
  var currentDate = new Date();
  if (myDate > currentDate) {
    return 'True';
  } else {
    return 'False';
  }
}

function isToday () {
  if (myDate === null) {
    myDate = new Date();
  }
  var currentDate = new Date();
  var cdd = currentDate.getDate();
  var cmm = currentDate.getMonth() + 1;
  var cyyyy = currentDate.getFullYear();
  var dd = myDate.getDate();
  var mm = myDate.getMonth() + 1;
  var yyyy = myDate.getFullYear();
  if (dd === cdd & mm === cmm & yyyy === cyyyy) {
    return 'True';
  } else {
    return 'False';
  }
}

// Public
var myDateModule = {
  setDate: setDate,
  getDate: getDate,
  getDayName: getDayName,
  getMonthName: getMonthName,
  isFuture: isFuture,
  isToday: isToday
};
module.exports = myDateModule;
