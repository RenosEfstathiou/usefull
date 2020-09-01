var fs  = require('fs');
fs.unlinkSync('writeMe.txt');
var readMe = fs.readFileSync('readMe.txt','utf8', function(err,data){
    console.log(data);
} );
console.log(readMe);
fs.writeFileSync('writeMe.txt',readMe);

