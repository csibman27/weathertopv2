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
  
   getWindDirection(station) {
    let compass = "invalid Direction";
    let latestWindDirection = null;
    if (station.readings.length > 0) {
      latestWindDirection = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        latestWindDirection = station.readings[i];
      }

      if (
        (latestWindDirection.windDirection >= 348.75 &&
          latestWindDirection.windDirection <= 360) ||
        (latestWindDirection.windDirection >= 0 &&
          latestWindDirection.windDirection <= 11.25)
      ) {
        compass = "North";
      } else if (
        latestWindDirection.windDirection >= 11.25 &&
        latestWindDirection.windDirection <= 33.75
      ) {
        compass = "North North East";
      } else if (
        latestWindDirection.windDirection >= 33.75 &&
        latestWindDirection.windDirection <= 56.25
      ) {
        compass = "North East";
      } else if (
        latestWindDirection.windDirection >= 56.25 &&
        latestWindDirection.windDirection <= 78.75
      ) {
        compass = "East North East";
      } else if (
        latestWindDirection.windDirection >= 78.25 &&
        latestWindDirection.windDirection <= 101.25
      ) {
        compass = "East";
      } else if (
        latestWindDirection.windDirection >= 101.25 &&
        latestWindDirection.windDirection <= 123.75
      ) {
        compass = "East South East";
      } else if (
        latestWindDirection.windDirection >= 123.75 &&
        latestWindDirection.windDirection <= 146.25
      ) {
        compass = "South East";
      } else if (
        latestWindDirection.windDirection >= 146.25 &&
        latestWindDirection.windDirection <= 168.75
      ) {
        compass = "South South East";
      } else if (
        latestWindDirection.windDirection >= 168.75 &&
        latestWindDirection.windDirection <= 191.25
      ) {
        compass = "South";
      } else if (
        latestWindDirection.windDirection >= 191.25 &&
        latestWindDirection.windDirection <= 213.75
      ) {
        compass = "South South West";
      } else if (
        latestWindDirection.windDirection >= 213.75 &&
        latestWindDirection.windDirection <= 236.25
      ) {
        compass = "South West";
      } else if (
        latestWindDirection.windDirection >= 236.25 &&
        latestWindDirection.windDirection <= 258.75
      ) {
        compass = "West South West";
      } else if (
        latestWindDirection.windDirection >= 258.75 &&
        latestWindDirection.windDirection <= 281.25
      ) {
        compass = "West";
      } else if (
        latestWindDirection.windDirection >= 281.25 &&
        latestWindDirection.windDirection <= 303.75
      ) {
        compass = "West North West";
      } else if (
        latestWindDirection.windDirection >= 303.75 &&
        latestWindDirection.windDirection <= 326.25
      ) {
        compass = "North West";
      } else if (
        latestWindDirection.windDirection >= 236.25 &&
        latestWindDirection.windDirection <= 348.75
      ) {
        compass = "North North West";
      }
    }
    return compass;
  },
  
  getWindChill(station) {
    let latestwindChillReading = null;
    let latestWindChill = 0;
    if (station.readings.length > 0) {
      latestwindChillReading = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        latestwindChillReading = station.readings[i];
        latestWindChill = Math.round(
          13.12 +
            0.6215 * latestwindChillReading.temp -
            11.37 * Math.pow(latestwindChillReading.windSpeed, 0.16) +
            0.3965 *
              latestwindChillReading.temp *
              Math.pow(latestwindChillReading.windSpeed, 0.16)
        );
      }
    }
    return latestWindChill;
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