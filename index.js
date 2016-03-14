var express = require('express')
var app = express()

/* serves all the static files*/
app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

/*serves main page*/
app.get('/', function(request, response) {
response.sendfile('index.html') 
})

var port = process.env.PORT || 8080

app.listen(port, function(){ 
    console.log("Node app is running at localhost:" + port)
})
