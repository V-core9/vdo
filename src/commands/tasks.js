/*jshint esversion: 8 */
const { Command, flags } = require("@oclif/command");

const taskList = require('../helpers/tasks/list');
var helperTaskList = taskList();

const totalNumber = require('../helpers/tasks/total_number')


let newTask = require('../helpers/tasks/new');

//-------------
class TasksCommand extends Command {
  static args = [
    {
      name: "action",
      required: true,
      description: "action/function/method you want it to execute",
      default: "view",
      options: ["view", "new", "trash", "untrash", "edit", "update", "complete", "incomplete", "total_number", "generate_test", "purge_system"],
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
    const generate_number = flags.generate_number || 150;

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
        console.log("Number of All Tasks: " + totalNumber() );
        break;

      case "generate_test":
        console.log("Number of All Tasks: " + totalNumber() );
        const generateTasks = require('../../test/tasks/generate_tasks.test');
        generateTasks(generate_number);
        break;

      case "purge_system":
        try {
          console.log("Starting Purge >> NoT: " + totalNumber() );
          const [createTodo] = require("../helpers/config/create");
          createTodo();
          console.log("FINISHED Purge >> NoT: " + totalNumber() );
        } catch (err){
          console.log(err);
          return err;
        }
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
  generate_number: flags.string({ char: "g", description: "Number to generate as test" }), 
};

module.exports = TasksCommand;
