const express = require('express');
const bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false });

app.set('view engine', 'ejs');
app.set('views', 'views/patials');
app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
    res.render('index');
});

app.get('/contact',function(req,res){
    
    res.render('contact',{qs: req.query});
});

app.post('/contact',urlencodedParser,function(req,res){
    console.log(req.body);
    res.render('contact-success',{data: req.body});
});

app.get('/profile/:id',function (req,res) {
    var data = {age: 29 , job: 'ninja',hobbies: ['running','studying','eatting']}; 
    res.render('profile',{id: req.params.id, data: data});
});

app.listen(3000);

