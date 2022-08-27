"use strict";

const stationAnalytics = require("../utils/station-analytics");

const updateDash = {
  getUpdateDash(station) {
    station.weather = stationAnalytics.getWeatherCode(station);
     station.tempInCelsius = stationAnalytics.getTemp(station),
     station.tempInFahrenheit = stationAnalytics.getTempsInFahrenheit(station),
     station.pressure = stationAnalytics.getPressure(station),
     station.weatherIcon = stationAnalytics.getWeatherIcon(station),
     station.windSpeed = stationAnalytics.getWindReading(station),
     station.windDirection = stationAnalytics.getWindDirection(station),
     station.windChill = stationAnalytics.getWindChill(station),
     station.minTempInCelsius = stationAnalytics.getMinTemp(station),
     station.maxTempInCelsius = stationAnalytics.getMaxTemp(station),
     station.minPress = stationAnalytics.getMinPressure(station),
     station.maxPress = stationAnalytics.getMaxPressure(station),
     station.minWind = stationAnalytics.getMinWind(station),
     station.maxWind = stationAnalytics.getMaxWind(station)
  }
};

module.exports = updateDash;