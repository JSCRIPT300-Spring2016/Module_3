'use strict';
var dateObj = (function (){
  var _date = null;
  var DAYS =
    ['Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'];
  var MONTHS =
    ['January',
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
    'December'];

  function _initializeDate(){
    _date = new Date();
  }
  
  function setDate(date){
    if (typeof date === 'number' || date instanceof Date){
      _date = new Date(date);
    }
    else if(typeof date === 'undefined'){
      _initializeDate();
    }
  }
  
  function getDate(formatObj){
    var month;
    var date;
    var year;
    
    if (_date === null){
      _initializeDate();
    }
    if (typeof formatObj === 'undefined' || formatObj &&
        formatObj.format === 'milliseconds'){
      return _date.getTime();
    }else if (formatObj && formatObj.format === 'formatted'){
      month = getMonthName();
      date = _date.getDate();
      year = _date.getFullYear();
      
      return month + ' ' + date + ', ' + year;
    }
  }
  function getDayName(){
    var dayIndex;
    if (_date === null){
      _initializeDate();
    }
    dayIndex = _date.getDay();
    
    return DAYS[dayIndex];
  }

  function getMonthName(){
    var monthIndex;
    if (_date === null){
      _initializeDate();
    }
    monthIndex = _date.getMonth();
    
    return MONTHS[monthIndex];
  }

  function isToday(){
    var date;
    var month;
    var year;
    var now;
    
    if (_date === null){
      _initializeDate();
    }
    
    date = _date.getDate();
    month = _date.getMonth();
    year = _date.getYear();
    now = new Date();
    
    return date === now.getDate() &&
      month === now.getMonth() &&
      year === now.getYear();
  }
  
  function isFuture(){
    var now;
    if (_date === null){
      _initializeDate();
    }
    
    return _date.getTime() > now.getTime();
  }

  module.exports =  {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isFuture: isFuture,
    isToday: isToday
  };
});
dateObj;