/*jshint esversion: 8 */
//---------------
const taskList = require('./list');

const totalNumber = () => {
  try {
    var helperTaskList = taskList();
    var len = helperTaskList.length;
    return len;
  } catch (err){
    console.log(err);
    return err;
  }
};

module.exports = totalNumber;
