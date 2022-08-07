"use strict";

const express = require("express");
const router = express.Router();

const accounts = require('./controllers/accounts.js');

const station = require('./controllers/station.js');
const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");

//Account
router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

//station
router.get('/station/:id', station.index);
router.post('/station/:id/addreading', station.addReading);

//menu
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);




module.exports = router;
