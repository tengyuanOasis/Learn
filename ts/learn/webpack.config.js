/** @format */

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.ts',
		generic: './src/generic.ts'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					},
					'ts-loader'
				],
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	plugins: [
		new CleanWebpackPlugin(),
		new htmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),
		new htmlWebpackPlugin({
			template: './src/index.html',
			filename: 'generic.html'
		})
	]
};
