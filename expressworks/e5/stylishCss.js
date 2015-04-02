var express = require('express');
var path    = require('path');
var stylus  = require('stylus');

var port    = process.argv[2];

var app = express()
    .use(stylus.middleware(__dirname))
    .use(express.static(__dirname));

app.listen(port);