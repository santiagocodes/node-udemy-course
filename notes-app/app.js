const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// add, remove, list, read

// Create add comand
yargs.command({
  command: "add",
  describe: "Add a new note.",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  description: "Remove a note.",
  builder: {
    title: {
      describe: "Title to be removed.",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  description: "List all the notes.",
  handler(argv) {
    notes.listNotes(argv.title);
  },
});

// Create read command
yargs.command({
  command: "read",
  description: "Read a note",
  builder: {
    title: {
      describe: "Title to be read.",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title, argv.body);
  },
});

yargs.parse();
// console.log(yargs.argv)
