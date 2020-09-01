
const http = require('http');

var server= http.createServer(function(req,res){
    console.log('request was made from '+req.url);
    res.writeHead(200, {'Content-type': 'application/json'});
    var myObj = {
        name: 'Ryu',
        job: 'ninja',
        age: 21
    };

    // res end expects to receive a string or a stream
    res.end(JSON.stringify(myObj));

});

server.listen(3000,'127.0.0.1');
console.log('listening on port 3000');