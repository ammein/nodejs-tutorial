console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

const _ = require('lodash');

// Expected Result : False
// console.log(_.isString(true));
// Expected Result : True
// console.log(_.isString('Ammein'));

// Expected Result : [ 'Andrew', 1, 'Ammein', 2, 4, 5 ]
var filteredArray = _.uniq(['Andrew' , 1 , 'Ammein' , 2 ,4 , 5, 1]);
console.log(filteredArray);

// Get user info
// var user = os.userInfo();
// console.log(user);

// Append File/Update File
// fs.appendFile('greetings.txt', `Hello ${user.username} ! You are ${notes.age}`, (err) => {
//     if(err) throw err;
//     console.log("File Saved !");
// });
