/*jshint esversion: 8 */
//---------------
const notesList = require('./list');

const totalNumber = () => {
  try {
    var helperNotesList = notesList();
    var len = helperNotesList.length;
    return len;
  } catch (err){
    console.log(err);
    return err;
  }
};

module.exports = totalNumber;
