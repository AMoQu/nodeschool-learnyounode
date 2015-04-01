var mymodule  = require('./mymodule');

var dir       = process.argv[2];
var extension = process.argv[3];

mymodule(dir, extension, function(err, list) {
    if (err) return console.error('Error: '+err);

    list.forEach(function(element) {
        console.log(element);
    });
});
