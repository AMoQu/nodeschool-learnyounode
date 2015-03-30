var http = require('http');
var bl   = require('bl');

var urls    = [];
var results = {};
var cont    = 0;

urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);

urls.forEach(function(url){
    http.get(url, function(response) {
        response.pipe(
            bl(function(err, data) {
                if (err) return console.error(err);

                results[url] = data.toString();
                cont++;

                if (cont==3) {
                    urls.forEach(function(urlToPrint){
                        console.log(results[urlToPrint]);
                    });
                }
            })
        );
    });
});
