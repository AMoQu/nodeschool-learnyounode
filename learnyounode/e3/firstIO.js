var fs   = require('fs'),
    path = process.argv[2],
    text;

text = fs.readFileSync(path).toString();
var elements = text.split('\n');

console.log(elements.length-1);


