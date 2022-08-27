"use strict";

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
router.post('/authenticate', accounts.authenticate);

//dash station
router.get('/station/:id', station.index);
router.post('/dashboard/addstation', dashboard.addStation);
router.get('/dashboard/deletestation/:id', dashboard.deleteStation);

//dash reading
router.post('/station/:id/addreading', station.addReading);
router.get('/station/:id/deletereading/:readingid', station.deleteReading);

//edit reading
//router.get('/updatereading', reading.editView);
//router.post('/updatereading/:id/updatereading/:readingid', reading.update);

//edit user
router.get('/updateuser', accounts.editView);
router.post('/updateuser', accounts.updateUser);

//autoreading
router.post("/station/:id/autoreading", station.autoReading);

//menu
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);




module.exports = router;
