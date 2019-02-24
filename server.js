'use strict'

const express = require('express');
const path = require('path');

const app = express();

// set the port
const PORT = process.env.PORT || 3000;

// set directory for public files. in my case, use folder called public
const staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

// set port property of app to use PORT
app.set('port', PORT);

// listen
app.listen(app.get('port'), () => {
    console.log('Express server is running on port ' + PORT);
});