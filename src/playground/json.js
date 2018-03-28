var obj = {
    name : "Ammein"
};
// Convert into string (To pass to server, the database only collect string)
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

// Convert into JSON that collect from database
var personString = '{"name" : "Andrew" , "age" : "25"}';
var person = JSON.parse(personString);
console.log("String Convert",person);
console.log(typeof person);

const fs = require('fs');

var originalNote = {
    title : "Some Title",
    body : "Some body",
};

// originalNoteString (Convert into string)
var originalNoteString = JSON.stringify(originalNote);
// writeFileSync only takes two arguments (Writing File)
fs.writeFileSync('notes.json' , originalNoteString);

// readFileSync only takes one argument
var noteString = fs.readFileSync('notes.json');
// note
note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);