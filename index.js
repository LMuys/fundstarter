var fs = require('fs');
var http = require('http');
var index = fs.readFileSync('index.html', 'utf8');

var requestListener = function(req, res){
    res.writeHead(200);
    res.end(index);
}    

var server = http.createServer(requestListener);
server.listen(8080);
