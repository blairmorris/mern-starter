const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require ('./webpack.config');

module.exports = merge(baseConfig, {
	debug: true,
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			__DEV__: true,
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		})
	]
});
