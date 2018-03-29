console.log("Starting notes.js");
const fs = require('fs');
module.exports.age = 25;

var fetchNotes = () => {
    // Fetching notes here
    try {
        // this is the code that may or not may throw and error
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
        // If this fails , we don't have to worry because we have an empty array.
    } catch (error) {
        // If above fails , we're gonna return an empty array.
        return [];
    }
};

var saveNotes = (notes) => {
    // save notes (writeFileSync Method)
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));    
};

var addNote = (title , body) => {
    if (!title && !body) throw "\n\n**********************************\nWrong params , must use --title and --body\n**********************************";
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
    };
    saveNotes(notes);
};

var getAll = () => {
    console.log("Getting All Notes");
};

var getNote = (a) => {
    if (!a) throw "\n\n**********************************\nWrong params , must use --title\n**********************************";
    console.log("Getting Notes" , a);
}

var removeNote = (a) => {
    if (!a) throw "\n\n**********************************\nWrong params , must use --title\n**********************************";
    console.log("Removing Note ->",a );
}

// global export for object (More Robust)
module.exports = {
    addNote, //ES6 Syntax similar to addNote : addNote
    getAll,
    getNote,
    removeNote
};

module.exports.add = (a , b) => {
    return a + b;
};