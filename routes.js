router.get('/openweather/:id/autoReading"use strict";

const express = require("express");
const router = express.Router();

const accounts = require('./controllers/accounts.js');

const station = require('./controllers/station.js');
const dashboard = require('./controllers/dashboard.js');
const about = require("./controllers/about.js");

//Account
router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/router.post('/openWeatherautaccounts openWeatherthenticate);

router.get('/openweather/:id/autoReading', openweather.autoReading);

//dash station
router.get('/station/:id', station.index);
router.post('/dashboard/addstation', dashboard.addStation);
router.get('/dashboard/deletestation/:id', dashboard.deleteStation);

//dash reading
router.post('/station/:id/addreading', station.addReading);
router.get('/station/:id/deletereading/:readingid', station.deleteReading);

//edit reading
//router.get('/reading/:id/editreading/:readingid', reading.index);
//router.post('/reading/:id/updatereading/:readingid', reading.update);

//menu
router.get('/dashboard', daut.index);




module.exports = router;
