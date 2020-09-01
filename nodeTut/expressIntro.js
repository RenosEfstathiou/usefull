const express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('This is the homepage');
});

app.get('/contact',function(req,res) {
    res.send('this is the contact page'); 
});


app.get('/profile/:id',function (req,res) {
    res.send(`You requested to see a profile with the id : ${req.params.id}`);
});

app.listen(3000);

