/*jshint esversion: 8 */
const taskList = () => {
  const loadConfig = require("../config/load");
  const vdoConfig = loadConfig();
  const vReadFile = require("../vfs/v_read_file");
  let taskList = vReadFile(vdoConfig.main_todo_file);
  return taskList;
};

module.exports = taskList;
