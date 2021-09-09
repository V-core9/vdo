/*jshint esversion: 8 */
let newTask = require('../../src/helpers/tasks/new');
var faker = require('faker');

const generateTasks = ( numberToGenerate = 500 ) => {
 for(let i = 0 ; i < numberToGenerate ; i++ ) {
   newTask( faker.name.title(), faker.lorem.text(), faker.internet.url() ) ;
 }
};

module.exports = generateTasks;
