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
     station.minPressure = stationAnalytics.getMinPressure(station),
     station.maxPressure = stationAnalytics.getMaxPressure(station),
     station.tempTrend = stationAnalytics.getTempTrend(station),
     station.windTrend = stationAnalytics.getWindTrend(station),
     station.pressureTrend = stationAnalytics.getPressureTrend(station)
    
  }
};

module.exports = updateDash;