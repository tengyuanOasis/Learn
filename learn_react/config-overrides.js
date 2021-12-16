// const {
// 	override,
// 	fixBabelImports,
// 	addLessLoader,
// 	addWebpackPlugin,
// 	addPostcssPlugins,
// } = require('customize-cra');

// const ProgressBarPlugin = require('progress-bar-webpack-plugin');

// const CompressionWebpackPlugin = require('compression-webpack-plugin');

// //优化压缩速度, 并行压缩
// const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

// //加快打包速度
// const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

// //测时长
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

// const smp = new SpeedMeasurePlugin();

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// // production
// const isEnvProduction = process.env.NODE_ENV === 'development';

// const addCompression = () => (config) => {
// 	if (isEnvProduction) {
// 		config.plugins.push(
// 			// gzip压缩
// 			new CompressionWebpackPlugin({
// 				test: /\.(css|js)$/,
// 				// 只处理比1kb大的资源
// 				threshold: 1024,
// 				// 只处理压缩率低于90%的文件
// 				minRatio: 0.9,
// 			})
// 		);
// 	}
// 	return config;
// };

// // 查看打包后各包大小
// const addAnalyzer = () => (config) => {
// 	if (process.env.ANALYZER) {
// 		config.plugins.push(new BundleAnalyzerPlugin());
// 	}
// 	return config;
// };

// module.exports = smp.wrap(
// 	override(
// 		fixBabelImports('import', {
// 			libraryName: 'antd',
// 			libraryDirectory: 'es',
// 			// 若修改antd主题，"css"需改为true
// 			style: 'css',
// 		}),

// 		addLessLoader({
// 			lessOptions: {
// 				javascriptEnabled: true,
// 				modifyVars: { '@primary-color': '#1DA57A' },
// 			},
// 		}),

// 		addCompression(),

// 		addAnalyzer(),

// 		addWebpackPlugin(
// 			new ProgressBarPlugin(),
// 			//start加速
// 			new CaseSensitivePathsPlugin()
// 		)
// 	)
// );
