var express = require('express');
var app = express();
var mysql = require('mysql');

// Add headers
app.use(function (req, res, next) {

  var allowedOrigins = ['http://matthewshaile.com', 'http://www.matthewshaile.com'];
  var origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);

  next();
});

app.get('/', function (req, res) {
  var json = {};

  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'matthewshaile',
    password: 'pa55word',
    database: 'matthewshaile'
  });

  connection.connect();

  connection.query('SELECT * FROM projects', function (err, rows, fields) {
    if (err) throw err;

    json = { projects: rows };

    res.json(json);
  });
  connection.end();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
