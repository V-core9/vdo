/*jshint esversion: 8 */
  const cliProgress = require('cli-progress');
let newTask = require('../../src/helpers/tasks/new');
var faker = require('faker');

const generateTasks = ( numberToGenerate = 500 ) => {


// create a new progress bar instance and use shades_classic theme
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

// start the progress bar with a total value of 200 and start value of 0
bar1.start(numberToGenerate, 0);


// stop the progress bar
  var updateConsoleAfter = Math.trunc ( numberToGenerate / 100 );
  
  for(let i = 1 ; i <= numberToGenerate ; i++ ) {
    
    newTask( faker.name.title(), faker.lorem.text(), faker.internet.url() ) ;
    
    if ((i % updateConsoleAfter) == 0) {
      // update the current value in your application..
      bar1.update(i);
    }
  }

  
  bar1.stop();
};

module.exports = generateTasks;
