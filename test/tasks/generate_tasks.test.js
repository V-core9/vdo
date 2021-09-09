/*jshint esversion: 8 */
let newTask = require('../../src/helpers/tasks/new');
var faker = require('faker');

const generateTasks = ( numberToGenerate = 500 ) => {
  var updateConsoleAfter = 50;
  var sinceConsoleUpdate = 1;
  numberToGenerate++;
  for(let i = 1 ; i <= numberToGenerate ; i++ ) {
    
    newTask( faker.name.title(), faker.lorem.text(), faker.internet.url() ) ;
    
    sinceConsoleUpdate++;
    if (sinceConsoleUpdate == updateConsoleAfter) {
      console.log("Chunk of Tasks Added! Number of added: " + updateConsoleAfter );
      sinceConsoleUpdate = 0;
    }
  }
};

module.exports = generateTasks;
