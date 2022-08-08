
const stationAnalytics = require("../utils/station-Analytics");


("use strict");

const updateReadings = {
  getUpdateReading(station) {
    station.latestReadingTemp = stationAnalytics.getLatestReadingTemp(station);
    station.latestReadingPressure = stationAnalytics.getLatestReadingPressure(station);
    
  }
};
module.exports = updateReadings;