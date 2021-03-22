const express=require('express');
const bodyParser=require('body-parser');
const router = require('./routes/student.routes');
const mongoose = require('mongoose');
//took help from mohamad anas's code for joi and concept from google
const Joi = require('joi');
mongoose.set('useFindAndModify', false);

const app=express();

mongoose.connect("mongodb://localhost/studentsDb",{ useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{
    console.log('connected to database');
}).catch(err=>{
    console.log('connot connect',err)
    process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/students', student);

const port = process.env.PORT || 3000;

app.listen(3000,()=>{
    console.log('server is up and running on port 3000')
});