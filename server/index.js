'use strict';

import mongoose from 'mongoose';
import serverConfig from './config';
var morgan = require('morgan')

const express = require('express'),
	bodyParser = require('body-parser'),
	http = require('http'),
	path = require('path');

const routes = require('./routes');
const app = express();

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

});

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
if (process.env.NODE_ENV !== 'production') {
	const webpack = require('webpack');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackConfig = require('../webpack.dev.config.js');
	const compiler = webpack(webpackConfig);

	app.use(webpackDevMiddleware(compiler, {
		hot: true,
		inline: true,
		filename: 'bundle.js',
		publicPath: '/',
		stats: {
			colors: true
		},
		historyApiFallback: true
	}));
}

app.use('/', routes);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(serverConfig.port, () => console.log('App listening on port ' + serverConfig.port));
