/*jshint esversion: 8 */
const postList = require('./list');
const vSave = require("../vfs/v_save");
const { prompt } = require('enquirer');
const { v4: uuidv4 } = require('uuid');
const loadConfig = require("../config/load");
const vdoConfig = loadConfig();

var helperList = false;

// <_i_> => returns new Task  
const makeTask = (title = null, description = null, ref_url = '#') => {
  return {
    id: uuidv4(),
    title: title,
    description: description,
    ref_url: ref_url,
    timestamps: {
      born: Date.now(),
      updated: Date.now(),
      done: null,
    },
    status: 'draft',
  };
};

// <_i_> => returns new Note  
// :_?_: => Info: Uses [_ makeTask() _] to create base than extends that with few things
const makeNote = (title = null, description = null, ref_url = '#', shortDescription = null, content = null) => {
  var base = makeTask(title, description, ref_url);
  base.shortDescription = shortDescription;
  base.content = content;

  return base;
};


const promptTitle = (postType = null) => {
  switch (postType) {
    case 'tasks':
      var titlePromptTask = await prompt({type: 'input',name: 'newTaskTitle',message: 'Title of the new TASK ?'});
      return titlePromptTask.newTaskTitle;
      break;

    case 'notes':
      var titlePromptNote = await prompt({type: 'input',name: 'newNoteTitle',message: 'Title of the new NOTE ?'});
      return titlePromptNote.newNoteTitle;
      break;
  
    default:
      console.log("ERROR: Missing or Unknown < postType >");
      return false;
      break;
  }
};

const titleCheck = ( postType = null, title = null ) => {
  if ( postType !== null ) {
    if (title === null) {
      try {
        title = promptTitle(postType);
        if (title !== null ) {
          return title;
        } 
        return false;
      } catch (err) {
        console.log(err);
        return err;
      }
    }

  } 
  console.log('ERROR: Missing Params in titleCheck()');
  console.trace();
  return false;
};

//-> Used for making of new entry into some post type
const extendedList = ( helperList = null, postType = null , title = null , description = null , ref_url = "#", shortDescription = null , content = null ) => {
  var response = { data : false, path : false };
  switch (postType) {
    case "notes":
      response.data = helperList.push( makeNote(title, description, ref_url, shortDescription, content) );
      response.path = vdoConfig.main_note_file; 
      return response;
      break;

    case "tasks":
      response.data = helperList.push( makeTask(title, description, ref_url) );
      response.path = vdoConfig.main_todo_file; 
      return response;
      break;
  
    default:
      console.log("ERROR: Missing or Unknown < helperList = null, postType = null  >");
      return false;
      break;
  }
};

//---------------
async function newPost ( params = null){   
  var postType = (params.postType) ? params.postType : null;   
  var title = (params.title) ? params.title : null;
  var shortDescription = (params.shortDescription) ? params.shortDescription : null;  
  var description = (params.description) ? params.description : null;
  var ref_url = (params.ref_url) ? params.ref_url : null;
  var content = (params.ref_url) ? params.ref_url : null;
  
  title = titleCheck(postType, title );
  helperList = postList(postType); 
  helperList = extendedList(helperList, postType, title, description, ref_url, shortDescription, content);

  if (!helperList){
    console.log(helperList);
    return helperList;
  }

  return vSave( helperList.path , JSON.stringify(helperList.data , true, 2)); 
}

//---------------
module.exports = newPost;
