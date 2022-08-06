"use strict";

const express = require("express");
const router = express.Router();

const accounts = require('./controllers/accounts.js');

const station = require('./controllers/station.js');
const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");
//const request = require("./utils/request.js");

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get('/station/:id', station.index);
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);
//router.get('/station/:id/deletereading/:readingid', station.deleteReading);
//router.get('/dashboard/deletestation/:id', dashboard.deleteStation);
router.post('/station/:id/addreading', station.addReading);
//router.post('/station/:id/autoreading', station.autoReading);
//router.post('/dashboard/addstation', dashboard.addStation);


module.exports = router;
