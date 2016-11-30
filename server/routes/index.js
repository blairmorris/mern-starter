'use strict';

const express = require('express'),
	apiRoutes = require('./api');

let router = express.Router();

router.use('/api', apiRoutes);
router.get('/api/*', (req, res) => {
	res.sendStatus(404);
});

module.exports = router;
