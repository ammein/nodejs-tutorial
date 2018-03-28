console.log("Starting notes.js");

module.exports.age = 25;

var addNote = (title , body) => {
    if (!title && !body) throw "\n\n**********************************\nWrong params , must use --title and --body\n**********************************";
    console.log("Adding Note" , title , body);
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