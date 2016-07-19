'use strict';

module.exports = function (config) {
  config.set({
    autoWatch: true,
    browsers: ['PhantomJS'],
    colors: true,
    concurrency: Infinity,
    files: [
      'node_modules/chai/chai.js',
      'node_modules/mocha/mocha.js',

      'test/setup.js',
      'test/tests.js',
      'test/run.js'
    ],
    frameworks: ['chai', 'mocha'],
    logLevel: config.LOG_INFO,
    port: 9876,
    reporters: ['progress'],
    singleRun: false
  });
};
