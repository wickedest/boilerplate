const path = require('path');

module.exports = {
	mode: 'development',

	module: {
		rules: [{
			include: [
				path.resolve(__dirname, 'src')
			],
			test: /\.js$/
		}]
	},

	resolve: {
		extensions: ['.js']
	},

	plugins: [],

	entry: {
		app: [
			'./src/hello'
		]
	},

	output: {
		filename: '[name].js'
	},

	externals: []
}
