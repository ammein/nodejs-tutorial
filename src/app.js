console.log("Starting app.js");
// Lodash
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
// Now test it
console.log("Command :" , command);
console.log("Process" , process.argv);
console.log("Yargs" , argv);

if (command === 'add') {
    console.log("Adding new note");
}else if (command === 'list'){
    console.log("Listing all notes");
}else if (command === 'read'){
    console.log("Reading Note");
}else if (command === 'remove') {
    console.log("Removing Note");
}else{
    console.log("Command Not Recognized");
}