let logger = require('morgan');
let cors = require('cors');
let http = require('http');
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let port = 3001;

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.json({result:'Hello World'})
})

app.post('/hello/:foo/:bar', (req, res) => {
    res.json({
        result: 'Hello World',
        data: [
            req.params.foo,
            req.params.bar
        ]
    })
})

app.post('/hello', (req, res) => {
    res.json({
        result:'post was sent',
        data: req.body
    })
})

app.listen(port, (err) => {
    console.log(`listening on ${port}`);
})