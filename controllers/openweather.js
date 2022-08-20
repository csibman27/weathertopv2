"use strict";

const openWeather = require("../utils/openweather");
const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const uuid = require("uuid");

const openWeather = {
  index(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    logger.debug("Station id = ", stationId);
    const viewData = {
    const requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=6636e8a011274b26236f823786718c14`;
  }
};

module.exports = openWeather;