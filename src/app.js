console.log("Starting app.js");
// Lodash
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0]; // Select object of underscore(_) and select index 0 for that array
// Now test it
console.log("\n\nCommand :" , command , "\n\n");
console.log("Process : " , yargs.argv , "\n\n");
// console.log("Yargs" , argv);

// CRUD
if (command === 'add') {
    var add = notes.addNote(argv.title , argv.body);
    if (add){
        console.log('Note Created');
        notes.logNote(add);
    }else {
        console.log("Note title taken");
    }
}else if (command === 'list'){
    notes.getAll();
}else if (command === 'read'){
    var getExactNote = notes.getNote(argv.title);
    if (getExactNote){
        console.log("Received Note");
        notes.logNote(getExactNote);
    }else{
        console.log("Note not found");
    }
}else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title)
    var message = noteRemoved ? `Note was remove --${argv.title}--` : `Note not found. You were searching : \n${argv.title}`;
    console.log(message);
}else{
    console.log("Command Not Recognized");
}