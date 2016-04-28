// export this as a Node module using the code from Module_2

var dateObj = (function() {
  var privateDate = null;

  function initDate(){
    privateDate = new Date();

    return privateDate;
  }

  function setDate(date) {
    if(typeof date === 'undefined')
      privateDate = initDate();
    else if(date instanceof Date)
      privateDate =  date;
	else
      privateDate =  new Date(date);

    return privateDate;
  }

  function getDate(options){
    if(!privateDate)
      initDate();
    if(typeof options === 'undefined' || options.format === 'milliseconds')
      return 'Today\'s date is ' + privateDate.getTime();
    else if(options.format === 'formatted')
      return 'Today\'s date is ' + getMonthName() + ' ' + privateDate.getDate() +','
      + privateDate.getFullYear();
  }

  function getDayName(){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    if(!privateDate)
      initDate();

    return days[privateDate.getDay()];
  }

  function getMonthName(){
    var months = ['January','February','March','April','May','June','July','August',
			'September','October','November','December'];
    if(!privateDate)
      initDate();

    return months[privateDate.getMonth()];
  }

  function isFuture(){
    if(!privateDate)
      initDate();
    var today = new Date().toDateString();
    if(privateDate.toDateString() > today)
      return true;
    else
      return false;
  }

  function isToday(){
    if(!privateDate)
      initDate();
    var today = new Date().toDateString();
    if(privateDate.toDateString() === today)
      return true;
    else
      return false;
  }

  return {
    setDate : setDate,
    getDate : getDate,
    getDayName : getDayName,
    getMonthName : getMonthName,
    isFuture : isFuture,
    isToday : isToday
  };

})();

module.exports = dateObj;

