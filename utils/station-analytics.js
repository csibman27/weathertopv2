"use strict";

const data = require("../controllers/station");

const stationAnalytics = {
  getTemp(station) {
    let latestTemp = null;

    if (station.readings.length > 0) {
      latestTemp = station.readings[0].temp;
      for (let i = 1; i < station.readings.length; i++) {
        latestTemp = station.readings[i].temp;
      }
    }
    return latestTemp;
  },

  getPressure(station) {
    let latestPressure = null;
    if (station.readings.length > 0) {
      latestPressure = station.readings[0].pressure;
      for (let i = 1; i < station.readings.length; i++) {
        latestPressure = station.readings[i].pressure;
      }
    }
    return latestPressure;
  },
  
  getWeatherCode(station) {
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
          textCode = "Other then set weathercodes are not recognised";
      }
    }

    return textCode;
  },
  
  getWeatherIcon(station) {
    let weatherCode = null;
    let icon = "Awaiting code entry";

    if (station.readings.length > 0) {
      weatherCode = station.readings[0].code;
      for (let i = 0; i < station.readings.length; i++) {
        weatherCode = Number(station.readings[i].code);
      }

      switch (weatherCode) {
        case 100:
          icon = "sun icon";
          break;
        case 200:
          icon = "cloud sun icon";
          break;
        case 300:
          icon = "cloud icon";
          break;
        case 400:
          icon = "cloud sun rain icon";
          break;
        case 500:
          icon = "cloud rain icon";
          break;
        case 600:
          icon = "cloud showers heavy icon";
          break;
        case 700:
          icon = "snowflake icon";
          break;
        case 800:
          icon = "bolt icon";
          break;
        default:
          icon = "question circle icon";
      }
    }

    return icon;
  },
  
  getNumber(station) {
    return 12
  },
  
  getTempsInCelsius(station) {
    let tempC = station.readings.temp;
    return tempC;
  },
  
  getTempsInFahrenheit(station) {
    let tempF = null;
    if (station.readings.length > 0) {
      tempF = station.readings[0].temp;
      for (let i = 1; i < station.readings.length; i++) {
        tempF = (station.readings[i].temp * 9) / 5 + 32;
      }
    }
    return tempF;
  },
};
module.exports = stationAnalytics;