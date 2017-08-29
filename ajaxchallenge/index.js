const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));
// a request of root dir will return www.example.com/index.html
app.get('/', function(req,res){
	res.sendFile(__dirname + '/public/index.html');
})

http.listen(3000, function(){
	console.log('running app.js on Port 3000');
})