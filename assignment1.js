// Date: March 15, 2024. Timezone: Eastern Standard Time
// Author: Rady Dimitroff, Edureka student enrolled in full-stack certification
// 1) Create one application using express server
// 2) In the application you need to generate one GET endpoint and in that GET endpoint you need to render JSON data which is present in separate file
// 3)
// 3) Now run application using Pm2
// 4) After that run the application through single command using Nginx
// 5) You must share codes of both application and Nginx configuration file

const express = require('express');
// create object and port
const app = express();
const port = 3030;
const fs = require('fs');

// Generate GET endpoint
app.get('/', (req, res) => {
    // File in this case is a seperate file called data.json and holds books
    fs.readFile('data.json', 'utf-8', function (err, data) {
        if (err) {
            // can also be done with try-catch syntax
            return console.error(err);
        } else {
            // send the data as a response and render JSON data
            const out = JSON.parse(data);
            res.json(out);
        }
    })
});

// // Create server to listen on port
app.listen(port, (err) => {
    console.log('server is running on port ' + port);
})