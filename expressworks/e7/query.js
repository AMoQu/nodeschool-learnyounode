var express = require('express');

var port    = process.argv[2];

var app = express();
app
    .get('/search', function(req, res) {
        var query = req.query;
        //console.log(query);
        res.send(query);
    })
    .listen(port);