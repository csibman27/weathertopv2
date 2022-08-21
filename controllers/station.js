"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const uuid = require("uuid");
const currentDate = new Date();
const stationAnalytics = require("../utils/station-analytics");
const axios = require("axios");


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
      windSpeed: stationAnalytics.getWindReading(station),
      windDirection: stationAnalytics.getWindDirection(station),
      windChill: stationAnalytics.getWindChill(station),
      minTempInCelsius: stationAnalytics.getMinTemp(station),
      maxTempInCelsius: stationAnalytics.getMaxTemp(station),
      minPressure: stationAnalytics.getMinPressure(station),
      maxPressure: stationAnalytics.getMaxPressure(station)
      
      
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
  },
  
  async autoReading(request, response) {
    try {
      const stationId = request.params.id;
      const station = stationStore.getStation(stationId);
      let report = {};
      const lat = station.latitude;
      const lng = station.longitude;
      const requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=6636e8a011274b26236f823786718c14`;
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
    }
  },

  deleteAutoReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(
      `Deleting Auto Reading ${readingId} from Station ${stationId}`
    );
    stationStore.removeReading(stationId, readingId);
    response.redirect("/station/" + stationId);
  }
};

module.exports = station;