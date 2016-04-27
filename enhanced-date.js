
var __date = null;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday",
              "Thursday", "Friday", "Saturday"];
var months = ["January", "Febuary", "March", "April", "May",
                "June", "July", "August", "September",
                "October", "November", "December"];

function __checkIfInstantiated(){
  if (__date) { return __date; } else { return new Date(); };
};

function __milliseconds(){
  var date = __checkIfInstantiated();

  return date.getTime();
};

function __formatted(){
  var date = __checkIfInstantiated();
  var month = getMonthName();
  var day = date.getDate();
  var year = date.getFullYear();

  return month + " " + day + ", " + year;
};

function setDate(value){
  value = value || Date.now();
  __date = new Date(value);
};

function getDate(options){
  options = options || { format: "milliseconds" };
  var format = options.format;
  if (format === 'milliseconds') {
    return __milliseconds();
  } else if (format === 'formatted') {
    return __formatted();
  } else {
    return "option not suppored, please input milliseconds or formated";
  };
};

function getDayName(){
  var date = __checkIfInstantiated();

  return days[date.getDay()];
};

function getMonthName(){
  var date = __checkIfInstantiated();

  return months[date.getMonth()];
};

function isFuture(){
  var date = __checkIfInstantiated();
  var today = Date.now();

  return date > today;
};

function isToday(){
  var date = __checkIfInstantiated();
  var start = new Date();
  start.setHours(0, 0, 0, 0);
  var end = new Date();
  end.setHours(23, 59, 59, 999);

  return (date >= start) && (date <= end);
};

var enhancedDate = {
  setDate : setDate,
  getDate : getDate,
  getDayName : getDayName,
  getMonthName : getMonthName,
  isFuture : isFuture,
  isToday : isToday
};


module.exports = enhancedDate;