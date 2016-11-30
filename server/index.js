'use strict';

const express = require('express'),
	bodyParser = require('body-parser'),
	http = require('http'),
	path = require('path');

const routes = require('./routes');
const app = express();
const port = process.env.PORT || 8081;

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

app.listen(port, () => console.log('App listening on port ' + port));
