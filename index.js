console.log('index.js excecuting');
var express = require('express')
const status = require('http-status');
var app = express(); 

app.get('/',function(req,res){
	res.send('Hello, World!');
});

app.post('/',function(req,res){
	res.send('Hello, World, POSTED!!');
});

var port = 3000;

app.listen(port,function(){
	console.log('Listening on port ' + port);
});