"use strict";

const conversions = require("../utils/conversions");
const minMax = require("../utils/minMax");


const analytics = {
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
module.exports = analytics;