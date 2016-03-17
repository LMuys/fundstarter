var fs = require('fs');
var http = require('http');
var buffer = new Buffer(1024);
var indexString = '';

var requestListener = function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.stat('index.html', function(err, stats) {
	if (err) {
	    return console.error(err);
	    }
	var buffer = new Buffer(stats.size);
	var length = buffer.length;

	fs.open('index.html', 'r', function(err, fd) {
	    if (err) {
		return console.error(err);
	    }
	    console.log("File opened.");
	    fs.read(fd, buffer, 0, length, null, function(err, bytesRead, buff) {
		if (err) {
		    return console.error(err);
		    }
		console.log("File being read and written to HTTP response.");
		res.write(buff.toString("utf8", 0, bytesRead));
		res.end();
		});
	    });
	});
}    

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
