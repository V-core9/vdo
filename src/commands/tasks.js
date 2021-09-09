/*jshint esversion: 8 */
const { prompt } = require('enquirer');
const { v4: uuidv4 } = require('uuid');
const { Command, flags } = require("@oclif/command");

const taskList = require('../helpers/tasks/list');
var helperTaskList = taskList();

const vSave = require("../helpers/vfs/v_save");

const loadConfig = require("../helpers/config/load");
const vdoConfig = loadConfig();

const setStatus = (id = null, status = false) => {
  console.log("\n-----<[-s- WORK-IN-PROGRESS -s-]>-----------\n");
  if (id === null) {
    console.log('ERROR: Can not trash item >> Empty ID');
    return false;
  }
  console.log('HELPER:  ' + helperTaskList);
  helperTaskList.forEach(item => {
    if (item.id === id) {
        item.status = status;
    }
  });
  vSave(vdoConfig.main_todo_file, JSON.stringify(helperTaskList, true, 2));
  console.log("\n-----<[-e- WORK-IN-PROGRESS -e-]>-----------\n");
}

//---------------
async function newTask (title = null, description = null, ref_url = '#'){        
    var helpTitle = title;

    if (title === null) {
      const questionNewTitle = [{
        type: 'input',
        name: 'newTaskTitle',
        message: 'Title of the new task?'
      }];
      var titlePrompt = await prompt(questionNewTitle);
      helpTitle = titlePrompt.newTaskTitle;
      console.log(helpTitle);
    }

    var newTask = {
      id: uuidv4(),
      title: helpTitle,
      description: description,
      ref_url: ref_url,
      timestamps: {
        born: Date.now(),
        updated: Date.now(),
        done: null,
      },
      status: 'draft',
    };

    helperTaskList.push(newTask);

    vSave(vdoConfig.main_todo_file, JSON.stringify(helperTaskList, true, 2));
}

//-------------
class TasksCommand extends Command {
  static args = [
    {
      name: "action",
      required: true,
      description: "action/function/method you want it to execute",
      default: "view",
      options: ["view", "new", "trash", "untrash", "edit", "update", "complete", "incomplete", "total_number"],
    },
  ];

  async run() {
    const { args } = this.parse(TasksCommand);
    const action = args.action;

    const { flags } = this.parse(TasksCommand);
    const all = flags.all || null;
    const id = flags.id || null;
    const title = flags.title || null;
    const shortDescription = flags.shortDescription || null;
    const description = flags.description || null;
    const content = flags.content || null;
    const status = flags.status || null;
    const ref_url = flags.ref_url || '#';

    switch (action) {
      case "new":
        newTask(title, description, ref_url);
        break;

      case "view":
        console.log("\n-----<[-s- WORK-IN-PROGRESS -s-]>-----------\n");
        console.log(helperTaskList);
        console.log("\n-----<[-e- WORK-IN-PROGRESS -e-]>-----------\n");
        break;

      case "trash":
        setStatus( id, 'trash' );
        break;

      case "untrash":
        setStatus( id, 'draft' );
        break;

      case "edit":
        console.log("Sorry, not yet ready for use!");
        break;

      case "update":
        console.log("Sorry, not yet ready for use!");
        break;

      case "complete":
        setStatus( id, 'done' );
        break;

      case "incomplete":
        setStatus( id, 'draft' );
        break;

      case "total_number":
        console.log("Number of All Tasks: " + helperTaskList.length);
        break;

      default:
        console.log("Sorry, don't think that exists actually!");
        break;
    }
  }
}

TasksCommand.description = `Describe the command here
...
Extra documentation goes here
`;

TasksCommand.flags = {
  all: flags.string({ char: "a", description: "all" }),
  title: flags.string({ char: "t", description: "title to use" }),
  shortDescription: flags.string({char: "h",description: "shortDescription to use"}),
  description: flags.string({ char: "d", description: "description to use" }),
  content: flags.string({ char: "c", description: "content to use" }),
  status: flags.string({ char: "s", description: "status to use" }),
  id: flags.string({ char: "i", description: "id to use" }),
  ref_url: flags.string({ char: "r", description: "Reference URL to use" }),
};

module.exports = TasksCommand;
