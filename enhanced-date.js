'use strict';

/**
 * Expose `dateObj`.
 */

var dateObj = ( function(a) {
  var currentDate = new Date();

  function setDate(a) {

    if (a instanceof Date){
      currentDate = new Date(a);
    } else if (isNaN(a) === false){
      currentDate = new Date(a);
    } else if (arguments.length === 0){
      currentDate = new Date();
    }
  }

  function getDate(f) {
    if (arguments.length === 0){
      var internallyStoredDate = new Date();

      return internallyStoredDate.getTime();
    }

    var format = f.format;

    if (format === 'milliseconds') {
      return currentDate.getTime();

    } else if (format === 'formatted') {
      return this.getMonthName() + ' ' + currentDate.getDate() + ', ' +
      this.getYear();
    }
  }

  function getDayName() {
    return currentDate.toLocaleDateString('en-US', {weekday: 'long'});
  }

  function getMonthName() {
    return currentDate.toLocaleDateString('en-US', {month: 'long'});
  }

  function isFuture() {
    return currentDate > new Date();
  }

  function getYear() {
    return currentDate.getFullYear();
  }

  function isToday() {
    var candidate = new Date();

    return (candidate.getYear() === currentDate.getYear() &&
      (candidate.getMonth() === currentDate.getMonth()) &&
        (candidate.getDay() === currentDate.getDay()));
  }

  return {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isFuture: isFuture,
    getYear: getYear,
    isToday: isToday
  };
})();

module.exports = dateObj;