/*
	Scott Henderson
	JSCRIPT 300 A Spring 2016
*/

var _date;
var _weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function initDate() {
	if (_date === undefined) {
		_date = new Date();
	}
}

function setDate(date) {
	if (date === undefined) {
		// Reset _date to now.
		_date = new Date();
	} else if (date instanceof Date || Number.isInteger(date)) {
		_date = new Date(date);
	} else {
		initDate();
	}
}

function getDate(params) {
	initDate();
	var retVal;
	var format =
		params === undefined || !params.hasOwnProperty("format")
		? "milliseconds" : params.format;

	switch (format.toLowerCase()) {
	case "formatted":
		retVal = _date.toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" });
		break;
	case "milliseconds":
	default:
		retVal = _date.valueOf();
	}

	return retVal;
}

function getDayName() {
	initDate();

	return _weekday[_date.getDay()];
}

function getMonthName() {
	initDate();

	return _date.toLocaleString("en-US", { month: "long" });
}

function isFuture() {
	initDate();

	return _date.valueOf() > Date.now();
}

function isToday() {
	initDate();
	var now = new Date();

	return _date.getFullYear() === now.getFullYear() &&
		_date.getMonth() === now.getMonth() &&
		_date.getDate() === now.getDate();
}

var publicAPI = {
	setDate: setDate,
	getDate: getDate,
	getDayName: getDayName,
	getMonthName: getMonthName,
	isFuture: isFuture,
	isToday: isToday
};

module.exports = publicAPI;
