/*jshint esversion: 8 */
const { Command, flags } = require("@oclif/command");
const userHome = require("user-home");



class NotesCommand extends Command {
  static args = [
    {
      name: "action",
      required: true,
      description: "action/function/method you want it to execute",
      default: "view",
      options: ["view", "new", "trash", "untrash", "edit", "update"],
    },
  ];

  async run() {
    const { args } = this.parse(NotesCommand);
    const action = args.action;
    this.log(`ACTION: ${action}`);

    const { flags } = this.parse(NotesCommand);
    const all = flags.all || null ;
    const id = flags.id || null ;
    const title = flags.title || null ;
    const shortDescription = flags.shortDescription || null ;
    const description = flags.description || null ;
    const content = flags.content || null ;
    const status = flags.status || null ;

    this.log(`hello ${title} from C:\\Users\\v__V_\\_V_\\vdo\\src\\commands\\notes.js`);

    switch (action) {
      case "new":
        console.log("Sorry, not yet ready for use!");
        break;

      case "view":
        console.log("\n-----<[-s- WORK-IN-PROGRESS -s-]>-----------\n");
        const loadConfig = require("../helpers/config/load");
        const vdoConfig = loadConfig();

        
        const vReadFile = require("../helpers/vfs/v_read_file");
        let notesList = vReadFile(vdoConfig.main_notes_file);

        console.log(notesList);
        console.log("\n-----<[-e- WORK-IN-PROGRESS -e-]>-----------\n");
        break;

      case "trash":
        console.log("Sorry, not yet ready for use!");
        break;

      case "untrash":
        console.log("Sorry, not yet ready for use!");
        break;

      case "edit":
        console.log("Sorry, not yet ready for use!");
        break;

      case "update":
        console.log("Sorry, not yet ready for use!");
        break;
    
      default:
        console.log("Sorry, don't think that exists actually!");
        break;
    }
  }
}

NotesCommand.description = `Describe the command here
...
Extra documentation goes here
`;

NotesCommand.flags = {
  all: flags.string({ char: "a", description: "all" }), 
  title: flags.string({ char: "t", description: "title to use" }), 
  shortDescription: flags.string({char: "h",description: "shortDescription to use",}),
  description: flags.string({ char: "d", description: "description to use" }),
  content: flags.string({ char: "c", description: "content to use" }),
  status: flags.string({ char: "s", description: "status to use" }),
  id: flags.string({ char: "i", description: "id to use" }),
};

module.exports = NotesCommand;
