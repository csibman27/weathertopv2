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
          icon = "yellow sun icon";
          break;
        case 200:
          icon = "yellow cloud sun icon";
          break;
        case 300:
          icon = "grey cloud icon";
          break;
        case 400:
          icon = "blue cloud sun rain icon";
          break;
        case 500:
          icon = "blue cloud rain icon";
          break;
        case 600:
          icon = "blue cloud showers heavy icon";
          break;
        case 700:
          icon = "grey snowflake icon";
          break;
        case 800:
          icon = "blue bolt icon";
          break;
        default:
          icon = "red question circle icon";
      }
    }

    return icon;
  },
  
  getWindReading(station) {
    let latestWindReading = null;
    let beaufort = "Awaiting Wind data";

    if (station.readings.length > 0) {
      latestWindReading = station.readings[0];
      for (let i = 0; i < station.readings.length; i++) {
        latestWindReading = station.readings[i];

        if (latestWindReading.windSpeed <= 1) {
          beaufort = "0 bft";
        } else if (
          latestWindReading.windSpeed > 1 &&
          latestWindReading.windSpeed <= 5
        ) {
          beaufort = "1 bft";
        } else if (
          latestWindReading.windSpeed >= 6 &&
          latestWindReading.windSpeed <= 11
        ) {
          beaufort = "2 bft";
        } else if (
          latestWindReading.windSpeed >= 12 &&
          latestWindReading.windSpeed <= 19
        ) {
          beaufort = "3 bft";
        } else if (
          latestWindReading.windSpeed >= 20 &&
          latestWindReading.windSpeed <= 28
        ) {
          beaufort = "4 bft";
        } else if (
          latestWindReading.windSpeed >= 29 &&
          latestWindReading.windSpeed <= 38
        ) {
          beaufort = "5 bft";
        } else if (
          latestWindReading.windSpeed >= 39 &&
          latestWindReading.windSpeed <= 49
        ) {
          beaufort = "6 bft";
        } else if (
          latestWindReading.windSpeed >= 50 &&
          latestWindReading.windSpeed <= 11
        ) {
          beaufort = "7 bft";
        } else if (
          latestWindReading.windSpeed >= 62 &&
          latestWindReading.windSpeed <= 74
        ) {
          beaufort = "8 bft";
        } else if (
          latestWindReading.windSpeed >= 75 &&
          latestWindReading.windSpeed <= 88
        ) {
          beaufort = "9 bft";
        } else if (
          latestWindReading.windSpeed >= 89 &&
          latestWindReading.windSpeed <= 102
        ) {
          beaufort = "10 bft";
        } else if (
          latestWindReading.windSpeed >= 103 &&
          latestWindReading.winSspeed <= 117
        ) {
          beaufort = "11 bft";
        } else {
          beaufort = "Enter a number between 1 - 117 for valid code";
        }
      }
      return beaufort;
    }
  },
  
   getWindSpeed(station) {

    let bft = "no value"; //basic value is Calm
    if (windSpeed > 0 && windSpeed <= 1) {
      bft = 0;
    } else if (windSpeed > 1 && windSpeed <= 5) {
      bft = 1;
    } else if (windSpeed > 6 && windSpeed <= 11) {
      bft = 2;
    } else if (windSpeed > 12 && windSpeed <= 19) {
      bft = 3;
    } else if (windSpeed > 20 && windSpeed <= 28) {
      bft = 4;
    } else if (windSpeed > 29 && windSpeed <= 38) {
      bft = 5;
    } else if (windSpeed > 39 && windSpeed <= 49) {
      bft = 6;
    } else if (windSpeed > 50 && windSpeed <= 61) {
      bft = 7;
    } else if (windSpeed > 62 && windSpeed <= 74) {
      bft = 8;
    } else if (windSpeed > 75 && windSpeed <= 88) {
      bft = 9;
    } else if (windSpeed > 89 && windSpeed <= 102) {
      bft = 10;
    } else if (windSpeed > 103 && windSpeed <= 117) {
      bft = 11;
    }
    return bft;
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