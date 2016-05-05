// export this as a Node module using the code from Module_2

  var currentModuleDate = null;
  var instantiateDate = function () {
    return new Date();
  };
  var setDate = function (date) {
    if (date===undefined) {
      currentModuleDate = instantiateDate();
    }
    else if (typeof date === 'number') {
      currentModuleDate = new Date(date);
    }
    else if (date instanceof Date) {
      currentModuleDate = new Date(date);
    }
  };
  var getDate = function (requestedFormat) {
    if (currentModuleDate === null) {
      currentModuleDate = instantiateDate();
    }
    if (requestedFormat.format === 'formatted') {
      return getMonthName() + ' ' + currentModuleDate.getDate() +
      ', ' + currentModuleDate.getFullYear();
    }
    else if (requestedFormat.format==='milliseconds' ||
    requestedFormat===undefined) {
      return currentModuleDate.getDate();
    }
  };
  var getDayName = function () {
    var day = ['Sunday','Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];
    if (currentModuleDate === null) {
      return day[instantiateDate().getDay()];
    }

    return day[currentModuleDate.getDay()];
  };
  var getMonthName = function () {
    var month = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (currentModuleDate === null) {
      return month[instantiateDate().getMonth()];
    }

    return month[currentModuleDate.getMonth()];
  };
  var isFuture = function () {
    if (currentModuleDate === null) {
      currentModuleDate = instantiateDate();
    }
    if(currentModuleDate.getTime() > Date.now()) {
      return true;
    }
    else {
      return false;
    }
  };
  var isToday = function () {
    if (currentModuleDate === null) {
      currentModuleDate = instantiateDate();
    }
    var currentTime = new Date();
    if( currentModuleDate.getFullYear() === currentTime.getFullYear() &&
    currentModuleDate.getDay() === currentTime.getDay()) {
      return true;
    }
    else {
      return false;
    }
  };

  var dateCreation = {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isFuture: isFuture,
    isToday: isToday
  };

module.exports = dateCreation;
