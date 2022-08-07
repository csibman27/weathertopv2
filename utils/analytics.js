"use strict";

const conversions = require("../utils/conversions");
const minMax = require("../utils/minMax");
const stationStore = require("../models/station-store");


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

const minMax = {
  getMinTemp(station) {
    if (station.readings.length > 0) {
      var minTempReading = station.readings[0].temp;
      for (var i = 0; i < station.readings.length; i++) {
        console.log(station.readings[i].temp);
        if (station.readings[i].temp <= minTempReading) {
          minTempReading = station.readings[i].temp;
        }
      }
      return minTempReading;
    }
  },

  getMaxTemp(station) {
    if (station.readings.length > 0) {
      var maxTempReading = station.readings[0].temp;
      for (var i = 0; i < station.readings.length; i++) {
        console.log(station.readings[i].temp);
        if (station.readings[i].temp >= maxTempReading) {
          maxTempReading = station.readings[i].temp;
        }
      }
      return maxTempReading;
    }
  },
};

module.exports = analytics;
module.exports = minandMax;