var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Simpler app for the Building Applications Lab!\n');
});

app.listen(8080, function () {
  console.log('Simpler app for the Building Applications Lab!');
});

