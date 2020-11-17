var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('sda');

})

app.listen(3000,function(){
    console.log("zzz");
})