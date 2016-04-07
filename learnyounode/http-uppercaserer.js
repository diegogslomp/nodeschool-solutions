var http = require('http')
var map = require('through2-map')

var portNumber = process.argv[2]

var server = http.createServer(function (request, response) {
    if (request.method == 'POST') {
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(response)
    }
})

server.listen(portNumber)
