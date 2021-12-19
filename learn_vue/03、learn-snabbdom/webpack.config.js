const path = require("path");

module.exports = {
	entry: {
		app: ["@babel/polyfill", "./src/index.js"]
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "app.bundle.js"
	},
	devServer: {
		hot: true,
    open: true,
		compress: false,
		port: 9999
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ["@babel/preset-env"]
				}
			}
		]
	}
};
