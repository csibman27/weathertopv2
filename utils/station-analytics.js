"use strict";

const data = require("../controllers/station");

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
  },
  
  getLatestWeatherCode(station) {
    let latestWeatherCode = null;
    let textCode = "Awaiting code entry";

    if (station.readings.length > 0) {
      latestWeatherCode = station.readings[0].code;
      for (let i = 0; i < station.readings.length; i++) {
        latestWeatherCode = Number(station.readings[i].code);
      }

      switch (latestWeatherCode) {
        case 100:
          textCode = "clear";
          break;
        case 200:
          textCode = "partial Clouds";
          break;
        case 300:
          textCode = "cloudy";
          break;
        case 400:
          textCode = "light showers";
          break;
        case 500:
          textCode = "heavy showers";
          break;
        case 600:
          textCode = "rain";
          break;
        case 700:
          textCode = "snow";
          break;
        case 800:
          textCode = "thunder";
          break;
        default:
          textCode = "Automated weathercodes are not recognised";
      }
    }

    return textCode;
  },
  
  getNumber(station) {
    return 12
  },
  
   getTempsInFahrenheit(station) {

    let tempF = (tempC * 9 / 5) + 32;
    return tempF;
  }
};
module.exports = stationAnalytics;