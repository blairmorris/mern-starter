const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.join(__dirname, 'client'),
	entry: './index.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel'],
				include: path.join(__dirname, 'client')
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.(le|c)ss$/,
				loader: 'style!css!less',
				include: path.join(__dirname, 'client')
			}
		]
	},
	postcss: () => [require('postcss-cssnext')]
};
