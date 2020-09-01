const fs = require('fs');

// 1 Create a little program that outputs the current working directory.
console.log(__dirname);

// 2 Make a file containing some content. Write a program which can read the file from the current directory and output it to to console.
fs.readFile('./fileSystem.txt','utf8',function(err,data){
       console.log(data);
});

