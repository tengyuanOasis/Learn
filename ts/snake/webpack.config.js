/** @format */

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	entry: {
		index: './src/index.ts'
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
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// 将 JS 字符串生成为 style 节点

					MiniCssExtractPlugin.loader,
					,
					// 将 CSS 转化成 CommonJS 模块
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										'postcss-preset-env',
										{
											autoprefixer: true,
											stage: 3,
											browsers: ['last 2 versions', 'ie >= 9']
										}
									]
								]
							}
						}
					},
					// 将 Sass 编译成 CSS
					'sass-loader'
				]
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
		new MiniCssExtractPlugin({
			filename: './index.css'
		})
	]
};
