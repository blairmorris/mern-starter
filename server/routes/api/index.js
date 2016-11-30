'use strict';
const fakeData = require('./fakeData.json');
const express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
	res.sendStatus(200);
});

router.get('/names', (req, res) => {
	res.json(fakeData.names);
});

module.exports = router;
