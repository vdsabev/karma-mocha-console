'use strict';

module.exports = function (config) {
  config.set({
    autoWatch: true,
    basePath: process.cwd(),
    browsers: ['PhantomJS'],
    colors: true,
    concurrency: Infinity,
    files: [
      'node_modules/chai/chai.js',
      'node_modules/mocha/mocha.js',
      'node_modules/mocha/mocha.css',

      'test/setup.js',
      'test/tests.js',
      'test/run.js'
    ],
    frameworks: ['chai', 'mocha'],
    logLevel: config.LOG_DEBUG,
    port: 9876,
    plugins: ['karma-*'],
    reporters: ['progress'],
    singleRun: false
  });
};
