const express = require('express');
const app=express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(__dirname+'/public'));

const router = require('./route/router')
app.use('/',router);

const ports = 3000 || process.env.PORT;
app.listen(ports, ()=>{
    console.log('Website started at port '+ports);
})