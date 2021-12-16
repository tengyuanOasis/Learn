const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
    // 虚拟打包路径，不会生成真实文件夹，存在于内存中
		publicPath: "dist",
		filename: "bundle.js"
	},
	devServer: {
		port: 9000,
		contentBase: "static"
	}
};
