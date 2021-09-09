/*jshint esversion: 8 */
const vdoConfig = require("../config");
const vSave = require("../vfs/v_save");

const createConfig = () => {
  vSave(vdoConfig.dataLocation, JSON.stringify(vdoConfig.appConfig, true, 2));

  vSave(vdoConfig.appConfig.main_todo_file, JSON.stringify(vdoConfig.sampleTodo, true, 2));

  vSave(vdoConfig.appConfig.main_notes_file, JSON.stringify(vdoConfig.sampleNote, true, 2));
};

module.exports = createConfig;
