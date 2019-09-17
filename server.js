let logger = require('morgan');
let cors = require('cors');
let http = require('http');
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let port = 3001;

app.use(bodyParser.json());

app.use(require('./routes'));

app.listen(port, (err) => {
    console.log(`listening on ${port}`);
})