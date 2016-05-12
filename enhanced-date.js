// assignment two
// ben w.
//

var millisInDay = 86400000;
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"];

var myDate = null;

// name: checkDate
//
// purpose: Anytime a method is called that needs to access your internally stored date,
// you"ll want to make sure you"ve instantiated it first. Your module should not start
// out with this date being set to anything yet. If it hasn"t yet been instantiated,
// instantiate it then (this is a good place to use a "private" method.) If it has already
// been instantiated, don"t re-instantiate it (with the exception of setDate which should
// instantiate your date again based on how it"s called (see sample usage below.)
//
function checkDate() {
    if (myDate === undefined || myDate === null) {
        myDate = new Date();
    }
}
    

// name: setDate
//
// purpose: allows the internally stored date (i.e. "private") to be changed to
// what the user passes in. This method should be able to take either a date instance,
// a millisecond value, or nothing. If a date instance is passed in, set the interally
// stored date to a new instance based on this passed-in date - do not store a reference
// to what is passed in. If nothing is passed in, set the internally stored date to "now".
//
// Sample usage:
// myDate.setDate();
// myDate.setDate(1460413682198);
// myDate.setDate(new Date());
//
function setDate(date) {
    if (date === undefined || date === null)
    {
        myDate = new Date();
    }
    else if (!isNaN(date) && date >= 0)
    {
        myDate = new Date(date);
    }
    else if (date instanceof Date) {
        myDate = new Date(date.getTime());
    }
    else
    {
        myDate = new Date();
    }
}


// name: getDate
//
// purpose: allows the internally stored date to be returned to the user in one of two
// formats: as milliseconds after "epoch" or as a date string in the following format:
// "[Month] [date], [year]". This method should take an options parameter that specifies
// a format property, with a value of "milliseconds" or "formatted". If the options
// argument is ommited, default to milliseconds. Sample usage:
//
// myDate.getDate({ format: "milliseconds" });
// myDate.getDate({ format: "formatted" });
// myDate.getDate();
//
function getDate(option) {
    checkDate();

    if (option === undefined || option === null || option.format === "milliseconds")
    {
        return myDate.getTime();
    }
    else if (option.format === "formatted")
    {
        return "[" + myDate.getMonth() + "][" + myDate.getDate() + "], ["
                + myDate.getFullYear() + "]";
    }

    return myDate.getTime();
}


// name: getDayName
//
// purpose: returns the name of the day to be returned for the internally stored date
// - e.g. "Tuesday", or "Wednesday". This method takes no parameters. Sample usage:
//
// console.log(myDate.getDayName()); // "Monday"
//
function getDayName() {
    checkDate();

    return day[myDate.getDay()];
}
 

// name: getMonthName
//
// purpose: returns the name of the month to be returned for the internally stored date
// - e.g. "April", or "September". This method takes no parameter. Sample usage:
//
// console.log(myDate.getMonthName()); // "April"
//
function getMonthName() {
    checkDate();

    return month[myDate.getMonth()];
}
 
 
// name: isFuture
//
// purpose: returns a boolean true or false, based on whether the internally stored date is
// in the "future" based on when this method is called. This method takes no parameter.
// Sample usage:
//
// console.log(myDate.isFuture()); // false
//
function isFuture() {
    checkDate();

    return myDate.getTime() > Date.now();
}
 

// name: isToday
//
// purpose: returns a boolean true or false, based on whether the internally stored date is
// "today" based on when this method is called. Note that this means the internally stored
// date can be in the future or the past relative to when this method is called.
// Think carefully about how you determine if something is "today". Sample usage:
//
// console.log(myDate.isToday());
//
function isToday() {
    var timeNow = new Date();

    checkDate();

    return (myDate.getDay() === timeNow.getDay())
           && (Math.abs(myDate.getTime() - timeNow.getTime()) <= millisInDay);
}
 
var myDateObj = {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isFuture: isFuture,
    isToday: isToday
};
 
module.exports = myDateObj;

