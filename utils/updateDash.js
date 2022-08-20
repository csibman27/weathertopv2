const stationAnalytics = require("../utils/station-analytics");

("use strict");

const updateDash = {
  getUpdateDash(station) {
    station.weather = stationAnalytics.getWeatherCode(station);
    
  }
};

module.exports = updateDash;