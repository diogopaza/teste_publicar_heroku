var express = require('express')
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){

    res.send("Welcome to NodeJS App on Heroku with diogo paza");
});

app.listen(port);