// Fs Operations With Yargs
// Create an application with following features:
// 1) You need to write in file using fs module and for every write operation you need to create a new file
// 2) You must take input from the user as filename and keep saving filenames in one array, in one separate text file
// 3) Next time when user again executes the code ask user to provide filename. Check if file already exists, if yes then ask user to give new filename.
//    Write simple text ‘You are awesome’ in every new file
// 4) Share the code by pushing it on GitHub repo

const fs = require('fs');
const yargs = require('yargs');

// Define command-line options using yargs
const argv = yargs
    .command('create <files...>', 'Create new files', {
        files: {
            description: 'List of files to create',
            type: 'array',
            demandOption: true
        }
    })
    .help()
    .argv;

// Function to create files
function createFiles(files) {
    files.forEach(file => {
        fs.open(file, 'wx', (err) => {
            if (err) throw err;
            console.log(`${file} created successfully.`);
        });
    });
}

// Main function
function main() {
    if (argv._.includes('create')) {
        createFiles(argv.files);
    } else {
        console.log('Invalid command. Please use "create" command to create files.');
    }
}

// Run the main function
main();