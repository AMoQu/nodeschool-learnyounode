var http    = require('http');
var url     = require('url');

var moment  = require('moment');

var port    = Number(process.argv[2]);

var server  = http.createServer(function (req, res) {

    if (req.method != 'GET') {
        return res.end('Error: Only GET');
    }

    var reqInfo = url.parse(req.url, true);
    var data = {};

    switch (reqInfo.pathname) {
        case '/api/parsetime':
            if (!reqInfo.query.iso) {
                res.writeHead(404);
                return res.end('Error: Parameter iso required');
            }
            data = parseTime(reqInfo.query.iso);
            break;
        case '/api/unixtime':
            if (!reqInfo.query.iso) {
                res.writeHead(404);
                return res.end('Error: Parameter iso required');
            }
            data = unixTime(reqInfo.query.iso);
            break;
        default:
            res.writeHead(404)
            return res.end('Error: Path undefined');
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
});
server.listen(port);


var parseTime = function(iso) {
    var m    = moment(iso);
    return {
        'hour':   m.hours(),
        'minute': m.minutes(),
        'second': m.seconds()
    };
};

var unixTime = function(iso) {
    var m    = moment(iso);
    return {
        'unixtime': m.valueOf()
    };
};