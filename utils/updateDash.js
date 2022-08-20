const stationAnalytics = require("../utils/station-analytics");

("use strict");

const updateDash = {
  getUpdateDash(station) {
    station.weather = stationAnalytics.getWeatherCode(station);
     station.tempInCelsius = stationAnalytics.getTemp(station),
     station.tempInFahrenheit = stationAnalytics.getTempsInFahrenheit(station),
     station.pressure = stationAnalytics.getPressure(station),
     station.weatherIcon = stationAnalytics.getWeatherIcon(station),
     station.windSpeed = stationAnalytics.getWindReading(station),
     station.windDirection = stationAnalytics.getWindDirection(station),
      windChill = stationAnalytics.getWindChill(station)
    
  }
};

module.exports = updateDash;