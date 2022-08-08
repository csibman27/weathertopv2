/**
 * The StationAnalytics utils class contains the latest Reading calculations for this application.
 *
 * @author Sheila Kirwan
 *
 */

//const conversions = require("../utils/conversions");
//const minMax = require("../utils/minMax");

("use strict");

const stationAnalytics = {
  getLatestReadingTemp(station) {
    let latestReadingTemp = null;

    if (station.readings.length > 0) {
      latestReadingTemp = station.readings[0].temp;
      for (let i = 1; i < station.readings.length; i++) {
        latestReadingTemp = station.readings[i].temp;
      }
    }
    return latestReadingTemp;
  },

  getLatestReadingPressure(station) {
    let latestReadingPressure = null;
    if (station.readings.length > 0) {
      latestReadingPressure = station.readings[0].pressure;
      for (let i = 1; i < station.readings.length; i++) {
        latestReadingPressure = station.readings[i].pressure;
      }
    }
    return latestReadingPressure;
  }
};
module.exports = stationAnalytics;
