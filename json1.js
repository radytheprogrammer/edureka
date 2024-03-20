const fs = require('fs');
const series = {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
}

const data = JSON.stringify(series);
fs.writeFile('json1.json', data, (err, data) => {
    if (err) throw err;
    console.log("File written");
})

// Read from file and print author name
// fs.readFile('json1.json', (err, data) => {
//     if (err) throw err;
//     out = JSON.parse(data);
//     console.log("Author: " + out.author);
// })

const dataBuffer = (fs.readFileSync('json1.json').toString());
console.log(dataBuffer);
const info = JSON.parse(dataBuffer);
info.title = 'Harry Potter and the Goblet of Fire'

const infoJSON = JSON.stringify(info)
fs.writeFileSync('json1.json', infoJSON)


