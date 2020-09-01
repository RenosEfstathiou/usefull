const http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200);
    res.write('<h1> Welcome to our server </h1> \n');
    if(req.url==='/'){
        res.write('<h2> This is the root </h2> \n');
    } else if(req.url==='/about'){
        res.write('<h3> This is the About page </h3> \n');
    }else{
        res.write('<h4> Error 404 page not found </h4> \n');
    } 
    res.end();
}).listen(3000);


console.log('listening and running on http://localhost:3000');