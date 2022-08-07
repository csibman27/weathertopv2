"use strict";

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

  getMinPressure(station) {
    if (station.readings.length > 0) {
      var minTempPressure = station.readings[0].pressure;
      for (var i = 0; i < station.readings.length; i++) {
        console.log(station.readings[i].pressure);
        if (station.readings[i].pressure <= minTempPressure) {
          minTempPressure = station.readings[i].pressure;
        }
      }
      return minTempPressure;
    }
  },

  getMaxPressure(station) {
    if (station.readings.length > 0) {
      var maxTempPressure = station.readings[0].pressure;
      for (var i = 0; i < station.readings.length; i++) {
        console.log(station.readings[i].pressure);
        if (station.readings[i].pressure >= maxTempPressure) {
          maxTempPressure = station.readings[i].pressure;
        }
      }
      return maxTempPressure;
    }
  },

  getMinWind(station) {
    if (station.readings.length > 0) {
      var minWind = station.readings[0].windSpeed;
      for (var i = 0; i < station.readings.length; i++) {
        console.log(station.readings[i].windSpeed);
        if (station.readings[i].windSpeed <= minWind) {
          minWind = station.readings[i].windSpeed;
        }
      }
      return minWind;
    }
  },

  getMaxWind(station) {
    if (station.readings.length > 0) {
      var maxWind = station.readings[0].windSpeed;
      for (var i = 0; i < station.readings.length; i++) {
        console.log(station.readings[i].windSpeed);
        if (station.readings[i].windSpeed >= maxWind) {
          maxWind = station.readings[i].windSpeed;
        }
      }
      return maxWind;
    }
  }
};
module.exports = minMax;
