"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const uuid = require("uuid");
const currentDate = new Date();

const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();


const dateString = currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth + " " + "T" + ;

const station = {
  index(request, response) {
    const stationId = request.params.id;
    logger.debug("Station id = ", stationId);
    const viewData = {
      title: "Station",
      station: stationStore.getStation(stationId)
      
      
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
      pressure: request.body.pressure,
      timestamp: dateString,
      
      
      
    };
    logger.debug("New Reading = ", newReading);
    
    stationStore.addReading(stationId, newReading);
    response.redirect("/station/" + stationId);
  }
};

module.exports = station;