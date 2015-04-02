var express = require('express');
var crypto  = require('crypto');

var port    = process.argv[2];

var app = express();
app
    .put('/message/:id', function(req, res) {
        var id = req.params.id;
        var result = crypto.createHash('sha1')
            .update(new Date().toDateString() + id)
            .digest('hex');

        res.end(result);
    })
    .listen(port);