// These elements and function use moment.js to display the current date and time //
var dayEl = $("#currentDay");
var timeEl = $("#currentTime");
var currentDate = moment().format("dddd MMMM Do");
currentTime = moment().format("LTS");

dayEl.text(currentDate);
timeEl.text(currentTime);

setInterval(function () {
  var clock = moment().format("h:mm:ss A");
  timeEl.text(clock);
}, 1000);

var cityInput = $("#cityInput");
var searchBtn = $("#searchButton");
var clearBtn = $("#clearButton");
var searchHistory = $("#searchHistory");
var fiveForecast = $("#fiveForecast");