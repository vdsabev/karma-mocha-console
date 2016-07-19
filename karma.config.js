'use strict';

module.exports = function (config) {
  config.set({
    autoWatch: true,
    browsers: ['PhantomJS'],
    client: {
      mocha: {
        reporter: 'html'
      }
    },
    colors: true,
    concurrency: Infinity,
    files: [
      'test/setup.js',
      'test/**/*.js'
    ],
    frameworks: ['chai', 'mocha'],
    logLevel: config.LOG_INFO,
    port: 9876,
    singleRun: false
  });
};
