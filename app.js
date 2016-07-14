var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/bower_components', express.static(__dirname + '/bower_components/'));
app.use('/resources', express.static(__dirname + '/resources/'));
// app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
