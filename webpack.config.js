const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, './assets/scripts'),
	entry: {
		main: './main.js',
	},
	output: {
		path: path.resolve(__dirname, './static/scripts'),
		filename: '[name].js',
	}
};
