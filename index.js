express = require('express');
var hbs = require('hbs');
var app = express();

app.disable('x-powered-by');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000, function(err) {
  if (err) throw err;

  console.log('Running...');
});
