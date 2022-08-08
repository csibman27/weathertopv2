"use strict";

const conversions = {
  getLatestTempFahr(station) {
    let latestReadingTempFahr = null;
    if (station.readings.length > 0) {
      latestReadingTempFahr = station.readings[0].temp;
      for (let i = 1; i < station.readings.length; i++) {
        latestReadingTempFahr = (station.readings[i].temp * 9) / 5 + 32;
      }
    }
    return latestReadingTempFahr;
  },
  
  
  getLatestWeatherIcon(station) {
    let latestWeatherCode = null;
    let icon = "Awaiting code entry";

    if (station.readings.length > 0) {
      latestWeatherCode = station.readings[0].code;
      for (let i = 0; i < station.readings.length; i++) {
        latestWeatherCode = Number(station.readings[i].code);
      }

      switch (latestWeatherCode) {
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



  getLatestWindReading(station) {
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
  
  //windspeed calculation method (extra)
   geWindSpeed(station) {

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
  }

  getLatestWindDirection(station) {
    let convertToDirection = "invalid Direction";
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
        convertToDirection = "North";
      } else if (
        latestWindDirection.windDirection >= 11.25 &&
        latestWindDirection.windDirection <= 33.75
      ) {
        convertToDirection = "North North East";
      } else if (
        latestWindDirection.windDirection >= 33.75 &&
        latestWindDirection.windDirection <= 56.25
      ) {
        convertToDirection = "North East";
      } else if (
        latestWindDirection.windDirection >= 56.25 &&
        latestWindDirection.windDirection <= 78.75
      ) {
        convertToDirection = "East North East";
      } else if (
        latestWindDirection.windDirection >= 78.25 &&
        latestWindDirection.windDirection <= 101.25
      ) {
        convertToDirection = "East";
      } else if (
        latestWindDirection.windDirection >= 101.25 &&
        latestWindDirection.windDirection <= 123.75
      ) {
        convertToDirection = "East South East";
      } else if (
        latestWindDirection.windDirection >= 123.75 &&
        latestWindDirection.windDirection <= 146.25
      ) {
        convertToDirection = "South East";
      } else if (
        latestWindDirection.windDirection >= 146.25 &&
        latestWindDirection.windDirection <= 168.75
      ) {
        convertToDirection = "South South East";
      } else if (
        latestWindDirection.windDirection >= 168.75 &&
        latestWindDirection.windDirection <= 191.25
      ) {
        convertToDirection = "South";
      } else if (
        latestWindDirection.windDirection >= 191.25 &&
        latestWindDirection.windDirection <= 213.75
      ) {
        convertToDirection = "South South West";
      } else if (
        latestWindDirection.windDirection >= 213.75 &&
        latestWindDirection.windDirection <= 236.25
      ) {
        convertToDirection = "South West";
      } else if (
        latestWindDirection.windDirection >= 236.25 &&
        latestWindDirection.windDirection <= 258.75
      ) {
        convertToDirection = "West South West";
      } else if (
        latestWindDirection.windDirection >= 258.75 &&
        latestWindDirection.windDirection <= 281.25
      ) {
        convertToDirection = "West";
      } else if (
        latestWindDirection.windDirection >= 281.25 &&
        latestWindDirection.windDirection <= 303.75
      ) {
        convertToDirection = "West North West";
      } else if (
        latestWindDirection.windDirection >= 303.75 &&
        latestWindDirection.windDirection <= 326.25
      ) {
        convertToDirection = "North West";
      } else if (
        latestWindDirection.windDirection >= 236.25 &&
        latestWindDirection.windDirection <= 348.75
      ) {
        convertToDirection = "North North West";
      }
    }
    return convertToDirection;
  },

  getLatestWindChill(station) {
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
  }
};
module.exports = conversions;