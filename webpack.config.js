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
		content_scripts: path.join(__dirname, "src/content_scripts/content_scripts.js"),
		devtools: path.join(__dirname, "src/devtools/devtools.js")
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].bundle.js",
		publicPath: '/'
	},
	module: {
		rules: [{
				test: /\.(css|scss|less)$/,
				use: [{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
					{
						loader: "less-loader"
					}
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}, {
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				//处理图片资源 问题：不能处理html 中 img图片
				test: /.(jpg|png|gif|jpeg|svg)$/,
				//下载url-loader file-loader
				// use:[
				// 	'url-loader'
				// ],
				loader: 'url-loader',
				options: {
					//图片大小小于8kb，就会被base64处理
					//优点：减少请求数量（减轻服务器压力）
					//缺点：图片体积会更大
					limit: 8 * 1024,
					//问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonJS
					//解析时会出现问题：[object Module]
					//解决：关闭url-loader的es6模块化，使用commonJS解析
					esModule: false,
					//重命名图片 hash值前10加原扩展名
					name: '[hash:10].[ext]'
				}
			},
			{
				// 打包其他资源
				test: /.(eot|otf|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: '[hash:10].[ext]'
				}

			}
		]
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
			template: './src/devtools/devtools.html',
			filename: 'devtools.html',
			chunks: ['devtools'],
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
	],
	resolve: {
		alias: {
			'@newTab': path.resolve(__dirname, 'src/newTab'),
			'@': path.resolve(__dirname, 'src')
		}
	}
}

module.exports = options
