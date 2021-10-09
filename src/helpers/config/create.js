/*jshint esversion: 8 */
const v_postsConfig = require("../config");
const vSave = require("../vfs/v_save");

const createAppConfig = () => {
  vSave(v_postsConfig.dataLocation, JSON.stringify(v_postsConfig.appConfig, true, 2));
};

const createTodo = () => {
  vSave(v_postsConfig.appConfig.main_todo_file, JSON.stringify(v_postsConfig.sampleTodo, true, 2));
};

const createNotes = () => {
  vSave(v_postsConfig.appConfig.main_notes_file, JSON.stringify(v_postsConfig.sampleNote, true, 2));
};

const createConfig = () => {
  createAppConfig();
  createTodo();
  createNotes();
};


module.exports = [ createConfig, createAppConfig, createTodo, createNotes ];
