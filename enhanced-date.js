// export this as a Node module using the code from Module_2
var exports = module.exports = {};
var setDate;
var getDate;
var getDayName;
var getMonthName;
var isFuture;
var isToday;
var createDateNow;
var privateDate = null;

createDateNow = function() {
  privateDate = Date.now();
};

setDate = function(parameter_set) {
  if(!parameter_set) {
    createDateNow();
  } else if (Number.isInteger(parameter_set)) {
    privateDate = parameter_set;
  } else {
    privateDate = parameter_set.getTime();
  }

  return privateDate;
};

getDate = function(parameter) {
  if(privateDate === null) {
    createDateNow();
  }
  if(!parameter){
    return privateDate;
  }
  if(parameter instanceof Object) {
    if(parameter.format === 'milliseconds') {
      return privateDate;
    }else if (parameter.format === 'formatted') {
      var newDate = new Date(privateDate);
      var locale = 'en-us';
      var monthD = newDate.toLocaleString(locale, { month: 'long' });
      var dayD = newDate.getDate();
      var yearD = newDate.getYear() + 1900;
      var formattedDate = '['+ monthD + '][' + dayD + '][' + yearD + ']';

      return formattedDate;
    }
  }
};

getDayName = function() {
  var locale = 'en-us';
  var newDate = new Date(privateDate);
  var dayNameD = newDate.toLocaleString(locale, { weekday: 'long' });

  return dayNameD;
};

getMonthName = function() {
  var locale = 'en-us';
  var newDate = new Date(privateDate);
  var monthNameD = newDate.toLocaleString(locale, { month: 'long' });

  return monthNameD;
};

isFuture = function() {
  var nowD = Date.now();

  return nowD - privateDate < 0;
};

isToday = function() {
  var nowD = new Date();
  var privateDateString = new Date(privateDate);

  return privateDateString.toDateString() === nowD.toDateString();
};

exports.setDate = setDate;
exports.getDate = getDate;
exports.getDayName = getDayName;
exports.getMonthName = getMonthName;
exports.isFuture = isFuture;
exports.isToday = isToday;
