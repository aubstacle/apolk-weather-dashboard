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
var cityNameEl = $(".cityName");
var tempEl = $(".temperature");
var humidityEl = $(".humidity");
var windEl = $(".wind");
var uvIndexEl = $(".uv");

// On click for searching cities //
searchBtn.on("click", function (event) {
  event.preventDefault();
  var city = cityInput.val();
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=739e8f5c71af00f6952140bc0cc3d4e2";
  $.ajax({
    method: "GET",
    url: queryURL,
  }).then(function (response) {
    console.log(queryURL);
    console.log(response);
    console.log(response.name);
    cityNameEl.text(response.name);
    tempEl.text("Temperature: " + response.main.temp + "˚F");
    humidityEl.text("Humidity: " + response.main.humidity);
  });
});
