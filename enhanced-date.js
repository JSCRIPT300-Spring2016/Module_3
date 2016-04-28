// Emma Luk
// export this as a Node module using the code from Module_2

var myDate;
var displaysModuleDate;

//private function: date instantiation
function _initDate() {
    return new Date();
}

//check here that date is set: if not, initialize date to now
function setDate(date) {
    if (date === undefined || data === null) {
        displaysModuleDate = _initDate();
    }
    else if (typeof date === 'number') {
        displaysModuleDate = new Date(date);
    }
    else if (typeof date === 'object') {
        displaysModuleDate = date;
    }
    else {
        console.log("sorry!! wrong type");
    }
}

function getDate(objFormat) {
    if (displaysModuleDate === null || displaysModuleDate === undefined) {
        displaysModuleDate = _initDate();
    }
    if (objFormat.format === "formatted") {
        return displaysModuleDate.getMonth() + " " + displaysModuleDate.getDate() + ", " + displaysModuleDate.getFullYear();
    }
    else if (objFormat.format === "milliseconds" || objFormat === undefined) {
        return displaysModuleDate.getDate();
    }
    else {
        console.log("sorry!! unknown format");
    }
}

var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function getDayName() {
    var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if (displaysModuleDate === null) {
        return day[_initDate().getDay()];
    }

    return day[displaysModuleDate.getDay()];
}

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function getMonthName() {
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (displaysModuleDate === null) {
        return month[_initDate().getMonth()];
    }
    return month[displaysModuleDate.getMonth()];
}

//check if internally stored time (in ms) > time (in ms) right now.
//If yes, the internally set date is in the future.
function isFuture() {
    if (displaysModuleDate === null) {
        displaysModuleDate = _initDate();
    }
    if (displaysModuleDate.getTime() > Date.now()) {
        return true;
    }
    else {
        return false;
    }
}

// checks if internally stored date is from today
//If the current local date formatted as a "month/day/year"-

function isToday() {
    if (displaysModuleDate === null) {
        displaysModuleDate = _initDate();
    }
    var currentTime = new Date();
    if (displaysModuleDate.getFullYear() === currentTime.getFullYear() && displaysModuleDate.getDay() === currentTime.getDay()) {
        return true;
    }
    else {
        return false;
    }
}

var myObj = {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isFuture: isFuture,
    isToday: isToday
};

module.exports = myObj;
