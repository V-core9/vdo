/*jshint esversion: 8 */
const path = require("path");
const vReadFile = require("../vfs/v_read_file");
const vSave = require("../vfs/v_save");

const v_postsCfgSamplePath = path.join(__dirname, "../cfg_data/_v_posts.cfg.json");

const addOption = (name, data) => {
  try {
    let appConfig = vReadFile(v_postsCfgSamplePath);
    appConfig[name] = data;
    vSave(v_postsCfgSamplePath, JSON.stringify(appConfig, true, 2));
    console.log("SUCCESS: Registered New Option!");
    return true;
  }
  catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = addOption;
