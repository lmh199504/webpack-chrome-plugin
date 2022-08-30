// 正式打包
process.env.NODE_ENV = "production"

const webpack = require("webpack");
const shell = require("shelljs");
const config = require("../webpack.config");

config.mode = "production"
shell.rm('-rf', 'build')
webpack(config, function(err) {
	if (err) throw err;
})