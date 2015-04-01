var fs       = require('fs');
fs.readFile(process.argv[2], 'utf8', function(error, data) {
    if (error) {
        console.log('Error : '+error);
        return;
    }
    var elements = data.split('\n');
    console.log(elements.length-1);
});



