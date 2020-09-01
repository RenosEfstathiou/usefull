var http = require('http');

var server = http.createServer(function(req,res){
    console.log('the request was made from '+req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Respond ended');
});

server.listen(3000,'127.0.0.1');
console.log('hlistening on 3000');
