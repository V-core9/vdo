/*jshint esversion: 8 */
const loadConfig = require('../../src/helpers/config/load');

var appConfig = loadConfig();

console.log(appConfig);
