const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app= express();
app.use(cookieParser());
app.use(express.json());

mongoose.connect(`mongodb+srv://User1:${process.env.MONGO_PASSWORD}@cluster0-n88gy.gcp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
{useNewUrlParser: true,useUnifiedTopology:true},
()=> {
    console.log('connected to db ');
});

const userRouter= require('./routes/User');
app.use('/user',userRouter);



app.listen(5000,()=>{
    console.log('express server started');
});