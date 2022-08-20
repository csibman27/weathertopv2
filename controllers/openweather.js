"use strict";

const openWeather = require("../utils/openweather");
const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const uuid = require("uuid");


async openWeather(request, response) {
    try {
      const stationId = request.params.id;
      const station = stationStore.getStation(stationId);
      let report = {};
      const lat = station.latitude;
      const lng = station.longitude;
      const requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=6636e8a011274b26236f823786718c14`;
      const result = await axios.get(requestUrl);
      if (result.status == 200) {
        const reading = result.data.current;

        report.code = reading.weather[0].id;
        report.temp = reading.temp;
        report.windSpeed = reading.wind_speed;
        report.pressure = reading.pressure;
        report.windDirection = reading.wind_deg;
        report.timestamp = Date();
      }
      stationStore.addAutoReading(stationId, report);
      response.redirect("/station/" + stationId);
      console.log(report);
    } catch (error) {
      console.error(error);
    },
};


module.exports = openWeather;