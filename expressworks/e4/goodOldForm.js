var express    = require('express');
var bodyparser = require('body-parser');

var port      = process.argv[2];

var app = express()
    //middleware
    .use(bodyparser.urlencoded({extended: false}))
    .post('/form', function(req, res) {
        res.end(req.body.str.split('').reverse().join(''));
    })
    .listen(port);