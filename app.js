<<<<<<< HEAD
var express = require('express')
=======
var express = require('express');
>>>>>>> master
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

<<<<<<< HEAD
=======
app.listen(8080);

>>>>>>> master
