// export this as a Node module using the code from Module_2
var privateVars = {
  daysMap: {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  },
  monthsMap: {
    0: 'Jan',
    1: 'Feb',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'Sept',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
  }
};

function __setInternalDate() {
  privateVars.internalDate = new Date();
}

function getDate(format) {
  if (!privateVars.internalDate) {
    __setInternalDate();
  }
  //if user specifies a formatted date
  if (format && format.format === 'formatted') {
    var date = privateVars.internalDate;
    var month = privateVars.monthsMap[date.getMonth()];
    var day = privateVars.internalDate.getDate();
    var year = privateVars.internalDate.getFullYear();
    return month + ' ' + day + ', ' + year;
  }
  //all other cases (including specifying 'milliseconds')
  else {
    return privateVars.internalDate.getTime();
  }
}

function getDayName() {
  if (!privateVars.internalDate) {
    __setInternalDate();
  }
  return privateVars.daysMap[privateVars.internalDate.getDay()];
}

function getMonthName() {
  if (!privateVars.internalDate) {
    __setInternalDate();
  }
  return privateVars.monthsMap[privateVars.internalDate.getMonth()];
}

function isFuture() {
  if (!privateVars.internalDate) {
    __setInternalDate();
  }
  var currentDate = new Date();
  if (currentDate < privateVars.internalDate) {
    return true;
  }
  else {
    return false;
  }
}

function isToday() {
  if (!privateVars.internalDate) {
    __setInternalDate();
  }
  var currentDate = new Date();
  var internalDate = privateVars.internalDate;
  if (currentDate.getDate() === internalDate.getDate()
  && currentDate.getMonth() === internalDate.getMonth()
  && currentDate.getFullYear() === internalDate.getFullYear()) {
    return true;
  }
  else {
    return false;
  }
}

function setDate(date) {
  if (date) {
    privateVars.internalDate = new Date(date);
  }
  else {
    privateVars.internalDate = new Date();
  }
}


module.exports.privateVars = privateVars;
module.exports.__setInternalDate = __setInternalDate;
module.exports.getDate = getDate;
module.exports.getDayName = getDayName;
module.exports.getMonthName = getMonthName;
module.exports.isFuture = isFuture;
module.exports.isToday = isToday;
module.exports.setDate = setDate;
