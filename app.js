// Author: Rady Dimitroff
// Fs Operations With Yargs
// Create an application with following features:
// 1) You need to write in file using fs module and for every write operation you need to create a new file
// 2) You must take input from the user as filename and keep saving filenames in one array, in one separate text file
// 3) Next time when user again executes the code ask user to provide filename. Check if file already exists, if yes then ask user to give new filename.
//    Write simple text ‘You are awesome’ in every new file
// 4) Share the code by pushing it on GitHub repo

/*
* Notes
* Error while coding: could not take input from the user using prompt(), got a console error. Frustrating experience.
* Yargs :  Not clear what arguments need to be passed using yargs if we are getting user input explicitly when prog is run
*/

const express = require('express');
// Fix the prompt not found error
// const prompt = require("prompt-sync")();
// create root object and port
const app = express();
const port = 3030;
const fs = require('fs');
let filenames = new Array();

fs.readFile('./data/db.json', (err, result) => {
    if (err) {
        throw err;
    } else {
        // console.log(JSON.parse(result));
    }
})

console.log(process.argv);
// 1) You need to write in file using fs module and for every write operation you need to create a new file
// 2) You must take input from the user as filename and keep saving filenames in one array, in one separate text file
let input = "";
let name = "";

do {
    // Get user input for filename if it already
    name = prompt("Enter the name of the file: ");
    // check if file does not exist
    if (!filenames.includes(name)) {
        filenames.push(name); // add it to the list
    } else {
        console.log("File already exisits with that name");
    }

    input = prompt("Do you want to keep adding filenames? Enter exit to stop");
} while (input !== 'exit');

// Create and write to files with given names by the user
filenames.forEach(element => {
    fs.open('./data/' + element + '.js', 'wx', function (err, data) {
        if (err) {
            console.log((err));
        } else {
            console.log("File opened successfully!");
            fs.writeFile(element + '.js', 'You are awesome', function (err) {
                if (err) {
                    return console.error(err);
                } else {
                    console.log("Data written successfully");
                }
            })
        }
    })
});



// for (let index = 2; index < process.argv.length; index++) {
//     const filename = array[index];
//     fs.open('./data/' + filename + '.js', 'w+', function (err, data) {
//         if (err) {
//             console.log((err));
//         } else {
//             console.log("File opened successfully!");
//         }
//     })
// }

// process.argv.forEach(element => {
//     fs.open('./data/' + element + '.js', 'w+', function (err, data) {
//         if (err) {
//             console.log((err));
//         } else {
//             console.log("File opened successfully!");
//         }
//     })

//     // 3) Next time when user again executes the code ask user to provide filename.
//     //    Check if file already exists, if yes then ask user to give new filename.
//     fs.stat(path, (err, stats) => {
//         let text = prompt("")
//     })
// });

// Define default route with express
// app.get('/', (req, res) => {
//     res.send('<h1> Welcome to express server and possibly your special place in hell? </h1>')
// })


// Create server to listen on port
app.listen(port, (err) => {
    console.log('server is running on port ' + port);
})