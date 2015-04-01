var express = require('express');
var path    = require('path');

var port    = process.argv[2];

var app = express();

app.use(express.static(process.argv[3]||path.join(__dirname+'/index.html', 'public')));

app.listen(port);