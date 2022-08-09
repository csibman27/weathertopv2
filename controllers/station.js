"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const uuid = require("uuid");
const currentDate = new Date();
const stationAnalytics = require("../utils/station-analytics");


const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();
const today = new Date();
const time = (today.getHours() + 1) + ":" + today.getMinutes() + ":" + today.getSeconds();

const dateString = currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth + " " + "T" + " " + time;

const station = {
  index(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    logger.debug("Station id = ", stationId);
    const viewData = {
      name: station.name,
      station: stationStore.getStation(stationId),
      latitude: station.latitude,
      longitude: station.longitude,
      weather: stationAnalytics.getWeatherCode(station),
      tempInCelsius: stationAnalytics.getTemp(station),
      tempInFahrenheit: stationAnalytics.getTempsInFahrenheit(station),
      pressure: stationAnalytics.getPressure(station),
      weatherIcon: stationAnalytics.getWeatherIcon(station),
      windSpeed: stationAnalytics.getWindReading(station)
      
      
    };
    response.render("station", viewData);
  },

  deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(`Deleting Reading ${readingId} from Station ${stationId}`);
    stationStore.removeReading(stationId, readingId);
    response.redirect("/station/" + stationId);
  },

  addReading(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const newReading = {
      id: uuid.v1(),
      code: request.body.code,
      temp: request.body.temp,
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure,
      timestamp: dateString,
      
    };
    logger.debug("New Reading = ", newReading);
    
    stationStore.addReading(stationId, newReading);
    response.redirect("/station/" + stationId);
  }
};

module.exports = station;