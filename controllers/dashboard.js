"use strict";

const logger = require("../utils/logger");
const sonatas = require('../models/station-store.js');

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "WeatherTopV2 Dashboard",
      station: stations,
    };
    logger.info('about to render', station)
    response.render("dashboard", viewData);
  },
};

module.exports = dashboard;
