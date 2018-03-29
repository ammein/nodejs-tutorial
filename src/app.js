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
    var note = notes.addNote(argv.title , argv.body);
    if (note){
        console.log('Note Created');
        console.log('--');
        console.log(`Title : ${note.title}`);
        console.log(`Body : ${note.body}`);
    }else {
        console.log("Note title taken");
    }
}else if (command === 'list'){
    notes.getAll();
}else if (command === 'read'){
    notes.getNote(argv.title);
}else if (command === 'remove') {
    notes.removeNote(argv.title)
}else{
    console.log("Command Not Recognized");
}