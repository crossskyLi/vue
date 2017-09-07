var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var server = app.listen(4300, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('vue Index is running', host, 4300);
});
