// export this as a Node module using the code from Module_2
/*************************************************************************
* Name       : Huan Doan
* Course     : JavaScript 300
* Assignment : 3
* Description: Revealing Module Pattern module that provides
*              select Date functions.
*
* Anytime a method is called that needs to access your internally stored
* date, you'll want to make sure you've instantiated it first. Your
* module should not start out with this date being set to anything yet.
* If it hasn't yet been instantiated, instantiate it then (this is a good
* place to use a "private" method.) If it has already been instantiated,
* don't re-instantiate it (with the exception of setDate which should
* instantiate your date again based on how it's called).
*
* Export this as a Node module.
*************************************************************************/

// private variable - the internally stored date
var datePrivate;

function assignDate(value) {
  if (!datePrivate) {
    datePrivate = new Date();
  }
  datePrivate.setTime(value);
}

function getFormattedDate() {
  var formattedDate = '';
		
  if (!datePrivate) {
    datePrivate = new Date();
  }

  formattedDate = getMonthName() + ' ' +
    datePrivate.getDate() + ', ' + datePrivate.getFullYear();

  return formattedDate;
}

function getDateMsec() {
  if (!datePrivate) {
    datePrivate = new Date();
  }
	
  return datePrivate.getTime();
}

function isObjectFormat(value) {
  return ((value !== null) &&
    (typeof value === 'object'));
}

/***************************************************************************
* Allows the internally stored date to be returned to the user in one of
* two formats: as milliseconds after "epoch" or as a date string in
* the following format: "[Month] [date], [year]". This method should take
* an options parameter that specifies a format property, with a value of
* "milliseconds" or "formatted". If the options argument is ommited,
* default to milliseconds.
* Example: getDate({'format': 'formatted'})
***************************************************************************/
function getDate(formatOfDate) {
  if ((arguments.length === 1) &&
      (isObjectFormat(formatOfDate)) &&
      (formatOfDate['format'] === 'formatted')) {
    return getFormattedDate();
  } else {
    return getDateMsec();
  }
}

/***************************************************************************
* Returns the name of the day to be returned for the internally stored
* date - e.g. "Tuesday", or "Wednesday". This method takes no parameters.
***************************************************************************/
function getDayName() {
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'
    ,'Friday', 'Saturday'];
  var theDay = dayNames.length;
  var dayName = '';
	
  if (!datePrivate) {
    datePrivate = new Date();
  }
	
  theDay = datePrivate.getDay();
	
  if ((theDay >= 0) && (theDay < dayNames.length)) {
    dayName = dayNames[theDay];
  }
	
  return dayName;
}

/***************************************************************************
* Returns the name of the month to be returned for the internally stored
* date - e.g. "April", or "September". This method takes no parameters.
***************************************************************************/
function getMonthName() {
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June'
    , 'July', 'August', 'September', 'October', 'November', 'December'];
  var theMonth = monthNames.length;
  var monthName = '';

  if (!datePrivate) {
    datePrivate = new Date();
  }
	
  theMonth = datePrivate.getMonth();
	
  if ((theMonth >= 0) && (theMonth < monthNames.length)) {
    monthName = monthNames[theMonth];
  }
	
  return monthName;
}

/***************************************************************************
* Allows the internally stored date (i.e. "private") to be changed to
* what the user passes in. This method should be able to take either a date
* instance, a millisecond value, or nothing. If a date instance is passed
* in, set the internally stored date to a new instance based on this
* passed-in date. Do not store a reference to what is passed in.
* If nothing is passed in, set the internally stored date to "now".
***************************************************************************/
function setDate(aDate) {
  if (arguments.length === 1) {
    if (aDate instanceof Date) {
      assignDate(aDate.getTime());
    } else {
      var tempDate = Number(aDate);
		
      if ((!Number.isNaN(tempDate)) && (tempDate > 0)) {
        assignDate(tempDate);
      } else {
        assignDate(Date.now());
      }
    }
  } else {
    assignDate(Date.now());
  }
}

/***************************************************************************
* Returns a boolean true or false, based on whether the internally stored
* date is in the "future" based on when this method is called.  This
* method takes no parameter.
***************************************************************************/
function isFuture() {
  if ((datePrivate) && (datePrivate.getTime() > Date.now())) {
    return true;
  } else {
    return false;
  }
}

/***************************************************************************
* Returns a boolean true or false, based on whether the internally stored
* date is "today" based on when this method is called. Note that this
* means the internally stored date can be in the future or the past
* relative to when this method is called.
***************************************************************************/
function isToday() {
  var today = new Date();

  if ((datePrivate) &&
      (datePrivate.getMonth() === today.getMonth()) &&
      (datePrivate.getDate() === today.getDate()) &&
      (datePrivate.getDay() === today.getDay()) &&
      (datePrivate.getFullYear() === today.getFullYear())) {
    return true;
  } else {
    return false;
  }
}

// Export an anonymous object with the public methods
module.exports = {
  getDate: getDate
  , getDayName: getDayName
  , getMonthName: getMonthName
  , isFuture: isFuture
  , isToday: isToday
  , setDate: setDate
};