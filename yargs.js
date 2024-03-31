// Fs(filesystem) Operations With Yargs (npm package)
// Create an application with following features:
// 1) You need to write in file using fs module and for every write operation you need to create a new file
// 2) You must take input from the user as filename and keep saving filenames in one array, in one separate text file
// 3) Next time when user again executes the code ask user to provide filename. Check if file already exists, if yes then ask user to give new filename.
//    Write simple text ‘You are awesome’ in every new file
// 4) Share the code by pushing it on GitHub repo
// 5) Execute your program from command line using npm package yargs
// https://www.npmjs.com/package/yargs

const fs = require('fs');
const yargs = require('yargs');

// Define command-line options using yargs
const argv = yargs
  .option('filename', {
    alias: 'f',
    describe: 'Name of the file to create',
    type: 'string',
    demandOption: true // Makes the option required
  })
  .help() // Add a help option
  .argv; // Parse arguments

const filename = argv.filename;

// Write "Hello World" to the file
fs.writeFile(filename, 'Hello World', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File created and "Hello World" written to', filename);
  }
});
