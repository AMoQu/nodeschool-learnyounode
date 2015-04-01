var http = require('http');
var fs   = require('fs');

var port     = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function (req, res) {

    res.writeHead(200, { 'content-type': 'text/plain' });

    var stream = fs.createReadStream(filePath);

    stream.on('open', function(){
        stream.pipe(res);
    });

});
server.listen(port);