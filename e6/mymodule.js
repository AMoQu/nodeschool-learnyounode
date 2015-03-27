'use strict';

var filterByExtensions = function filterByExtensions(dir, extension, callback) {

    var fs        = require('fs');
    var path      = require('path');

    var callbackReadDir = function(err, list) {

        if (err) return callback(err);

        var result = [];

        list.forEach(function(element) {
            if (path.extname(element)==='.'+extension) {
                result.push(element)
            }
        });
        callback(null, result);
    };
    fs.readdir(dir, callbackReadDir);
};

module.exports = filterByExtensions;