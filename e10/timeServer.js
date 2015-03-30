var net    = require('net');
var moment = require('moment');

var port = process.argv[2];

var server = net.createServer(function (socket) {
    var date = moment().format('YYYY-MM-DD HH:mm');
    socket.end(date+'\n');
});
server.listen(port);
