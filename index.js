var fs = require('fs');
var http = require('http');

var requestListener = function(req, res){
    fs.readFile('index.html', 'utf8', function(err, data) {
	if (err) {
	    res.writeHead(200);
	    res.end('Error! ' + err);
	    }
	res.writeHead(200);
	res.end(data);
    });
}    

var server = http.createServer(requestListener);
server.listen(8080);
