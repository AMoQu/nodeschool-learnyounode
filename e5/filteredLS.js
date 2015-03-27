var fs        = require('fs');
var path      = require('path');

var dir       = process.argv[2];
var extension = '.'+process.argv[3];

var callbackReadDir = function(error, list) {
    list.forEach(function(element) {
        if (path.extname(element)===extension) {
            console.log(element);
        }
    });
};
fs.readdir(dir, callbackReadDir);
