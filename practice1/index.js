var express = require('express')
var app = express()

app.listen(3000, function(){
    console.log('in the console')
})

app.get('/', function(req, res){
    res.send('you are seeing this for the first time')
})