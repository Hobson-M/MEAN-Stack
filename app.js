var express = require('express');
var app = express();



var mongoose = require('mongoose');



app.get('/home', (req, res) => {
    res.send("It's working")
 
})





app.listen(8080, ()=> {
    console.log('Port Running')
})