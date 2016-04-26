/*eslint-env node*/

//private date var
var myDate;

//public: store date
function setDate(theDate) {

    //check to see if i got something
  if (theDate) {

        //date passed in, use it
    myDate = new Date(theDate);

  } else {

        //no date, default to today
    myDate = new Date;
  }

    //return the resulting date
  return myDate;
}

//public: returns date w/format
function getDate(param) {

    //make sure the date is initalized
  ensureDate();

    //check for type
  if (param === undefined || param.format === 'milliseconds') {
        //return ms
    return myDate.valueOf();

  } else {
        //return formatted
    return myDate.toLocaleString('en-US',
              { month: 'long', day: 'numeric', year: 'numeric' });
  }
}

//public: returns the name of the day
function getDayName() {

    //make sure the date is initalized
  ensureDate();

    //return day of week
  return myDate.toLocaleDateString('en-us', { weekday: 'long' });
}

//public: returns the name of the month
function getMonthName() {

    //make sure the date is initalized
  ensureDate();

    //return month
  return myDate.toLocaleString('en-us', { month: 'long' });
}

//public: t/f if stored date is in future
function isFuture() {

    //get now
  var rightNow = new Date();

    //make sure the date is initalized
  ensureDate();

    //compare the dates
  return myDate.valueOf() > rightNow.valueOf();
}

//public: t/f if stored date is today
function isToday() {

    //get now
  var rightNow = new Date();

    //make sure the date is initalized
  ensureDate();

    //compare the y-m-d in UTC time
  return myDate.getUTCFullYear() === rightNow.getUTCFullYear() &&
            myDate.getUTCMonth() === rightNow.getUTCMonth() &&
            myDate.getUTCDate() === rightNow.getUTCDate();
}

//private: makes sure the date is initalized
function ensureDate() {
  if (typeof myDate !== 'object') { myDate = new Date; }
}

//expose public stuff
var publicStuff = {
  setDate: setDate,
  getDate: getDate,
  getDayName: getDayName,
  getMonthName: getMonthName,
  isFuture: isFuture,
  isToday: isToday
};

//export
module.exports = publicStuff;

