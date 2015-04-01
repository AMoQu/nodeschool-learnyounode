var express = require('express');
//var jade    = require('jade');

var port      = process.argv[2];
var pathIndex = process.argv[3];

var app = express();
app
    .set('view engine', 'jade')
    .set('views', pathIndex)
    //path.join(__dirname, 'templates'))
    .get('/home', function(req, res) {
        res.render('index', {date: new Date().toDateString()});
    })
    .listen(port);