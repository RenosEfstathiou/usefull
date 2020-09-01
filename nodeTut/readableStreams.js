const fs = require('fs');
//we read the file and first para = file path second param = file encryption
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt' ,'utf8');
var myWriteStream = fs.createWriteStream(__dirname+ '/writeMe.txt')


    // we create an event listener that triggers on each "chunk of data recieved" and we print it in parts 

myReadStream.on('data',function(chunk){
    console.log('\n \n!!!!!new chunk recieved !!!!!!!! \n \n');
    myWriteStream.write(chunk);
});