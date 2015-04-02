var express = require('express');
var fs      = require('fs');

var port      = process.argv[2];
var filename  = process.argv[3];

var app = express();
app
    .get('/books', function(req, res) {
        fs.readFile(filename, function(err, data) {
            if (err) return res.send(500);
            try {
                res.json(JSON.parse(data));
            } catch (e) {
                res.send(500)
            }
        });
    })
    .listen(port);