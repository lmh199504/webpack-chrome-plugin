const path = require('path')
const {
	VueLoaderPlugin
} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")

const options = {
	mode: process.env.NODE_ENV || "development",
	entry: {
		popup: path.join(__dirname, "src/popup/popup.js"),
		background: path.join(__dirname, "src/background/background.js"),
		options: path.join(__dirname, "src/options/options.js"),
		newTab: path.join(__dirname, "src/newTab/newTab.js"),
		content_scripts: path.join(__dirname, "src/content_scripts/content_scripts.js")
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].bundle.js",
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: 'babel-loader'
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		}]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			//复制 './src/index.html'文件，并自动引入打包输出的所有资源（js/css）
			template: './src/popup/popup.html',
			filename: 'popup.html',
			chunks: ['popup'],
			cache: false
		}),
		new HtmlWebpackPlugin({
			//复制 './src/index.html'文件，并自动引入打包输出的所有资源（js/css）
			template: './src/background/background.html',
			filename: 'background.html',
			chunks: ['background'],
			cache: false
		}),
		new HtmlWebpackPlugin({
			//复制 './src/index.html'文件，并自动引入打包输出的所有资源（js/css）
			template: './src/options/options.html',
			filename: 'options.html',
			chunks: ['options'],
			cache: false
		}),
		new HtmlWebpackPlugin({
			//复制 './src/index.html'文件，并自动引入打包输出的所有资源（js/css）
			template: './src/newTab/newTab.html',
			filename: 'newTab.html',
			chunks: ['newTab'],
			cache: false
		}),
		new CopyWebpackPlugin({
			patterns: [{
				from: "src/public",
				to: path.join(__dirname, "build/public"),
				force: true
			}]
		}),
		// 配置文件
		new CopyWebpackPlugin({
			patterns: [{
				from: "manifest.json",
				to: path.join(__dirname, "build"),
				force: true
			}]
		})
	]
}

module.exports = options
