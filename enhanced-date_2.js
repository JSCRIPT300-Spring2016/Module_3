// export this as a Node module using the code from Module_2

'use strict';
var privateDate = null;
var checkDate;
var formatDate;

/* Below I tried to setup a function to support privateDate set to 
   null. I kept getting errors 'can't read property of 'null'
   so I added some logic below for that condition. It ran, but the dates
   were set to undefined and the code was broken. Would love some help on 
   how to get this working by setting to null by default.  Thanks!!
*/ 

/* eslint-disable no-console */
function defaultDate() {
  var privateDate = new Date(); // make this available to both get and set
  var dd = privateDate.getDate();
  var mm = privateDate.getMonth() + 1; //January is 0!
  var yyyy = privateDate.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  checkDate = mm + dd + yyyy;
  formatDate = mm + '/' + dd + '/' + yyyy;
}

module.exports = {

  setDate: function(newDate) {  // make a function for milli

    if (privateDate == null) {
      privateDate = new Date();
      console.log(privateDate);
      // Done - myDate.setDate() if no argument given
    }

    else {  // only using newMilli in use
      privateDate = new Date();
      console.log(privateDate);
    }
  },

  getDate: function(dateAsk) {
    if (dateAsk == undefined) {
      console.log('No Args');
      var n = privateDate.getTime();

      return n;
    }
    else if (dateAsk == 'milliseconds') {
      console.log('milliseconds');
      var m = privateDate.getTime();
      console.log(m);
    }
    else if (dateAsk == 'formatted') {
      console.log(formatDate);

      return(formatDate);
    }
  },

  getDayName: function(dateAsk) {
    if ((dateAsk) && (privateDate == null)) { // get by the "Can't read property of 'null' error
      defaultDate();     
    }
    else if (dateAsk) { // we really got called to do some work!
      defaultDate(); // re-read the date to make sure privateDate is initalized
      var formatDay = privateDate.getDay();
      var weekday = new Array(7);
 
      weekday[0] = 'Sunday';
      weekday[1] = 'Monday';
      weekday[2] = 'Tuesday';
      weekday[3] = 'Wednesday';
      weekday[4] = 'Thursday';
      weekday[5] = 'Friday';
      weekday[6] = 'Saturday';
      console.log(weekday[formatDay]);

      return (weekday[formatDay]);
    }
  },

  getMonthName: function(dateAsk) {
    if ((dateAsk) && (privateDate == null)) { // get by the "Can't read property of 'null' error
      defaultDate();     
    }
    else if (dateAsk) { // we really got called to do some work!

      var formatMonth = privateDate.getMonth();
      var monthNames = new Array(12);
      monthNames[0] = 'January';
      monthNames[1] = 'February';
      monthNames[2] = 'March';
      monthNames[3] = 'April';
      monthNames[4] = 'May';
      monthNames[5] = 'June';
      monthNames[6] = 'July';
      monthNames[7] = 'August';
      monthNames[8] = 'September';
      monthNames[9] = 'October';
      monthNames[10] = 'November';
      monthNames[11] = 'December';
      console.log(monthNames[formatMonth]);

      return (monthNames[formatMonth]);
    }
  },

  isFuture: function(dateAsk) {

    if (dateAsk <= checkDate) {
      console.log('given date is not in the future');
    }
    else {
      console.log('date is in the future');
    }
  },

  isToday: function(dateAsk) {

    if (dateAsk == checkDate) {
      console.log('given date is today');
    }
    else {
      console.log('given date is not today' + checkDate);
    }
  },

};