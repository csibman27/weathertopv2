const conversions = require("../utils/conversions");
const stationAnalytics = require("../utils/station-Analytics");


("use strict");

const updateReadings = {
  getUpdateReading(station) {
    station.latestReadingTemp = stationAnalytics.getLatestReadingTemp(station);
    station.latestReadingPressure = stationAnalytics.getLatestReadingPressure(station);
    station.latestWindReading = conversions.getLatestWindReading(station);
    station.latestWindReading = conversions.getLatestWindReading(station);
    station.latestWindDirection = conversions.getLatestWindDirection(station);
    station.latestWindChill = conversions.getLatestWindChill(station);
    station.latestWeatherCode = conversions.getLatestWeatherCode(station);
    station.latestTempFahr = conversions.getLatestTempFahr(station);
    station.minTemp = minMax.getMinTemp(station);
    station.maxTemp = minMax.getMaxTemp(station);
    station.minPressure = minMax.getMinPressure(station);
    station.maxPressure = minMax.getMaxPressure(station);
    station.minWind = minMax.getMinWind(station);
    station.maxWind = minMax.getMaxWind(station);
    station.latestWeatherIcon = conversions.getLatestWeatherIcon(station);
    station.latestWeatherCode = conversions.getLatestWeatherCode(station);
    station.tempTrend = trends.getThreelatestTrends(station);
    station.windTrend = trends.getThreelatestTrendsWind(station);
    station.pressureTrend = trends.getThreelatestTrendsPressure(station);
    
  }
};
module.exports = updateReadings;