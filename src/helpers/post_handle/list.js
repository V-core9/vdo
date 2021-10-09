/*jshint esversion: 8 */
const loadConfig = require("../config/load");
const v_postsConfig = loadConfig();
const vReadFile = require("../vfs/v_read_file");
//---------------
const postList = ( postName = null ) => {
  var response = false;

  switch (postName) {
    case "notes":
      response = vReadFile(v_postsConfig.main_notes_file);
      break;

    case "tasks":
      response = vReadFile(v_postsConfig.main_todo_file);
      break;
  
    default:
      console.log('ERROR: postList( postName => null ) >> postName is Required!');
      return false;
      break;
      
  }
  
  return response;

};

module.exports = postList;
