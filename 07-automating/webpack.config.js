const { join, resolve } = require("node:path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: "./src/app.ts",
	resolve: {
		extensions: [".ts", ".tsx"]
	},
	module: {
		rules: [
			{
				test: /.tsx?$/,
				use: "ts-loader"
			}
		]
	},
	output: {
		filename: "bundle.js",
		path: join(__dirname, "dist"),
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(__dirname, "src", "index.html")
		})
	]
}