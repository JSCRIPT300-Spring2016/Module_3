var myDate = null;
  var DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  var MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  function _initializeMyDate() {
    myDate = new Date();
  }
  function setDate( date ) {
    if (typeof date === 'number' || date instanceof Date) {
      myDate = new Date(date);
    } else if (typeof date === 'undefined') {
      _initializeMyDate();
    }
  }

  function getDate( formatObj ) {
    var month;
    var date;
    var year;

    if (myDate === null){
      _initializeMyDate();
    }

    if ( typeof formatObj === 'undefined' || formatObj &&
        formatObj.format === 'milliseconds') {
      return myDate.getTime();
    } else if (formatObj && formatObj.format === 'formatted'){
      month = getMonthName();
      date = myDate.getDate();
      year = myDate.getFullYear();

      return month + ' ' + date + ', ' + year;
    }
  }

  function getDayName() {
    var dayIndex;

    if (myDate === null){
      _initializeMyDate();
    }

    dayIndex = myDate.getDay();

    return DAYS[dayIndex];
  }

  function getMonthName() {
    var monthIndex;

    if (myDate === null){
      _initializeMyDate();
    }

    monthIndex = myDate.getMonth();

    return MONTHS[monthIndex];
  }

  function isToday() {
    var date;
    var month;
    var year;
    var now;

    if (myDate === null){
      _initializeMyDate();
    }

    date = myDate.getDate();
    month = myDate.getMonth();
    year = myDate.getYear();
    now = new Date();

    return date === now.getDate() && month === now.getMonth()
      && year === now.getYear();

  }

  function isFuture() {
    var now;

    if (myDate === null){
      _initializeMyDate();
    }

    now = new Date();

    return myDate.getTime() > now.getTime();
  }

  module.exports = {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isToday: isToday,
    isFuture: isFuture
  };