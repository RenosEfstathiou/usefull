const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req,res){
    console.log(`req was made from  ${req.url} \n`);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url=== '/contact'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }

});

server.listen(3000,'127.0.0.1');