const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);

    console.log(
      chalk.green.inverse(`New note by the title of "${title}" added.`)
    );
  } else {
    console.log(chalk.red.inverse(`Note title "${title}" taken!`));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(
      chalk.green.inverse(
        `The note by the title of "${title}" has been removed.`
      )
    );
  } else {
    console.log(chalk.red.inverse(`No note found by the title of "${title}".`));
  }
};

const listNotes = (title) => {
  const notes = loadNotes();
  console.log(chalk.yellow.inverse("Listing all notes!"));
  notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteFound = notes.find((note) => note.title === title);

  if (noteFound) {
    console.log(chalk.green.inverse("Match found!"));
    console.log(noteFound.body);
  } else {
    console.log(
      chalk.red.inverse("Opps! It looks like this note does not exist.")
    );
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};

// Code Before refactoring of functions

// const getNotes = function () {
//   return "Your notes...";
// };

// const addNote = function (title, body) {
//   const notes = loadNotes();
//   const duplicateNotes = notes.filter(function (note) {
//     return note.title === title;
//   });

//   if (duplicateNotes.length === 0) {
//     notes.push({
//       title: title,
//       body: body,
//     });

//     saveNotes(notes);

//     console.log(
//       chalk.green.inverse(`New note by the title of "${title}" added.`)
//     );
//   } else {
//     console.log(chalk.red.inverse(`Note title "${title}" taken!`));
//   }
// };

// const removeNote = function (title) {
//   const notes = loadNotes();
//   const notesToKeep = notes.filter(function (note) {
//     return note.title !== title;
//   });
//   if (notes.length > notesToKeep.length) {
//     saveNotes(notesToKeep);
//     console.log(
//       chalk.green.inverse(
//         `The note by the title of "${title}" has been removed.`
//       )
//     );
//   } else {
//     console.log(chalk.red.inverse(`No note found by the title of "${title}".`));
//   }
// };

// const saveNotes = function (notes) {
//   const dataJSON = JSON.stringify(notes);
//   fs.writeFileSync("notes.json", dataJSON);
// };

// const loadNotes = function () {
//   try {
//     const dataBuffer = fs.readFileSync("notes.json");
//     const dataJSON = dataBuffer.toString();
//     return JSON.parse(dataJSON);
//   } catch (e) {
//     return [];
//   }
// };

// module.exports = {
//   getNotes: getNotes,
//   addNote: addNote,
//   removeNote: removeNote,
// };
