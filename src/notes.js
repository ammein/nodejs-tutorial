const fs = require('fs');

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
    return fetchNotes();
    console.log("Getting All Notes");
};

var getNote = (a) => {
    if (!a) throw "\n\n**********************************\nWrong params , must use --title\n**********************************";
    // fetch notes
    var notes = fetchNotes();
    // filter the notes , only return notes that matches
    var filteredNotes = notes.filter((note) => note.title === a);
    // return statement to index array of one
    return filteredNotes[0];
}

var removeNote = (a) => {
    if (!a) throw "\n\n**********************************\nWrong params , must use --title\n**********************************";
    // fetch notes
    var notes = fetchNotes();
    // filter notes , removing the one with title of argument. Filter takes a function
    // note.title because in object contain 'title'
    var filteredNotes = notes.filter((note) => note.title !== a);
    // save new notes array
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
    console.log('----');
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
};

// global export for object (More Robust)
module.exports = {
    addNote, //ES6 Syntax similar to addNote : addNote
    getAll,
    getNote,
    removeNote,
    logNote
};

module.exports.add = (a , b) => {
    return a + b;
};