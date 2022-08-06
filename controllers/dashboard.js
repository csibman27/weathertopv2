"use strict";

const accounts = require("./accounts.js");
const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const uuid = require("uuid");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const allstations = stationStore.getAllStations(); // changed getAllStations to getUserStations
    const stations = allstations.sort();
    
    const viewData = {
      title: "Station Dashboard",
      stations: stationStore.getUserStations(loggedInUser.id),
    };
      

  deletePlaylist(request, response) {
    const playlistId = request.params.id;
    logger.debug(`Deleting Playlist ${playlistId}`);
    playlistStore.removePlaylist(playlistId);
    response.redirect("/dashboard");
  },

  addPlaylist(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newPlayList = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      title: request.body.title,
      songs: []
    };
    logger.debug("Creating a new Playlist", newPlayList);
    playlistStore.addPlaylist(newPlayList);
    response.redirect("/dashboard");
  }
};

module.exports = dashboard;
