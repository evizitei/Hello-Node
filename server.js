var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('Hello world\n');
});

app.post('/sum', function(req, res){
  numbers = req.body.numbers;
  sum = numbers.reduce(function(s, val){
    return s + val;
  }, 0);
  res.json({ solution: sum });
});

app.listen(8080);
console.log("Express server listening on port %d", 8080);
