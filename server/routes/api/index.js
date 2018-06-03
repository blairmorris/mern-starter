'use strict';
const fakeData = require('./fakeData.json');
const express = require('express');

import * as PersonController from '../../controllers/person.controller';

let router = express.Router();

router.get('/', (req, res) => {
	res.sendStatus(200);
});

router.get('/names', (req, res) => {
	res.json(fakeData.names);
});

router.route('/person').post(PersonController.addPerson);

router.route('/person').get(PersonController.getPersons);

module.exports = router;
