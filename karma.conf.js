const path = require('path');
const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	config.set({
		restartOnFileChange: true,
        logLevel: config.LOG_DEBUG,
		colors: true,
		singleRun: true,

		browsers: [ 'MyHeadlessChrome' ],

		customLaunchers: {
			MyHeadlessChrome: {
				base: 'ChromeHeadless',
				flags: [ '--no-sandbox' ]
			}
		},

		frameworks: [
			'webpack',
			'mocha',
			'chai'
		],

		plugins: [
			'karma-webpack',
			'karma-mocha',
			'karma-chai',
			'karma-chrome-launcher',
			'karma-sourcemap-loader',
			'karma-mocha-reporter',
			'karma-coverage-istanbul-reporter',
            'karma-coverage-istanbul-instrumenter'
		],

		files: [
            'test/*.spec.js',
			'src/*.js'
		],

		preprocessors: {
			'test/*.spec.js': [ 'webpack' ],
			'src/*.js': [ 'webpack', 'sourcemap', 'karma-coverage-istanbul-instrumenter' ]
		},

		reporters: [ 'mocha', 'coverage-istanbul' ],

		coverageIstanbulReporter: {
			reports: [ 'html', 'lcov', 'text-summary' ],
			dir: path.join(__dirname, 'coverage'),
			fixWebpackSourcePaths: false,
			esModules: false,
			// enforce percentage thresholds
			// anything under these percentages will cause karma to fail
			// with an exit code of 1 if not running in watch mode
			thresholds: {
					// set to `true` to not fail the test command when thresholds are not met
					emitWarning: true,
					global: { // thresholds for all files
							statements: 94.09,
							branches: 89.92,
							functions: 92.67,
							lines: 94.33
					}
			}
		},

        webpack: webpackConfig
	});
}
