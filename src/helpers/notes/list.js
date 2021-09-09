const listNotes = () => {
  const loadConfig = require("../config/load");
  const vdoConfig = loadConfig();
  const vReadFile = require("../vfs/v_read_file");

  let notesList = vReadFile(vdoConfig.main_todo_file);
  
  return notesList;

}

module.exports = listNotes;
